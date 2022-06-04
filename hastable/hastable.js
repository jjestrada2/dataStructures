class HashTable{
    constructor(size){
        this.data=new Array(size)
    }
    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
          hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key,value){
        const address=this.hashMethod(key)
        if(!this.data[address]){
            this.data[address]=[]
        }
        this.data[address].push([key,value]);
        return this.data;

    }
    get(key){
        const adress=this.hashMethod(key)
        let currentBucket=this.data[adress]
        if(currentBucket){
            for(let i=0;i<currentBucket.length;i++){
                if(currentBucket[i][0]===key){
                    return currentBucket[i][1]
                }
            }
        }

        return undefined
    }

    remove(key){
        const address=this.hashMethod(key)
        let currentBucket=this.data[address]
        if(currentBucket){
            for(let i=0;i<currentBucket.length;i++){
                if(currentBucket[i][0]===key){
                    const deleteValue=this.data[address][i]
                    delete this.data[address][i]
                    return deleteValue
                }
            }
        }
        return undefined
    }

    getAllkeys(){
        const key=[]
        for(let i=0;i<this.data.length;i++){
            if(this.data[i]){
            for(let j=0;j<this.data[i].length;j++){
                key.push(this.data[i][j][0])
                    }
                }
            }
            return key
    }
    
    

}

const myHashTable=new HashTable(50);