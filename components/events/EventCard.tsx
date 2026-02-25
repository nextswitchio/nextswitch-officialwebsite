"use client";

import Image from "next/image";
import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface EventCardProps {
  title: string;
  date: string;
  month: string;
  location: string;
  time: string;
  imageSrc: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export const EventCard = ({
  title,
  date,
  month,
  location,
  time,
  imageSrc,
  imageAlt,
  ctaLabel = "Join event",
  ctaHref,
  className = "",
}: EventCardProps) => {
  return (
    <article className={`flex w-full max-w-xs flex-col overflow-hidden rounded-3xl bg-white shadow-[0_12px_60px_rgba(0,0,0,0.25)] ${className}`}>
      <div className="relative h-40 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 280px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <h3 className="mb-4 text-base font-semibold text-[#1a1a2e] underline decoration-[#1a1a2e]/40 underline-offset-4">
          {title}
        </h3>
        <div className="mb-5 flex items-stretch gap-4">
          <div className="flex h-16 w-16 flex-col items-center justify-center rounded-2xl bg-[#00e5ff] text-[#050616]">
            <span className="text-lg font-bold leading-tight">{date}</span>
            <span className="text-xs font-semibold tracking-wide uppercase">
              {month}
            </span>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-2 text-xs text-[#1a1a2e]/80">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#4b5563]" />
              <span className="truncate text-[13px] font-medium">
                {location}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#4b5563]" />
              <span className="text-[13px] font-medium">{time}</span>
            </div>
          </div>
        </div>
        <div className="mt-auto border-t border-[#e5e7eb] pt-4">
          {ctaHref ? (
            <Link href={ctaHref} className="block">
              <Button
                variant="outline"
                className="h-10 w-full justify-center rounded-full border-[#111827] text-sm font-semibold text-[#111827] hover:bg-[#111827] hover:text-white"
              >
                {ctaLabel}
              </Button>
            </Link>
          ) : (
            <Button
              variant="outline"
              className="h-10 w-full justify-center rounded-full border-[#111827] text-sm font-semibold text-[#111827] hover:bg-[#111827] hover:text-white"
            >
              {ctaLabel}
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};
