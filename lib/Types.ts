export interface BasePublication {
  id: number;
  title: string;
  authors?: string;
  booklink?:string;
  inventors?: string;
  year: number;
  category: string;
  type?: string;
  status?: string;
}
export interface JournalPublication extends BasePublication {
  journal: string;
  volume?: string;
  pages?: string;
}
export interface ConferencePublication extends BasePublication {
  conference: string;
  volume?: string;
  pages?: string;
}
export interface BookPublication extends BasePublication {
  publisher: string;
  isbn?: string;
}
export interface BookChapter extends BasePublication {
  publisher: string;
  pages: string;
}
export interface Patent extends BasePublication {
  inventors: string;
  patentNo: string;
  grantedNo?: string;
}
export interface Copyright extends BasePublication {
  inventors: string;
  regNo: string;
}
export type Publication =
  | JournalPublication
  | ConferencePublication
  | BookPublication
  | BookChapter
  | Patent
  | Copyright;

export interface CommonHeaderSectionProps {
  icon: React.ElementType;
  title: string;
  subtext: string;
}
export interface Skill {
  category: string
  items: { name: string; level: string }[]
}
export interface Student {
  name: string;
  regNo: string;
  topic: string;
  batch: string;
  status: "Ongoing" | "Completed";
  university: string;
}
export interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  batch: string;
  status: string;
  university: string;
}
export interface AwardDescription {
  text: string;
  link?: string;
}
export interface AwardData {
  icon: React.ElementType;
  title: string;
  description: AwardDescription[];
}
export interface AwardCardProps {
  icon:  React.ElementType;
  title: string;
  description: AwardDescription[];
}
export interface ProfessionalCardItem {
  title: string;
  description?: string;
  link?: string;
}

export interface ProfessionalCardData {
  category: string;
  items: ProfessionalCardItem[];
}