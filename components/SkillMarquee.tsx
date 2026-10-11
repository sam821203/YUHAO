import { skills } from "@/lib/content";

const items = skills
  .filter((group) => group.category === "Core" || group.category === "Data Viz & Maps")
  .flatMap((group) => group.items);

const sparkle = "M12 0C13 8 16 11 24 12C16 13 13 16 12 24C11 16 8 13 0 12C8 11 11 8 12 0Z";

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-7 pr-7">
          {item}
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 text-accent">
            <path d={sparkle} fill="currentColor" />
          </svg>
        </li>
      ))}
    </ul>
  );
}

export function SkillMarquee() {
  return (
    <div className="overflow-hidden py-6">
      <div className="-mx-4 -rotate-[1.5deg] overflow-hidden border-t-[6px] border-accent bg-foreground py-4 text-lg font-semibold whitespace-nowrap text-background md:text-2xl">
        <div className="flex w-max motion-safe:animate-[marquee_40s_linear_infinite]">
          <Row />
          <Row hidden />
        </div>
      </div>
    </div>
  );
}
