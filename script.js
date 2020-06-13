//Set variables
const element = document.querySelector(".countdown");
const launchDate = new Date("July 31, 2020 09:00:00");

//Launch date in ms

const end = launchDate.getTime();

//Update every second

const interval = setInterval(() => {
  //Get today's date and time in ms

  const start = new Date().getTime();
  const difference = end - start;

  //Calculations

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const min = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const sec = Math.floor((difference % (1000 * 60)) / 1000);

  console.log(days, hours, min, sec);
}, 1000);
