import React,{useEffect, useState} from 'react'
import { database } from '../firebase';

function Firebase() {
    const [name,setName] = useState('Ritesh');
    const [availableTimeAndDate,setAvailableTimeAndDaySlot] = useState([{date:"28feb",timeSlot:["11 am","12 am","1 pm"]},{date:"12feb",timeSlot:["2 pm","4 pm","6 pm"]}]);

  

    const createUserInDB = async() => {
        
        let res = await database.users.add({name,availableTimeAndDate}) ///CREATE COMMAND
        console.log(res);
    }

  

   

    // let update = async() => {
        
    //     let uid = 'MHNMzdyPvfI6SC18r1Sz';
    //     await database.users.doc(uid).update({ //UPDATE COMMAND
    //         name,age
    //     })
    // }

    // let deletee = async() => {
    //     let uid = '11111111';
    //     await database.users.doc(uid).delete()
    // }

    return (
        <>
        <div>
            {/* <label htmlFor="name">Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <button onClick={createUserInDB}>Create</button>
            {/* <button onClick={deletee}>Delete</button> */}
            {/* <button onClick={createUserInDB}>Create</button> */}
            
        </div>
        </>
    )
}

export default Firebase


// user schema=>
//     {
//         name:{
//             type:String,
//             required:true
//         },
//         availableTimeAndDate:[
//             {
//                 day:{type:String},
//                 time:[{type:String}]
//             }
//         ]
//     }
