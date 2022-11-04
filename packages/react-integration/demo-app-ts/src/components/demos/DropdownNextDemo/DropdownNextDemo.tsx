import React from 'react';
import { Dropdown } from '@patternfly/react-core/next';
import { MenuToggle } from '@patternfly/react-core';

export const DropdownNextDemo: React.FunctionComponent = () => (
  <Dropdown toggle={ref => <MenuToggle ref={ref}>Dropdown</MenuToggle>}></Dropdown>
);
DropdownNextDemo.displayName = 'DropdownNextDemo';
