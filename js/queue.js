/*
 * @Author: HarlieYang
 * @Date: 2020-07-30 09:20:11
 * @LastEditTime: 2020-07-30 10:20:57
 * @LastEditors: Please set LastEditors
 * @Description: 队列
 * @FilePath: /data_structure/js/queue.js
 */ 
class queue {
    constructor () {
        this.real = null   // 尾指针
        this.front  = null   // 头指针
        this.capacity = 5 // 容量
        this.data = null   // 数组
    }

    // 初始化
    init () {
        this.front = this.real = 0
        this.data = new Array(this.capacity)
    }

    // 入队列
    enQueue (val) {
        if( this.isFull() ){
            console.error('队列已满')
        }
        this.data[this.real] = val
        this.real = (this.real + 1) % this.capacity
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
        return this.real == this.front
    }

    // 判断是否空间满
    isFull () {
        // 循环队列解决队满的判断方法   -- 少用一个空间元素 及容量为 this.capacity--
        return (this.real + 1) % this.capacity == this.front
    }

    // 取队列最前端的元素
    peek() {
        return this.data[this.front]
    }
}
var a = new queue()
a.init()
a.enQueue(1)
a.enQueue(2)
a.enQueue(3)
a.enQueue(4)
a.deQueue()
a.deQueue()
console.log(a.peek())
