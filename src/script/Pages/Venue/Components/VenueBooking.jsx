
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { useForm } from "react-hook-form";

import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMonths } from 'date-fns';
import { format, differenceInDays } from 'date-fns'
import GetLocal from '../../../Storage/GetLocal';


function VenueBooking ({Bookings, VenueID, MaxGuest, Price}) {
  const id = VenueID
  const maxGuests = MaxGuest 
  const date = Bookings
  const {accessToken} = GetLocal('userData')

  const [totalDays, setTotalDays] = useState(null)
  const [selectedGuests, setSelectedGuests] = useState(1);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [orderComplett, setOrderComplett] =  useState(false)


  const generateOptions = () => {
    const options = [];
    for (let i = 1; i <= maxGuests; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
  };

  const {
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
  });

  const handleSelectChange = (e) => {
    setSelectedGuests(parseInt(e.target.value, 10));
  };


  const OnSumit = async () => {
    if(startDate && endDate && selectedGuests ) {
      const object = {
        "dateFrom": new Date(startDate.toISOString()),
        "dateTo": new Date(endDate.toISOString()),
        "guests": 1,
        "venueId": id
      }

      try {
        const fetching = await fetch('https://api.noroff.dev/api/v1/holidaze/bookings',{
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-type': 'application/json; charset=UFT-8',
          }, 
          body:JSON.stringify(object)
        })
        const receiveData = await fetching.json()
        if(fetching.status === 201) {
          setError('apiSussec', {message: 'Your booking are complett'})
        }
        if(fetching.status > 400 && fetching.status < 499){
          const {message:msg} = receiveData.errors[0]
          setError('apiError', {message: msg})
        
        }

      } catch (error) {
        console.log(error)
      }
    }
  }

  const onChange = (dates) => {
    const [start, end] = dates;
    
    setStartDate(start);
    setEndDate(end);
    if(start & end) {
      const first =  format(start, 'yyyy, MM, dd')
      const second =  format(end, 'yyyy, MM, dd')
      const Totaltdays = differenceInDays(new Date(second) ,new Date(first))
      setTotalDays(Totaltdays + 1)
    }
  };

  const disabledDateRanges = date?.map(range => ({
    start: new Date(range.dateFrom),
    end: new Date(range.dateTo)
  }));


    if(orderComplett) {
      return (
        <div className='container'>
          <div className='d-flex flex-column align-items-center mt-3 mb-3'>
            <h3 style={{color: 'white'}}>
              Booking is Complett
            </h3>
            <i style={{color: 'white'}}className="fa-solid fa-circle-check fa-shake pt-3 pb-3"></i>
            <p style={{color: 'white'}}>
              Thank you for using Holidaz
            </p>
          </div>
          
        </div>
      )
    }
    if(!orderComplett) {
      return (
        <div className="d-flex flex-column align-items-center mt-3 mb-3">
          <form>
            <DatePicker 
            showIcon
            minDate={new Date()}
            maxDate={addMonths(new Date(), 5)}
            selectsRange
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            inline
            excludeDateIntervals={disabledDateRanges}
            showDisabledMonthNavigation
          />
          <div className="container">
            <div className="row">
              <div className='col'>
                <p style={{color: 'white' }}><i className="fa-solid fa-users"></i> Guest</p>
                <select className="form-select form-select-sm" value={selectedGuests} onChange={handleSelectChange } style={{backgroundColor: 'white'}}>
                  {generateOptions()}
                </select>
              </div>
              <div className='col'>
                <p style={{color:'white'}}>
                  Days: {totalDays}
                </p>
                <p style={{color:'white'}}>
                  Price: <small>{totalDays * Price}</small>
                </p>
              </div>
            </div>
          </div>
          <p className="text-success">{errors.apiSussec?.message}</p>
          <p className="text-warning">{errors.apiError?.message}</p>
          <button type="button" className="btn btn-primary w-100" onClick={OnSumit}>Rent</button>
          </form>
        
        </div>
      )
    }
    
  
}

export default VenueBooking
