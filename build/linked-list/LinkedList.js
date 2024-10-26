"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListNode_1 = __importDefault(require("./ListNode"));
class LinkedList {
    constructor() {
        this.head = null;
    }
    append(...values) {
        let lastNode = null;
        for (const value of values) {
            if (this.head === null) {
                this.head = new ListNode_1.default(value);
            }
            else {
                if (lastNode !== null) {
                    lastNode.next = new ListNode_1.default(value);
                    lastNode = lastNode.next;
                }
                else {
                    let current = this.head;
                    while (current.next !== null) {
                        current = current.next;
                    }
                    current.next = new ListNode_1.default(value);
                    lastNode = current.next;
                }
            }
        }
    }
    appendList(...values) {
        let lastNode = null;
        for (const value of values.flat()) {
            if (this.head === null) {
                this.head = new ListNode_1.default(value);
            }
            else {
                if (lastNode !== null) {
                    lastNode.next = new ListNode_1.default(value);
                    lastNode = lastNode.next;
                }
                else {
                    let current = this.head;
                    while (current.next !== null) {
                        current = current.next;
                    }
                    current.next = new ListNode_1.default(value);
                    lastNode = current.next;
                }
            }
        }
    }
    graphic() {
        let current = this.head;
        let result = '';
        while (current) {
            result += `${current.value}${current.next ? ' => ' : ''}`;
            current = current.next;
        }
        return result;
    }
}
exports.default = LinkedList;
