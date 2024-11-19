// Reverse the data inserted in the Linked list.

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

  reverseData() {
    let previous = null;
    let current = this.head;
    let next = null;

    while (current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
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

list.reverseData();
list.displayData();
