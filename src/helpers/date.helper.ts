import moment from 'moment'


export const getDaysInMonth = () =>{
    
    const month = moment().month()
    const year = moment().year()

    const daysInMonth = moment([year, month]).daysInMonth()
    

    return daysInMonth
}

