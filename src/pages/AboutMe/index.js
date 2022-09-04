import React,{} from 'react'

export default function AboutMe() {
console.log("About Me Page");
return(
    <div className="Home">
        <h1>About Kit</h1>
        <div className="row justify-content-center">
        <div className = "col-6">
        <img
            className="img-fluid"
            src="images/kit.jpg"
            alt="Screenshot of the Farmer's Market app"
          ></img>
            <p>Hello! My name is Christopher “Kit” Williams. I hail from Kirkland, Washington where I live with my partner and two rescue doggies.

I recently graduated from the Full-Stack Web Developer Boot Camp at the University of Washington. There, I learned some of the latest web-development technologies including REACT, Javascript, Node, Express, SQL, and MongoDB. And of course, I learned some not as new and mainstay technologies such as HTML, CSS, and even some JQuery so I know what’s still around.

I have been in the software industry since 2013, and have an extensive background in software testing. I am very comfortable with Agile, and have experience writing and checking in script code in C++, Typescript, Java, and Python. I also have a good knowledge of mobile apps, docker, webhooks, and apis.

I’m looking forward to my career as a full-stack web developer!
</p>
</div>
        </div>
    </div>
)
    
}