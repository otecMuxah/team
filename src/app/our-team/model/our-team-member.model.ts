export interface OurTeamMember {
  name: string;
  position: string;
  image: string;
  email: string;
  phone: string;
}

export interface OurTeamSectionData {
  title: string;
  data: OurTeamMember[];
}
