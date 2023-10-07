import React from "react";
import { Tab, Tabs } from "react-bootstrap";

import "./mainTab.scss";
import Information from "./information/Information";
import Historical from "./historical/Historical";
import Vaccination from "./Vaccination/Vaccination";

function MainTab() {
  return (
    <div className="main-tab">
      <Tabs
        defaultActiveKey="Información"
        id="uncontrolled-tab-example"
        className="mb-3">
        <Tab eventKey="Información" title="Información">
          <Information />
        </Tab>
        <Tab eventKey="Historial" title="Historial de mascota">
          <Historical />
        </Tab>
        <Tab eventKey="Vaccination" title="Vacunación">
          <Vaccination />
        </Tab>
      </Tabs>
    </div>
  );
}

export default MainTab;
