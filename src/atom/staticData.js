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

export const isDataLoaded = atom({
  key: 'isDataLoaded',
  default: false,
});

export const dataLoadedCount = atom({
  key: 'dataLoadedCount',
  default: 0,
});
