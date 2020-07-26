/*
 * @Author: HarlieYang
 * @Date: 2020-07-24 11:08:29
 * @LastEditTime: 2020-07-26 18:54:49
 * @LastEditors: Please set LastEditors
 * @Description: 数组排序算法
 * @FilePath: /数据结构/js/sort.js
 */ 
class sort {
    constructor(data){
        this.data = data
    }

    // 1. 冒泡排序
    bubbleSort(){
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

    // 2. 选择排序
    selectSort(){
        let data = this.data
        for (let i = 0; i < data.length; i++){
            let curIndex = i
            for(let j = i + 1; j < data.length ; j++){
                if (data[curIndex] > data[j]) {
                    curIndex = j
                }
            }
            let temp =  data[i]
            data[i] = data[curIndex]
            data[curIndex] = temp
        }
        console.log('选择排序------',data)
    }

    // 3. 插入排序  时间复杂度为O(n^2)  空间复杂度为O(1)
    insertSort(){
        let data = this.data
        for (let i = 1; i < data.length; i++){
            let current = data[i]
            let currentIndex = i
            while(currentIndex > 0 && data[currentIndex -1] > current ){
                data[currentIndex] = data[currentIndex-1]
                currentIndex--
            }
            data[currentIndex] = current
        }
        console.log('插入排序------',data)
    }
    
    
}
let a = new sort([1,9,4,7,10,0])
a.insertSort()
