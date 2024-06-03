class Bus{


    constructor(){
        console.log("Inside Bus Constructor");

        this.noOfWheels = 4;
        this.noOfSeats = 50;
        this.noOfDriver = 1;
    }
transport = ()=>{
    console.log("transports through road")
}

window =()=>{
    console.log("windows can be opened")
}

destination =()=>{
    console.log("can travel batween local places")
}

speed =()=>{
    console.log("bus can pull 70-80 kmph")
}
}




export default Bus;