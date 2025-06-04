const UserModel = require("../models/UserModel")

exports.getusers = (id)=>{
 
    return UserModel

}

exports.adduser = (u)=>{
    UserModel.push(u)
}

exports.updateuser = (id , u)=>{
       UserModel[id - 1] = u;
    }

exports.deleteuser = (id)=>{
//   id
    id =(id - 1)
    UserModel.splice(id , 1)
}
exports.display_by_id = (id) =>{
        return UserModel[(id - 1)]
}
