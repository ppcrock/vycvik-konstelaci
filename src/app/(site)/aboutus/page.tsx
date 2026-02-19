
import Achievement from "@/app/components/homepage/achievements";
import WebResults from "@/app/components/homepage/web-result";
import CollaborationCard from "@/app/components/homepage/collaborationCard";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "AboutUs | Optura Agency by Get NextJs Templates",
};

export default function Page() {
    return (
        <main className="pt-28">
            <WebResults />
            <Achievement />
            <CollaborationCard />
        </main>
    );
};
