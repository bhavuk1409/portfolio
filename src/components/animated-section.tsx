"use client"

import { useRef } from "react"
import { useIntersection } from "react-use"
import { cn } from "@/lib/utils"

type AnimatedSectionProps = {
  children: React.ReactNode
  className?: string
  id?: string
}

export function AnimatedSection({ children, className, id }: AnimatedSectionProps) {
  const intersectionRef = useRef(null)
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  })

  const isVisible = intersection && intersection.intersectionRatio > 0.1

  return (
    <section
      id={id}
      ref={intersectionRef}
      className={cn(
        "opacity-0 transition-opacity duration-700 ease-out",
        isVisible && "fade-in-up",
        className
      )}
    >
      {children}
    </section>
  )
}
