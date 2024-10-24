import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";


export default function Home() {
  return (
    <section>
      <h1>Conheça nossos serviços!</h1>
      <main>
        <Card className="max-w-56 flex flex-col items-center justify-center">
          <CardHeader>
            Titulo do serviço
          </CardHeader>
          <CardContent>
            <Image src={"/logoExemplo.png"} alt={"Imagem do serviço 1"} width={128} height={128}></Image>
          </CardContent>
          <CardContent>
            <h2 className="font-semibold">Titulo do serviço</h2>
            <p>Descrição em poucas linhas do serviço e caso tenha mais pode...</p>
          </CardContent>
          <CardContent>
            <Button>Conheça</Button>
            <div>
              <Input type="number"></Input>
              <Button></Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </section>
  );
}
