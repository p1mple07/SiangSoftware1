import React, { useEffect } from "react";
import ProjectSlider from "./Components/ProjectSlider/ProjectSlider";
import TopContributors from "./Components/TopContributors/TopContributors";
import ProjectCard from "./Pages/Projects/ProjectCard";
import "./Home.css"

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
        <p>
            {localStorage.getItem("authToken")};
        </p>
        <div className="flex-container">
            {projects.map((item,index) => (
                    <ProjectCard key = {index} project = {item} className="projectCard"></ProjectCard>
                    
                ))
            }
        </div>
        {/* <ProjectSlider projects={projects}/>
        <TopContributors></TopContributors> */}
        </div>
    );
    }

export default Home;