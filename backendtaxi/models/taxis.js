const mongoose =require ('mongoose')
const Schema = mongoose.Schema;

const taxisSchema = new Schema({

    taxi_no:{
        type:String,
        required:true,
        trim:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    taxi_type:{
        type:String,
        required:true,
        trim:true
    },
    pickup:{
        type:String,
        required:true,
        trim:true
    },
    drop:{
        type:String,
        required:true,
        trim:true
    },

    date:{
        type: String,
        required: true,
        trim:true
    },

    time:{
        type: String,
        required: true,
        trim:true
    },

    phone_no:{
        type: Number,
        required: true,
        trim:true
    }
},{timestamps:true})

// var taxisSchema = mongoose.model('taxisSchema', taxisSchemaSchema);

// export default taxisSchema;

const taxis = mongoose.model('taxis',taxisSchema)

module.exports = taxis