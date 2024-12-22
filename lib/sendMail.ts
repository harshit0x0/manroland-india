import { EmailClient, KnownEmailSendStatus } from "@azure/communication-email";
import { AzureKeyCredential } from "@azure/core-auth";

export async function sendMail({ senderAddress, content, recipients }:
    {
        senderAddress: string,
        content: {
            subject: string,
            plainText: string
        },
        recipients: {
            to: {
                address: string,
                displayName: string
            }[]
        }
    }
) {
    const accessKey = process.env['NEXT_PUBLIC_ACCESS_KEY'];
    const endpoint = process.env['NEXT_PUBLIC_ENDPOINT'];
    const sender = process.env['NEXT_PUBLIC_DOMAIN'];
    if (!accessKey || !endpoint || !sender) {
        throw new Error("cannot retrieve accessKey");
    };
    const key = new AzureKeyCredential(accessKey);
    const emailClient = new EmailClient(endpoint, key);

    const POLLER_WAIT_TIME = 10
    try {
        const message = {
            senderAddress: sender,
            content: {
                subject: content.subject + " - " + senderAddress,
                plainText: content.plainText,
            },
            recipients: {
                to: [
                    {
                        address: recipients.to[0].address,
                        displayName: recipients.to[0].displayName,
                    },
                ],
            },
        };

        const poller = await emailClient.beginSend(message);

        if (!poller.getOperationState().isStarted) {
            throw "Poller was not started."
        }

        let timeElapsed = 0;
        while (!poller.isDone()) {
            poller.poll();
            console.log("Email send polling in progress");

            await new Promise(resolve => setTimeout(resolve, POLLER_WAIT_TIME * 1000));
            timeElapsed += 10;

            if (timeElapsed > 18 * POLLER_WAIT_TIME) {
                throw "Polling timed out.";
            }
        }
        if (!poller.getResult()) {
            throw new Error("Poller did not return a result.");
        }
        console.log("poller result status: ", poller.getResult()?.status);

        if (poller.getResult()?.status === KnownEmailSendStatus.Succeeded) {
            console.log(`Successfully sent the email (operation id: ${poller.getResult()?.id})`);
        }
        else {
            throw poller.getResult()?.error;
        }
    } catch (e) {
        console.log(e);
    }
}
