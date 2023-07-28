const mongoose= require('mongoose')
const url = "mongodb://userPj:dbuserPj@ac-fbyvydg-shard-00-00.vexcesl.mongodb.net:27017,ac-fbyvydg-shard-00-01.vexcesl.mongodb.net:27017,ac-fbyvydg-shard-00-02.vexcesl.mongodb.net:27017/quorlin-mern?ssl=true&replicaSet=atlas-adu78w-shard-0&authSource=admin&retryWrites=true&w=majority";
module.exports.connect =() => {
    mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('MongoDB connected successfully')
    }).catch((error) => console.log("Error: ", error))

}