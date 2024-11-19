// Create a Linked List and Append Nodes in it.

// Space Complexity = O(n).
// Time Complexity = O(n).

class linkedList {
  constructor(data) {
    this.size = 1;
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
  }

  appendNode(nodeData) {
    let newNode = {
      value: nodeData,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.size += 1;
  }

  display() {
    let current = this.head;
    const result = [];

    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }
}

let list = new linkedList(10);
list.appendNode(20);
list.appendNode(30);
list.display();
