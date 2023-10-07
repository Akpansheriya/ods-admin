import React from "react";
import { Tab, Tabs } from "react-bootstrap";

import "./mainTab.scss";
import Information from "./information/Information";
import Historical from "./historical/Historical";
import Vaccination from "./SubMascotas/SubMascotas";

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
        <Tab eventKey="Mascotas" title="Mascotas">
          <Vaccination />
        </Tab>
        <Tab eventKey="Historial" title="Historial de mascota">
          <Historical />
        </Tab>
      </Tabs>
    </div>
  );
}

export default MainTab;
