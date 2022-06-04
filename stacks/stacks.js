class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Stack{
    constructor(){
        this.top=null;
        this.bottom=null;
        this.length=0;
    }

    peek(){
        return this.top
    }

    push(value){
        const newNode=new Node(value)
        if(this.length===0){
            this.top=newNode
            this.bottom=newNode
        }else{
            const holdingPointer=this.top
            this.top=newNode
            this.top.next=holdingPointer
        }
        this.lentgh++;
        return this;
    }
    poo(){
        if(this.length===0){
            return console.log('Empty Stack')
        }
        const holdingPointer=this.top
        if(this.length===1){
            this.top=null
            this.bottom=null
        }else{
        this.top=this.top.next
        }
        this.length--;
        
        return  holdingPointer;
    }
}

const myStack= new Stack()
