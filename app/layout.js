import Link from "next/link";
import "./globals.css";
import Header from "./header";

export const metadata = {
  title: "THUNDER ⚡︎ SHOW",
  description: "Athletic gym store offering shorts at exquisite prices",
  icons: {
    icon: "/bolt-solid.svg",
  },
};
const year = new Date().getFullYear();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/bolt-solid.svg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Jockey+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={"min-h-screen flex flex-col relative"}>
        <Header />
        <div className="flex-1">{children}</div>
        <footer className="flex items-center flex-wrap border-t justify-between border-solid border-slate-300 p-4 md:p-8">
          <Link href={"https://www.instagram.com/simplywilber"} target="_blank">
            <i className="fa-brands fa-instagram text-slate-700 hover:text-yellow-500 cursor-pointer text-2xl sm:text-3xl md:text-4xl "></i>
          </Link>
          <h2 style={{ fontFamily: "Jockey One, sans-serif" }}>
            © {year} Wilber Amaya
          </h2>
        </footer>
        <div id="portal"></div>
      </body>
    </html>
  );
}
