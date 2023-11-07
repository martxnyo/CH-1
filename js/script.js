const dateSpan = document.querySelectorAll(".currentDate");
const currTime = document.querySelectorAll(".currTime");
const currDay = document.querySelectorAll(".currDay");
const currMonth = document.querySelectorAll(".currMonth");
const currYear = document.querySelectorAll(".currYear");
const publicDate = document.querySelectorAll('.publicDate')

publicDate.forEach(item => {
  item.innerHTML = new Date().toLocaleDateString('ch-ch', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  })
})

dateSpan.forEach(item => {
  item.innerHTML = new Date().toLocaleDateString(
    "de-ch", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }
  );
});

currDay.forEach(item => {
  item.innerHTML = new Date().toLocaleDateString(
    "de", {
    day: "numeric",
  }
  );
});

currMonth.forEach(item => {
  item.innerHTML = new Date().toLocaleDateString(
    "de", {
    month: "long",
  }
  );
});

currYear.forEach(item => {
  item.innerHTML = new Date().toLocaleDateString(
    "de", {
    year: "numeric",
  }
  );
});

currTime.forEach(item => {
  item.innerHTML = getYesterdayDate().toLocaleTimeString(
    "de", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  }
  );
});



let rand = Math.floor(Math.random() * (15 - 5) + 5);
$('.data-end-place').text(rand)


const updDate = getYesterdayDate().toLocaleDateString('de-ch', {
  month: "long",
  day: "numeric",
  year: "numeric",
})

document.querySelector('.updateDate').innerHTML = updDate
// document.querySelector('.updateDate2').innerHTML = updDate

function getYesterdayDate() {
  let yesterday = new Date()
  yesterday.setMonth(yesterday.getMonth())
  yesterday.setDate(yesterday.getDate() - 1)
  yesterday.setHours(yesterday.getHours())
  yesterday.setMinutes(yesterday.getMinutes() - 95)
  return yesterday
}