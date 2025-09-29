import { Skill } from "@/lib/Types"
import React from "react"

interface Props {
  skill: Skill
}

const SkillCard: React.FC<Props> = ({ skill }) => {
  return (
    <div className="bg-[#1F1F1D] border border-[#EBB884] rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-semibold text-[#EBB884] mb-4">{skill.category}</h3>
      <ul className="space-y-2">
        {skill.items.map((item, index) => (
          <li key={index} className="text-white flex justify-between">
            <span>{item.name}</span>
            {item.level && <span className="text-[#D9D729]">{item.level}</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkillCard
