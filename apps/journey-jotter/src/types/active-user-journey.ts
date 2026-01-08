// import { type questionKeyEnum } from "@journey-jotter/db/src/db/schema";

export type ActiveUserJourney = {
  activeJourneyId: string | null;
  journeyName: string;
  startDate: string | null;
  endDate: string | null;
  questions: Array<{
    id: string;
    questionKey: string;
    questionText: string;
    sequenceOrder: number;
    questionHeading: string;
    response: string;
  }>;
};
