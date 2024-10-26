import { LinkedListInterface, linkedListValue, ListNodeInterface } from '../types/linkedList';
export default class LinkedList implements LinkedListInterface {
    head: ListNodeInterface | null;
    append(...values: linkedListValue[]): void;
    appendList(...values: Array<linkedListValue[]>): void;
    graphic(): string;
}
