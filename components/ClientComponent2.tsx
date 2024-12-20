'use client'
import { useAtom } from "jotai";
import { Button } from "@/components/ui/button";
import { atom } from "jotai";

export const firstAtom = atom(2025);

export default function ClientComponent2() {
  const [, setGlobalVariable] = useAtom(firstAtom);
  const randomNumber = Math.floor(Math.random() * 100000);
  return <Button onClick={() => setGlobalVariable(randomNumber)}>Client Component 2: Click me to change the GlobalVariable</Button>;
}
