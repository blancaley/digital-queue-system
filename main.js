let queue = [];
const personName = document.querySelector("#name");

function add() {
    let newPerson = {
    queueNum: queue.length + 1,
    person: personName.value
    }
    queue.push(newPerson);
}