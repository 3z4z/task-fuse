import CommonTitle from "../../CommonTitle";
import "swiper/css";
import "swiper/css/effect-cards";
import TestimonialsSlider from "./TestimonialsSlider";

export default async function TestimonialsComponent() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/data/testimonials.json`
  );
  const reviews = await res.json();
  return (
    <section className="pt-24 pb-6 overflow-hidden">
      <CommonTitle
        title={"What Our Users Say"}
        subtitle={
          "Hear from our community of dedicated workers who are earning real rewards every day."
        }
      />
      <div className="sm:max-w-sm max-w-xs mx-auto">
        <TestimonialsSlider reviews={reviews} />
      </div>
    </section>
  );
}
