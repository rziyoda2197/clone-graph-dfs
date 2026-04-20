class Node {
    constructor(val, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

function cloneGraph(node) {
    if (!node) return null;

    const visited = new Map();
    const queue = [node];

    function clone(node) {
        if (visited.has(node)) return visited.get(node);

        const cloneNode = new Node(node.val);
        visited.set(node, cloneNode);

        for (const neighbor of node.neighbors) {
            cloneNode.neighbors.push(clone(neighbor));
        }

        return cloneNode;
    }

    return clone(node);
}
```

Kodni ishlatish uchun misol:

```javascript
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.neighbors = [node2, node3];
node2.neighbors = [node4];
node3.neighbors = [node4];

const clonedGraph = cloneGraph(node1);

console.log(clonedGraph.val); // 1
console.log(clonedGraph.neighbors[0].val); // 2
console.log(clonedGraph.neighbors[1].val); // 3
console.log(clonedGraph.neighbors[0].neighbors[0].val); // 4
console.log(clonedGraph.neighbors[1].neighbors[0].val); // 4
