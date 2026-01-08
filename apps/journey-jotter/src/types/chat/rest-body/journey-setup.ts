export interface IJourneySetupRestBody {
  journeyName: string;
  journeyDescription?: string;
  startDate: string;
  endDate?: string;
  isActive: boolean;
  journeyType: "TRAVEL" | "LIFE" | "PERSONAL" | "OTHER";
  journeyGoals?: string[];
}
