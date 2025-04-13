import mongoose from "mongoose";

mongoose.connect('monngodb://localhost:27017/medi-app');

const db = mongoose.connection;

db.on(
    'error', console.error.bind(console, 'connection error: ');
)

db.once(
    'open', function(){
        console.log('Database connected succesfully!');
    }
);

export default db;