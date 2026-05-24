import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/use-theme";

export function Navbar() {
  const { theme, toggle } = useTheme();
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-4"
    >
      <nav className="glass rounded-full px-3 py-2 flex items-center gap-1 shadow-elev">
        <Link to="/" className="flex items-center gap-2 px-3">
          <div className="relative w-7 h-7">
            <div className="absolute inset-0 rounded-md bg-gradient-to-br from-neon via-amber to-violet" />
            <div className="absolute inset-0.5 rounded-[5px] bg-background flex items-center justify-center text-neon font-mono text-xs font-bold">
              A
            </div>
          </div>
          <span className="font-display font-semibold tracking-tight">
            Awazsuno
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-1 mx-2 text-sm">
          {[
            ["Services", "#services"],
            ["Pricing", "#pricing"],
            ["Process", "#process"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
        <button
          onClick={toggle}
          className="ml-1 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <Moon className="w-4 h-4" />
          ) : (
            <Sun className="w-4 h-4" />
          )}
        </button>
        <a
          href="#contact"
          className="ml-1 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity ring-neon"
        >
          Start
        </a>
      </nav>
    </motion.header>
  );
}
