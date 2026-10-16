import { currentSignal } from "@/content/site";
import { ContentGroup } from "@/components/ui/Content";
import { siteContainerClassName } from "@/components/layout/PageShell";

export function HomeCurrentSignal() {
  const items = [
    {
      label: "Currently building",
      value: currentSignal.currentlyBuilding.title,
      note: currentSignal.currentlyBuilding.description,
    },
    {
      label: "Last shipped",
      value: currentSignal.lastShipped.title,
      note: currentSignal.lastShipped.status,
    },
    {
      label: "Currently open to",
      value: currentSignal.currentlyOpenTo.roles.join(" · "),
      note: currentSignal.currentlyOpenTo.location,
    },
  ];

  return (
    <section aria-label="Currently" className="relative w-full bg-paper">
      <div className={siteContainerClassName}>
        <div className="border-y border-rule-light">
          <ContentGroup className="grid grid-cols-1 md:grid-cols-[0.9fr_1fr_1.35fr] divide-y md:divide-y-0 md:divide-x divide-rule-light">
            {items.map((item, i) => (
              <div key={i} className="py-5 md:py-5 px-4 md:px-6">
                <p className="text-evidence text-meta tracking-widest text-ink-muted uppercase mb-1.5">
                  {item.label}
                </p>
                <p className="font-sans text-base text-ink font-medium leading-snug mb-1">
                  {item.value}
                </p>
                <p className="text-evidence text-meta tracking-wide text-ink-muted">
                  {item.note}
                </p>
              </div>
            ))}
          </ContentGroup>
        </div>
      </div>
    </section>
  );
}
