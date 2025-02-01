import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Vision from './Vision';
import Mission from './Mission';
import Gallery from './Gallery';
import Articles from './Articles';

const Tab = styled(TabUnstyled)`
  color: white;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 0.586vw 1vw;
  margin: 0.351vw 0.351vw;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #f27478;
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #7b8a9e;
    color: white;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
`;

const TabsList = styled(TabsListUnstyled)`
  background-color: #98abc4;
  border-radius: 8px;
  margin-bottom: 16px;
  max-width:85vw;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

export default function UnstyledTabsCustomized() {
  return (
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>Vision</Tab>
        <Tab>Mission Statement</Tab>
        <Tab>Published Articles</Tab>
        <Tab>Gallery</Tab>
      </TabsList>

      <TabPanel value={0}>
        <Vision />
      </TabPanel>
      <TabPanel value={1}>
        <Mission/>
      </TabPanel>
      <TabPanel value={2}>
        <Articles/>
      </TabPanel>
      <TabPanel value={3}>
        <Gallery/>
      </TabPanel>

    </TabsUnstyled>
  );
}
