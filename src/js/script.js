

let suggestion = [
    "Crowne Plaza",
    "Emerald Bay Inn",
    "Hotel Bliss",
    "University Inn",
    "The New View",
    "Ramada Limited & Suites",
    "Sunset Lodge",
    "Hotel Elite",
    "Lake Place Inn",
    "Beacon Motel",
    "Comfort B&B",
    "The Fresco Hotel",
    "Motel On Main",
    "Holly House",
    "High Desert Inn",
    "Four Seasons",
    "Budget Suites",
    "American Inn",
    "Relax Inn",
    "Golden Cherry Motel",
    "Sapphires Hotel",
    "The Glory Hotel",
    "Friendship Inn",
    "Time Motel",
    "The Breakers"
    ]
    
    const input = document.querySelector('.search__input');
    const suggBox = document.querySelector('.autocom-box ');
    
    //if user press any key and release
    input.onkeyup = e => {
       let userData = e.target.value;
       let emptyArr = [];

       if(userData) {
           emptyArr = suggestion.filter( data => data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()));

            emptyArr = emptyArr.map( data => data =`<li class="autocom-box__item">${data}</li>`);

            suggBox.classList.add('active');

            showSuggestions(emptyArr);

            let allList = document.querySelectorAll('.autocom-box__item');

            allList.forEach(item => item.setAttribute('onclick', 'select(this)'));
       }
        else {
           suggBox.classList.remove('active');
       }
    }

    function select(element) {
        let selectUserData = element.textContent;
        input.value = selectUserData;
        suggBox.classList.remove('active');
        input.focus();
    }


    function showSuggestions(list) {
        let listData;
        let userValue;

        // if nothing matches show list item with input value
        if(!list.length) {
            userValue = input.value;
            listData = `<li class="autocom-box__item wrong">${userValue}</li>`;
        }
        else {
            listData = list.join(""); 
        }

        suggBox.innerHTML = listData;
    }