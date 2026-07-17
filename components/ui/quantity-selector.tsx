"use client";

import { Minus, Plus } from "lucide-react";

export function QuantitySelector({ value, onChange }: { value: number; onChange: (value: number) => void }) {
  return (
    <div className="inline-flex h-11 items-center rounded-full border border-white/12 bg-white/4">
      <button className="grid size-10 place-items-center text-white/60 hover:text-white" onClick={() => onChange(Math.max(1, value - 1))} aria-label="Decrease quantity"><Minus size={15} /></button>
      <span className="w-8 text-center text-sm font-bold">{value}</span>
      <button className="grid size-10 place-items-center text-white/60 hover:text-white" onClick={() => onChange(Math.min(10, value + 1))} aria-label="Increase quantity"><Plus size={15} /></button>
    </div>
  );
}
