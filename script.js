//your code here
const url = "https://randomuser.me/api/"
// const fetchAPI = async fetch(url)

let response=""
let requiredData = ""
let ageButton =  document.getElementById("age-button")
const emailButton = document.getElementById("email-button")
const phoneButton = document.getElementById("phone-button")

const ageDisplay = ()=>{
    // clear()
    document.getElementById("para").innerHTML = ""
    document.getElementById("para").innerHTML = `Age is ${requiredData.dob.age}`
}

const emailDisplay = ()=>{
    document.getElementById("para").innerHTML = ""
    document.getElementById("para").innerHTML = `Email is ${requiredData.email}`
}

const phoneDisplay = ()=>{
    document.getElementById("para").innerHTML = ""
    document.getElementById("para").innerHTML = `phone is ${requiredData.phone}`
}

const getApi = async()=>{
    response = await fetch(url)
    data = await response.json()
    // console.log(data.results[0])
    requiredData = data.results[0]
    console.log(requiredData)



ageButton.onclick=ageDisplay
emailButton.onclick=emailDisplay
phoneButton.onclick=phoneDisplay

// let fullName = requiredData['name'].first + requiredData['name'].last





} 
getApi()


//making another api call
const getUserButton = document.getElementById("getUser")
let Newresponse=""
let Newdata=""
let requiredNewData=""
const getNewData = async()=>{
    Newresponse = await fetch("https://randomuser.me/api/")
    Newdata = await Newresponse.json()
    requiredNewData = Newdata.results[0]
    console.log(requiredNewData, 'lowdaaaaaaa')
    let fullName=requiredNewData['name'].first + requiredNewData['name'].last
    console.log(fullName);

    const nameDisplay = ()=>{
        document.getElementById("para").innerHTML = ""
        document.getElementById("para").innerHTML = `Name is ${fullName}`
    }
    nameDisplay()



    const photoDisplay = () =>{
        var img = document.createElement('img')
        img.src=`${requiredNewData['picture'].large}`
        // document.getElementByTagName('img').className="newClass"
        console.log(img.src)
        document.getElementById("section").appendChild(img)
    }
    photoDisplay()


    //display their age and email

    const ageDisplay = ()=>{
        document.getElementById("para").innerHTML = ""
        document.getElementById("para").innerHTML = `Age is ${requiredNewData.dob.age}`
    }
    ageButton.onclick=ageDisplay
}




