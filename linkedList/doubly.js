class Node{
    constructor(value){
    this.value=value
    this.next=null
    this.prev=null
    }
}


class MyDoubleLinkedList{
    constructor(value){
        this.head={
            value:value,
            next:null,
            prev:null,
        }
        
        this.tail=this.head
        this.length=1;
    }


    append(value){
        const newNode=new Node(value)

        newNode.prev=this.tail;
        this.tail.next=newNode;
        this.tail=newNode;
        this.length++;
        
        return this

    }
    prepend(value){
        const newNode= new Node(value)
        newNode.next=this.head
        this.head.prev=newNode
        this.head=newNode
        this.length++;
        return this
    }

    instert(value,index){
        const newNode= new Node(value)
        if(this.length<=index){
            return this.append(value)
        }
        const firstPointer=this.getTheIndex(index);
        const holdingPointer=firstPointer.next
        this.firstPointer.next=newNode
        newNode.next=holdingPointer
        newNode.prev=this.firstPointer
        this.length++
        
        return this


    }

    getTheIndex(index){
        if(index>this.length){
            return null
        }
        let current=this.head
        let counter=0
        while(counter!=index){
            current=current.next
            counter++;
        }
        return current
    }



}

let myDoubleLinkedList= new MyDoubleLinkedList(1)