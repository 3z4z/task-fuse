"use client";

import { postUser } from "@/app/actions/server/auth";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const router = useRouter();
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl" || "");
  const { handleSubmit, register, reset } = useForm({
    mode: "all",
  });
  const handleRegister = async (data) => {
    const res = await postUser(data);
    if (res.success) {
      toast.success(res.message || "Registration completed!");
      await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: true,
      });
      router.push(callbackUrl || "/");
      reset();
    } else {
      toast.error(res.message || "Registration Failed!");
    }
    console.log(data);
  };
  return (
    <section className="bg-base-100 rounded-2xl py-10 px-8 border border-neutral/20">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Sign Up Today!</h1>
        <p className="mt-3">
          Already have an account?{" "}
          <Link
            href={"/auth/login"}
            className="link link-hover link-primary font-semibold"
          >
            Login
          </Link>
        </p>
      </header>
      <main className="mt-8">
        <form onSubmit={handleSubmit(handleRegister)} className="fieldset">
          <label className="label">Full Name</label>
          <input
            type="text"
            className="input focus:border-primary"
            placeholder="Type your full name"
            {...register("name")}
          />
          <label className="label">Email</label>
          <input
            type="email"
            className="input focus:border-primary"
            placeholder="Type your email address"
            {...register("email")}
          />
          <label className="label">Photo Url</label>
          <input
            type="text"
            className="input focus:border-primary"
            placeholder="Enter your photo URL"
            {...register("image")}
          />
          <label className="label">Password</label>
          <input
            type="password"
            className="input focus:border-primary"
            placeholder="Enter a new password"
            {...register("password")}
          />
          <label className="label">Join as</label>
          <select className="select focus:border-primary" {...register("role")}>
            <option value="">Select your role</option>
            <option value="worker">Worker</option>
            <option value="buyer">Buyer</option>
          </select>
          <button className="btn btn-primary btn-block mt-4">
            Register Now
          </button>
        </form>
      </main>
    </section>
  );
}
