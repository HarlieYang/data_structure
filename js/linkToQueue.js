/*
 * @Author: yanghui
 * @Date: 2020-08-23 21:16:14
 * @LastEditTime: 2020-08-23 23:10:48
 * @LastEditors: Please set LastEditors
 * @Description: 链表实现队列
 * @FilePath: /data_structure/js/linkToQueue.js
 */
class createNode {
    constructor( value = null, next = null ){
        this.value = value
        this.next = next
    }
}

class linkToQueue {
    constructor () {
        this.root = null            // 根节点
        this.rear = null        // 尾结点
        this.length = 5             // 链表长度
    }
    
    init () {
        this.root = new createNode()
        this.root.next = this.rear
    }
    
    /**
     * @description: 入队列
     * @param {type} 
     * @return {type} 
     */
    enQueue (value) {
        if (this.lengthQueue() >= this.length) {
            console.log('链表已满')
            return
        }
        const node = new createNode(value)
        if (this.rear == null) {
            this.root.next = node
            this.rear = node 
        } else {
            this.rear.next = node
            this.rear = node
        }
    }

    /**
     * @description: 出队列
     * @param {type} 
     * @return {type} 
     */    
    deQueue () {
        if (this.root.next == null) {
            console.log('链表为空')
        } else {
            const nextNode = this.root.next.next
            this.root.next = nextNode
        }
    }

    /**
     * @description: 链表长度
     * @param {type} 
     * @return {type} 
     */ 
    lengthQueue(){
        let node = this.root.next
        let count = 0
        while (node != null) {
            node = node.next
            count ++
        }
        return count
    }   
}

let a = new linkToQueue()
a.init()
a.enQueue(2)
a.enQueue(3)
a.enQueue(4)
a.enQueue(4)
a.enQueue(4)
a.enQueue(4)
a.deQueue()
a.deQueue()
a.deQueue()