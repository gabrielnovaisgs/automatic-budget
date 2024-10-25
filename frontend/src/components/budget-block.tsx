'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import Image from "next/image";

interface BudgetBlockProps {
    title: string
    description: string
    imageSrc?: string
}


export default function BudgetBlock({ title = "Titulo", description = "Description", imageSrc }: BudgetBlockProps) {
    function click() {

    }

    return (
        <Card className="max-w-64 flex flex-col items-center justify-center">
            <CardHeader className=" w-full flex items-center justify-center" >
                <Image src={imageSrc ? imageSrc : "/logoExemplo.png"} alt={"Imagem do serviço 1"} width={128} height={128}
                    className="w-full aspect-auto max-h-32 object-contain
                    border border-input shadow-sm rounded-md
                    "
                ></Image>
            </CardHeader>
            <CardContent className="w-full">
                <h2 className="font-semibold ">{title}</h2>
                <p>{description}</p>
            </CardContent>
            <CardContent className="flex justify-between items-center gap-2">
                <Button onClick={click}>Conheça</Button>
                <div className="flex gap-2 items-center justify-center">
                    <Input type="number" className="max-w-16" defaultValue={0} min={0}></Input>
                    <Button className="" size="icon"><Plus className="h-4 w-4"></Plus></Button>
                </div>
            </CardContent>
        </Card>
    )
}