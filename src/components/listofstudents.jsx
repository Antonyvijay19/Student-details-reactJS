import { useContext } from "react";
import { studentContext } from "./studentcontext";
import { Link } from "react-router-dom";





function Studentslist(){

    const {studentlist,setstudentlist}=useContext(studentContext);


    function handleadd(id){
        console.log(id)
          const favouritelist =studentlist.map((student) =>{
              return student.id === id && !student.isFavourite ? { ...student, isFavourite: !student.isFavourite } : student
          
          }
           )
           setstudentlist(favouritelist)
           console.log(favouritelist)
    }

    return(<>
     
    <div className="bg-[#B4505B] text-xl flex p-5 gap-28">
          <h1 className="underline cursor-pointer">List of Students</h1>
          <h1 className="underline"><Link to={"/favouritestudents"}>Favourite students</Link> </h1>
    </div>
         
               
          {
            studentlist.map(function(item){
                return <div key={item.id} className="flex justify-between w-[500px] p-3">
                    <p className="font-medium  text-2xl ml-2">{item.id}. {item.studentname}</p>
                    <button onClick={()=>{handleadd(item.id)}} className={`mr-16 bg-black text-white p-3 rounded-lg ${item.isFavourite?"opacity-70" : ""}`}>Add To Favourites</button></div>
            })
          }

        </>)
}



export default Studentslist