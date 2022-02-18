import { useState, useEffect } from 'react';

export default function useTreeInit(name, data) {
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    const newList = [];
    switch (name) {
      case 'categories':
        data.forEach(item =>
          Object.entries(item)[2][1].map(item => newList.push(item.value))
        );
        break;
      case 'seasons':
      case 'items':
        data.forEach(item =>
          Object.entries(item)[2][1].map(item =>
            Object.entries(item)[2][1].map(item => newList.push(item.value))
          )
        );
        break;
      case 'domains':
      case 'adult_kids':
        data.forEach(item => newList.push(item.value));
        break;
      default:
    }
    setChecked(newList);
  }, [name, data]);

  return { checked, setChecked };
}
