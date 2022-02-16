import { useState } from 'react';

export default function useTreeChecked() {
  const [checked, setChecked] = useState([]);
  const [checkboxExpand, setCheckboxExpand] = useState([]);

  const treeCheckMethods = {
    checked: checked,
    setChecked: setChecked,
    checkboxExpand: checkboxExpand,
    setCheckboxExpand,
  };

  return { treeCheckMethods };
}
