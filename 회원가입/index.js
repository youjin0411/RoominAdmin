function initAutocomplete() {
    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);
    let name = "";
    let formatted_address = "";

    searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();

        if (places.length === 0) {
            return;
        }

        places.forEach((place) => {
            console.log(place.formatted_address);
            formatted_address = place.formatted_address;
            console.log(place.name);
            name = place.name;
        });

        console.log(places);
    });

    // 모달 창을 가져옵니다.
    const modal = document.getElementById("myModal");

    // 버튼 클릭 이벤트를 처리하는 함수를 정의합니다.
    const btnClickHandler = () => {
        // alert(formatted_address + name);
        localStorage.setItem("address", formatted_address);
        localStorage.setItem("name", name);
        const btn = document.getElementById("searchadress");
        modal.style.display = "none";
    };

    // 버튼이 로드될 때까지 대기한 다음 클릭 이벤트를 추가합니다.
    const waitBtnLoad = setInterval(() => {
        const btn = document.getElementById("searchadress");
        if (btn) {
            clearInterval(waitBtnLoad);
            btn.addEventListener("click", btnClickHandler);
        }
    }, 100);
}

window.initAutocomplete = initAutocomplete;