class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BinaryTree{
    constructor(){
        this.root=null
    }
    
    insert(value){
        const newNode= new Node(value)
        if(this.root===null){
            this.root=newNode
        }else{
        let currentNode=this.root
        while(true){
        if(value<currentNode.value){
            if(!currentNode.left){
                currentNode.left=newNode
                return this
                }
            currentNode=currentNode.left
            }else{
                if(!currentNode.right){
                    currentNode.right=newNode
                    return this
                }
                currentNode=currentNode.right
                }
            }
        }
    }
    search(value,tree=this.root){
        if(!this.root)return console.error("The bunary Tree is empty")
        if(!tree)return console.log("the Node is not in the tree")

        if(value<tree.value){
            return this.search(value,tree.left)
        }else if(value>tree.value){
            return this.search(value,tree.right)
        }else{
            console.log("The value has been finded in the tree")
            return tree
        }

    }
}

const myTree= new BinaryTree()