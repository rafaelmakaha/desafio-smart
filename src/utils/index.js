import moment from 'moment';

export const formatTime = (hour) => {
    const format = 'hh:mm';
    if(hour.length === 3) return moment(hour.replace('h',':00'), format)
    return  moment(hour.replace('h',':'),format)
}

export const compareSchedule = (option, store) => {
    if(!store.start) return false
    if (option.start.isBetween(store.start,store.end, undefined, '[]') ||
        option.end.isBetween(store.start,store.end, undefined, '[]') ||
        store.start.isBetween(option.start,option.end, undefined, '[]') ||
        store.end.isBetween(option.start,option.end, undefined, '[]'))
        return true
    return false
}