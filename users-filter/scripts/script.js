
let allUsers = [];
let filteredUsers = [];
let filteredUsersCount = 0;
let noFilteredText, searchButton, searchInput, listDiv;
let maleCount, femaleCount, ageSum, ageAverage;

window.addEventListener('load', start);

function start(){
    console.log("ready");

    noFilteredText = document.getElementById("no-filtered-text");
    searchButton = document.getElementById("search-button");
    searchInput = document.getElementById("search-input");
    listDiv = document.getElementById("list-div");
    maleCount = document.getElementById("male-gender");
    femaleCount = document.getElementById("female-gender");
    ageSum = document.getElementById("age-sum");
    ageAverage = document.getElementById("average-of-ages");

    searchInput.addEventListener('keyup', checkTypedContent);
    searchButton.addEventListener('click',clickAction);

    fetchUsers();
    render();
}

async function fetchUsers(){
    let response = await fetch("https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo")
    let usersJson = await response.json();
    allUsers = usersJson.results.map(user=>{
        return {username: user.name.first + " " + user.name.last,
                picture: user.picture.thumbnail,
                age: user.dob.age,
                gender: user.gender
            };
    });
}

function checkTypedContent(event){
    if (event.keyCode == 13 && event.target.value.toString() !== "")
        searchCommand(event.target.value);
    
    render();
}

function clickAction(){
    searchCommand(searchInput.value);
    render();
}

function searchCommand(text){
    filteredUsers = allUsers.filter(user=>{
        return user.username.toLowerCase().includes(text.toLowerCase(), 0);
    });
}

function render(){
    renderMainLabel();
    renderButtonStatus();
    renderFilteredPerson();    
    renderFilteredStats();  
}

function renderMainLabel(){
    if(filteredUsers ===  null || filteredUsers.length===0)
        noFilteredText.textContent = "No filtered users: nothing to show";
    else
        noFilteredText.textContent = "";
}

function renderButtonStatus(){
        searchButton.disabled = (searchInput.value == '' || searchInput.value == null);
}

function renderFilteredPerson(){
    var head = `<div id=inner>
                <h3>${filteredUsers.length} users found.
                </h3>
              </div>`;
    var list="";
    console.log(filteredUsers);
    filteredUsers.forEach(user=>{
        list+=`<div id="inner">
            <img class="circle responsive-img" src="${user.picture}">
            <label>${user.username}", "${user.age} yrs.</label>
            </div>`;
    });

    listDiv.innerHTML = head + list;
}

function renderFilteredStats(){

    var totalAge = filteredUsers.reduce((acc, user)=>acc + user.age, 0);

    maleCount.innerHTML = `<label>
                    Male: ${filteredUsers.filter(user=>user.gender === 'male').length}
                </label>`;
    femaleCount.innerHTML = `<label>
                    Female: ${filteredUsers.filter(user=>user.gender === 'female').length}
                </label>`;
    ageSum.innerHTML = `<label>
                Total age sum: ${totalAge}
            </label>`;

    ageAverage.innerHTML = `<label>
                    Average sum: ${totalAge/filteredUsers.length ?? 0}
                  </label>`;
}
