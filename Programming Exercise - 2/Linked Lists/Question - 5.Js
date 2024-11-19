// Remove an element chosen by the user, from the Linked List.

// Space Complexity = O(n).
// Space Complexity = O(n).

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

  removeElement(element) {
    if (!this.head) {
      return;
    }

    if (this.head.data === element) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== element) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
    }
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

list.removeElement(20);

list.displayData();
