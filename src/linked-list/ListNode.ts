import { linkedListValue, Next } from "../types/linkedList";

export default class ListNode {
  constructor(
    public val: linkedListValue = 0,
    public next: Next = null,
  ) {}
}
