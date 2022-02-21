import { atom } from 'recoil';

export const staticData = atom({
  key: 'staticData',
  default: {
    weeklySubcategoryTimeseries: null,
    weeklySubcategoryTable: null,
    weeklyDomainTimeseries: null,
    weeklyDomainTable: null,
    weeklyStyleTable: null,
    weeklyChannelTimeseries: null,
    weeklyChannelTable: null,
    weeklyDistributionTimeseries: null,
    weeklyDistributionTable: null,
    searchCountTableWeekly: null,
    searchCountTablePeriod: null,
    searchCountTimeseriesOverall: null,
    searchCountTimeseriesBrand: null,
    searchCountTimeseriesCompetitors: null,
    salesSummaryAcc: null,
    salesSummaryAccSesn: null,
    salesWeeklySummary: null,
  },
});

export const styleRankingData = atom({
  key: 'styleRankingData',
  default: {
    top20Summary: null,
    top20List: null,
    top20TotalSummary: null,
  },
});

export const checkedFilters = atom({
  key: 'checkedFilters',
  default: {
    srSubcategories: [],
    domains: [],
    items: [],
    srSeasons: [],
    adult: [],
  },
});

export const isDataLoaded = atom({
  key: 'isDataLoaded',
  default: false,
});

export const dataLoadedCount = atom({
  key: 'dataLoadedCount',
  default: 0,
});

export const dataLoadedProgress = atom({
  key: 'dataLoadedProgress',
  default: false,
});

export const conditionData = atom({
  key: 'conditionData',
  default: undefined,
});
