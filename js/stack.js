/*
 * @Author: HarlieYang
 * @Date: 2020-07-26 22:57:23
 * @LastEditTime: 2020-07-26 23:34:42
 * @LastEditors: Please set LastEditors
 * @Description: 栈
 * @FilePath: /数据结构/js/stack.js
 */

// 栈的顺序实现 数组栈
class orderStack{
    constructor(){
        this.capacity = 100   // 栈的容量 100个元素
        this.top = null       // 最顶部元素的位置，栈顶指针
        this.stack = null     // 数组栈
    }
    // 1. 初始化栈
    init(){
        this.top = -1
        this.stack = new Array(this.capacity)
        console.log(this.stack)
    }
    // 2. 判断空栈 isEmpty
    isEmpty(){
        return this.top < 0;
    }
    // 3. 进栈  posh
    push(value){
        this.top += 1
        if(this.top > this.capacity - 1 ){
            console.error('栈已满')
            return false;
        }
        this.stack[this.top] = value
        console.log(this.stack)
        return true
    }
    // 4. 出栈 pop
    pop(){
        this.top -= 1
        if( this.top < 0 ){
            console.error('已为空栈')
            return 0;
        }
        let element = this.stack[this.top]
        console.log(this.stack)
        return element;
    }
    // 5. 取栈顶 peek
    peek(){
        if (this.top < 0){
            console.error('为空栈')
            return 0
        }
        return this.stack[this.top]
    }
}
let a = new orderStack()
a.init()
a.push(1)
a.push(1)
a.pop()
a.push(2)

