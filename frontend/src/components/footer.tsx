export default function CustomerFooter() {
    return (
        <footer className="flex flex-col items-center justify-center w-full italic font-thin
            p-8
        ">
            <p>Endereço da sua empresa</p>
            <p>Copyright © {new Date().getFullYear()} Nome da sua empresa - Todos os direitos reservados </p>
        </footer>
    )
}