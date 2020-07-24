/*
 * @Author: your name
 * @Date: 2020-07-24 11:08:29
 * @LastEditTime: 2020-07-24 13:50:20
 * @LastEditors: Please set LastEditors
 * @Description: 数组排序算法
 * @FilePath: /数据结构/js/sort.js
 */ 
class sort {
    constructor(data){
        this.data = data
    }

    // 冒泡排序
    bubbleSort(){
        console.log('冒泡排序')
        let data = this.data
        for (let i = 0; i<data.length; i++){
            for (let j = i + 1; j < data.length; j++){
                let temp = data[j]
                if (temp < data[i]){
                    console.log('大于')
                    data[j] = data[i]
                    data[i] = temp
                }
            }
        }
        console.log('冒泡排序------',data)
    }
}
let a = new sort([1,9,4,7,10,0])
a.bubbleSort()
