function initAutocomplete() {
    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);

    // 장소가 선택되었을 때 이벤트 리스너를 추가합니다.
    searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();

        if (places.length === 0) {
            return;
        }

        places.forEach((place) => {
            console.log(place.formatted_address);
            console.log(place.name);
        });

        console.log(places);
    });
}

window.initAutocomplete = initAutocomplete;