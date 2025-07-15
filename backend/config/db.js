import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://jigarhingu46:5252552@cluster0.ncwq6qi.mongodb.net/cravato', {
            
        });
        console.log('DB connected');
    } catch (error) {
        console.error('DB connection failed:', error.message);
        process.exit(1);
    }
};
