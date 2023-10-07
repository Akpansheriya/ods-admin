import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import "./mainTab.scss";
import Detalles from "./Detalles/Detalles";


function MainTab() {
  return (
    <div className="main-tab">
      <Tabs
        defaultActiveKey="Detalles"
        id="uncontrolled-tab-example"
        className="mb-3">
        <Tab eventKey="Detalles" title="Detalles">
          <Detalles />
        </Tab>
      </Tabs>
    </div>
  );
}

export default MainTab;
