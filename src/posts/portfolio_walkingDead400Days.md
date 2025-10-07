---
layout: post.njk
title: "The Walking Dead: 400 Days"

date: 2013-07-20
tags: ["site_portfolio","AA","cinematics"]
hero: "/assets/img/posts/portfolio_walking_dead_400.jpg"
---


**Role**  
Cinematic Artist

**Release**  
July 2, 2013

**Responsibilities**  
Cinematic Design  
Level Design  
Gameplay Scripting (LUA)  


## Selected Work

400 Days was our sandbox to push the adventure genre forward—testing bold interaction ideas and stress-testing Telltale’s engine. I led rapid prototypes in Lua inside the proprietary Telltale Tool, then partnered with design, animation, and cinematics to harden the best ideas for production.

Role highlights

* Built and iterated original mechanics (Lua + Telltale Tool) from pitch → playable prototype → shipped content.

* Focused on responsiveness and readability: tighter cameras, clearer player intent, more natural animation.

* Prototypes here informed later action and stealth sequences in [The Wolf Among Us]({{ collections.posts | postUrlBySlug('wolf') | url }}) and [Tales from the Borderlands]({{ collections.posts | postUrlBySlug('borderlands') | url }}).

### Corn Maze 
We adapted the tiling technique we’d used in *The Walking Dead* for moving vehicles into a player-responsive system. In the corn maze, the world tiles scroll relative to Bonnie so she can move left, right, or sprint forward (technically forever) while enemies spawn at semi-random offsets to her position. A collision with the enemy's flashlight cone triggers a fail state. This let us deliver tense, low-visibility navigation without heavy level authoring, while keeping moment-to-moment control firmly in the player’s hands.

You can check out a video of it, here: 

<figure class="figure-center">
  <div class="video-embed" data-ratio="16/9" style="--max: 800px;">
    <iframe
      src="https://www.youtube.com/embed/0DuCrsI-mDs?si=2_nRPEqizaGft63C&amp;start=431" 
      title="The Walking Dead: 400 Days Walkthrough - Bonnie"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen>
    </iframe>
  </div>
  <figcaption class="hero-caption">Video credit to IGN</figcaption>
</figure>

### Stealth Gameplay 
I also helped build this stealth sequence, evolving controlled-movement work I’d done on [The Walking Dead]({{ collections.posts | postUrlBySlug('wd2012') | url }}). The goal was to push for snappier input and responsive cameras and animation to alleviate some of the stiffness of the earlier *Walking Dead* sequences. 

Shipping this suite of QTEs and controlled-movement scenes gave us a proven toolkit we later scaled for [The Wolf Among Us]({{ collections.posts | postUrlBySlug('wolf') | url }}) and [Tales from the Borderlands]({{ collections.posts | postUrlBySlug('borderlands') | url }}).

<figure class="figure-center">
  <div class="video-embed" data-ratio="16/9" style="--max: 800px;">
    <iframe
      src="https://www.youtube.com/embed/Bw4dUOlTOL8?si=7m-FjaT_WOPb0j4F&amp;start=957" 
      title="THE WALKING DEAD - 400 DAYS PART 2 AND S2E1"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen>
    </iframe>
  </div>
  <figcaption class="hero-caption">Video credit to matchiwrld VODs</figcaption>
</figure>
