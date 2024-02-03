import React, { useEffect } from "react";
import ProjectSlider from "./Components/ProjectSlider/ProjectSlider";

function Home({projects}) {
    useEffect(() => {
        const getUserinfo = async() => {
            try{
                const token = localStorage.getItem("token");
                var response = await fetch("http://localhost:3001/api/user-info", {
                    method: 'GET',
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }); 
                response = await response.json();
                console.log(response);
            } catch(error){
                console.log(error);
            }
        }
        getUserinfo();
    }, [])
    return (
        <div>
        <h1>Welcome to the Microsoft Authentication Library For React Tutorial</h1>
        <p>
            This sample app demonstrates how to use the Microsoft Authentication Library for React to sign in and sign out users.
            {localStorage.getItem("authToken")};
        </p>
        <ProjectSlider projects={projects}/>
        </div>
    );
    }

export default Home;