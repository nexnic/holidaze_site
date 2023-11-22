import { format, compareAsc } from 'date-fns'

function DateBooking(DateObj) {
    const options = {
        year: "numeric",
        month: '2-digit',
        day: '2-digit',
    };

    let reserved = DateObj?.map(obj => ({
        startDate: format(obj.dateFrom).toLocaleString('en-ZA', options),
        endDate: new Date(obj.dateTo).toLocaleString('en-ZA', options),
    }));

    console.log(reserved)

    return reserved
}


export default DateBooking


