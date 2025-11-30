import React, {useState} from 'react';
import Header from '../components/Header';
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {
    const [currentEvents, setCurrentEvents]=useState([]);
    const handleDateClick=(selected)=>{
        const title=prompt("Please enter a new title for your event")
        const calendarApi=selected.view.calendar;
        calendarApi.unselect();

        if(title){
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            })
        }
    };
    const handleEventClick=(selected)=>{
        if(window.confirm(`Are you sure you want to delete the event ${selected.event.title}`))
            selected.event.remove()
    };

return (
  <div className="h-screen">
    <Header title="CALENDAR" subtitle="Plan your events" />

    <div className="flex gap-4 h-[90%]">

      {/* EVENTS LIST */}
      <div className="bg-primary-content rounded-md h-[90%] grow shrink basis-[25%] p-5">
        <h5 className="text-lg font-semibold mb-3 text-primary">Events</h5>
        <ul>
          {currentEvents.map((event) => (
            <li
              key={event.id}
              className="text-secondary-content bg-secondary my-2 p-2 rounded-sm"
            >
              <p className="font-medium text-accent-content">{event.title}</p>
              <p className="text-sm text-accent-content">
                {formatDate(event.start, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* CALENDAR */}
      <div className="h-[90%] w-[70%]">
        <FullCalendar
          height="100%"
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            listPlugin,
            interactionPlugin
          ]}
          headerToolbar={{
            left: "prev,next,today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          select={handleDateClick}
          eventClick={handleEventClick}
          eventsSet={(events) => setCurrentEvents(events)}
        />
      </div>
    </div>
  </div>
)};


export default Calendar;
