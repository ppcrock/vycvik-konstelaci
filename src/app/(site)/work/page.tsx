
import OnlinePresence from "@/app/components/homepage/online-presence";
import Testimonial from "@/app/components/homepage/testimonial";
import CollaborationCard from "@/app/components/homepage/collaborationCard";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Work | Optura Agency by Get NextJs Templates",
};

export default function Page() {
    return (
        <main className="pt-28">
            <OnlinePresence />
            <Testimonial />
            <CollaborationCard />
        </main>
    );
};
