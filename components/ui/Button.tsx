import Link from "next/link";
import clsx from "clsx";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-heading font-semibold transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  // teal-700 (not the brand teal-600) — white text on teal-600 falls short of the
  // 4.5:1 AA contrast minimum for button-label text.
  primary: "bg-teal-700 text-white hover:bg-teal-800",
  secondary:
    "bg-white text-navy-900 border border-navy-200 hover:border-teal-600 hover:text-teal-700",
  outlineOnDark:
    "border border-white/30 text-white hover:bg-white/10",
  ghost: "text-navy-900 hover:text-teal-700",
  ghostOnDark: "text-white/80 hover:text-white",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type LinkButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { variant = "primary", size = "md", className, ...rest } = props;
  const classes = clsx(base, variants[variant], sizes[size], className);

  if ("href" in rest && typeof rest.href === "string") {
    const { href, ...anchorProps } = rest as LinkButtonProps;
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a href={href} className={classes} {...anchorProps}>
          {props.children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {props.children}
      </Link>
    );
  }

  const buttonProps = rest as NativeButtonProps;
  return (
    <button className={classes} {...buttonProps}>
      {props.children}
    </button>
  );
}
