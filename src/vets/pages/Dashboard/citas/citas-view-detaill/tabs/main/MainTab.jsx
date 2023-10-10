import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import Diagnostic from '../diagnostic/Diagnostic'
import Historical from '../historial/Historical'

import "./mainTab.scss"
import { Link, useLocation } from 'react-router-dom'
import DiagnosticForm from '../diagnostic-form/DiagnosticForm'

function MainTab() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
  
    
    const status = searchParams.get('status');
    console.log("status",status)
  return (
    <div className='main-tab'>
        <Tabs
      defaultActiveKey="Diagnóstico"
      id="uncontrolled-tab-example"
     
    >
      <Tab eventKey="Diagnóstico" title="Diagnóstico">
      {
            status === "Pendiente" ? <DiagnosticForm /> :  <Diagnostic />
        }
      
      </Tab>
      <Tab eventKey="Historial" title="Historial de mascota">
        
      <Historical />
      </Tab>
      
     
   
    </Tabs>
    
    </div>
  )
}

export default MainTab