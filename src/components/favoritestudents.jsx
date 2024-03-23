import { useContext } from "react";
import { studentContext } from "./studentcontext";

import { Link } from "react-router-dom";


function Favouritestudents (){

    const {studentlist,setstudentlist}=useContext(studentContext);
    
    function handleremove(id){
        const newlist = studentlist.map(function (data) {
            return data.id === id ? { ...data, isFavourite: false } : data;
        })
        setstudentlist(newlist)
   }
   const updatedlist = studentlist.filter((student) => {
    return student.isFavourite;
})
 
    return(
        <>

 <div className="bg-[#B4505B] text-xl flex p-5 gap-28">
          <h1 className="underline"><Link to={"/"}>List of Students</Link></h1>
          <h1 className="underline cursor pointer">Favourite students</h1>
    </div>

   <div>
  {   

  updatedlist.length>0?

  (updatedlist.map(function(item,index){
    return <div key={item.id} className="flex justify-between w-[500px] p-3">
    <p className="font-medium  text-2xl ml-2">{index+1}. {item.studentname}</p>
    <button onClick={()=>{handleremove(item.id)}} className={`bg-black text-white p-3 mr-24 rounded-lg`}>remove</button></div>
  }) ) : (<h1 className="text-xl p-5 ml-5 font-medium text-red-600">No Favourite students added</h1>)
  }

</div>      
        </>
    )
}



export default Favouritestudents