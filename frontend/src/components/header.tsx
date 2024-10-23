import { FileText } from "lucide-react";
import Image from "next/image";

export default function CustomerHeader() {
    return (
        <header className="px-8 pt-1 flex justify-between items-center">

            <Image src={"/logoExemplo.png"} alt="Logo de exemplo da sua empresa" width={96} height={96}></Image>
            <button className="relative">
                <FileText className="" size={32}></FileText>
                <div className="absolute -bottom-3 -left-3 w-6 h-6  
                    border border-gray-100 bg-white shadow'
                    flex justify-center items-center rounded-full
                ">

                    <p className="text-center text-sm">1</p>
                </div>

            </button>
        </header>
    )
}