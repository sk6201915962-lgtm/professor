import { CardProps } from "@/lib/Types";
import React from "react";

const StudentCard: React.FC<CardProps> = ({ title, subtitle, description, batch, status, university }) => {
  return (
    <div className="border border-[#EBB884] rounded-lg p-4 shadow-md bg-[#1F1F1D] text-white">
      <h3 className="font-bold text-lg mb-1">{title} ({subtitle})</h3>
      <p className="text-sm mb-2">{description}</p>
      <p className="text-xs text-[#EBB884]">{batch} — {status}</p>
      <p className="text-xs">{university}</p>
    </div>
  );
};

export default StudentCard;