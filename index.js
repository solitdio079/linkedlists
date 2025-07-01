import createLinkedList from "./linkedlist.js";

// example uses class syntax - adjust as necessary
const list = createLinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString())