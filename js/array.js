/*
 * @Author: HarlieYang
 * @Date: 2020-07-21 09:57:01
 * @LastEditTime: 2020-07-21 11:10:28
 * @LastEditors: Please set LastEditors
 * @Description: 数组
 * @FilePath: /数据结构/js/array.js
 */ 
class array {
    constructor(capacity){
        this.data = []             // 数组
        this.capacity = capacity   // 分配的固定内存大小。数组的容量
    }
    _init_ () {
        let capacity = this.capacity
        while (capacity > 0) {
            this.data.push(0)
            capacity--
        }
    }

    _insert_ (index, value) {
        if (index < 0 || index >= this.capacity) return;
        if (this.data[index] == 0) this.data[index] = value
        else {
            for (let i = this.capacity - 1; i > index; i--) {
                this.data[i] = this.data[i - 1]
            }
            this.data[index] = value
        }
        
    }

    _delete_(index){
        if (index < 0 || index > this.capacity - 1) return;
        if (index == this.capacity - 1) this.data[index] = 0
        for (let i = index; i < this.capacity - 1; i++) {
            this.data[i] = this.data[i + 1]
        }

    }
    
    _find_ (index) {
        if (index < 0 || index >= this.capacity) console.log('索引不存在');
        else{
            console.log(this.data[index])
        }
        
    }

    _show_ () {
        console.log('当前数组为',this.data)
    }

}

var test = new array(6)
test._init_()
test._show_()
test._insert_(0,1)
test._show_()
test._insert_(0,1)
test._show_()
test._delete_(8)
test._show_()



