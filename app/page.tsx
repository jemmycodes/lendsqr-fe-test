import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import loginStyles from "./Login.module.scss";
import Illustration from "@/public/images/sign-in-illustration.png";

export default function Home() {
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
      <section className={loginStyles.login__form_container}>
        <div>
          <hgroup>
            <h1>Welcome!</h1>
            <h2>Enter details to login.</h2>
          </hgroup>
          <form className={loginStyles.login__form}>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <Link href="/">FORGOT PASSWORD?</Link>
            <button type="submit">LOG IN</button>
          </form>
        </div>
      </section>
    </main>
  );
}
