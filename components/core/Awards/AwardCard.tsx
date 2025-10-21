import { AwardCardProps } from "@/lib/Types";
import Link from "next/link";

const AwardCard: React.FC<AwardCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="border border-[#EBB884] rounded-lg p-6 bg-[#1F1F1D] text-white shadow-md flex flex-col gap-4 min-h-40">
      <div className="flex items-center gap-3">
        <Icon className="h-6 w-6 text-[#EBB884]" />
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      <ul className="list-disc list-inside text-sm text-[#EBB884] space-y-1">
        {description.map((desc, idx) => (
          <li key={idx}>
            {desc.link ? (
              <Link
                href={desc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#EBB884]"
              >
                {desc.text}
              </Link>
            ) : (
              desc.text
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AwardCard