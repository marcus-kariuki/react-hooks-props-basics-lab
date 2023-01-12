import React from "react";
import Links from "./Links";

function About(props) {
  let propBio = "{prop.bio}";

  if (!propBio){
    return null;
  }
    return (
      <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github = {props.links.github} linkedin = {props.links.linkedin} />

    </div>
  );
}

export default About;
