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
    append(val) {
        if (this.head === null) {
            this.head = new ListNode_1.default(val);
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = new ListNode_1.default(val);
    }
    grafic() {
        let current = this.head;
        let result = '';
        while (current) {
            result += `${current.val}${current.next ? ' => ' : ''}`;
            current = current.next;
        }
        return result;
    }
}
exports.default = LinkedList;
