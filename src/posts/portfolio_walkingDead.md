---
layout: post.njk
title: "The Walking Dead (2012)"
slug: wd2012
date: 2012-09-20
tags: ["site_portfolio","AA","levels","cinematics"]
hero: "/assets/img/posts/portfolio_walking_dead.jpg"
---
The Walking Dead is an episodic adventure game that takes place in the same universe as Robert Kirkman's comic of the same name. The game achieved enormous critical and commercial success, earning more than 80 “Game of the Year” awards across outlets and accolades such as Spike’s Game of the Year, BAFTAs, and a D.I.C.E. Award for Game of the Year. By mid-2014, it had sold over 28 million episodes, making it one of the best-selling adventure titles of its era.  

### Role
Cinematic Artist  
Additional Writing   

### Release  
Episode 1: "A New Day": April 24, 2012  
Episode 2: "Starved for Help": June 27, 2012  
Episode 3: "Long Road Ahead": August 28, 2012  
Episode 4: "Around Every Corner": October 9, 2012  
Episode 5: "No Time Left": November 20, 2012   

### Responsibilities
Cinematic Design  
Level Design  
Mission Design  
Gameplay Scripting (LUA)  

## Selected Work
### Motor Inn 


<img src="/assets/img/posts/portfolio_wd_inn_header.jpg" alt="Concept image of the Motor Inn.">

At the Motor Inn in Episode 3, players had two parallel tasks: deciding which group members would receive the last food rations, while quietly investigating who might be stealing supplies.


<div class="side-by-side left v-center" style="--img-col: 50%;">
  <img src="/assets/img/posts/portfolio_wd_inn_chars.jpg" alt="A top-down map of the Motor Inn level, with clues and characters placed.">
  <div>
    <p>
I worked with our environment artists to arrange the space and place characters so that conversations felt easy to find, while the evidence was hidden in plain sight and required some investigation to uncover.</p>
  </div>
</div>

<div class="side-by-side left v-center" style="--img-col: 50%;">
  <img src="/assets/img/posts/portfolio_wd_inn_cams.jpg" alt="The same top-down map of the Motor Inn, now with the navigation camera setup layered on top.">
    <div>
        <p>
To help guide players through these conversations and clues, I set up all the navigation cameras, using subtle cinematography to direct the player’s gaze toward hidden areas. As with all navigation setups at Telltale, the goal was to make exploration feel as cinematic and intentional as a cutscene.</p>
    </div>
</div>

Because the area was unusually open and highly non-linear, cinematics had to be authored with branching in mind. What looks like a single cutscene to the player was often many shots daisy-chained together. I had to be mindful of various logic combinations to ensure each shot flowed seamlessly into the next, avoiding jump cuts and other cinematic errors.
Given the complexity of the scene and the short time we had to build it, I also contributed extra writing to cover interactions and branching cases as they came up in implementation.

You can watch a playthrough of the entire scene here:

<figure class="figure-center">
  <div class="video-embed" data-ratio="16/9" style="--max: 800px;">
    <iframe
      src="https://www.youtube.com/embed/TtyuYHkoS8Q?si=_tZ0ayRDYee0UqqZ&amp;start=225"
      title="The Walking Dead - Long Road Ahead, Chapter 3, Mystery at the Motor Inn, Playthrough"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen>
    </iframe>
  </div>
  <figcaption class="hero-caption">Video credit to TheGamerBay RudePlay</figcaption>
</figure>

