const area = document.querySelectorAll(".area");

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC"
];

function clock() {
  const theDate = new Date();

  Array.from(area).forEach($area => {
    const timezone = $area.getAttribute("data-timezone");
    const date = theDate.toLocaleString("zh-TW", {
      timeZone: timezone,
      hour12: false
    });
    
    const $date = date.split(" ")[0];
    const dateStr = `${$date.slice(7,9)} ${months[$date.slice(5,6)-1]}.${date.slice(0,4)}`

    const time = date.split(" ")[1].slice(0,5);


    $area.querySelector(".date").innerHTML = dateStr;
    $area.querySelector(".time").innerHTML = time;
    
    const judgeNight = parseInt(date.split(" ")[1].slice(0,2));

    if( judgeNight >= 0 && judgeNight <= 6 || judgeNight >= 18 && judgeNight <= 24){
        $area.classList.add("black");
    } else {
        $area.classList.remove("black");
    }
  });
}

clock();

setInterval(clock, 1000);
