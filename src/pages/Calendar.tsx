/* REACT & NPM */
import React, {useState} from 'react';
import FullCalendar from '@fullcalendar/react';
import { DateClickArg, EventClickArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme
} from '@mui/material';


/* Components */
import Header from '@/components/header/Header';
import { tokens } from '@/hooks/theme'
import { formatDateType } from '@/shared/types';


const formatDate = (date: formatDateType) => {
    return new Intl.DateTimeFormat("en-UE", {
        year: "numeric",
        month: "short",
        day: "numeric",
    }).format(date);
};


const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [currentEvents, setCurrentEvents] = useState<Array<string>>([])

    const handleDateClick = (selected: DateClickArg) => {
        const title = prompt('{Please enter a new Title for your event}');
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if(title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            })
        }
    };

    const handleEventClick = (selected: EventClickArg) => {
        if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}' `)) {
            selected.event.remove();
        }
    }



  return (
    <Box m='20px'>
        <Header title='CALENDAR' subtitle='Full Calendar Interative Page' />
        <Box display='flex' justifyContent='space-between'>
            {/* CALENDAR SIDBAR */}
            <Box flex='1 1 20%' bgcolor={colors.primary[400]} p='15px' borderRadius='4px'>
                <Typography variant='h5'>Events</Typography>
                <List>
                    {currentEvents.map((event) => (
                        <ListItem 
                            key={event.id} 
                            sx={{bgcolor: colors.greenAccent[500], margin: '10px 0', borderRadius: '2px'
                        }}
                        >
                            <ListItemText
                                primary={event.title}
                                secondary={
                                    <Typography>
                                        {formatDate(event.start)}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
            {/* CALENDAR */}
            <Box flex='1 1 100%' ml='15px'>
                <FullCalendar
                    height='75vh'
                    plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                        listPlugin
                    ]}
                    headerToolbar={{
                        left: 'prev,next,today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay,istMonth'
                    }}
                    initialView='dayGridMonth'
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    select={handleDateClick}
                    eventClick={handleEventClick}
                    eventsSet={(events) => setCurrentEvents(events)}
                    initialEvents={[
                        {id: '1234', title: 'All-day Event', date: '2024-01-04'},
                        {id: '4321', title: 'Timed Event', date: '2024-01-14'},
                        {id: '4132', title: 'Debug', date: '2024-01-24'}
                    ]}
                />

            </Box>
        </Box>      
    </Box>
  )
}

export default Calendar