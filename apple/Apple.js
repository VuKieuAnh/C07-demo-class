class Apple {
    weight;
    constructor() {
        this.weight = 10;
    }
    decrease(){
        if(this.isEmpty()){
            alert("an het roi");
        }
        else {
           this.weight--;
        }
    }
    isEmpty(){
        return !(this.weight > 0);
        // return this.weight>0?false:true;
        // if(this.weight > 0){
        //     return false;
        // }
        // else {
        //     return true;
        // }
    }

    getWeight(){
        return this.weight;
    }
}

let a1 = new Apple();
let a2 = new Apple();
