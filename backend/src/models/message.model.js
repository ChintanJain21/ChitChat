import moongoose from 'mongoose';
const  messageSchema = new moongoose.Schema(
    {
        senderId:{
            type:moongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true
        },
        receiverId:{
            type:moongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true
        },
        text:{
            type:String,
        
        },
        image:{
            type:String,
        }
    },
    {
        timestamps: true,
    }
    );
const Message = moongoose.model('Message', messageSchema);
export default Message;
