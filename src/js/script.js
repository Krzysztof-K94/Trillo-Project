

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
           emptyArr = suggestion.filter( data => {
               return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
           });

           emptyArr = emptyArr.map( data => {
                return data = `<li class="autocom-box__item">${data}</li>`;
            });

            suggBox.classList.add('active');
       }
       else {
           suggBox.classList.remove('active');
       }
       
       console.log(e.target.value)
       showSuggestions(emptyArr);
    }


    function showSuggestions(list) {
        let listData;
        let userValue;

        if(!list.length) {
            userValue = input.value;
            listData = `<li class="autocom-box__item">${userValue}</li>`;
        }
        else {
            listData = list.join("");
            console.log(listData)
        }

        suggBox.innerHTML = listData;
    }