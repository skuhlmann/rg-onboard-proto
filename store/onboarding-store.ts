"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { GuildRole, PrototypeOnboardingState, RoomId } from "@/types/onboarding";

type OnboardingActions = {
  initializeFromParams: (params: { email?: string; session?: string }) => void;
  visitRoom: (room: RoomId) => void;
  selectRole: (role: GuildRole) => void;
  setCharacterName: (name: string) => void;
  toggleMotivation: (motivation: string) => void;
  setMotivationDetails: (details: string) => void;
  completeForge: () => void;
  resetPrototype: () => void;
};

const initialVisited: PrototypeOnboardingState["visitedRooms"] = {
  hub: false,
  forge: false,
  oracle: false,
  guildBoard: false,
  schedule: false
};

const initialState: PrototypeOnboardingState = {
  motivations: [],
  visitedRooms: initialVisited,
  completedRooms: {
    forge: false
  },
  scheduleUnlocked: false
};

const canCompleteForge = (state: PrototypeOnboardingState) =>
  Boolean(state.selectedRole && state.characterName?.trim() && state.motivations.length > 0);

export const useOnboardingStore = create<PrototypeOnboardingState & OnboardingActions>()(
  persist(
    (set, get) => ({
      ...initialState,
      initializeFromParams: ({ email, session }) =>
        set((state) => ({
          email: email || state.email,
          sessionParam: session || state.sessionParam
        })),
      visitRoom: (room) =>
        set((state) => ({
          visitedRooms: {
            ...state.visitedRooms,
            [room]: true
          }
        })),
      selectRole: (role) => set({ selectedRole: role }),
      setCharacterName: (name) => set({ characterName: name }),
      toggleMotivation: (motivation) =>
        set((state) => {
          const motivations = state.motivations.includes(motivation)
            ? state.motivations.filter((item) => item !== motivation)
            : [...state.motivations, motivation];

          return { motivations };
        }),
      setMotivationDetails: (motivationDetails) => set({ motivationDetails }),
      completeForge: () =>
        set((state) => {
          if (!canCompleteForge(state)) {
            return state;
          }

          return {
            completedRooms: {
              ...state.completedRooms,
              forge: true
            },
            scheduleUnlocked: true
          };
        }),
      resetPrototype: () => set(initialState)
    }),
    {
      name: "raidguild-onboarding-prototype"
    }
  )
);

export const selectCanCompleteForge = (state: PrototypeOnboardingState) => canCompleteForge(state);
