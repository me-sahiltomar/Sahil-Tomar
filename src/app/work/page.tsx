import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { WorkPageClient } from "./WorkPageClient";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A few things Sahil Tomar has built or worked on, from software products to a cross-team adoption initiative.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return <WorkPageClient initialProjects={projects} />;
}
