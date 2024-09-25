import Link from "next/link";
import IconGithub from "@/components/icon/Github";

export default function Footer() {
  return (
    <footer className="mt-10 mb-10 flex flex-col items-center justify-center text-center print:hidden">
      <div className="flex justify-center">
        <Link href="https://github.com/dustvoyager" target="_blank">
          <IconGithub
            className="fill-foreground transition hover:fill-blue-600"
            height={20}
            width={20}
          />
        </Link>
      </div>
      <div className="mt-2 text-xs text-gray-500 font-mono">
        © 2024. Dust Voyager
      </div>
    </footer>
  );
}
