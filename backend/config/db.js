import mongoose from 'mongoose';

export const connectDb = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`MongoDB connected: ${conn.connection.host}`.underline.cyan);
  } catch (error) {
    console.log(`MongoDB Error: ${error.message}`);
    process.exit(1);
  }
};

