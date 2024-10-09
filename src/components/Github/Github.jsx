import React, { useEffect, useState } from "react";

function Github() {
    const [data,setData] = useState([])
  useEffect(() => {
    fetch("https://api.github.com/users/Shalini06singh")
    .then(response => response.json())
    .then(data=>{
        console.log(data);
        setData(data)
    })
  }, []);
  return (
    <div className="text-center m-4 bg-blue-500 text-white p-4 text-3xl">
      Github Projects:{data.public_repos}
     <p className="text-center jus">
     {data.bio}
     </p>
     
      <img src={data.avatar_url} alt="Git picture" width={200}/>
    </div>
  );
}

export default Github;

