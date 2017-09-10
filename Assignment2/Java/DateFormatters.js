//getShortTime
var hour = 12;
var formattedHours = "";
var ampm = "";

if (hour > 12) {
  formattedHours = hour - 12;
} else if (hour === 0) {
  formattedHours = 12;
} else {
  formattedHours = hour;
}

if (hour >= 12) {
  ampm = "PM";
} else {
  ampm = "AM";
}

console.log(formattedHours + " " + ampm);

//getLongTime
var DateFormatter = {
  getShortTime: function(date) {
    var minutes = date.getMinutes();
    var hour = date.getHours();
    var formattedMinutes = "";
    var formattedHours = "";
    var ampm = "";

    if (hour > 12) {
      formattedHours = hour - 12;
    } else if (hour === 0) {
      formattedHours = 12;
    } else {
      formattedHours = hour;
    }

    if (minutes < 10) {
      formattedMinutes = "0" + minutes;
    } else {
      formattedMinutes = minutes;
    }

    if (hour >= 12) {
      ampm = "PM";
    } else {
      ampm = "AM";
    }
    return formattedHours + ":" + formattedMinutes + " " + ampm;
  }, //getShortTime
  getShortDate: function(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return month + "/" + day + "/" + year;
  },
  getShortDateTime: function(date) {
    return this.getShortDate(date) + " " + this.getShortTime(date);
  },
  getLongDate: function(date) {
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    
    var monthNames = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];
    return monthNames [month] + ' ' + day + ' ' + year;
  },
  getLongDateTime: function(date) {
    return this.getLongDate(date) + " " + this.getShortTime(date);
  },
  

getExtendedDateTime: function(date){
var day = date.getDay();

var daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
  

return daysOfWeek[day] + " " + this.getLongDateTime(date)
  
}
};
var x = DateFormatter.getShortTime(new Date());
console.log(x);

var y = DateFormatter.getShortDate(new Date());
console.log(y);

var z = DateFormatter.getShortDateTime(new Date());
console.log(z);

var a = DateFormatter.getLongDate(new Date());
console.log(a);

var b = DateFormatter.getLongDateTime(new Date());
console.log(b);

var bc= DateFormatter.getExtendedDateTime(new Date());
console.log(bc);