const autoHyphen2 = (target) => {
    target.value = target.value
        .replace(/[^0-9]/g, '')
        .replace(/^(\d{0,3})(\d{0,2})(\d{0,5})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
}

let nextbtn = document.getElementById("nextbtn2");
nextbtn.addEventListener("click", () => {
    const detail2 = document.getElementById("detail12");
    if (detail2.value.length === 10) {
        window.location.href = "/회원가입/step4.html";
    } else {
        alert("10글자로 입력하세요.");
    }
});