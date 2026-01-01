"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";

export default function TestimonialsSlider({ reviews }) {
  console.log("reviews", reviews);
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="w-full h-80"
    >
      {reviews.map((r) => {
        const { id, name, role, avatar, feedback } = r;
        return (
          <SwiperSlide
            key={id}
            className="relative bg-base-100 rounded-2xl border border-neutral/15 shadow-lg px-6 py-8"
          >
            <p className="pb-8 mb-8 border-b border-dashed border-primary/25">
              {feedback}
            </p>
            <div className="flex gap-3">
              <figure className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image src={avatar} fill alt={`${name}'s picture`} />
              </figure>
              <div>
                <p className="font-bold text-secondary">{name}</p>
                <p className="text-neutral/80 text-sm">{role}</p>
              </div>
              <FaQuoteRight className="absolute size-20 bottom-6 right-10 text-primary/10" />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
