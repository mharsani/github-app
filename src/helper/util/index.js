const formatDate = (date) => {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

const minusDate = () => {
let date = new Date();
 date.setDate(date.getDate() - 1);
 return date;
}

export { formatDate, minusDate };