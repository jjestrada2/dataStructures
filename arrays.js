  class MyArray{
    constructor(){
        this.data={}
        this.length=0
    }

     get(index){
       return this.data[index]
    }

    push(value){
        this.length++;
        this.data[this.length]=value
        return this.data
    }
  }

  const myArray=new MyArray();