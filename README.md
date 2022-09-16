# Calendar_JSP

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

//코드 영역을 분리하기 위해 바깥쪽에서 익명함수로 감싼 것임.

꼭 이렇게 할 필요는 없지만 ? 
자바스크립트에는 c언어랑 달리 main 함수가 따로 없기 때문에 이렇게 함수로 정의해놓으면
변수가 전역으로 선언되지 않기때문에! 메모리 관리에도 효율적이다.



#git commit 시 발생

1] new respority에 add y.html 하니까 다음과 같은 오류 나옴...
fatal: pathspec 'v.js' did not match any files
fatal: pathspec 'y.html' did not match any files

근데 알고보니까 내가 한 파일안에 html,js,css를 묶어놔서 오류난거 
하나씩 다 흩어놓으니까 add됨.

그럼 이렇게 뜸.
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   ca.css
        new file:   v.js
        new file:   y.html

2] $ git commit -m "first commit" 입력
  [master c00f56d] first commit
 3 files changed, 192 insertions(+)
 create mode 100644 ca.css
 create mode 100644 v.js
 create mode 100644 y.html

3] 
$ git remote add origin git@github.com:ehddk/Calendar_JSP.git입력
**error: remote origin already exists.**
또 오류,...
알고보니 원격 저장소와의 연결이 되어 있다고 하니 기존의 연결을 끊고 새로 올리고 싶은 곳에 소스코드를 올리면 됨.

$ git remote remove origin
$ git remote add origin git@github.com:ehddk/Calendar_JSP.git
$ git remote -v
  origin  git@github.com:ehddk/Calendar_JSP.git (fetch)
  origin  git@github.com:ehddk/Calendar_JSP.git (push)
오류 해결!!

4] $git push origin master
   * [new branch]      master -> master 나오면 성공!
