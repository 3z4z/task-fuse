export default function CommonTitle({ title, subtitle }) {
  return (
    <header className="text-center max-w-3xl mx-auto mb-16">
      <h3 className="capitalize text-3xl text-primary font-semibold mb-3">
        {title}
      </h3>
      <p className="text-neutral">{subtitle}</p>
    </header>
  );
}
