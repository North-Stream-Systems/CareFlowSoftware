import clsx from "clsx";

export function StatMono({
  value,
  className,
  tone = "light",
}: {
  value: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={clsx(
        "font-mono text-4xl font-semibold tracking-tight sm:text-5xl",
        tone === "light" ? "text-navy-900" : "text-white",
        className,
      )}
    >
      {value}
    </span>
  );
}
