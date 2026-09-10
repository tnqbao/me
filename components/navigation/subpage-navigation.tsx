import { ArrowLeft, CodeXml } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function SubpageNavigation() {
  return (
    <header className="nav-wrap">
      <nav className="nav subpage-nav" aria-label="Page navigation">
        <Link className="subpage-back" href="/">
          <ArrowLeft size={17} aria-hidden="true" /> Home
        </Link>
        <Link href="/" className="wordmark" aria-label="Bao, home">
          Bao<span>.</span>
        </Link>
        <div className="nav-actions">
          <a
            href="https://github.com/tnqbao"
            className="icon-button"
            aria-label="Open Bao's GitHub profile"
            title="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <CodeXml size={18} aria-hidden="true" />
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
