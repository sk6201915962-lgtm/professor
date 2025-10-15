"use client"
import BackToHome from "@/components/common/BackToHome"
import CommonHeaderSection from "@/components/common/CommonHeaderSection"
import { Input } from "@/components/ui/input"
import { ProfessionalcardsData } from "@/lib/constants"
import { ProfessionalCardData, ProfessionalCardItem } from "@/lib/Types"
import { Lightbulb, Search } from "lucide-react"
import Link from "next/link"
import React, { useMemo, useState } from "react"

export default function ProfessionalPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = useMemo(() => {
        const unique = Array.from(
            new Set(ProfessionalcardsData.map((item) => item.category))
        );
        return ["All", ...unique];
    }, []);
    const filteredData = useMemo(() => {
        return ProfessionalcardsData.map((categoryItem) => {
            if (selectedCategory !== "All" && categoryItem.category !== selectedCategory)
                return null;

            const filteredItems = categoryItem.items.filter((item) => {
                const search = searchTerm.toLowerCase();
                return (
                    item.title.toLowerCase().includes(search) ||
                    item.description?.toLowerCase().includes(search)
                );
            });

            if (filteredItems.length === 0) return null;

            return { ...categoryItem, items: filteredItems };
        }).filter(Boolean) as ProfessionalCardData[];
    }, [searchTerm, selectedCategory]);

    return (
        <div className="min-h-screen">
            <BackToHome />
            <CommonHeaderSection
                icon={Lightbulb}
                title="Professional Expertise"
                subtext="Editorial Roles, Conferences, Lectures & Memberships of Dr. Soumya Ranjan Nayak"
            />
            <div className="max-w-7xl mx-auto my-20 grid gap-6 grid-cols-1">
                <div className="flex flex-col sm:flex-row md:justify-between items-center gap-4 mb-6">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                            type="text"
                            placeholder="Search by title or description..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 border-[#EBB884] focus:border-[#E8BF96]"
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-4 py-2 border border-[#EBB884] rounded-md focus:border-[#E8BF96] focus:outline-none"
                        >
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="grid gap-6">
                    {filteredData.map((category) => (
                        <div key={category.category}>
                            <h2 className="text-xl font-bold mb-2">{category.category}</h2>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {category.items.map((item: ProfessionalCardItem, index: number) => (
                                    <div
                                        key={index}
                                        className="border rounded p-4 shadow hover:shadow-lg transition"
                                    >
                                        <h3 className="font-semibold">{item.title}</h3>
                                        {item.description && <p className="text-gray-600">{item.description}</p>}
                                        {item.link && (
                                            <Link
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 hover:underline mt-2 inline-block"
                                            >
                                                View More
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    {filteredData.length === 0 && (
                        <p className="text-center text-gray-500">No results found.</p>
                    )}
                </div>
            </div>
        </div>
    )
}
