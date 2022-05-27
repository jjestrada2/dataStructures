
class nodo{
    constructor(value){
        this.value=value
        this.next=null

    }
}


class myLinkedList{
    constructor(value){
        this.header={
            value:value,
            next:null
        };
        this.length=1;
        this.tail=this.header;


    }
    insert(value){
        let nextValue=this.header
        this.header={
            value:value,
            next:nextValue
        }
        this.lenght++;
        this.tail=this.header

    }
}

let myLinkedList= new myLinkedList(2)