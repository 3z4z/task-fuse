import Image from "next/image";
import { RiCopperCoinLine } from "react-icons/ri";
import { FaCrown } from "react-icons/fa";
export default function WorkerCard({ user, isTop }) {
  return (
    <article className="border border-neutral/5 shadow-lg p-5 rounded-xl group transition-all hover:bg-secondary/5">
      <figure className="relative aspect-square flex justify-center items-center rounded-lg overflow-hidden">
        {isTop && (
          <div className="p-1 rounded-md bg-base-100 absolute top-2 left-2 z-10">
            <FaCrown className="size-5 text-primary" />
          </div>
        )}
        <Image src={user.profilePic} alt={`${user.name}'s picture`} fill />
      </figure>
      <h5 className="font-bold text-xl my-3">{user.name}</h5>
      <div className="flex gap-2 items-center">
        <RiCopperCoinLine className="text-warning size-5" />
        <p className="flex gap-1 items-center font-semibold">
          <span className="text-secondary">{user.coins}</span>
          <span className="text-neutral">coins</span>
        </p>
      </div>
    </article>
  );
}
