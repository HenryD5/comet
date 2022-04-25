import React, { useEffect, useState } from "react";
import Router from 'next/router'
import Loader from "@components/Loader/Loader";

 const Home = () => {
    
    //loading
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const id = '3b35fb50-3d5e-41b3-96d6-c5566141fab0'
        const {pathname} = Router
        if(pathname == '/' ){
            setTimeout(() => {
                setLoading(false)
              }, 5000);
            Router.push(`/student/${id}/`)
        }
      });
    return (
        <div>
            { isLoading && <Loader />}
        </div>
    )
}

export default Home;