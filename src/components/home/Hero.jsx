import Link from "next/link";

export default function HeroComponent() {
  return (
    <section className="relative w-full lg:aspect-5/2 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-0"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/75 z-10"></div>
      <div className="relative z-20 flex items-center justify-center flex-col h-full text-white lg:p-8 py-16 px-4 text-center max-w-3xl mx-auto">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-primary me-1">Task</span>Fuse
        </h1>
        <p className="md:py-16 py-8">
          Complete micro-tasks at your convenience and get paid instantly. No
          complex processes, no long commitments — just simple tasks that fit
          your schedule and help you earn more.
        </p>
        <Link
          href={"/auth/register"}
          className="btn btn-lg btn-primary px-10 rounded-full"
        >
          Join & Earn
        </Link>
      </div>
    </section>
  );
}
