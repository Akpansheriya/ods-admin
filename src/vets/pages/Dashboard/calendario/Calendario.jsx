import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";
import "./calendario.scss";
import esLocale from "@fullcalendar/core/locales/es";
import { Button, Form } from "react-bootstrap";
import CitasModal from "../citas/modal/CitasModal";
function Calendario() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const lists = [
    {
      title: 'Event 1',
      start: '2023-10-05T09:00:00',
      end: '2023-10-05T11:00:00',
    },
    {
      title: 'Event 2',
      start: '2023-10-06T14:00:00',
      end: '2023-10-06T16:00:00',
    },
    {
      title: 'Event 3',
      start: '2023-10-07T10:30:00',
      end: '2023-10-07T12:00:00',
    },
  ];
 

  

  return (
    <div className="calendario">
      <div className="main-title-box">
        <div>
          <p className="calendario-detail-main-title">Calendario de Citas</p>
          <p className="calendario-detail-sub-title">Pacientes</p>
        </div>
        {/* <Button onClick={handleShow}>Añadir evento</Button> */}
      </div>
      <div className="calendario-main">
      <div className="maincontainer-top">
        <div className="calendario-schedule-btn-group">
         <div>
         <Form.Group  controlId="formBasicPassword">
                                   
                                    <Form.Select aria-label="Default select example">
                                        <option>Seleccionar el doctor</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Group>
         </div>
          <Button onClick={handleShow}>+ Agendar Cita</Button>
        </div>
        </div>
      <div className="maincontainer-bottom">
        <FullCalendar
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          initialView="timeGridWeek"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
          }}
          events={lists}
          locales={[esLocale]}
          locale="es"
          dayHeaderFormat={{ weekday: 'short', day: 'numeric' }}
          slotLabelFormat={{
            hour: 'numeric',
            minute: '2-digit',
            hour12: true, 
          }}
          slotLabelContent={(arg) => {
            const hour = new Date(arg.date).getHours();
            const minute = new Date(arg.date).getMinutes();
            return `${hour === 0 ? '12' : hour > 12 ? hour - 12 : hour}:${minute === 0 ? '00' : minute} ${hour < 12 ? 'AM' : 'PM'}`;
          }}
          views={{
            dayGridMonth: { buttonText: "Mes" },
            timeGridWeek: { buttonText: "Semana" },
            timeGridDay: { buttonText: "Día" },
            listWeek: { buttonText: "Lista" },
          }}
        />

        <div></div>
      </div>
      </div>

     <CitasModal show={show} handleClose={handleClose} />
    </div>
  );
}

export default Calendario;
