import WorkerCard from "../card/WorkerCard";
import CommonTitle from "../CommonTitle";
import Container from "../Container";
import users from "@/../public/data/top-users.json";

export default function TopWorkersComponent() {
  const topUserCoins = Math.max(...users?.map((u) => u.coins));
  return (
    <section className="pt-24">
      <CommonTitle
        title={"Leading Earners"}
        subtitle={
          "Recognizing our most dedicated users who complete tasks and earn rewards consistently."
        }
      />
      <main>
        <Container>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-x-6 sm:gap-y-8 gap-y-4 sm:max-w-6xl max-w-xs mx-auto">
            {users.map((u) => (
              <WorkerCard
                user={u}
                key={u.id}
                isTop={u.coins === topUserCoins}
              />
            ))}
          </div>
        </Container>
      </main>
    </section>
  );
}
