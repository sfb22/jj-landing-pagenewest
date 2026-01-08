export interface IProfileSetupRestBody {
  userProfileInformationCheck: {
    isUserNameConfigured: boolean;
    isUserCountryConfigured: boolean;
    isUserRegionConfigured: boolean;
    isUserCityConfigured: boolean;
    isHappyWritingStyleConfigured: boolean;
    isSadWritingStyleConfigured: boolean;
    isReflectiveWritingStyleConfigured: boolean;
    // isJournalingStyleConfigured: boolean;
    hasActiveJourney: boolean;
    activeJourneySetupComplete: boolean;
  };
}
