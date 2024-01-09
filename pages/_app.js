import Header from "@/components/header";
import "@/styles/globals.css";

import { SessionProvider } from "next-auth/react";

import { Poppins } from "next/font/google";

const inter = Poppins({ subsets: ["latin"], weight: "400" });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <main className={`px-4 ${inter.className}`}>
      <SessionProvider session={session}>
        <Header />
        <Component {...pageProps} />
      </SessionProvider>
    </main>
  );
}
