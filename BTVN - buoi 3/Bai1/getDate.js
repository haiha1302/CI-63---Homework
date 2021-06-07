
function getDate() {
    let stringDate = "";
    let newTime = new Date();
    stringDate += String(newTime.getDate()) + "-" + (Number(newTime.getMonth()) + 1) + "-" + newTime.getFullYear();
    return stringDate;
}

export default getDate()