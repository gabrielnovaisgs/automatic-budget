import CustomerFooter from "@/components/footer";
import CustomerHeader from "@/components/header";
import { ReactNode } from "react";

interface LayoutCustomerProps {
    children: ReactNode
}

export default function LayoutCustomer({ children }: LayoutCustomerProps) {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <CustomerHeader></CustomerHeader>
            {children}
            <CustomerFooter></CustomerFooter>
        </div>
    )
}