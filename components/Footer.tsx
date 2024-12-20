import Link from "next/link";
export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4 sticky top-0">
            <div className="container mx-auto text-center space-y-2">
                <Link href={"https://www.langleyholdings.com/"}> <u><b>A Langley Holdings Company</b></u> </Link>
                <p>&copy; {new Date().getFullYear()} Langley Holdings plc 2023 | All Rights Reserved.</p>
            </div>
        </footer>
    );
}
