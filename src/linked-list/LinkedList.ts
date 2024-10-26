import {
  LinkedListInterface,
  linkedListValue,
  ListNodeInterface,
} from '../types/linkedList';
import ListNode from './ListNode';

export default class LinkedList implements LinkedListInterface {
  head: ListNodeInterface | null = null;

  append(...values: linkedListValue[]) {
    let lastNode: ListNodeInterface | null = null;
    for (const value of values) {
      if (this.head === null) {
        this.head = new ListNode(value);
      } else {
        if (lastNode !== null) {
          lastNode.next = new ListNode(value);
          lastNode = lastNode.next;
        } else {
          let current = this.head;

          while (current.next !== null) {
            current = current.next;
          }

          current.next = new ListNode(value);
          lastNode = current.next;
        }
      }
    }
  }

  appendList(...values: Array<linkedListValue[]>) {
    let lastNode: ListNodeInterface | null = null;
    for (const value of values.flat()) {
      if (this.head === null) {
        this.head = new ListNode(value);
      } else {
        if (lastNode !== null) {
          lastNode.next = new ListNode(value);
          lastNode = lastNode.next;
        } else {
          let current = this.head;

          while (current.next !== null) {
            current = current.next;
          }

          current.next = new ListNode(value);
          lastNode = current.next;
        }
      }
    }
  }

  graphic(): string {
    let current = this.head;
    let result = '';
    while (current) {
      result += `${current.value}${current.next ? ' => ' : ''}`;
      current = current.next;
    }

    return result;
  }

  
}
