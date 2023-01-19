const db = require("./db")

rentcar = (days,price,name,image) => {
    return db.Rent.findOne({name}).then(result => {
        if (result) {
            return {
                message:"already rented"
            }
        }
        else {

            const newcar=new db.Rent({
name,
days,
totalprice:price*days,
image

            })

            newcar.save();
            return {
                message: "rented successfully"
            }
        }
    })
}

getcar=()=>{
    return db.Car.find().then(result=>{
        if(result){
            return {
                message:result
            }
        }
        else{

            return {
                message:"no cars"
            }
        }
        }
    )
}

getrentedcar=()=>{
    return db.Rent.find().then(result=>{
        if(result){
            return {
                message:result
            }
        }
        else{

            return {
                message:"no cars rented"
            }
        }
        }
    )
}


deletecar=(name)=>{

    return db.Rent.findOneAndDelete({name}).then((result)=>{
if(result)
        return {
            message:"deleted"
        }
        else{
            return{
                message:"no car"
            }
        }
    })
}
module.exports={
    rentcar,getcar,getrentedcar,deletecar
}