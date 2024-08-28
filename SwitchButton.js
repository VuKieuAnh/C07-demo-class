class SwitchButton {
    status;
    lamp;


    constructor(lamp) {
        this.status = false;
        this.lamp = lamp;
    }

    connectToLamp(electricLamp){
        this.lamp = electricLamp;
    }
    switchOff(){
        this.status = false;
        this.lamp.turnOff();
    }

    switchOn(){
        this.status = true;
        this.lamp.turnOn();
    }
}

let b1 = new Electriclamp();
let b2 = new Electriclamp();
let b3 = new Electriclamp();

let c1 = new SwitchButton(b1);
let c2 = new SwitchButton(b2);


