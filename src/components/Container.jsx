export default function Container({ children }, className) {
  return (
    <div
      className={`max-w-7xl mx-auto w-full px-3${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </div>
  );
}
