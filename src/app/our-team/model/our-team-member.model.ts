export interface OurTeamMember {
  name: string;
  position: string;
  image: string;
  email: string;
  phone: string;
}

export interface BlockData {
  title: string;
  data: OurTeamMember[];
}
