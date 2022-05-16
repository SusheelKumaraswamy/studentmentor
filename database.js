const mongoose =require ('mongoose');

module.exports={
    async mongoconnect(){
        mongoose.connect(process.env.MONGO_CONNECT);
        console.log("Atlas cloud DB connected successfully");
    }
}
