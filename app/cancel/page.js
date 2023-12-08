import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="flex flex-col items-center m-48 gap-12" style={{ fontFamily: "Jockey One, sans-serif" }}>
      <div>oh no!</div>

       <Link href={"/"} className="border border-solid border-yellow-700 text-xl p-6 uppercase grid place-items-center hover:opacity-60 cursor-pointer">Click here to continue back home</Link>
    </div>
  );
}
