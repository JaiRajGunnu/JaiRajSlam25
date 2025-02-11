import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Splash() {
  const [username, setUsername] = useState("Guest");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token"); // ✅ Check if user is logged in
    const storedName = localStorage.getItem("userName");

    if (!token) {
      // ✅ If no token, redirect to Home Page
      router.push("/");
    } else if (storedName) {
      setUsername(storedName); // ✅ Show stored user name
    }
  }, [router]); // ✅ Add router dependency to ensure redirection happens

  return (
    <>
      {/* ✅ Set Page Title */}
      <Head>
        <title>Jai Raj's Slam Book</title>
      </Head>
      <BackgroundBeamsWithCollision className="p-[5%] flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-4xl font-bold">Jai Raj's Slam Book</h1>
        <h2 className="text-2xl mt-4">Welcome, {username}!</h2> {/* ✅ Display name instead of email */}
      </div>
      </BackgroundBeamsWithCollision>
    </>
  );
}
