import mongoose from 'mongoose';
import { app } from './app';

(async () => {    
    if(!process.env.MONGO_URI) {
        throw new Error('MONGO_URI must be defined');
    }
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.log(err);
    }
    app.listen(3000,() => {
        console.log('Listening on port 3000!!!!!');
    });
})();