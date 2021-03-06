import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
    font-weight: bold;
    color: #ddd;
    font-size: 16px;
    width: 100%;
    margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
    border-radius: 10px;
    border: 1px solid rgb(95, 221, 253);
    box-shadow: 0px 0px 3px 3px rgba(95, 21, 253, 0.616);
    padding: 16px;
    user-select: none;
    cursor: pointer;
    z-index: 99999;
    background-color: "#fff";
    margin: 8px;

    &:focus {
        outline: none;
    }

    &.is-selected {
        box-shadow: 0px 0px 6px 6px rgba(95, 21, 253, 0.616);
    }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
    padding: 16px;
    border: 1px solid "#ccc";
    display: none;
    margin-top: -5px;

    &.is-selected {
        display: block;
    }
`;

WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;

