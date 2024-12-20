'use client'
import { useAtom } from "jotai";
import { Avatar } from "@/components/ui/avatar";
import { firstAtom } from "@/components/ClientComponent2";


export default function ClientComponent1() {
  const [globalVariable] = useAtom(firstAtom);
  return <Avatar className="w-full bg-gray-100 pl-2 pr-2 mb-2 flex items-center justify-center">
    ClientComponent 1: GlobalVariable = {globalVariable}
  </Avatar>;
}
