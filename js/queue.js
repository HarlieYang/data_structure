/*
 * @Author: HarlieYang
 * @Date: 2020-07-30 09:20:11
 * @LastEditTime: 2020-08-19 00:14:47
 * @LastEditors: Please set LastEditors
 * @Description: 队列
 * @FilePath: /data_structure/js/queue.js
 */ 
// 顺序队列的实现 数组队列
// 1. 循环队列
class queue {
    constructor () {
        this.rear = null   // 尾指针
        this.front  = null   // 头指针
        this.capacity = 5 // 容量
        this.data = null   // 数组
    }

    // 初始化
    init () {
        this.front = this.rear = 0
        this.data = new Array(this.capacity)
    }

    // 入队列
    enQueue (val) {
        if( this.isFull() ){
            console.error('队列已满')
        }
        this.data[this.rear] = val
        this.rear = (this.rear + 1) % this.capacity
        console.log(this.data)
        return true
    }
    
    // 出队列
    deQueue(){
        if ( this.isEmpty() ) {
            console.error('队列为空')
            return false
        }
        this.front =  (this.front + 1 ) % this.capacity
        console.log(this.data)
        return true
    }

    // 判断是否为空队列
    isEmpty (){
        return this.rear == this.front
    }

    // 判断是否空间满
    isFull () {
        // 循环队列解决队满的判断方法   -- 少用一个空间元素 及容量为 this.capacity--
        return (this.rear + 1) % this.capacity == this.front
    }

    // 取队列最前端的元素
    peek() {
        return this.data[this.front]
    }
}
var a = new queue()
a.init()
// a.enQueue(1)
// a.enQueue(2)
// a.enQueue(3)
// a.enQueue(4)
// a.deQueue()
// a.deQueue()
// console.log(a.peek())

// 有界队列
class queueClass {
    constructor(){
        this.front = null     // 头指针
        this.rear = null     // 尾指针
        this.capacity = 5    // 容量
        this.data = null     // 数组
    }

    // 初始化
    init (){
        this.front = this.rear = 0
        this.data = new Array()
        console.log('data', this.data)
    }

    // 入队列
    enQueue (value) {
        
        if (!this.isFull()) {
            this.data[this.rear] = value
            this.rear += 1
        } else {
            console.log('队列已满')
        }
        console.log(this.data.slice(this.front,this.rear))

    }
    
    // 出队列
    deQueue () {
        if (!this.isEmpty()) {
            this.front += 1
        } else {
            console.log('队列已空')
        }
        // this.data = this.data.slice(this.front,this.rear)
    }

    // 判断队列是否已满
    isFull () {
        return (this.rear - this.front) == this.capacity
    }

    // 判断队列是否为空
    isEmpty () {
        return this.rear == this.front
    }
}
var queueS = new queueClass()
queueS.init()
queueS.enQueue(1)
queueS.enQueue(2)
queueS.enQueue(3)
queueS.enQueue(4)
// queueS.enQueue(5)
queueS.deQueue()
queueS.deQueue()
queueS.enQueue(8)
queueS.enQueue(7)
queueS.enQueue(9)
queueS.enQueue(10)

