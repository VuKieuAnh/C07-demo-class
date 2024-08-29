class Human {
    name; gender; weight;

    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    eat(apple){
        if (apple.isEmpty()){
            alert('het roi');
        }
        else {
            this.weight += 1;
            apple.decrease();
        }
    }
}
let hau = new Human('hau', true, 70);
let loc = new Human('loc', true, 101);
