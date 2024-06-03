import Bus from "./Bus";

class Airplane extends Bus{

constructor(){
    super();
    console.log("Inside Airplane Constructor")

    this.noOfWheels = 6;
    this.noOfSeats = 100;
    this.noOfDriver = 2;
}
    transport = ()=>{
        console.log("Transports through air")
    }
    window = ()=>{
        console.log("windows cannot be opened")
    }
    destination = ()=>{
        console.log("can travel between countries")
    }
    speed = ()=>{
        console.log("Airplane can pull 860 kmph")
    }


    calculteResult = ()=>{
        console.log("Calculate result with 0 paramaters")
    }
    calculteResult = (a)=>{
        console.log("Calculate result with 1 paramaters")
    }
    calculteResult = (a,b)=>{
        console.log("Calculate result with 2 paramaters")
    }
    calculteResult = (a,b,c)=>{
        console.log("Calculate result with 3 paramaters")
    }
}

export default Airplane;