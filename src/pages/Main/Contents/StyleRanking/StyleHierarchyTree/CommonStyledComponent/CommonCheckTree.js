import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdChevronRight,
  MdKeyboardArrowDown,
  MdAddBox,
  MdIndeterminateCheckBox,
  MdFolder,
  MdFolderOpen,
  MdInsertDriveFile,
} from 'react-icons/md';

import { TreeInnerWrapper } from '../CommonStyledComponent/CommonStyle';

const icons = {
  check: <MdCheckBox className="rct-icon rct-icon-check" />,
  uncheck: <MdCheckBoxOutlineBlank className="rct-icon rct-icon-uncheck" />,
  halfCheck: (
    <MdIndeterminateCheckBox className="rct-icon rct-icon-half-check" />
  ),
  expandClose: <MdChevronRight className="rct-icon rct-icon-expand-close" />,
  expandOpen: <MdKeyboardArrowDown className="rct-icon rct-icon-expand-open" />,
  expandAll: <MdAddBox className="rct-icon rct-icon-expand-all" />,
  collapseAll: (
    <MdIndeterminateCheckBox className="rct-icon rct-icon-collapse-all" />
  ),
  parentClose: <MdFolder className="rct-icon rct-icon-parent-close" />,
  parentOpen: <MdFolderOpen className="rct-icon rct-icon-parent-open" />,
  leaf: <MdInsertDriveFile className="rct-icon rct-icon-leaf-close" />,
};

export default function CommonCheckTree({ name, data, checkExpandObj }) {
  const nodes = [{ value: name, label: name, children: data.categories }];
  const { checked, expanded, setChecked, setExpanded } = checkExpandObj;

  return (
    <TreeInnerWrapper name={name}>
      <CheckboxTree
        nodes={nodes}
        checked={checked}
        expanded={expanded}
        onCheck={checked => setChecked(checked)}
        onExpand={expanded => setExpanded(expanded)}
        icons={icons}
        checkModel="leaf"
      />
    </TreeInnerWrapper>
  );
}
