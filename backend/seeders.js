import mongoose from 'mongoose'
import dotenv from 'dotenv'

import users from "./data/users.js"
import products from "./data/products.js"

import User from "./models/userModel.js"
import Product from './models/productModel.js'
import Order from './models/orderModel.js'

import connectDB from './config/db.js'


const importData = async() => {

    console.log('Data import started ...')

    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id

        const sampleProducts = createdUsers.map( product => {
            return {...product, user: adminUser}
        })

        await Product.insertMany(sampleProducts)

        console.log('Data imported ...')

    } catch (error) {
        
    }
}


