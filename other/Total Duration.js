// Write a function that will take the array below of string durations and convert it hours/mins/seconds
// Problem by @wesbos
// Solution by @ysabuhi
var times = ["12:38", "6:36", "9:03", "8:34", "5:02", "6:54", "13:22", "4:41", "8:36", "21:58", "3:06", "10:46", "10:13", "12:54", "14:00", "11:03", "16:03", "10:52", "24:53", "10:03", "11:49", "15:47", "3:19", "2:06", "5:47", "1:03", "5:29", "5:47", "26:39"];

var totalSec = 0;

for (var i in times) {
  var items = times[i].split(':');
	var sec = Number(items[0]) * 60 + Number(items[1]);
  	totalSec += sec;
	}
	var hour = parseInt(totalSec / 3600) % 24;
	var mins =parseInt(totalSec / 60) % 60;document.write(hour + ' hours ' + mins + ' min');
