import React from "react";
import { Star } from "lucide-react";
import CommonHeaderSection from "@/components/common/CommonHeaderSection";
import BackToHome from "@/components/common/BackToHome";
import { awardsData } from "@/lib/constants";
import AwardCard from "@/components/core/Awards/AwardCard";

export default function AwardsPage() {
  return (
    <div className="min-h-screen">
      <BackToHome />
      <CommonHeaderSection
        icon={Star}
        title="Awards & Achievements"
        subtext="Recognition and accomplishments of Dr. Soumya Ranjan Nayak"
      />
       <section className="mt-12 max-w-7xl mx-auto grid gap-6 sm:grid-cols-2">
        {awardsData.map((award, idx) => (
          <AwardCard
            key={idx}
            icon={award.icon}
            title={award.title}
            description={award.description}
          />
        ))}
      </section>
    </div>
  );
}
