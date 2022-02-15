const BASE_URL = 'http://172.1.7.142:8000';

export const FILTERINFO = [`${BASE_URL}/category-list?brand=M&adult-kids=성인`];

export const API = [
  `${BASE_URL}/weekly/channel/timeseries`,
  `${BASE_URL}/weekly/domain/timeseries`,
  `${BASE_URL}/weekly/domain/table`,
  `${BASE_URL}/weekly/style/table`,
  `${BASE_URL}/weekly/subcategory/table`,
  `${BASE_URL}/weekly/channel/timeseries`,
  `${BASE_URL}/weekly/channel/table`,
  `${BASE_URL}/weekly/distribution/timeseries`,
  `${BASE_URL}/weekly/distribution/table`,
  `${BASE_URL}/search/table/weekly`,
  `${BASE_URL}/search/table/selected-period`,
  `${BASE_URL}/search/timeseries/overall`,
  `${BASE_URL}/search/timeseries/brand`,
  `${BASE_URL}/search/timeseries/competitors`,
  `${BASE_URL}/summary/sales-summary-acc`,
  `${BASE_URL}/summary/sales-summary-acc-season`,
  `${BASE_URL}/summary/weekly-sales-summary`,
];

export const DATANAME = [
  'weeklySubcategoryTimeseries',
  'weeklyDomainTimeseries',
  'weeklyDomainTable',
  'weeklyStyleTable',
  'weeklySubcategoryTable',
  'weeklyChannelTimeseries',
  'weeklyChannelTable',
  'weeklyDistributionTimeseries',
  'weeklyDistributionTable',
  'searchCountTableWeekly',
  'searchCountTablePeriod',
  'searchCountTimeseriesOverall',
  'searchCountTimeseriesBrand',
  'searchCountTimeseriesCompetitors',
  'salesSummaryAcc',
  'salesSummaryAccSesn',
  'salesWeeklySummary',
];
