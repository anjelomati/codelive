import React, { useContext, useState, useEffect } from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./ReactTabs.css";
import Settings from "./SettingsPage";
import ProblemList from "./ProblemList/ProblemList";
import { TabsContext } from "service/TabsContext";
import { LabelType, TabsContextTypes, QuestionDataSS, ScrappedDataType } from "types";
import ProblemPage from "./ProblemPage/ProblemPage";
import { tagsData, companiesData } from "./ProblemList/data";
import { socket } from "service/socket";
import { useRoomID } from "service/RoomIdContext";

interface ProjectFile {
     name: string;
     content: string;
}

interface TabsPanelProps {
     files: ProjectFile[];
     onFileSelect: (file: ProjectFile) => void;
     onAddFile: (file: ProjectFile) => void;
}

const TabsComponent: React.FC<TabsPanelProps> = ({ files, onFileSelect, onAddFile }) => {
     const [tabIndex, setTabIndex] = useState(0);

     return (
          <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="tabs_root">
               <TabList style={{ background: "#252526" }}>
                    <Tab>Solution</Tab>
                    <Tab>Settings</Tab>
               </TabList>
               <TabPanel>
                    <ProblemPage onFileSelect={onFileSelect} onAddFile={onAddFile} files={files} />
               </TabPanel>
               <TabPanel>
                    <Settings />
               </TabPanel>
          </Tabs>
     );
};

export default TabsComponent;
