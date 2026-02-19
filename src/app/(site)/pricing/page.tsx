
import Pricing from "@/app/components/homepage/pricing";
import FAQ from "@/app/components/homepage/faq";
import CollaborationCard from "@/app/components/homepage/collaborationCard";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Pricing | Optura Agency by Get NextJs Templates",
};

export default function Page() {
    return (
        <main className="pt-28">
            <Pricing />
            <FAQ />
            <CollaborationCard />
        </main>
    );
};
