const API_URL = "https://reqres.in/api/users";

let userInfoData = [];
const userContainer = document.getElementById("user-container");
const userDetails = document.getElementById("user-clicked-info");

async function getUserInfo() {
  // First fetch the api url then convery it to JSON to 
  try {
    const data = await fetch(API_URL);
    const dataInJson = await data.json();
    userInfoData = dataInJson.data;
    generateAllCards(userInfoData)
  } catch (error) {
    console.log("There was an error", error);
    userInfoData = [];
  }
}

function createCardUI(user) {
  let cardUI = `
    <div class="card  m-4" style="width: 18rem;">
  <img src=${user.avatar} class="card-img-top" alt="...">
  <div class="card-body">
    <h1>${user.first_name} ${user.last_name}</h1>
    <p class="card-text">${user.email}</p>
  </div>
  <button class="btn btn-primary" id="${user.id}">Get Details</button>
</div>
    `;

  userContainer.innerHTML += cardUI;
}

function generateAllCards(userData = []) {
    for(let i = 0 ; i < userData.length; i++) {
        createCardUI(userData[i]);
    }
}

// Make the details cared below the others
function createDetails(user) {

  let detailsUI = `
  <div class="card text-center">
    <div class="card-header">
      <h3> Details </h3>
    </div>
    <div class="card-body">
      <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
      <h6 class="card-text"> Their email is ${user.email}</h6>
    </div>
    <div class="card-footer text-body-secondary">
      <h6>&copy Lorem ipsum dolor sit amet</h6>
    </div>
  </div>
  `;
    userDetails.innerHTML += detailsUI;

}

let detailsVisible = false;

document.addEventListener("click", function(event) {
  if (event.target.classList.contains("btn")) {
    console.log("Button clicked");
    console.log(event.target.id);
    const clickedUser = userInfoData.find((person) => person.id == event.target.id);
    // Implement a method to create the detailes card below the others.
    if (detailsVisible) {
      // Hide user details if they are currently visible
      userDetails.innerHTML = "";
      detailsVisible = false;
    } else {
      // Show user details if they are currently hidden
      createDetails(clickedUser);
      detailsVisible = true;
    }
  }
});

getUserInfo();