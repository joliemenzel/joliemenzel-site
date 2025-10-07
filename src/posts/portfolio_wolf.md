---
layout: post.njk
title: "The Wolf Among Us"
slug: wolf
date: 2013-10-20
tags: ["site_portfolio","AA","cinematics","missions","levels","featured"]
hero: "/assets/img/posts/portfolio_wolf_among_us.jpg"
---

**Role**  
Cinematic Artist  
Additional Design  

**Release**  
Episode 1: "Faith": October 11, 2013  
Episode 2: "Smoke & Mirrors": February 4, 2014  
Episode 3: "A Crooked Mile": April 8, 2014  
Episode 4: "In Sheep's Clothing": May 27, 2014  
Episode 5: "Cry Wolf": July 8, 2014   

**Responsibilities**  
Cinematic Design  
Level Design  
Puzzle Design  
Gameplay Scripting (LUA)  
Gameplay Mechanics Prototyping  

## Selected Work
### Mission/Puzzle Design: Toad's Apartment (Ep 1)

I assisted our designer in prototyping and iterating on some of the more involved investigation puzzles in the game. Toad’s Apartment in Episode 1 is one of these scenes. It began as a prototype for context-rich, non-linear investigative gameplay that supports the player fantasy of Bigby as a detective while still allowing for Telltale’s highly cinematic presentation.

In *The Wolf Among Us*, we aimed to let players examine clues in any order while keeping Bigby’s line of questioning and deductions feeling like a natural thread of facts and deductions.

<div class="side-by-side right v-top" style="--img-col: 70%; --img-max-h:50vh; --img-max-h-mobile:28vh;">
  <a href="/assets/img/posts/portfolio_wolf_flow1.png" data-popup="image">
    <img src="/assets/img/posts/portfolio_wolf_flow1.png" alt="A simple investigation flow where characters show limited context of their investigation until the end.">
  </a>
  <div>
    <p>
Many classic adventure games—including those Telltale made before <i>The Walking Dead</i>—often had characters investigating objects without much acknowledgment of what they had already discovered, with the “summation” of the clues happening only after the player had seen all relevant items.</p>
  </div>
</div>

In [*The Walking Dead*]({{ collections.posts | postUrlBySlug('wd2012') | url }}), investigations were more tightly controlled, with linear flows from one clue to the next. This let characters deliver more context-rich lines as they unraveled mysteries and created a logical, cinematic flow of story—as opposed to the more “fragmented” feel of earlier non-linear investigations.

For *Wolf*, we wanted to keep that context-rich, cinematic presentation while bringing back more non-linear setups so the player felt empowered to role-play their investigation. Because all cinematics at Telltale were hand-crafted, we also needed an approach that was efficient and didn’t explode scope through combinatorial clue deductions.

<div class="side-by-side right v-top" style="--img-col: 70%; --img-max-h:50vh; --img-max-h-mobile:28vh;">
  <a href="/assets/img/posts/portfolio_wolf_flow2.png" data-popup="image">
    <img src="/assets/img/posts/portfolio_wolf_flow2.png" alt="A slightly more complex investigation setup where the player recieves more context as they collect item pairs.">
  </a>
  <div>
    <p>
Our first pass used narrative item pairs to reduce scope. Each clue depended on one clearly related partner, rather than on multiple combinations. This kept logic tight and authoring manageable. </p>
  </div>
</div>

This first pass was a gameplay success. Because clue pairs were logically linked—and every clue had a partner—players could explore freely while still hitting a steady rhythm of progress. (You could see at most three clues before triggering a deduction beat from Bigby.)

With the structure proven out, we focused on presentation. The deduction cutscenes worked well when players happened to collect pairs back-to-back, but context could be lost if a pair was completed far apart. For example, in a collection order like A–C–E–F–D–B, the A–B connection was often forgotten by playtesters.

<div class="side-by-side right v-top" style="--img-col: 70%; --img-max-h:50vh; --img-max-h-mobile:28vh;">
  <a href="/assets/img/posts/portfolio_wolf_flow3.png" data-popup="image">
    <img src="/assets/img/posts/portfolio_wolf_flow3.png" alt="The shipping verison of the flow." />
  </a>
  <div><p>To address this, we added very short callback cutscenes that appended to a clue’s moment whenever a pair was successfully completed. These helped us re-establish spatial context and blocking for the paired items before cutting to Bigby for the connection beat, keeping cinematography clear and the logic legible.</p>
  </div>
</div>


This investigation became our model for subsequent investigation scenes in *The Wolf Among Us*. While later episodes featured fewer, less involved investigations as tension and action ramped up, this scene remained a reference for design, cinematics, and production on how to execute an investigation cleanly.

You can watch one playthrough of the scene here:

<figure class="figure-center">
  <div class="video-embed" data-ratio="16/9" style="--max: 800px;">
    <iframe
      src="https://www.youtube.com/embed/SmfT-Ly6YOY?si=dQJxZXkU_PLxkXWB&amp;start=110" 
      title="TWAU investigation at Toad's apartment"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen>
    </iframe>
  </div>
  <figcaption class="hero-caption">Video credit to SAKAI CLIPS</figcaption>
</figure>

### Level Design: Bloody Mary's Hideout (Ep 5)

On later episodes, I also took on level design work. I greyboxed the Bloody Mary Hideout level, working between Maya and our proprietary engine. This space had a vertical layout, not often seen in Telltale Games. Although level art normally preceded cinematics at Telltale, I wanted to prove out both navigation and camera before handoff. I built a prototype that validated the space and provided a set of master shots to help communicate to the art team which areas of the large environment needed the most focus.

You can view the finished version of the space here. I was also responsible for the cinematics and navigation leading up to the boss-battle action scene.

<figure class="figure-center">
  <div class="video-embed" data-ratio="16/9" style="--max: 800px;">
    <iframe
      src="https://www.youtube.com/embed/QyIqIu75MSU?si=XRqrK6ZGAkd2OkKo&amp;start=1367" 
      title="The Wolf Among Us - Full Episode 5: Cry Wolf HD [No Commentary]"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen>
    </iframe>
  </div>
  <figcaption class="hero-caption">Video credit to SpottinGames</figcaption>
</figure>
