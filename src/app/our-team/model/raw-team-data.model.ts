export interface RawTeamData {
  data: Array<RawTeamDataBlock>;
}

export interface RawTeamDataBlock {
  type: string;
  id: string;
  attributes: RawTeamDataAttributes;
}

export interface RawTeamDataAttributes {
  title: string;
  memberCards: { [key: string]: RawOurTeamMember };
}

export interface RawOurTeamMember {
  imageUrl: { [key in screenWidth]: string };
  block: {
    title: string;
    description: string;
    link: string;
    text: string;
  };
}

type screenWidth = 'w200' | 'w400' | 'w1080' | 'w1920' | 'w2560';
