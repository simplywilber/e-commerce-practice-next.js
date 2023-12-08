import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center m-48 gap-12" style={{ fontFamily: "Jockey One, sans-serif" }}>
      <span>Wooo!</span> 
      <Link href={"/"} className="border border-solid border-yellow-700 text-xl p-6 uppercase grid place-items-center hover:opacity-60 cursor-pointer"> Click here to go back home</Link>
    </div>
  )
}
