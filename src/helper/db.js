import mongoose from "mongoose"
import { User } from "../models/user"

export const connectDb = async () => {
    try {

        const { connection } =  await mongoose.connect(process.env.MONGO_DB_URL, { 
            dbName: "work_manager",
        })

        const firstUser = new User({
            name: 'Utkarsh Goyal',
            email: 'utkarshgoyal123@gmail.com',
            password: 'utkarshTest',
            about: 'NextJS learner'
        })

        await firstUser.save();

        console.log(`new user created: ${firstUser}`)

        console.log('DB Connected...')
        console.log(connection)

    } catch( error ) {

        console.log('failed to connect with DB')
        console.log(error)

    }
}