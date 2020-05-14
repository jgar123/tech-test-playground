class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class SinglyLinkedList {

  constructor() {
    this.head = null
    this.length = 0
  }

  add(data) {
    const node = new Node(data)
    if (this.head === null) {
      this.head = node
    } else {
      let currentNode = this.head
      while (currentNode.next !== null) {
        currentNode = currentNode.next
      }
      currentNode.next = node
    }
    this.length++
  }

  remove(nodeData) {
    let currentNode = this.head
    let previousNode
    if (currentNode.data === nodeData) {
      this.head = currentNode.next
      return 0
    } else {
      while (currentNode.data !== nodeData) {
        previousNode = currentNode
        currentNode = currentNode.next
        if (currentNode === null) {
          return undefined
        }
      }

      previousNode.next = currentNode.next
    }

    this.length--
    return 0
  }

  searchFor(nodeData) {

    if (this.head.data === nodeData) {
      return this.head
    } else {
      let currentNode = this.head
      while (currentNode.data !== nodeData) {
        currentNode = currentNode.next
        if (!currentNode) {
          return undefined
        }
      } 
      return currentNode
    }

  } 

}

module.exports = { SinglyLinkedList }