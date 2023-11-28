
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMonths } from 'date-fns';


function VenueBooking ({Bookings}) {
  const date = Bookings
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const disabledDateRanges = date?.map(range => ({
    start: new Date(range.dateFrom),
    end: new Date(range.dateTo)
  }));

  


  
    return (
      <div className="d-flex justify-content-center">
 
    <DatePicker
      showIcon
      minDate={new Date()}
      maxDate={addMonths(new Date(), 5)}
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      inline
      excludeDateIntervals={disabledDateRanges}
      showDisabledMonthNavigation
    />

        <button className="btn btn-primary">Rent</button>
      </div>
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