import { getServerSession } from "next-auth";
import { redirect } from "next/dist/server/api-utils";

export default async function DashboardLayout({ children }) {
  const session = await getServerSession();
  if (!session) redirect("/auth/login");
  console.log("session", session);
  return (
    <div className="bg-base-200">
      <div>{children}</div>
    </div>
  );
}
