import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/medi-app');  // Corrigido "monngodb" para "mongodb"

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

db.once('open', function() {
    console.log('Database connected successfully!');
});

export default db;