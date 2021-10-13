let queue = [];
const personName = document.querySelector("#name");
let list = document.querySelector("#list");

function showQueue() {
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