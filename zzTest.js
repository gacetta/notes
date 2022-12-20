// Create Singly Linked List & Push

class Node {
 constructor(value) {
  this.value = value;
  this.next = null;
 } 
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const newTailNode = new Node(value);
    // update previous node to point to new node
    if (this.length !== 0) this.tail.next = newTailNode;

    // update List head 
      // if no elements, push will update list.head value
    if (this.length === 0) this.head = newTailNode;

    // update List tail
    this.tail = newTailNode;

    // update List length
    this.length++;

    return newTailNode
  }
  pop() {
    // nothing in list - return undefined
    if (this.length === 0) return undefined
    
    let currNode = this.head;
    
    // edge case - 1 element
    if (this.length === 1) {
      this.head = null;
      this.length = 0;
      this.tail = null;
      return currNode
    }

    let nextNode = currNode.next;

    while(nextNode.next !== null) {
      currNode = nextNode;
      nextNode = currNode.next;
    }
    currNode.next = null;
    this.tail = currNode

    // update list length
    this.length--;

    return nextNode;
  }
  shift() {
    if (this.length === 0) return undefined;

    const currHead = this.head;
    this.head = currHead.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return currHead;
  }
  unshift(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    if (this.length === 0) this.tail = newNode;
    this.length++
    return newNode;
  }
}

const List = new SinglyLinkedList()
// List.push(10);
// List.push('banana');
// List.push(false);
// console.log(List);
// console.log(List.pop());
// console.log(List);
// console.log(List.pop());
// console.log(List);
// console.log(List.pop());
// console.log(List);
// console.log(List.pop());
// console.log(List);
// List.shift();
// console.log(List)
// List.shift();
// console.log(List)
// List.shift();
// console.log(List)
List.unshift(999);
console.log(List)

