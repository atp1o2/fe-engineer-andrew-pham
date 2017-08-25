const getDateTime = (timestamp) => {
  var date = new Date(timestamp);
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();
  var dateStr = (1 + month) + '/' + day + '/' + year;

  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var timezone = date.toString().substring(35, 38);
  var strTime = hours + ':' + minutes + ampm + ' ' + timezone;

  return dateStr + " @" + strTime;
}

export { getDateTime };
