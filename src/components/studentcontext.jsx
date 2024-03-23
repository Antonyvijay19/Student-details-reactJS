import { createContext } from "react";
import { useState } from "react";


const studentContext = createContext()

 

function Studentcontextprovider(props){

    const  [studentlist,setstudentlist] =useState([
        {id:1,
         studentname:"vijay",
         isFavourite:false   
        },
        {id:2,
            studentname:"sachin",
            isFavourite:false   
           },

           {id:3,
            studentname:"roos",
            isFavourite:false   
           },

           {id:4,
            studentname:"reekanth",
            isFavourite:false   
           },

           {id:5,
            studentname:"prince",
            isFavourite:false   
           },

    ])
       
    return(
        <studentContext.Provider value={{studentlist,setstudentlist}}>
          
          {props.children}

        </studentContext.Provider>
    )

}

export default Studentcontextprovider
export {studentContext}