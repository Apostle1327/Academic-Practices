// Find the Length of the Linked List.

// Space Complexity = O(n).
// Time Complexity = O(n).

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  appendNode(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  findLength() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  displayData() {
    let current = this.head;
    const result = [];

    while (current) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }
}

const list = new LinkedList();
list.appendNode(10);
list.appendNode(20);
list.appendNode(30);
list.appendNode(40);

list.displayData();
console.log(list.findLength());
