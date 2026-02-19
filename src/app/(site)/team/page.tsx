
import Team from "@/app/components/homepage/team";
import Achievement from "@/app/components/homepage/achievements";
import CollaborationCard from "@/app/components/homepage/collaborationCard";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Team | Optura Agency by Get NextJs Templates",
};

export default function Page() {
    return (
        <main className="pt-28">
            <Team />
            <Achievement />
            <CollaborationCard />
        </main>
    );
};
