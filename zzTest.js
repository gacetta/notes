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


// //-----------------------
// // Doubly Linked Lists
// //-----------------------
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DoublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   push(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.head = newNode;
//     } else {
//       const lastNode = this.tail;
//       lastNode.next = newNode;
//       newNode.prev = lastNode;
//     }
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }
//   unshift(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.tail = newNode;
//       // console.log('adding to empty DLL.  setting tail to new Node', this.tail)
//     } else {
//       // console.log('adding to existing DLL.')
//       const firstNode = this.head;
//       // console.log('firstNode: ', firstNode)
//       firstNode.prev = newNode;
//       // console.log('firstNode.prev: ', firstNode.prev)
//       newNode.next = firstNode;
//       // console.log('newNode.next: ', firstNode)
//     }
//     this.head = newNode;
//     // console.log('setting head to new Node', this.head)
//     this.length++;
//     // console.log('incrementing length: ', this.length)
//     return this;
//   }
//   pop() {
//     if (this.length === 0) return undefined;
//     const removedNode = this.tail;
//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       const newTail = removedNode.prev;
//       this.tail = newTail
//       newTail.next = null;
//       removedNode.prev = null;
//     }
//     this.length--;
//     return removedNode
//   }
//   shift() {
//     if (this.length === 0) return undefined;
//     const removedNode = this.head;
//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       const newHead = removedNode.next;
//       this.head = newHead
//       newHead.prev = null;
//       removedNode.next = null;
//     }
//     this.length--;
//     return removedNode
//   }
  
//   get(index) {
//     if (index < 0 || index > this.length) return null;
//     let count;
//     let currNode;
//     const mid = Math.floor(this.length / 2);
//     const startFromHead = ((this.length - index) >= mid);
//     console.log('mid: ', mid)
//     console.log('startFromHead: ', startFromHead)
//     if (startFromHead) {
//       count = 0;
//       currNode = this.head;
//       while (count !== index) {
//         console.log(count)
//         currNode = currNode.next;
//         count++;
//       }
//     } else {
//       count = this.length - 1;
//       currNode = this.tail;
//       while (count !== index) {
//         console.log(count)
//         currNode = currNode.prev;
//         count--;
//       }
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
//     if (index === 0) return Boolean(this.unshift(value));
//     if (index === this.length) return Boolean(this.push(value));
//     const prevNode = this.get(index - 1);
//     const nextNode = prevNode.next;
//     const newNode = new Node(value);
//     newNode.prev = prevNode;
//     newNode.next = nextNode;
//     prevNode.next = newNode;
//     nextNode.prev - newNode;
//     this.length++;
//     return true;
//   }
//   remove(index) {
//     if (index < 0 || index >= this.length) return false;
//     if (index === 0) return this.shift();
//     if (index === this.length - 1) return this.pop();

//     const removedNode = this.get(index);
//     const beforeNode = removedNode.prev;
//     const afterNode = removedNode.next;

//     beforeNode.next = afterNode;
//     afterNode.prev = beforeNode;

//     removedNode.next = null;
//     removedNode.prev = null;

//     this.length--;
//     return removedNode;
//   }
// }

// // const DLL = new DoublyLinkedList();
// // console.log(DLL);


// var doublyLinkedList = new DoublyLinkedList;
// console.log(doublyLinkedList.unshift(5)); // doublyLinkedList
// console.log(doublyLinkedList.length); // 1
// console.log(doublyLinkedList.head.val); // 5
// console.log(doublyLinkedList.tail.val); // 5
// console.log(doublyLinkedList.unshift(10)); doublyLinkedList 
// console.log(doublyLinkedList.length); // 2
// console.log(doublyLinkedList.head.val); // 10
// console.log(doublyLinkedList.head.next.val); // 5
// console.log(doublyLinkedList.tail.val); // 5
// console.log(doublyLinkedList.unshift(15)); doublyLinkedList
// console.log(doublyLinkedList.length); // 3
// console.log(doublyLinkedList.head.val); // 15
// console.log(doublyLinkedList.tail.val); // 5
// console.log(doublyLinkedList.head.next.next.val); // 5

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          else current = current.left;
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          else current = current.right;
        }
      }
    }
  }
  find(value) {
    if (!this.root) return false;
    else {
      let current = this.root;
      let found = false;
      while (current && !found) {
        if (value === current.value) found = true;
        else if (value < current.value) current = current.left;
        else if (value > current.value) current = current.right;
      }
      if (!found) return undefined;
      return current;
    }
  }

  // // insert recursively
  // insert(value) {
  //   const newNode = new Node(value);
  //   if (!this.root) {
  //     this.root = newNode;
  //     return this;
  //   }
  //   recursiveInsert(this.root);
  //   return this;

  //   // input: parent node
  //   // output: none
  //   // side-effects: modifies BST
  //   function recursiveInsert(node) {
  //     console.log(node)
  //     console.log(value)
  //     if (node.value === value) console.log('VALUE ALREADY EXISTS');
  //     else if (node.value > value) {
  //       if (!node.left) node.left = newNode;
  //       else recursiveInsert(node.left);
  //     } else {
  //       if (!node.right) node.right = newNode;
  //       else recursiveInsert(node.right)
  //     }
  //   }
  // }
}

// const Tree = new BST();
// Tree.insert(100)
// Tree.insert(500)
// Tree.insert(50)
// Tree.insert(51)
// console.log(Tree.insert(101));
// console.log(Tree.find(100));
// console.log(Tree.find(102));



// const addItemToCart = (...items) => {
//   items.forEach((item) => {
//     user.cart.push(item);
//     console.log(`added ${item} to cart`)
//   })
//   return user.cart;
// }

// const addTax = (percent) => {
//   const taxPercent = (percent / 100) + 1;
//   // get the price of an item
//   // multiply by percent
//   // update item
//   return user.cart.map((item) => {
//     item.price *= taxPercent;
//     return item;
//   })
// }

// const buyItem = (itemName) => {
//   const itemIndex = user.cart.findIndex((element) => {
//     console.log(element);
//     return element.name = itemName;
//   })

//   if (itemIndex < 0) return console.log('item not in cart');

//   const boughtItem = user.cart[itemIndex];
//   user.cart.splice(itemIndex, 1);
//   user.purchases.push(boughtItem);
//   return boughtItem;
// }

// const emptyCart = () => {
//   while (user.cart.length > 0) user.cart.pop();
//   return user.cart;
// }

// const purchaseItem = (item) => {
//   addItemToCart(item);
//   addTax(3);
//   buyItem(item.name);
//   emptyCart();
// }

// const user = {
//   name: 'Kim',
//   active: true,
//   cart: [],
//   purchases: []
// }

// console.log(user)
// // addItemToCart({
// //   name: 'Toy Boat',
// //   price: 10.99
// // })
// // // console.log(user.cart)
// // addItemToCart({
// //   name: 'Godzilla',
// //   price: 29.99
// // }, {
// //   name: 'Lego Millenium Falcon',
// //   price: 300
// // })
// // // console.log(user.cart)
// // addTax(30);
// // console.log(user.cart)
// // buyItem('Toy Boat')
// // console.log(user.cart)
// // emptyCart();

// console.log(user.cart)
// console.log(user.purchases)
// purchaseItem({
//   name: 'Toy Boat',
//   price: 10.99
// });
// console.log(user.cart)
// console.log(user.purchases)

const counter =  {
  count: 0,
  increment() {
    this.count++;
    return this.count;
  },
  incrementByVal(val) {
    this.count += val;
    return this.count;
  },
  incrementByVals(...vals) {
    this.count += vals.reduce((acc, curr) => acc + curr);
    return this.count;
  }
  // incrementFlex(vals) {
  //   const valsArr = Array.isArray(vals) ? [...vals] : [...Array.prototype.slice.call(arguments)]
  //   this.count += valsArr.reduce((acc, curr) => acc + curr);
  //   return this.count;
  // }
}

const counterTwo = {
  count: 100
}

console.log('count1: ', counter.count);
console.log('count2: ', counterTwo.count);
counter.incrementByVals(10, 11, 12, 13);
counter.incrementByVals.call(counterTwo, 400, 300, 200)
console.log('count1: ', counter.count);
console.log('count2: ', counterTwo.count);
const counterTwoIncrement = counter.incrementByVal.bind(counterTwo, 5);




function getName() {
  return this.name;
}

const plasticReed = {
  name: 'Michael',
  getName
}

const goodReed = {
  name: 'Hideaki'
}

console.log(plasticReed.getName.call(goodReed));
const reedFunc = plasticReed.getName.bind(goodReed, 5);
console.log(reedFunc());