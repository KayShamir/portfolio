"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Header() {

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Kay Shamir</span>
            <h1 className="text-xl font-bold text-foreground">Kay<span className="text-primary">Shamir</span></h1>
          </Link>
        </div>
        <div className="flex gap-x-12">
          <Link
            href="#services"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link
            href="#portfolio"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="#journey"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Journey
          </Link>
          <Link
            href="#contact"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>
        
      </nav>
    </motion.header>
  )
}
