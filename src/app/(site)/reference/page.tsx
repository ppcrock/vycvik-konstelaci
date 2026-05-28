import Reference from "@/app/components/reference";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reference absolventů | Výcvik konstelací",
  description: "Reference a hodnocení od absolventů výcviku rodinných a firemních konstelací.",
};

export default function Page() {
  return (
    <main className="pt-28">
      <Reference />
    </main>
  );
}
