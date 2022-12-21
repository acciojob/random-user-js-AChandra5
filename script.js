//your code here
const url = "https://randomuser.me/api/"

// let response=""
let requiredUser = {}
const ageButton =  document.querySelector('[data-attr = "age"]')
const emailButton = document.querySelector('[data-attr = "email"]')
const phoneButton = document.querySelector('[data-attr = "phone"]')
const getUser = document.querySelector("#getUser")
let Username = document.querySelector("#name")
let image = document.querySelector(".profile-pic")
// let info = document.querySelector("#getUser")
let additionalInfo = document.querySelector(".additionalInfo")

const getApi = async()=>{
    try{
    const response = await fetch(url)
    const data = await response.json()
    requiredUser = data.results[0]
    console.log(requiredUser)
    
} catch(error){
    alert(error);
    console.log(error)
}
}
// getApi()

const photoNameDisplay = async() =>{
    await getApi();
    Username.textContent = `Name: ${requiredUser.name.title} ${requiredUser.name.first} ${requiredUser.name.last}`
    image.src = requiredUser.picture.large
    additionalInfo.textContent=""
}

// photoNameDisplay()

//writing functions for items to be displayed.

function getAdditionalInfo(e) {
    const att = e.target.getAttribute("data-attr")
    if (att == "age") {
        additionalInfo.textContent = requiredUser.dob.age
    } else if (att == "phone") {
        additionalInfo.textContent = requiredUser.phone
    } else if (att == "email") {
        additionalInfo.textContent = requiredUser.email
    }
}
photoNameDisplay()

ageButton.onclick= getAdditionalInfo
emailButton.onclick = getAdditionalInfo
phoneButton.onclick = getAdditionalInfo
getUser.onclick = photoNameDisplay










