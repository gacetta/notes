// // Create Singly Linked List & Push

// class Node {
//  constructor(value) {
//   this.value = value;
//   this.next = null;
//  } 
// }

// class SinglyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   push(value) {
//     const newTailNode = new Node(value);
//     // update previous node to point to new node
//     if (this.length !== 0) this.tail.next = newTailNode;

//     // update List head 
//       // if no elements, push will update list.head value
//     if (this.length === 0) this.head = newTailNode;

//     // update List tail
//     this.tail = newTailNode;

//     // update List length
//     this.length++;

//     return newTailNode
//   }
//   pop() {
//     // nothing in list - return undefined
//     if (this.length === 0) return undefined
    
//     let currNode = this.head;
    
//     // edge case - 1 element
//     if (this.length === 1) {
//       this.head = null;
//       this.length = 0;
//       this.tail = null;
//       return currNode
//     }

//     let nextNode = currNode.next;

//     while(nextNode.next !== null) {
//       currNode = nextNode;
//       nextNode = currNode.next;
//     }
//     currNode.next = null;
//     this.tail = currNode

//     // update list length
//     this.length--;

//     return nextNode;
//   }
//   shift() {
//     if (this.length === 0) return undefined;

//     const currHead = this.head;
//     this.head = currHead.next;
//     this.length--;
//     if (this.length === 0) this.tail = null;
//     return currHead;
//   }
//   unshift(value) {
//     const newNode = new Node(value);
//     newNode.next = this.head;
//     this.head = newNode;
//     if (this.length === 0) this.tail = newNode;
//     this.length++
//     return newNode;
//   }
//   get(index) {
//     if (index < 0 || index > this.length) return null;
//     let count = 0;
//     let currNode = this.head;
//     while (count !== index) {
//       currNode = currNode.next;
//       count++;
//     }
//     return currNode;
//   }
//   set(index, value) {
//     const updateNode = this.get(index);
//     if (updateNode) {
//       updateNode.value = value;
//       return true;
//     }
//     return false;
//   }
//   insert(index, value) {
//     if (index < 0 || index > this.length) return false;
//     if (index === this.length) return Boolean(this.push(value));
//     if (index === 0) return Boolean(this.unshift(value));

//     const prevNode = this.get(index - 1);
//     if (prevNode) {
//       const newNode = new Node(value);
//       newNode.next = prevNode.next
//       prevNode.next = newNode;
//       this.length++;
//       return true;
//     }
//     return false;
//   }
//   remove(index) {
//     if (index < 0 || index >= this.length) return undefined;
//     if (index === this.length - 1) return this.pop();
//     if (index === 0) return this.shift();

//     const prevNode = this.get(index -1);
//     const removedNode = prevNode.next;
//     prevNode.next = removedNode.next;
//     this.length--;
//     return removedNode
//   }
//   reverse() {
//     let currNode = this.head;
//     this.head = this.tail;
//     this.tail = currNode;
//     let prevNode = null; 
//     let nextNode;

//     while (currNode) {
//       nextNode = currNode.next;
//       currNode.next = prevNode;
//       prevNode = currNode
//       currNode = nextNode;
//     }
//   }
// }

// // const List = new SinglyLinkedList()
// // List.push(10);
// // List.push('banana');
// // List.push(false);
// // console.log(List);
// // console.log(List.pop());
// // console.log(List);
// // console.log(List.pop());
// // console.log(List);
// // console.log(List.pop());
// // console.log(List);
// // console.log(List.pop());
// // console.log(List);
// // List.shift();
// // console.log(List)
// // List.shift();
// // console.log(List)
// // List.shift();
// // console.log(List)
// // List.push(100);
// // List.push(500);
// // List.push(900);
// // console.log(List)
// // console.log(List.get(0));
// // console.log(List.get(1));
// // console.log(List.get(2));
// // List.reverse();
// // console.log(List.get(0));
// // console.log(List.get(1));
// // console.log(List.get(2));
// // console.log(List)


//-----------------------
// Doubly Linked Lists
//-----------------------
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
    } else {
      const lastNode = this.tail;
      lastNode.next = newNode;
      newNode.prev = lastNode;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.tail = newNode;
      // console.log('adding to empty DLL.  setting tail to new Node', this.tail)
    } else {
      // console.log('adding to existing DLL.')
      const firstNode = this.head;
      // console.log('firstNode: ', firstNode)
      firstNode.prev = newNode;
      // console.log('firstNode.prev: ', firstNode.prev)
      newNode.next = firstNode;
      // console.log('newNode.next: ', firstNode)
    }
    this.head = newNode;
    // console.log('setting head to new Node', this.head)
    this.length++;
    // console.log('incrementing length: ', this.length)
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    const removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const newTail = removedNode.prev;
      this.tail = newTail
      newTail.next = null;
      removedNode.prev = null;
    }
    this.length--;
    return removedNode
  }
  shift() {
    if (this.length === 0) return undefined;
    const removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const newHead = removedNode.next;
      this.head = newHead
      newHead.prev = null;
      removedNode.next = null;
    }
    this.length--;
    return removedNode
  }
  
  get(index) {
    if (index < 0 || index > this.length) return null;
    let count;
    let currNode;
    const mid = Math.floor(this.length / 2);
    const startFromHead = ((this.length - index) >= mid);
    console.log('mid: ', mid)
    console.log('startFromHead: ', startFromHead)
    if (startFromHead) {
      count = 0;
      currNode = this.head;
      while (count !== index) {
        console.log(count)
        currNode = currNode.next;
        count++;
      }
    } else {
      count = this.length - 1;
      currNode = this.tail;
      while (count !== index) {
        console.log(count)
        currNode = currNode.prev;
        count--;
      }
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
    if (index === 0) return Boolean(this.unshift(value));
    if (index === this.length) return Boolean(this.push(value));
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;
    const newNode = new Node(value);
    newNode.prev = prevNode;
    newNode.next = nextNode;
    prevNode.next = newNode;
    nextNode.prev - newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);
    const beforeNode = removedNode.prev;
    const afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }
}

// const DLL = new DoublyLinkedList();
// console.log(DLL);


var doublyLinkedList = new DoublyLinkedList;
console.log(doublyLinkedList.unshift(5)); // doublyLinkedList
console.log(doublyLinkedList.length); // 1
console.log(doublyLinkedList.head.val); // 5
console.log(doublyLinkedList.tail.val); // 5
console.log(doublyLinkedList.unshift(10)); doublyLinkedList 
console.log(doublyLinkedList.length); // 2
console.log(doublyLinkedList.head.val); // 10
console.log(doublyLinkedList.head.next.val); // 5
console.log(doublyLinkedList.tail.val); // 5
console.log(doublyLinkedList.unshift(15)); doublyLinkedList
console.log(doublyLinkedList.length); // 3
console.log(doublyLinkedList.head.val); // 15
console.log(doublyLinkedList.tail.val); // 5
console.log(doublyLinkedList.head.next.next.val); // 5