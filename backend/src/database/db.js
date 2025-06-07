import moongose from 'mongoose';

export const connectDB = async (req,res) => {
    try {
        const connection = await moongose.connect(process.env.MONGODB_URI)

        console.log("MongoDB Connected" );
    } catch (error) {
        console.log("Mongodb connection error:",error)
    }
}