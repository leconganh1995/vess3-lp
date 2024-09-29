import { useInView } from "framer-motion";
import { SectionEnums, SECTION_DATA } from "@/constants";

interface Props {
  currentSectionIndex: number;
  containerRef: React.MutableRefObject<HTMLDivElement>;
  sectionId: SectionEnums;
}

export const useSectionInView = ({
  currentSectionIndex,
  containerRef,
  sectionId,
}: Props) => {
  const isMotionInView = useInView(containerRef);
  const isInView =
    SECTION_DATA.findIndex((section) => section.id === sectionId) ===
    currentSectionIndex;

  return true ? isInView : isMotionInView;
};
