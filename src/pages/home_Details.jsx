import React, { useEffect, useState } from 'react';

const home_Details = () => {
 const [user,setuser] = useState([]);
    useEffect(()=>{
        fetch(`/Histrical.json`)
        .then(res=>res.json())
        .then(data =>{
          setuser(data);
        })
    },[])

    return (
        <div>
            {user.map((user)=>(
                <div key={user.id}>
                    

                </div>
            ))
                
            }
        </div>
    );
};

export default home_Details;