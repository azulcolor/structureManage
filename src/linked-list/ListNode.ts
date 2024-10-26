import { ListNodeInterface, linkedListValue} from "../types/linkedList";

export default class ListNode implements ListNodeInterface{
  public value: linkedListValue
  public next: ListNodeInterface | null 

  constructor(value: linkedListValue = 0, next: ListNodeInterface | null = null) {
    this.value = value
    this.next = next
  }
}
