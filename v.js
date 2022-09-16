// var d = new Date();
// var year = d.getFullYear(),
//   month = d.getMonth(),
//   date = d.getDate(),
//   day = d.getDay();

// switch (day) {
//   case 0:
//     var dd = "일";
//     break;
//   case 1:
//     var dd = "월";
//     break;
//   case 2:
//     var dd = "화";
//     break;
//   case 3:
//     var dd = "수";
//     break;
//   case 4:
//     var dd = "목";
//     break;
//   case 5:
//     var dd = "금";
//     break;
//   case 6:
//     var dd = "토";
//     break;
//   default:
//     break;
// }

// document.write(year + "년");
// document.write(month + 1 + "월 ");
// document.write(date + "일 ");
// document.write(dd + "요일");
function calendar(new_year, new_month) {
  var d = new Date(new_year, new_month - 1, 1),
    d_length = 32 - new Date(new_year, new_month, 32).getDate(),
    year = d.getFullYear(),
    month = d.getMonth(),
    date = d.getDate(),
    day = d.getDay();

  var caption_year = document.querySelector(".year");
  var caption_month = document.querySelector(".month");
  var start_day = document.querySelectorAll("tr td");

  for (var i = 0; i < start_day.length; i++) {
    start_day[i].innerHTML = "&nbsp;";
  }
  for (var i = day; i < day + d_length; i++) {
    start_day[i].innerHTML = date;
    date++;
  }

  caption_year.innerHTML = year;
  caption_month.innerHTML = month + 1;
}
(function () {
  var prev = document.getElementById("prev"),
    next = document.getElementById("next"),
    year = new Date().getFullYear(),
    month = new Date().getMonth() + 1;

  calendar(year, month);

  prev.onclick = function () {
    calendar(year, --month);
    console.log(month);
  };
  next.onclick = function () {
    calendar(year, ++month);
    console.log(month);
  };
})();
