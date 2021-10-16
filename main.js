let queue = [];
const personName = document.querySelector("#name");
const list = document.querySelector("#list");
let feedback = document.createElement("p");

showQueue();

function showQueue() {
    if (queue.length === 0) {
        feedback.innerText = "There’s currently no people standing in line.";
        personName.insertAdjacentElement("afterend", feedback);
    } else {
        feedback.remove();
    }
    
    //Clear displayed list
    while(list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }

    queue.forEach(element => {
        let personInList = document.createElement("li");
        personInList.innerText = element.personName;
        list.appendChild(personInList);
    });
}

function add() {
    if (personName.value.trim !== "") {
        let newPerson = {
            queueNum: queue.length + 1,
            personName: personName.value
        } 
        queue.push(newPerson);
        personName.value = "";
        showQueue();
    }
}

function fastTrack() {
    let newPerson = {
        queueNum: queue.length + 1,
        personName: personName.value
    }
    queue.unshift(newPerson);
    showQueue();
}

function checkIn() {
    queue.shift();
    showQueue();
}