const users= require('../users.json')


function getAllusers(req,res) {
   
    try {
        res.json(users)
    } catch (error) {
        
    }

    
}

module.exports={
   getAllusers
}