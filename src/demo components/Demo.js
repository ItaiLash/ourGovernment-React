import React ,{useEffect,useState}from "react";

function Demo() {

  const [pav,setResult]=useState([]);

  useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/pav/0/compute_pav",{
      method:'GET',
  
    })
    .then(resp => resp.json())
    .then(resp => setResult(resp))
    // .then(resp => console.log(resp.result))
    

  },[])
  return (
  <div>
    <div>Demo</div>
    <div>
      {pav.result}
    </div>
  </div>
  );
}

export default Demo;
