import reviews from "@/../public/data/testimonials.json";
import CommonTitle from "../../CommonTitle";
import "swiper/css";
import "swiper/css/effect-cards";
import TestimonialsSlider from "./TestimonialsSlider";
export default function TestimonialsComponent() {
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
