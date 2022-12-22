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
  get(index) {
    if (index < 0 || index > this.length) return null;
    let count = 0;
    let currNode = this.head;
    while (count !== index) {
      currNode = currNode.next;
      count++;
    }
    return currNode;
  }
  set(index, value) {
    const updateNode = this.get(index);
    if (updateNode) {
      updateNode.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return Boolean(this.push(value));
    if (index === 0) return Boolean(this.unshift(value));

    const prevNode = this.get(index - 1);
    if (prevNode) {
      const newNode = new Node(value);
      newNode.next = prevNode.next
      prevNode.next = newNode;
      this.length++;
      return true;
    }
    return false;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    const prevNode = this.get(index -1);
    const removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;
    return removedNode
  }
  reverse() {
    let currNode = this.head;
    this.head = this.tail;
    this.tail = currNode;
    let prevNode = null; 
    let nextNode;

    while (currNode) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode
      currNode = nextNode;
    }
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
List.push(100);
List.push(500);
List.push(900);
// console.log(List)
// console.log(List.get(0));
// console.log(List.get(1));
// console.log(List.get(2));
List.reverse();
console.log(List.get(0));
console.log(List.get(1));
console.log(List.get(2));
// console.log(List)