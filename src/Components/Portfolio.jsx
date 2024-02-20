/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/me.jpg";

const imageAltText = "My portfolio picture";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Project using Azure Static Web Apps ❤️",
    description:
      "I won the Encouragement Award with my teammates at the Microsoft-hosted hackerton.🎉",
    url: "https://github.com/g1nya2/Whodesignedthisfxckingt-shirts-",
  },
  {
    title: "Microsoft Learn",
    description:
      "Enable more diverse learning to actively engage in MLSA activities.In particular, there is a high interest in azure.",
    url: "https://learn.microsoft.com/en-us/users/geunheekim-6906/",
  },
  {
    title: "My Github Site",
    description:
      "put in my various learning contents and continue to fill them with various projects in the future.",
    url: "https://github.com/g1nya2",
  },
  {
    title: "KNU Software&Start-up Club <Get IT>",
    description:
      "Create better value by operating various start-up activities and software training. I am currently the lead of <Get IT>",
    url: "https://www.notion.so/GET-IT-4th-Member-Page-11ed485afcc44ccab595bf03f8590af3?pvs=4",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
