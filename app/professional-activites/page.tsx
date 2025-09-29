"use client"
import BackToHome from "@/components/common/BackToHome"
import CommonHeaderSection from "@/components/common/CommonHeaderSection"
import { ProfessionalcardsData } from "@/lib/constants"
import { Lightbulb } from "lucide-react"
import React from "react"

export default function ProfessionalPage() {
    return (
        <div className="min-h-screen">
            <BackToHome />
            <CommonHeaderSection
                icon={Lightbulb}
                title="Professional Expertise"
                subtext="Editorial Roles, Conferences, Lectures & Memberships of Dr. Soumya Ranjan Nayak"
            />
            <div className="max-w-7xl mx-auto my-20 grid gap-6 grid-cols-1">
                {ProfessionalcardsData.map((card, idx) => (
                    <div
                        key={idx}
                        className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 border border-gray-200 dark:border-gray-700"
                    >
                        <h2 className="text-xl font-semibold mb-4 text-orange-600">
                            {card.category}
                        </h2>
                        <ul className="space-y-3">
                            {card.items.map((item, i) => (
                                <li key={i}>
                                    <p className="font-medium text-gray-900 dark:text-gray-100">
                                        {item.title}
                                    </p>
                                    {item.description && (
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {item.description}
                                        </p>
                                    )}
                                    {item.link && (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:underline text-sm"
                                        >
                                            View More
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}
