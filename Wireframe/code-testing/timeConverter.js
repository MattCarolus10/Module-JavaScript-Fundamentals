// First example

// function receives a string representing time in 24-hour format as an argument
// function formatAs12HourClock(time) {

//   // extract digits representing hours
//   const hours = Number(time.slice(0, 2));

//   // if hour value over 12, subtract 12
//   // if hour value under 12, continue
//   if (hours > 12) {
//     // add pm and return value
//     return `${hours - 12}:00 pm`;
//   }
//   // add am and return value
//   return `${hours}:00 am`;
// }
// console.log(formatAs12HourClock("23:00"));
// console.log(formatAs12HourClock("14:00"));

// Second example

// function formatAs12HourClock(time) {

//   const hours = Number(time.slice(0, 2));

//   if (hours > 12) {
//     return `${hours - 12}:00 pm`;
//   }
//   return `${time} am`;
// }
// console.log(formatAs12HourClock("23:00"));
// console.log(formatAs12HourClock("14:00"));

// Final example

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  
  // This is not the only way to complete this check.
  // If you did it a different way why not share your solution in Slack?
  if (time === "00:00"){
    return `12:00 am`;
  }

  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  
  return `${time} am`;
}

export {formatAs12HourClock};