// import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors'
import {produces} from './data/products.js';
import UserModel from './models/userModel.js';
import ProductModel from './models/productModel.js';
import { connectDb } from './config/db.js';
import { packs } from './data/products.js';
import packageModel from './models/packageModel.js';

dotenv.config();
await connectDb();


const importData = async() => {
  try {
    await ProductModel.deleteMany();

    const adminUser = await UserModel.findOne({name: "Dayvyno"})

    const adminProducts = produces.map((product)=> {
      return {...product, user: adminUser}
    })

    const adminPackages = packs.map((pack) => {
      return {...pack, addedBy: adminUser}
    })

    await ProductModel.insertMany(adminProducts);
    await packageModel.insertMany(adminPackages);

    console.log('Data successfully imported'.bgGreen)
    process.exit()
    
  } catch (error) {
    console.log(`Could not import Data: ${error}`.bgRed)
    process.exit(1);
  }
}

const destroyData = async() => {
  try {
    await ProductModel.deleteMany();
    console.log('Data destroyed'.underline.red)
  } catch (error) {
    console.error(`Could not destroy data: ${error}`.bgRed)
  }
}

if (process.argv[2] === '-d'){
  destroyData()
} else {
  importData();
}