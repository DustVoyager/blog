"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ScrollProgressBar from "@/components/common/ScrollProgressBar";
import { useSpyElem } from "@/hook/useSpy";
import { cn } from "@/lib/utils";

const navList = [
  { name: "About", href: "/about" },
  { name: "blog", href: "/blog" },
];

export default function Header() {
  const { ref, marginTop } = useSpyElem(65);
  const pathname = usePathname();

  return (
    <header
      style={{ marginTop }}
      ref={ref}
      className="fixed z-40 w-full border-b bg-background shadow-sm print:hidden"
    >
      <div className="mx-auto flex w-full max-w-[800px] items-center justify-between px-5 sm:px-6">
        <h1 className="text-xl whitespace-nowrap text-gray-800 font-bold font-mono">
          <Link href="/">Dust Voyager</Link>
        </h1>
        <nav>
          <ul className="mt-1 flex h-[64px] w-full items-center justify-between px-4">
            <li className="flex items-center font-medium">
              {navList.map((navItem) => (
                <Link
                  href={navItem.href}
                  key={navItem.name}
                  className={cn(
                    "rounded-full px-4 py-1 text-center text-sm transition-colors hover:text-primary",
                    pathname?.startsWith(navItem.href)
                      ? "bg-muted font-medium text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {navItem.name}
                </Link>
              ))}
            </li>
          </ul>
        </nav>
      </div>
      <ScrollProgressBar />
    </header>
  );
}
