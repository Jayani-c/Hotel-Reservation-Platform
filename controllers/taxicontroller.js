const taxis =require ('../models/taxis.js')

const gettaxis = async(req,res) =>{

    try{
        const data = await taxis.find()
        
        return res.status(200).send({data:data})
    }
    catch(error){
        return res.status(500).send({error:error})
    }
}

const posttaxis = async (req, res) => {
     const {taxi_no, name, taxi_type, pickup, drop,date,time,phone_no} = req.body;
     const newtaxis = new taxis({taxi_no, name, taxi_type, pickup, drop,date,time,phone_no})
      try {
           await newtaxis.save();
           res.status(201).json(newtaxis );
     }
     catch (error) {
           res.status(409).json({ message: error.message });
        }
    }
    module.exports= {
        posttaxis,
        gettaxis
    }

