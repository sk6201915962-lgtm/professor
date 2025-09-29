import PublicHeader from "@/components/core/Publication/PublicHeader"
import PublicationList from "@/components/core/Publication/PublicationList"

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      <PublicHeader />
      <PublicationList />
    </div>
  )
}