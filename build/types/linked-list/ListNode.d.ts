import { ListNodeInterface, linkedListValue } from "../types/linkedList";
export default class ListNode implements ListNodeInterface {
    value: linkedListValue;
    next: ListNodeInterface | null;
    constructor(value?: linkedListValue, next?: ListNodeInterface | null);
}
