
import ContactForm from "@/app/components/contact-form";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact | Optura Agency by Get NextJs Templates",
};

export default function Page() {
    return (
        <main>
            <ContactForm />
        </main>
    );
};
