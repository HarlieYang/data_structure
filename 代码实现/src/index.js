/*
 * @Author: HarlieYang
 * @Date: 2020-06-29 15:28:16
 * @LastEditTime: 2020-06-29 20:29:52
 * @LastEditors: Please set LastEditors
 * @Description: 广度搜索
 * @FilePath: /数据结构/代码实现/src/index.js
 */ 

class BFStraverse{
    /**
     * @description: 
     * @param {Number} vertices 顶点的数量
     * @param {Array} adj  二维数组 与顶点 相邻的顶点列表
     * @param {Number} edges 顶点的数量
     * @param {Array} marked 未访问过的顶点
     * @return: 
     */
    constructor(V){
        this.vertices = V; 
        this.adj = []; 
        this.edges = 0;
        this.marked = []
    } 

    /**
     * @description: 广度优先搜索
     * @param {type} 
     * @return: 
     */
    bfs(){

    }

}

var newBfs = new BFStraverse(3)
newBfs.Graph()
