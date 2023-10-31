import React from "react";
import "./portfolio.css";
import Img1 from "../../assets/online-judge-logo.png";
import Img2 from "../../assets/logo-color.png";
import Img3 from "../../assets/logo-green-small.png";
import Img4 from "../../assets/logo-color-headstart.png";
// import Img5 from "../../assets/portfolio5.png";
// import Img6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {

  const data = [
    {
      id: 1,
      image: Img1,
      title: "Online Judge",
      github: "https://github.com/Saavrm26/online-judge/",
      demo: "https://ec2-13-232-2-140.ap-south-1.compute.amazonaws.com",
      description: "The focus of this project was to develop an Online Judge to conduct lab evaluations and coding events in colleges.",
      techstack: "Django, React, PostgreSQL, AWS, CSS, Git, Docker, Gunicorn, and Nginx",
    },
    {
      id: 2,
      image: Img2,
      title: "Scrap-It",
      github: "https://github.com/Saavrm26/scrap-it/",
      demo: null,
      description: `The primary objective of this project was to create a unified platform that enables users to receive job updates in one
place, eliminating the need to sign up for multiple websites`,
      techstack: "Express, Mongoose, MongoDB, Python, Scrapy and Docker"
    },
    {
      id: 3,
      image: Img3,
      title: "Exotic-Travels",
      github: "https://github.com/Saavrm26/exotic-travels/",
      demo: "https://exotic-travels.onrender.com/",
      description: `An ecommerce website to enable businesses in the tourism industry to showcase and sell
tours to tourists while ensuring secure payment processing`,
      techstack: "Express, Mongoose, MongoDB and Stripe"
    },
    {
      id: 4,
      image: Img4,
      title: "Headstart",
      github: "https://github.com/Saavrm26/Headstart",
      description: "The Aim of this project is to enable developers to get premade starter templates for their next fullstack porject, This project is currently ongoing and I'm planning to add a feature that lets developers make their own starter template using simple drag and drop of components",
      techstack: "Go, Gin, NextJS, TypeScipt, Firebase, AWS"
    },
    // {
    //   id: 5,
    //   image: Img5,
    //   title: "This is a protfolio item title",
    //   github: "https://github.com",
    //   demo: "https://dribbble.com",
    //   description: "",
    //   techstack: ""
    // },
    // {
    //   id: 6,
    //   image: Img6,
    //   title: "This is a protfolio item title",
    //   github: "https://github.com",
    //   demo: "https://dribbble.com",
    //   description: "",
    //   techstack: ""
    // }
  ]

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, description, techstack }) => {
          return (
            <article className="portfolio__item">
              <div className="protfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p> {description}</p>
              <p>Techstack: {techstack}</p>
              <br />
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                {demo &&
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Website
                  </a>}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  );
};

export default Portfolio;
