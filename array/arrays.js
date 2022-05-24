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

    pop(){
      const lastItem = this.data[this.length-1]
      delete this.data[this.length-1]
      this.length--;
     return lastItem
    }

    myDelete(index){
      const item=this.data[index]
      this.shiftIndex(index)
      return item
    }
    shiftIndex(index){
      for(let i=index;i<this.length-1;i++){
        this.data[i]=this.data[i+1]
      }
      delete this.data[index]
      this.length--;
    }
    shift(){
      item=this.data[0]
      this.shiftIndex(this.data[0])
      this.length--;
      return item

    }
    unshift(value){
      this.length++;
      for(let i=this.length;i>0;i--){
        this.data[i]=this.data[i-1]
      }
      this.length++;
      this.data[0]=value

    }
  }

  const myArray=new MyArray();