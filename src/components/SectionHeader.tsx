"use client";

import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "max-w-3xl mb-16",
      centered && "mx-auto text-center",
      className
    )}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            "inline-block font-bold text-xs uppercase tracking-[0.3em] mb-4",
            dark ? "text-orange" : "text-orange-vibrant"
          )}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "text-3xl md:text-5xl font-heading font-extrabold mb-6 leading-tight",
          dark ? "text-white" : "text-navy"
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn(
            "text-lg leading-relaxed",
            dark ? "text-white/60" : "text-navy/60"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
