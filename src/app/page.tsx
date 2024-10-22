import TypewriterTitle from "@/components/ui/TypewriterTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gradient-to-r min-h-screen grainy from-rose-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-semibold text-7xl text-center">
           <span className="text-black-600 font-bold">ClarityPad<br /></span>{" "}
        </h1>
        <div className="mt-4"></div>
        <h1 className="font-semibold text-5xl text-center">
           <span className="text-purple-600 font-bold">by Joy</span>
        </h1>
        <div className="mt-4"></div>
        <h2 className="font-semibold text-3xl text-slate-700 text-center ">
          <TypewriterTitle />
        </h2>
        <div className="mt-8"></div>

        <div className="flex justify-center">
          <Link href="/dashboard">
            <Button className="bg-purple-600">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" strokeWidth={3} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
