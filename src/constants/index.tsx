import {
  Hero,
  Governance,
  Tech,
  Charting,
  OurPartners,
} from "@/views/Sections";

export enum SectionEnums {
  Hero = "Hero",
  Governance = "Governance",
  Tech = "Tech",
  Charting = "Charting",
  OurPartners = "OurPartners",
}

export enum SectionIndexEnum {
  Hero,
  Governance,
  Tech,
  Charting,
  OurPartners,
}

export const SECTION_DATA = [
  {
    index: SectionIndexEnum.Hero,
    element: Hero,
    id: SectionEnums.Hero,
    totalStep: null,
  },
  {
    index: SectionIndexEnum.Governance,
    element: Governance,
    id: SectionEnums.Governance,
    totalStep: null,
    mobileStep: 4,
  },
  {
    index: SectionIndexEnum.Tech,
    element: Tech,
    id: SectionEnums.Tech,
    totalStep: null,
    mobileStep: 3,
  },
  {
    index: SectionIndexEnum.Charting,
    element: Charting,
    id: SectionEnums.Charting,
    totalStep: null,
  },
  {
    index: SectionIndexEnum.OurPartners,
    element: OurPartners,
    id: SectionEnums.OurPartners,
    totalStep: null,
  },
];
