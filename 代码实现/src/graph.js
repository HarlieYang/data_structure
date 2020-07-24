/*
 * @Author: your name
 * @Date: 2020-06-29 16:10:11
 * @LastEditTime: 2020-06-30 00:54:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /数据结构/代码实现/src/graph.js
 */ 

class Graph {
    constructor(n,edge){
        this.vertices = [..."ABCDEFG"]; // 默认demo顶点集合
        this.adjList = []; // 邻接矩阵 
        this.n = 7 // 顶点个数 
        this.edge = 7 // 边的个数
        this.visited = [] // 用来得知该节点是否被访问
        this.nodes = "ABCDEFG"
    }
    
    create(){
        // 设置默认连接边,及无向图
        const edgesObj = [
            ['A', 'C'],
            ['A', 'D'],
            ['A', 'F'],
            ['C', 'B'],
            ['C', 'D'],
            ['F', 'G'],
            ['G', 'E']
        ];
        // 1.初始化邻接矩阵
        let {n,adjList} = this
        for(let i =0;i<n;i++){
            adjList.push([])
        }
        for(let i =0;i<n;i++){
            for(let j = 0;j<n;j++){
                adjList[i][j] = 0
            }
        }
        
        console.log("adjList初始化邻接矩阵",this.adjList)
        // 2. 计算出邻接矩阵
        for(let i=0; i < adjList.length; i++){
            let start = this.get_Node_Index(edgesObj[i][0]);
            let end = this.get_Node_Index(edgesObj[i][1]);
            // 因为是无向图 所以是对称的
            adjList[start][end] = 1;
            adjList[end][start] = 1; 
        }
        this.adjList = adjList
        console.log("adjList邻接矩阵", adjList)
        return {vexs: this.vertices,arcs: adjList}
    }

    /**
     * @description:返回顶点下标 
     * @param {type} 
     * @return: 
     */
    get_Node_Index(number){
        for(let i=0; i < this.n; i++){
            if(number == this.vertices[i]){
                return i;
            }
        }
        return -1;
    }
    
    /**
     * @description: 广度遍历
     * @param {type} 
     * @return: 
     */
    BFS(G){
        let queue = [];   // 使用队列进行层序遍历
        let visited = new Array(G.vexs.length);
        console.log(visited)
        let vexnum = 0;
        // visited初始化
        for (let i=0; i < G.vexs.length; i++){
            visited[i] = false;
        }
        console.log("visited初始化",visited)
        let newArr = []
        // 开始遍历
        for (let i=0;i < G.vexs.length;i++){
            if (visited[i] === false){
                visited[i] = true;
                queue.push(i);
                while(queue.length > 0){
                    vexnum = queue.shift();    // 重点shift()：弹出队列头部序号，并访问节点
                    newArr.push(G.vexs[vexnum])  //出队列的放入newArr
                    for (let j=0;j<G.vexs.length;j++){   //将当前节点未访问过的的邻接点序号推入队列
                        if (G.arcs[vexnum][j] === 1 && visited[j] === false){
                            visited[j] = true;
                            queue.push(j);
                        }
                    }
                }
            }	
        }
        return newArr
    }
}

let garph = new Graph()
const G = garph.create()
console.log(G)

const newBFS = garph.BFS(G)
console.log("广度优先遍历",newBFS)