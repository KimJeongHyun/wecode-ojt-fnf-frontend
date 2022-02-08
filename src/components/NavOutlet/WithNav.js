import React from 'react';
import { Outlet } from 'react-router';

import useEditQuery from '../../hook/useEditQuery';

import VerticalNav from '../Nav/VerticalNav';

export default function WithNav() {
  const { setSubCategoryParams } = useEditQuery();
  return (
    <>
      <VerticalNav setSubCategoryParams={setSubCategoryParams} />
      <Outlet />
    </>
  );
}
