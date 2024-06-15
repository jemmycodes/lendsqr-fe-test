"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import { MouseEvent, useState } from "react";
import loginStyles from "./Login.module.scss";
import Input from "@/app/components/ui/Input/input";
import Illustration from "@/public/images/sign-in-illustration.png";

interface FieldError {
  email: string | null;
  password: string | null;
}

export default function Login() {
  const [error, setError] = useState<FieldError>({
    email: null,
    password: null,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isEmailValid = (email: string) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const isPasswordValid = (password: string) => password.length >= 6;

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    !isEmailValid(email) &&
      setError((prev) => ({ ...prev, email: "Invalid email" }));

    !isPasswordValid(password) &&
      setError((prev) => ({
        ...prev,
        password: "Password must be at least 6 characters",
      }));

    if (isEmailValid(email) && isPasswordValid(password)) {
      setError({ email: null, password: null });
      // Handle login
      console.log("Login successful");
    }
  };

  return (
    <main className={loginStyles.login__main}>
      <section className={loginStyles.login__image_container}>
        <Image src={logo} alt="Logo" className={loginStyles.login__logo} />
        <Image
          src={Illustration}
          alt="Sign in illustration"
          className={loginStyles.login_illustration}
        />
      </section>
      <section className={loginStyles.login_welcome}>
        <div className={loginStyles.login_container}>
          <hgroup>
            <h1>Welcome!</h1>
            <h2>Enter details to login.</h2>
          </hgroup>
          <form className={loginStyles.login__form}>
            <Input
              placeholder="Email"
              type="email"
              value={email}
              error={error.email && "Invalid email"}
              name="email"
              handleEmail={(e) => setEmail(e.target.value)}
            />

            <Input
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              error={error.password && "Password must be at least 6 characters"}
              name="password"
              handleEmail={(e) => setPassword(e.target.value)}
              onShowPassword={() => setShowPassword(!showPassword)}
            />
            <Link href="/">FORGOT PASSWORD?</Link>
            <button type="submit" onClick={handleSubmit}>
              LOG IN
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
