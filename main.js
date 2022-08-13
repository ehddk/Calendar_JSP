let target = document.querySelector("#dynamic");

function randomString() {
  let stringArr = [
    "안녕하세요",
    "반갑습니다",
    "메인 페이지입니다",
    "개발자를 희망합니다",
    "아자아자!",
  ];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)]; //4미만의 숫자
  let selectStringArr = selectString.split(""); //해당문자열을 이 기준을 이용해서 배열로 분리시켜라.
  return selectStringArr;
}

//타이밍 리셋
function resetTyping() {
  target.textContent = "";
  dynamic(randomString());
}

//한글자씩 텍스트 출력 함수
function dynamic(randomArr) {
  console.log(randomArr);
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 1000);
  }
}
dynamic(randomString());
console.log(selectString);
console.log(selectStringArr);

function blink() {
  //커서 깜빡임 효과
  target.classList.toggle("active");
}
setInterval(blink, 1000);
