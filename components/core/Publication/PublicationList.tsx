"use client"
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input';
import { allPublications, categories, years } from '@/lib/constants'
import { BookChapter, BookPublication, ConferencePublication, Copyright, JournalPublication, Patent, Publication } from '@/lib/Types';
import { Award, BookOpen, Brain, Calendar, FileText, Search, Users } from 'lucide-react';
import React, { useState } from 'react'

const PublicationList = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [selectedYear, setSelectedYear] = useState<string>("all");

    const filteredPublications: Publication[] = allPublications.filter((pub) => {
        const searchTermLower = searchTerm.toLowerCase();

        const matchesSearch =
            pub.title.toLowerCase().includes(searchTermLower) ||
            ("authors" in pub && pub.authors.toLowerCase().includes(searchTermLower)) ||
            ("inventors" in pub && pub.inventors.toLowerCase().includes(searchTermLower));

        const matchesCategory = selectedCategory === "all" || pub.category === selectedCategory;
        const matchesYear = selectedYear === "all" || pub.year.toString() === selectedYear;

        return matchesSearch && matchesCategory && matchesYear;
    });
    const getTypeColor = (type: string) => {
        switch (type) {
            case "SCI":
            case "SCIE":
                return "bg-green-100 text-green-800 border-green-200"
            case "SCOPUS":
                return "bg-blue-100 text-blue-800 border-blue-200"
            case "IEEE":
                return "bg-purple-100 text-purple-800 border-purple-200"
            case "Springer":
                return "bg-orange-100 text-orange-800 border-orange-200"
            case "Elsevier":
                return "bg-red-100 text-red-800 border-red-200"
            case "Granted":
                return "bg-emerald-100 text-emerald-800 border-emerald-200"
            case "Published":
                return "bg-yellow-100 text-yellow-800 border-yellow-200"
            case "Registered":
                return "bg-cyan-100 text-cyan-800 border-cyan-200"
            case "ESCI":
                return "bg-indigo-100 text-indigo-800 border-indigo-200"
            default:
                return "bg-gray-100 text-gray-800 border-gray-200"
        }
    };
    const getCategoryIcon = (category: string): JSX.Element => {
        switch (category) {
            case "journal":
                return <FileText className="h-5 w-5" />
            case "conference":
                return <Users className="h-5 w-5" />
            case "book":
                return <BookOpen className="h-5 w-5" />
            case "chapter":
                return <BookOpen className="h-5 w-5" />
            case "patent":
                return <Award className="h-5 w-5" />
            case "copyright":
                return <Brain className="h-5 w-5" />
            default:
                return <FileText className="h-5 w-5" />
        }
    };

    return (
        <>
            <section className="py-8 bg-white border-b">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                                type="text"
                                placeholder="Search publications..."
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
                                {categories.map((category) => (
                                    <option key={category.value} value={category.value}>
                                        {category.label}
                                    </option>
                                ))}
                            </select>

                            <select
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                                className="px-4 py-2 border border-[#EBB884] rounded-md focus:border-[#E8BF96] focus:outline-none"
                            >
                                <option value="all">All Years</option>
                                {years.map((year) => (
                                    <option key={year} value={year.toString()}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="mt-4 text-sm text-gray-600">
                        Showing {filteredPublications.length} of {allPublications.length} publications
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto  py-12">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="space-y-6">
                        {filteredPublications.map((publication: Publication) => (
                            <Card
                                key={`${publication.category}-${publication.id}`}
                                className="hover:shadow-lg transition-shadow duration-300"
                            >
                                <CardContent className="p-6">
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="bg-[#EBB884] p-3 rounded-full">{getCategoryIcon(publication.category)}</div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                                                <h3 className="text-lg sm:text-xl font-bold text-[#1F1F1D] leading-tight">
                                                    {publication.title}
                                                </h3>
                                                <div className="flex flex-wrap gap-2">
                                                    <Badge className={`${getTypeColor(publication.type || publication.status || "")} border`}>
                                                        {publication.type || publication.status}
                                                    </Badge>
                                                    <Badge variant="outline" className="border-[#EBB884] text-[#1F1F1D]">
                                                        <Calendar className="h-3 w-3 mr-1" />
                                                        {publication.year}
                                                    </Badge>
                                                </div>
                                            </div>

                                            <p className="text-gray-700 mb-3 text-sm sm:text-base">
                                                {publication.authors || publication.inventors}
                                            </p>

                                            <div className="space-y-2 text-sm text-gray-600">
                                                {publication.category === "journal" && (
                                                    <p>
                                                        <strong>Journal:</strong> {(publication as JournalPublication).journal}
                                                        {(publication as JournalPublication).volume && `, Vol. ${(publication as JournalPublication).volume}`}
                                                        {(publication as JournalPublication).pages && `, pp. ${(publication as JournalPublication).pages}`}
                                                    </p>
                                                )}

                                                {publication.category === "conference" && (
                                                    <p>
                                                        <strong>Conference:</strong> {(publication as ConferencePublication).conference}
                                                        {(publication as ConferencePublication).volume && `, ${(publication as ConferencePublication).volume}`}
                                                        {(publication as ConferencePublication).pages && `, pp. ${(publication as ConferencePublication).pages}`}
                                                    </p>
                                                )}

                                                {(publication.category === "book" || publication.category === "chapter") && (
                                                    <p>
                                                        <strong>Publisher:</strong> {(publication as BookPublication | BookChapter).publisher}
                                                        {(publication as BookPublication).isbn && ` (ISBN: ${(publication as BookPublication).isbn})`}
                                                    </p>
                                                )}

                                                {publication.category === "patent" && (
                                                    <p>
                                                        <strong>Patent No:</strong> {(publication as Patent).patentNo}
                                                        {(publication as Patent).grantedNo && ` | Granted: ${(publication as Patent).grantedNo}`}
                                                        {(publication as Patent).type && ` | Type: ${(publication as Patent).type}`}
                                                    </p>
                                                )}

                                                {publication.category === "copyright" && (
                                                    <p>
                                                        <strong>Registration No:</strong> {(publication as Copyright).regNo}
                                                        {(publication as Copyright).type && ` | Type: ${(publication as Copyright).type}`}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {filteredPublications.length === 0 && (
                        <div className="text-center py-12">
                            <FileText className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">No publications found</h3>
                            <p className="text-gray-500">Try adjusting your search terms or filters</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default PublicationList