import mongoose from 'mongoose';

const MongoUrl = 'mongodb+srv://mustafa:02XtyQAL8lVN1Lzr@cluster0.z3rjsgf.mongodb.net/?retryWrites=true&w=majority';

if(!MongoUrl){
    throw new Error
}

let cached = global.mongoose

if (!cached){
    cached = global.mongoose = {
        conn: null,
        promise: null
    }
}

async function dbConnect(){
    if(cached.conn){
        return cached.conn
    }
    if(!cached.promise){
        const opts = {
            bufferCommands: false,
        }
        mongoose.set('strictQuery', false);
        cached.promise = mongoose.connect(MongoUrl, opts).then((mongoose) => {
            return mongoose
        })
    }

    cached.conn = await cached.promise
    return cached.conn
}

export default dbConnect