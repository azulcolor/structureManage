export * from './linked-list/LinkedList'
export * from './linked-list/ListNode'

import LinkedList from './linked-list/LinkedList'

const list = new LinkedList()

list.append('Lalito')
list.append(2)
list.append(3)
list.append(4)
list.append(5)

console.log(list.grafic())