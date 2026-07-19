import clsx from "clsx";

export function Avatar({
  initials,
  name,
  size = "lg",
  className,
}: {
  initials: string;
  name: string;
  size?: "md" | "lg";
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Placeholder portrait for ${name}`}
      className={clsx(
        "flex shrink-0 items-center justify-center rounded-2xl bg-brand-gradient font-heading font-semibold text-white",
        size === "lg" ? "h-28 w-28 text-3xl" : "h-14 w-14 text-lg",
        className,
      )}
    >
      {initials}
    </div>
  );
}
