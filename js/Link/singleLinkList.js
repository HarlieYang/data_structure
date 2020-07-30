/*
 * @Author: HarlieYang
 * @Date: 2020-07-30 14:24:29
 * @LastEditTime: 2020-07-30 17:49:24
 * @LastEditors: Please set LastEditors
 * @Description: 单链表的实现以及增删改查
 * @FilePath: /data_structure/js/Link/singleLinkList.js
 */ 
class createNode {
    constructor(value = null, next = null){
        this.value = value
        this.next = next
    }
}

class singleLinkList{

    constructor(){
        this.root = null               // 根节点
        this.tailNode = null           // 尾结点
        this.length = null             // 链表长度
    }

    // 初始化单链表(创建链表)
    init () {
        this.root = new createNode()
        this.root.next = this.tailNode
        this.length = 0
    }
    
    // 尾部添加节点
    appendRight (value) {
        let node = new createNode(value)
        if( this.tailNode == null ) {
            this.tailNode = node
            this.root.next = this.tailNode
        } else {
            this.tailNode.next = node
        }
        // console.log(this.tailNode)
        return true
    }

    // 头部添加节点
    appendLeft (value) {
        let node = new createNode(value)
        let headNode = this.root.next  // 头结点
        this.root.next = node
        node.next = headNode
        // console.log(this.root)
        return true
    }

    // 指定位置添加节点
    insert ( pos, value ) {
        // 先改变新节点，再改变旧节点
        let node = new createNode(value)
        let pre = this.root.next 
        let count = 0
        while(count < (pos - 1)) {
            pre = pre.next
            count ++
        }
        if (pre == null) {
            pre = node  //尾部添加
            this.tailNode.next = node
        } else {
            node.next = pre.next
            pre.next =  node
        }
        console.log(this.root.next)
    }

    // 判断链表是否为空
    isEmpty () {
        return this.root.next == null
    }

    // 删除节点
    remove (value) {
        let curNode = this.root.next
        let pre = this.root
        while ( curNode != null ) {
            if (curNode.value == value) {
                pre.next = curNode.next
                return this.root
            }
            pre = curNode
            curNode = curNode.next
        }
        return this.root
    }
    

    // 清空链表
    clear () {
        
    }

    // 查找节点元素
    find (value) {
        let curNode = this.root.next
        while(curNode != null) {
            if (value == curNode.value) {
                return true
            }
            curNode = curNode.next
        }
        return false
    }

    // 节点长度
    length () {
        let curent = 0
        let curNode = this.root.next  //curNode为节点  从头节点开始遍历直到next为null则遍历结束
        while ( curNode != null ) {
            curNode = curNode.next
            curent++
        }
        this.length = curent
        return this.length
    }

    // 循环遍历单链表 遍历节点
    each () {
        let curNode = this.root.next  //curNode为节点  从头节点开始遍历直到next为null则遍历结束
        while ( curNode != null ) {
            console.log(curNode.value)
            curNode = curNode.next
        }
    }
}
var a = new singleLinkList()

a.init()
// a.appendRight('huihui')
// a.appendLeft('left')
// a.insert(2,'yanghui2')
// a.insert(1,'yanghui3')
// a.each()
// console.log(a.find('left'))
console.log(a.remove('huihuis'))


