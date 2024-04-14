"use client";

import Button from "@/components/atom/Button";
import Input from "@/components/atom/Input";
import Link from "next/link";

export default function Home() {
  const handleClick = () => {
    const a = "hiii";
    return alert(a);
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <div className="flex flex-col gap-4">
        <div className="text-4xl">Sign Up</div>
        <div className="flex flex-col gap-2">
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
        </div>
        <div className="flex flex-wrap gap-4 ">
          <Button text="Sign Up" onClick={handleClick} isPrimary={true} />
          <Link href="#">
            <Button text="Log In" />
          </Link>
        </div>
      </div>
    </div>
  );
}
