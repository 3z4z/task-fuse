import "../styles/loader.css";

export default function BaseLoader() {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-50 bg-base-100 flex items-center justify-center">
      <div className="loader"></div>
    </div>
  );
}
