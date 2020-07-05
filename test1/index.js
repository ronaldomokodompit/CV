// let names = ["PERSONAL INFORMATION", "PROFESSIONAL OBJECTIVES", "POSITION", "QUALIVICATION", "AWARDS", "COMMITE MEMBERSHIP", "CONTACT ME"];


// console.log(names);


function getusername() {
    let username = document.getElementById("username").Value;
    console.log(username);
    document.getElementsByTagName('ul')[0].innerHTML = username;
}