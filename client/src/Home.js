import React, { useEffect } from "react";
import ProjectSlider from "./Components/ProjectSlider/ProjectSlider";
import TopContributors from "./Components/TopContributors/TopContributors";
import ProjectCard from "./Pages/Projects/ProjectCard";
import "./Home.css"
import Sidebar from "./Components/Sidebar/Sidebar";
import Feed from "./Components/Feed/Feed";

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
        <div className="home_body">
            <Sidebar/>
            <Feed/>
        </div>
        
    );
    }

export default Home;