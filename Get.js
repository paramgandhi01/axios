import axios from "axios";
import React,{useState,useEffect} from "react";

export default function Get() {
    const [state, setState] = useState([])
    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res)=>{
          console.log(res);
          setState(res.data)
      })
      .catch((err)=>{
          console.log(err);
          // setstate({
          //     ...state,err:err.error
          // })
      })
    },[]) 
          return(
            <div>
              <ul>
              {state.map((e,i)=>{
                return(
                  <div>  
                  <li key={e.i}>title:{e.title}</li>
                  <li key={e.i}>body:{e.body}</li>
                  </div>
                  )
              })}
              </ul>
              </div>
          )
}
