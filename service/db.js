const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/carRental',{useNewUrlParser:true})

const Car = mongoose.model('Car',{
    
    name: String,
  price:Number,
  image:String,
    details : String,
    engine_cc:Number,
    manufacturer :String,
  
    torque:Number,
    fuel:String,
    numberplate:String

    

    
    
})

const Rent = mongoose.model('Rent',{
    
  name: String,
  days:Number,
totalprice:Number,
image:String


  
})
module.exports={
    Car,Rent
}