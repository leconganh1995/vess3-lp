import { create } from "zustand";

interface ISectionState {
  currentSectionIndex: number;
  nextSectionIndex: number;
  setCurrentSectionIndex: (index: number) => void;
  setNextSectionIndex: (index: number) => void;
  animationStep: number;
  setAnimationStep: (step: number) => void;
  isIntroLoaded: boolean;
  setIsIntroLoaded: (isIntroLoaded: boolean) => void;
  sectionAnimating: boolean;
  setSectionAnimating: (animating: boolean) => void;
  direction: "up" | "down";
  setDirection: (direction: "up" | "down") => void;
}

interface GlobalState {
  isWindowLoaded: boolean;
  setIsWindowLoaded: (loaded: boolean) => void;
}

export const useSectionState = create<ISectionState>((set) => ({
  currentSectionIndex: 0,
  setCurrentSectionIndex: (index) =>
    set(() => ({ currentSectionIndex: index })),
  nextSectionIndex: 0,
  setNextSectionIndex: (index) => set(() => ({ nextSectionIndex: index })),
  animationStep: 1,
  setAnimationStep: (step) => set(() => ({ animationStep: step })),
  isIntroLoaded: true,
  setIsIntroLoaded: (data) => set(() => ({ isIntroLoaded: data })),
  sectionAnimating: false,
  setSectionAnimating: (data) => set(() => ({ sectionAnimating: data })),
  direction: "down",
  setDirection: (data) => set(() => ({ direction: data })),
}));

export const useGlobalState = create<GlobalState>((set) => ({
  isWindowLoaded: false,
  setIsWindowLoaded: (loaded) => set(() => ({ isWindowLoaded: loaded })),
}));
