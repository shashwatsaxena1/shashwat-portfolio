"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

import { navigation, siteConfig } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-0 right-0 top-4 z-50 px-4"
    >
      <div className="container flex h-16 items-center justify-between rounded-full border border-white/10 bg-background/70 px-4 shadow-xl shadow-black/5 backdrop-blur-2xl dark:bg-background/55 dark:shadow-black/30">
        <Link href="#home" className="group flex items-center gap-3" aria-label="Go to home section">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-primary font-display text-sm font-black text-primary-foreground shadow-glow transition-transform group-hover:scale-105">
            {siteConfig.initials}
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-sm font-bold uppercase tracking-[0.22em]">{siteConfig.name}</span>
            <span className="block text-[11px] text-muted-foreground">SYSTEM_READY: TRUE</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-border/60 bg-muted/35 p-1 md:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-background hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="default" className="hidden sm:inline-flex">
            <Link href="#contact">Hire Me</Link>
          </Button>
          <Button variant="premium" size="icon" className="md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <div className={cn("container md:hidden", open ? "block" : "hidden")}>
        <div className="mt-3 rounded-3xl border border-white/10 bg-background/90 p-3 shadow-2xl backdrop-blur-2xl">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
