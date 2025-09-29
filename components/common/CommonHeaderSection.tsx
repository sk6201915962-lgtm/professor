import { CommonHeaderSectionProps } from "@/lib/Types";
import React from "react";

const CommonHeaderSection: React.FC<CommonHeaderSectionProps> = ({ icon: Icon, title, subtext }) => {
  return (
    <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 bg-[#1F1F1D] grid-bg">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center text-white space-y-6">
          <div className="flex justify-center mb-6">
            <div className="bg-[#EBB884] p-4 rounded-full">
              <Icon className="h-12 w-12 sm:h-16 sm:w-16 text-[#1F1F1D]" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">{title}</h1>
          <p className="text-lg sm:text-xl text-[#EBB884] max-w-3xl mx-auto text-balance">
            {subtext}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommonHeaderSection;
