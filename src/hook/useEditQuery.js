import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function useEditQuery() {
  const [queryString, setQueryString] = useState('');
  const [searchParams] = useSearchParams();

  const setSubCategoryParams = name => {
    switch (name) {
      case 'all':
      case '초기화':
        searchParams.delete('subcategory');
        break;
      default:
        const removeParams = () => {
          const allParamsArr = searchParams.getAll('subcategory');

          allParamsArr.splice(allParamsArr.indexOf(name), 1);

          searchParams.delete('subcategory');

          allParamsArr.forEach(item => {
            searchParams.append('subcategory', item);
          });
        };

        !decodeURI(queryString).includes(name)
          ? searchParams.append('subcategory', name)
          : removeParams();
        break;
    }

    setQueryString(searchParams.toString());
  };

  return { queryString, setSubCategoryParams };
}
