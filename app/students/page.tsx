import React from "react";
import { Users } from "lucide-react";
import CommonHeaderSection from "@/components/common/CommonHeaderSection";
import { completedStudents, ongoingStudents } from "@/lib/constants";
import StudentCard from "@/components/core/Students/StudentCard";
import BackToHome from "@/components/common/BackToHome";

export default function StudentsPage() {
    return (
        <div className="min-h-screen">
            <BackToHome />
            <CommonHeaderSection
                icon={Users}
                title="Students Supervision"
                subtext="Guided Research Projects by Dr. Soumya Ranjan Nayak"
            />
            <section className="max-w-7xl mx-auto my-12">
                <h2 className="text-2xl font-bold text-black mb-6">PHD Scholars</h2>
                <div className="grid gap-6 grid-cols-1">
                    {ongoingStudents.map((student, idx) => (
                        <StudentCard
                            key={idx}
                            title={student.name}
                            subtitle={`Reg. No-${student.regNo}`}
                            description={student.topic}
                            batch={student.batch}
                            status={student.status}
                            university={student.university}
                        />
                    ))}
                </div>
            </section>

            <section className="max-w-7xl mx-auto my-12">
                <h2 className="text-2xl font-semibold text-black mb-6">MTech Scholars</h2>
                <div className="grid gap-6 grid-cols-1">
                    {completedStudents.map((student, idx) => (
                        <StudentCard
                            key={idx}
                            title={student.name}
                            subtitle={`Reg. No-${student.regNo}`}
                            description={student.topic}
                            batch={student.batch}
                            status={student.status}
                            university={student.university}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
