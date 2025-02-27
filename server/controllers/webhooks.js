import { Webhook } from "svix";
import user from "../models/user.js";

//Api Controller function to manage clerk user with databasse
export const clerkwebhooks = async(req, res)=>{
    try{
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        await whook.verify(JSON.stringify(req.body),{
            "svix-id" : req.headers["svix-id"],
            "svix-timestamp" : req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        })

        const {data, type} = req.body

        switch(type){
            case 'user.created': {
                const userdata={
                    _id : data.id,
                    email:data.email_address[0].email_address,
                    name: data.first_name + " "+ data.last_name,
                    imageUrl: data.image_url,
                }
                await user.create(userdata)
                res.json({})
                break;
            }

            case 'user.update':{
                const userdata={
                
                    email:data.email_address[0].email_address,
                    name: data.first_name + " "+ data.last_name,
                    imageUrl: data.image_url,
                }

                await user.findByIdAndUpdate(data.id,userdata)
                res.json({})
                break;

            }

            case 'user-delete':{
                await user.findByIdAndDelete(data.id)
                res.json({})
                break;
            }
        }
    }catch(error){

        res.json({success: false, message:error.messgae})

    }
}
