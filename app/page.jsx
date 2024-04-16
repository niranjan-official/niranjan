import NavBar from "@/components/NavBar";
import Main from "@/components/Pages/Main";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-black">
      <main className="h-screen flex flex-col">
        <NavBar/>
        <Main/>
      </main>
    </div>
  );
}
