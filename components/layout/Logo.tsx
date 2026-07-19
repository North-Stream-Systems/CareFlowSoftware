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
        src="/logo-light.png"
        alt="CareFlow"
        width={1640}
        height={664}
        priority
        className="h-8 w-auto"
      />
    </Link>
  );
}
