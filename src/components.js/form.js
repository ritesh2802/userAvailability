import React,{useEffect, useState} from 'react'
import { database } from '../firebase';

function Form(){

    const [uid,setUid] = useState("B2GlR5IxLvBy6yCZ41Jv")
    const [availableDates,setAvailableDates] = useState([]);
    let availableDate=""
    const [availableTime,setAvailableTime] = useState([]);
    const [formData,setFormData] = useState({firstName:"",email:"",mobileNo:"",availableDate:"",availableTime:""})

    const getAvailableDate= async()=>{
        let tempAvailableDates=[]
        let tempAvailableTime =[]
        let data = await database.users.doc(uid).get();
        // console.log("name ",data.data().name)
        {
            data.data().availableTimeAndDate.map((dateObj,ind)=>{
                tempAvailableDates.push(dateObj.date)
                // {console.log("available date ", dateObj.date)}
                
            }  )
        }
        {setAvailableDates(tempAvailableDates)}
        // setAvailableTime(tempAvailableTime)
        // {console.log(availableDates)}
        // {console.log(availableTime)}

  
    }
    const getAvailableTimeForAvailableDate=async (availableDateObj)=>{
        availableDate=availableDateObj
        setFormData({...formData,availableDate:availableDate})
        console.log(availableDate)
        let tempAvailableTime =[]
        let data = await database.users.doc(uid).get();
        {
            data.data().availableTimeAndDate.map((dateObj,ind)=>{
                  { dateObj.date== availableDate   && dateObj.timeSlot.map((timeObj,ind)=>{
                        console.log("available time ",timeObj)
                        tempAvailableTime.push(timeObj)
                    })} 
                
                
            }  )
        }
       
        setAvailableTime(tempAvailableTime)
       
        // {console.log(availableTime)}

  
    }

    useEffect(()=>{
        getAvailableDate();
     
    },[])

    const handleTextChange=(input,category)=>{
        // console.log("ji",input.target.value)
        switch(category){
            case "firstName":{
                setFormData({...formData,firstName:input.target.value})
                break;

            }
            case "email":{
                setFormData({...formData,email:input.target.value})
                break;
            }
            case "mobileNo":{
                setFormData({...formData,mobileNo:input.target.value})
                break;
            }
        }
    }
    
    // setting available time
    const handleSetAvailableTime=async(availableTimeObj)=>{
       await setFormData({...formData,availableTime:availableTimeObj})
    }


    // see form details here
    console.log(formData)
    return(
        <>
            {/* form */}
            <div className= "p-[20px]  w-[50%] flex flex-col gap-[6px] border-2 shadow-md bg-white rounded-[30px]">
                <h1 className='font-[700] text-[26px] '>Career Development</h1>
                   {/* firstaname */}
                   <div className='flex flex-col gap-[4px] '>
                        {/* <div>firstName</div> */}
                        <label>first Name</label>
                        <input className='h-[35px]  rounded-md outline-none p-[6px] py-[15px] rounded-md border-[1px] border-black' onChange={(e)=>handleTextChange(e,"firstName")} value={formData.firstName}></input>
                   </div>

                   {/* email */}
                   <div className='flex flex-col gap-[4px] '>
                        <label>Email</label>
                        <input className='h-[35px] rounded-md outline-none p-[6px] py-[15px] rounded-md border-[1px] border-black' onChange={(e)=>handleTextChange(e,"email")} value={formData.email}></input>
                   </div>

                   {/* mobile nu */}
                   <div className='flex flex-col gap-[4px] '>
                        <div>Mobile Number</div>
                        <input className='h-[35px]  rounded-md outline-none p-[6px] py-[15px] rounded-md border-[1px] border-black' onChange={(e)=>handleTextChange(e,"firstName")} value={formData.firstName}></input>
                   </div>

                    {/* available date */}
                   <div className='flex flex-col gap-[4px] '>
                        <div>When should we meet ?</div>
                        <div className='flex flex-wrap gap-[6px] hover:cursor-pointer'>
                        {availableDates.map((availableDateObj,ind)=>(
                            <div className="p-[5px] rounded-md border-[1px] border-black" 
                                onClick={()=> getAvailableTimeForAvailableDate(availableDateObj) }
                            >{availableDateObj}</div>
                        ))}
                        </div>
                   </div>

                   {/* available time */}

                   <div className='flex flex-col gap-[4px] '>
                        <div>Select Time of  the day</div>
                        <div className='flex flex-wrap gap-[6px] hover:cursor-pointer'>
                        {availableTime.map((availableTimeObj,ind)=>(
                            <div className="p-[5px] rounded-md border-[1px] border-black" onClick={()=>handleSetAvailableTime(availableTimeObj)} >{availableTimeObj}</div>
                        ))}
                        </div>
                   </div>

                   {/* confirm and pay */}
                   <button className='rounded-full bg-red-800 text-white p-[6px] w-full mt-[2px] flex items-center justify-center'>
                        Confirm and Pay
                   </button>


            </div>

        </>
    )
}

export default Form;