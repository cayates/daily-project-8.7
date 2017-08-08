const main = document.body.querySelector("main");
// const mainDivContainer = document.querySelector("mainDivContainer");

// these are all of my fetches that are being used to pull from github

fetch("https://api.github.com/users/cayates")
.then(loadDatabase)
.then(headerTitleSection)
.then(basicSection)
.then(theStory)
.then(image)

let vCard = []

function loadDatabase(data) {
	return data.json();
}

//this will be my main div that i am appending each subdiv to in order to flex correctly with css

// function mainDivsForCSS (vCard){
// const div = document.createElement("div");
// div.className = "mainDiv"
// }

// i am using this to create a div within the body that will be my overall header

function headerTitleSection (vCard){
    const div = document.createElement("div");
    div.className = "header";
    div.innerHTML = `<p>${vCard.name}</p>`;
    main.appendChild(div);
    return vCard;
}



// i am using this to create a div within the body that will be my basics section

function basicSection (vCard){
    const div = document.createElement("div");
    div.className = "basicsProfile";
    div.innerHTML = `
    <h2>The Basics</h2>
        <ul>
            <li>Name: <span>${vCard.name}</span></li>
            <li>Github URL: <span>${vCard.url}</span></li>
            <li>Email: <span>${vCard.email}</span></li>
            <li>Company: <span>${vCard.company}</span></li>
        </ul>
    `;
    main.appendChild(div);
    return vCard;
}



// i am using this to create a div within the body that will be my story section

function theStory(vCard){
    const div = document.createElement("div");
    div.className = "storySection";
    div.innerHTML = `
    <h2>The Story</h2>
    <p>${vCard.bio}</p>
    `;
    main.appendChild(div);
    return vCard;
}

// i am using this to create a div within the body that will be my image section

function image(vCard){
    const div = document.createElement("div");
    div.className = "profilePic";
    div.innerHTML = `
    <img src = "${vCard.avatar_url}"
    >`;
    main.appendChild(div);
    return vCard;
}




