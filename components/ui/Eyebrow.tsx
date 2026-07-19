import clsx from "clsx";

export function Eyebrow({
  children,
  className,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest",
        tone === "light" ? "text-teal-700" : "text-teal-400",
        className,
      )}
    >
      <span
        className={clsx(
          "h-1.5 w-1.5 rounded-full",
          tone === "light" ? "bg-teal-600" : "bg-teal-400",
        )}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}
