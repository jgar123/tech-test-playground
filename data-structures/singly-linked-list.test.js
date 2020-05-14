/* global expect, test, describe */

const linkedList = require('./singly-linked-list')

const testLinkedList = new linkedList.SinglyLinkedList()

testLinkedList.add('foo')
testLinkedList.add('bar')
testLinkedList.add('hello')
testLinkedList.add('world')
testLinkedList.add('bon')
testLinkedList.add('jour')
testLinkedList.add('amigo')

describe('Single linked list class methods', () => {
  test('Add method should insert a new node with the previous node having reference to it', () => {
    expect(testLinkedList.length).toBe(7)
    expect(testLinkedList.searchFor('bon').data).toBe('bon')
  })
  test('Remove method should remove node from linked list', () => {
    testLinkedList.remove('world')
    expect(testLinkedList.length).toBe(6)
    expect(testLinkedList.searchFor('world')).toBe(undefined)
    expect(testLinkedList.searchFor('hello').next).toStrictEqual(testLinkedList.searchFor('bon'))
  })
})