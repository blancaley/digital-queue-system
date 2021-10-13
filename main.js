let queue = [];
const personName = document.querySelector("#name");
let list = document.querySelector("#list");

function showQueue() {
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
    let newPerson = {
        queueNum: queue.length + 1,
        personName: personName.value
    }
    queue.push(newPerson);
    showQueue();
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