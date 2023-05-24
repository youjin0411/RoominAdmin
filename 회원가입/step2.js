// 모달 열기 버튼을 가져옵니다.
const modalButton = document.getElementById("again");

// 모달 창을 가져옵니다.
const modal = document.getElementById("myModal");

// 모달 창을 닫는 요소를 가져옵니다.
const closeBtn = document.getElementsByClassName("close")[0];

// 모달 열기 버튼 클릭 시 모달 창을 보이게 합니다.
modalButton.addEventListener("click", function() {
    modal.style.display = "block";
});

// 모달 닫기 버튼 클릭 시 모달 창을 숨깁니다.
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// 모달 외부 클릭 시 모달 창을 숨깁니다.
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

let detail1 = document.getElementById("detail1");
let detail2 = document.getElementById("detail2");
detail1.innerHTML = localStorage.getItem("name");
detail2.innerHTML = localStorage.getItem("address");

let nextbtn = document.getElementById("nextbtn2");
nextbtn.addEventListener("click", () => {
    window.location.href = "/회원가입/step3.html";
});