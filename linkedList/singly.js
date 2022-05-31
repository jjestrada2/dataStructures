
class Nodo{
    constructor(value){
        this.value=value
        this.next=null

    }
}


class myLinkedList{
    constructor(value){
        this.head={
            value:value,
            next:null
        };
        this.length=1;
        this.tail=this.head;


    }
    append(value){
       const newNodo=new Nodo(value)
       this.tail.next=newNodo;
       this.tail=newNodo
       this.length++;

       return this;
    }
    prepend(value){
        const newNodo=new Nodo(value)
        newNodo.next=this.head
        this.head=newNodo
        this.length++;
        return this;
    }

    insert(index,value){
     if(index>=this.length){
         return this.append(value)
     }

     const newNode= new Node(value);
     const firstpointer=this.getTheIndex(index);
     const holdingPointer=firstpointer.next;
     firstPointer.next=newNode;
     newNode.next=holdingPointer;
       
    this.length++;
    }
    getTheIndex(index){
        let counter=0;
        let currentNode=this.head
        while(counter!=index){
            counter++;
            currentNode=currentNode.next
        }
        return currentNode
    }
}

let myLinkedList= new myLinkedList(2)