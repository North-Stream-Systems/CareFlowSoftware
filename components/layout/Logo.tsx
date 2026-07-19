import Image from "next/image";
import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={className}
      aria-label="CareFlow — home"
    >
      <Image
        src="/logo.svg"
        alt="CareFlow"
        width={144}
        height={32}
        priority
        className="h-8 w-auto"
      />
    </Link>
  );
}
