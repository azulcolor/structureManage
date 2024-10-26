export type linkedListValue = number | string | boolean | linkedListValue[] | Object;
export interface ListNodeInterface {
    value: linkedListValue;
    next: ListNodeInterface | null;
}
export interface LinkedListInterface {
    head: ListNodeInterface | null;
    append(values: linkedListValue): void;
    appendList(values: Array<linkedListValue[]>): void;
    graphic(): string;
}
