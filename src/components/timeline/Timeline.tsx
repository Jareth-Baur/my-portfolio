import SectionTitle from "../ui/SectionTitle";

import TimelineItem from "./TimelineItem";

import { timeline } from "@/data/timeline";

export default function Timeline() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-32">
      <SectionTitle
        title="Journey"
        subtitle="A timeline of my major software projects."
      />

      <div className="space-y-16">
        {timeline.map((item) => (
          <TimelineItem key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
