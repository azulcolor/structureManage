import ListNode from './ListNode';

export default class LinkedList {
  head: ListNode | null = null;

  append(val: string | number | boolean) {
    if (this.head === null) {
      this.head = new ListNode(val);
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = new ListNode(val);
  }

  grafic() {
    let current = this.head;
    let result = '';
    while (current) {
      result += `${current.val}${current.next ? ' => ' : ''}`;
      current = current.next
    }

    return result;
  }
}
