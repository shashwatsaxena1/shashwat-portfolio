import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("mb-10 max-w-3xl", align === "center" && "mx-auto text-center")}>
      <Badge variant="glass" className="mb-5 uppercase tracking-[0.28em] text-muted-foreground">
        {eyebrow}
      </Badge>
      <h2 className="font-display text-3xl font-black tracking-[-0.04em] text-balance md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">{description}</p> : null}
    </div>
  );
}
