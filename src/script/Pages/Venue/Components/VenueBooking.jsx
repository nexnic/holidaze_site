import Calendar from "@demark-pro/react-booking-calendar";
import { useState } from "react";
import { compareAsc, format } from 'date-fns'


function VenueBooking ({Bookings}) {
  const [selectedDates, setSelectedDates] = useState([]);
  const handleChange = (e) => setSelectedDates(e);
  let reserved = Bookings?.map((obj) => ({
    startDate: format(new Date(obj.dateFrom), 'yyyy, MM,  dd'),
    endDate: format(new Date(obj.dateTo), 'yyyy, MM,  dd'),
  }));

  console.log(reserved)
  
  return (
    <Calendar
      selected={selectedDates}
      onChange={handleChange}
      onOverbook={(e, err) => alert(err)}
      components={{
        
      }}
      disabled={(date, state) => !state.isSameMonth}
      variant="events"
      dateFnsOptions={{ weekStartsOn: 1 }}
      range={true}
    />
  )
}

export default VenueBooking

/**
    const reserved = [
        {
          startDate: new Date(2023/11/22),
          endDate: new Date(2023, 12, 5),
        },
    ];
 */