'use client'
export default function TypewriterText({ text, className }: { text: string, className: string }) {
    const generateKeyframes = () => {
        const letters = text.split('');
        let currSen = "";
        const keyframes = letters.map((letter, i) => {
            currSen += letter;
            const num = ((i + 1) / letters.length) * 100;
            const percent = num.toPrecision(3);
            return `${percent}% { content: "${currSen}";}`
        });
        return keyframes;
    }

    const keyframes = generateKeyframes();
    let keyframeString = '';
    keyframes.forEach((keyframe) => {
        keyframeString += keyframe + '\n'
    })
    console.log(keyframeString);
    return (
        <div id="typewriterContent" className={"typewriter " + className}>

            <style jsx>
                {`

            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
            }
            @keyframes typing {
                ${keyframeString}
            }

            .typewriter {
               transistion: content 1s;
            }
            .typewriter::before {
                content: "";
                animation: typing 4.5s infinite;
            }
            .typewriter::after {
                content: "";
                border-right: 1px solid white;
                animation: blink 0.5s linear infinite;
            }           
        `}
            </style>
        </div>
    )
}