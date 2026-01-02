import Container from "@/components/Container";

export default function AuthLayout({ children }) {
  return (
    <div className="pt-10">
      <Container>
        <div className="bg-base-300 border border-neutral/10 shadow-md rounded-2xl py-8">
          <div className="max-w-lg mx-auto w-full">{children}</div>
        </div>
      </Container>
    </div>
  );
}
