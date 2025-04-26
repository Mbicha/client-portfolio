import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section className="flex flex-row w-full min-h-screen justify-center bg-black opacity-75">
            <div className="flex flex-col items-center mt-16 w-4/5">
                <h1 className=" flex justify-center text-3xl font-bold text-white mb-6">About</h1>
                <p className="flex justify-center text-2xl text-white">
                    I’m a civil engineer with hands-on experience in infrastructure development, 
                    specializing in precast concrete construction, urban road construction, and 
                    rehabilitation. I have worked on major metro rail and municipal projects, 
                    gaining practical exposure to the manufacturing of precast elements and tunnel 
                    boring operations while maintaining strict health and safety standards. 
                    My expertise also includes road concretization and traffic management during 
                    execution phases. Additionally, I am proficient in AutoCAD, Revit, STAAD.Pro, 
                    and OfficeSuite, enabling me to deliver detailed structural designs, comprehensive 
                    analyses, and high-quality project documentation that meet modern construction demands.
                </p>
            </div>
            
        </section>
    )
}

export default About;
