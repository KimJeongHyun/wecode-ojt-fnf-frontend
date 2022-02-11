import React from 'react';
import SalesInventoryChart from './SalesInventoryChart';
import ContentCard from '../../../../../components/ContentCard/ContentCard';
import SalesInventoryTable from './SalesInventoryTable';
import SalesPerformanceTable from './SalesPerformanceTable';
import SalesPerformanceSeasonTable from './SalesPerformanceSeasonTable';

function SalesInventory() {
  return (
    <>
      <ContentCard children={<SalesInventoryChart />} />
      <ContentCard children={<SalesInventoryTable />} />
      <ContentCard children={<SalesPerformanceTable />} />
      <ContentCard children={<SalesPerformanceSeasonTable />} />
    </>
  );
}

export default SalesInventory;
