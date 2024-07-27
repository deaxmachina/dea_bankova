const projectsMetadata = [
  {
    id: 'infinity', 
    hasPage: true, 
    size: 'full',
    tag: 'side-project',
    projectTypeArray: ["data art", "creative coding", "front-end"],
    title: "Infinity: an interactive exploration",
    websiteUrl: "https://maths-infinity.netlify.app/",
    videoUrl: './infinity.mp4',
    imgUrl: "https://live.staticflickr.com/65535/53116109623_5c0520683d_c.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/53116109623_5c0520683d_c.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/53116109623_5c0520683d_c.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/53116109623_5c0520683d_c.jpg",
    backgroundColour: "#65cdcb",
    responsibleFor: 'everything: concept, design, code',
    tools: 'React, JavaScript, Three.js, R3F, D3.js...',
    toolsArray: ['React', 'JavaScript', 'Three.js', 'React 3 Fiber', 'D3.js', 'HTML5 Canvas', 'GSAP', 'Figma'],
    awards: '2023 IIB awards: Bronze... +2',
    awardsArray: [
      {
        award: '2023 IIB Awards: Bronze in Impressive Individual category',
        url: 'https://x.com/infobeautyaward/status/1720850494250226113'
      },
      {
        award: '2023 IIB Awards: shortlist in Science and Technology category',
        url: 'https://www.informationisbeautifulawards.com/showcase/6376-infinity-an-interactive-exploration'
      },
      {
        award: 'The Pudding Cup 2023 honourable mention',
        url: 'https://pudding.cool/pudding-cup/'
      }
    ],
    client: 'Personal project',
    standardLayout: true, 
    description: 
    <>
    <p>
      Think of a big number, the biggest one you can conceive of. Now add 1. You have a bigger number. 
      You can keep going on and on, until you get to infinity. But is this ‘infinity’ an actual destination? 
      What if I told you that an even bigger infinity hides in the numbers just between 0 and 1? 
      The concept of infinity is one of the deepest and most captivating inhabitants of the world of mathematics. 
      But just like with anything else in maths, it can feel distant and unapproachable. 
      This project aims to be a bridge between the everyday curiosity that many of us have about infinity and 
      the rigorous mathematical concept. Starting from the simplest and most relatable infinity - the 
      counting numbers 1, 2, 3, 4, 5…, and building up all the way to the beautiful Mandelbrot fractal with 
      infinitely zoomable self-similar patterns.
      <br></br><br></br>
      It uses scrollytelling, interactive proofs and mathematical visualisations, together with an approachable 
      and playful visual style. These choices were deliberate. I wanted to convey the sense of awe and wonder 
      that maths has left me with over the years, and create a contrast with the harsh brushstrokes with which 
      this seemingly difficult field is often painted. I went through many style iterations until I settled on 
      the shiny ‘magical girl anime’ aesthetic. The proofs which I included, together with their visual walk-throughs, 
      were chosen to be rigorous, but require little more than curiosity and logic. Plenty of references were included 
      to resources that go into more depth for those who are curious or come from a maths background. 
      <br></br><br></br>
      This piece is a personal passion project by a once maths student turned data visualisation creator, 
      made with the hope to spark joy.
    </p>
    </>
  },
  {
    id: 'norwegian-wood', 
    hasPage: false, 
    size: 'full',
    tag: 'side-project',
    projectTypeArray: ["data art", "creative coding"],
    title: "Butterfly Dance",
    websiteUrl: "https://butterflydance.netlify.app/",
    videoUrl: '',
    imgUrl: "https://live.staticflickr.com/65535/53811163139_9eff46b34b_c.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/53811163139_9eff46b34b_c.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/53811163139_9eff46b34b_c.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/53811163139_9eff46b34b_c.jpg",
    backgroundColour: "#b575a8",
    responsibleFor: 'everything: concept, design, code',
    tools: 'JavaScript, D3.js, HTML5 Canvas, p5.js',
    toolsArray: ['JavaScript', 'D3.js', 'HTML5 Canvas', 'p5.js'],
    client: 'Personal project',
    standardLayout: true, 
    description: 
    <></>
  },
  {
    id: 'quantum-cryptography', 
    hasPage: true, 
    size: 'full',
    tag: 'work-reuters',
    projectTypeArray: ["data art", "front-end"],
    title: "Quantum computing decrypted",
    websiteUrl: "https://www.reuters.com/graphics/USA-CHINA/QUANTUM/gkplxnozqpb/",
    videoUrl: './quantum1.mp4',
    imgUrl: "https://live.staticflickr.com/65535/53400259263_c74d5a83a0_c.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/53400259263_c74d5a83a0_c.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/53400259263_c74d5a83a0_c.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/53400259263_c74d5a83a0_c.jpg",
    backgroundColour: "#5f31bd",
    responsibleFor: 'Research, explanation of technical material, graphics, code implementation, design',
    tools: 'Svelte, JavaScript D3.js, GSAP, Three.js',
    toolsArray: ['Svelte', 'JavaScript', 'D3.js', 'GSAP', 'Three.js'],
    awards: '2023 Best in Business Awards SABEW... +1',
    awardsArray: [
      {
        award: '2023 Best in Business Awards SABEW: Winner in Technology / Large division',
        url: 'https://sabew.org/contestsawards/best-in-business/'
      },
      {
        award: 'SND 2024 Award of excellence in 10i. Portfolio: Combination (staff or team)',
        url: 'https://snd.org/snd45-results/'
      }
    ],
    client: 'Reuters Graphics',
    standardLayout: true, 
    description: ''
  },
  {
    id: 'abba-50', 
    hasPage: true, 
    size: 'full',
    tag: 'side-project',
    projectTypeArray: ["data art", "creative coding", "front-end"],
    title: "Abba explorer: Abba at 50",
    websiteUrl: "https://abba50.netlify.app/",
    videoUrl: './abba1.mp4',
    imgUrl: "https://live.staticflickr.com/65535/53700587324_223766b2df_c.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/53700587324_223766b2df_c.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/53700587324_223766b2df_c.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/53700587324_223766b2df_c.jpg",
    backgroundColour: "#b88140",
    responsibleFor: 'everything: concept, design, code',
    tools: 'React, JavaScript, Three.js, R3F, D3.js, p5.js...',
    toolsArray: ['React', 'JavaScript', 'Three.js', 'React 3 Fiber', 'D3.js', 'GSAP', 'p5.js', 'p5 sound'],
    client: 'Personal project',
    standardLayout: true, 
    description: 
    <>
      <div className='about section'>
        <p>
          I made this website as a birthday gift to my wonderful mum, but it also happens to coincide 
          with the commemoration of the 50th anniversary of ABBA's iconic Eurovision win in 1974. 
          <br></br>
          Browse through the band’s 9 studio albums, whose songs are represented as a ‘musical constellation’, 
          and visualised though a data art interpretation of musical features and Spotify metrics (energy, danceability, valence, loudness, tempo). 
          The celestial theme reflects on Abba’s journey and the ‘voyage’ theme of their latest album release in 2021. 
          Pro tip: browse through the songs alongside someone and see how much you agree with the values of the 
          Spotify metrics. I find that danceability tends to be particularly contentions.
        </p>
      </div>
      <br></br>
      <div className='disclaimer section'>
        <h4>Disclaimer</h4>
        <p>
          Certain content on this website, such as audio and image materials associated with ABBA, 
          is the intellectual property of Polar Music International AB (*). 
          I hereby declare that I do not possess any ownership rights to said materials. 
          This website is an unofficial tribute, created exclusively for non-commercial, 
          entertainment purposes, and I do not claim any official 
          association with ABBA or Polar Music International AB. 
        </p>
        <p className='copyright'>
          (*) © 2001 Polar Music International AB; 
          <br></br>
          © 2021 1221 AB, under exclusive license to Polar Music International AB
        </p>
      </div>
      <br></br>
      <div className='credits section'>
        <h4>Credits</h4>
        <p>
          Music previews and music audio features data was obtained via <a className="link-project" href='https://developer.spotify.com/documentation/web-api' target='_blank'>
          the Spotify Web API</a>. 
          The API provides 30s music clip previews, but these were clipped to a few seconds only to avoid copyright issues. 
          If you have a Spotify account, head to the link provided for the full song.
          <br></br>
          Environment maps were AI-generated via <a className="link-project" href='https://skybox.blockadelabs.com/' target='_blank'>Skybox AI by Blockade Labs</a>
          <br></br> 
          The Three.js code for the photo gallery is based on <a className="link-project" href='https://codesandbox.io/p/sandbox/image-gallery-lx2h8?file=%2Fsrc%2FApp.js'>this example</a> by  <a className="link-project" href='https://docs.pmnd.rs/react-three-fiber/getting-started/examples'>Pmndrs</a>
        </p>
      </div>
    </>
  },
  {
    id: 'eurovision-2023', 
    hasPage: true, 
    size: 'full',
    tag: 'work-reuters',
    projectTypeArray: ["data art", "front-end"],
    title: "Eurovision 2023",
    websiteUrl: "https://www.reuters.com/graphics/MUSIC-EUROVISION/dwpkdykkzvm/",
    videoUrl: './eurovision3.mp4',
    imgUrl: "https://live.staticflickr.com/65535/52945296545_34691a43ea_c.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/52945296545_34691a43ea_c.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/52945296545_34691a43ea_c.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/52945296545_34691a43ea_c.jpg",
    backgroundColour: "#a72678",
    responsibleFor: 'The "Songs of Eurovision" section, including interactive song-flowers graphic; top of page.',
    tools: 'Svelte, JavaScript, D3.js, GSAP',
    toolsArray: ['Svelte', 'JavaScript', 'D3.js', 'GSAP'],
    awards: '2023 LA Press Club Awards, SND 2024...',
    awardsArray: [
      {
        award: '2023 LA Press Club Awards 16th National A&E Journalism Awards Winners: winner in category E7. Graphic',
        url: 'chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://5499fe.p3cdn1.secureserver.net/wp-content/uploads/2023/12/NAEJ-2023-Winners-111262023.pdf'
      },
      {
        award: 'SND 2024 Award of excellence: 1A. Design: Features',
        url: 'https://snd.org/snd45-results/'
      },
      {
        award: 'SND 2024 Award of excellence: 2A. InfoGfx: Features',
        url: 'https://snd.org/snd45-results/'
      },
    ],
    client: 'Reuters Graphics',
    standardLayout: true, 
    description: ''
  },
  {
    id: 'infinite-monkey-game', 
    hasPage: false, 
    size: 'full',
    tag: 'side-project',
    projectTypeArray: ["front-end"],
    title: "Infinite Monkey Game",
    websiteUrl: "https://infinitemonkey.netlify.app/",
    videoUrl: '',
    imgUrl: "https://live.staticflickr.com/65535/53015924795_6f3e9d30fc_c.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/53015924795_6f3e9d30fc_c.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/53015924795_6f3e9d30fc_c.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/53015924795_6f3e9d30fc_c.jpg",
    backgroundColour: "#b575a8",
    responsibleFor: 'everything: concept, design, code',
    tools: 'React, JavaScript, Figma',
    toolsArray: ['React', 'Figma'],
    client: 'Personal project',
    standardLayout: true, 
    description: 
    <></>
  },
  {
    id: 'kanji-radicals', 
    hasPage: true, 
    size: 'full',
    tag: 'side-project',
    projectTypeArray: ["data art"],
    title: "Kanji with radicals",
    websiteUrl: "https://kanjiviz.netlify.app/",
    // videoUrl: './kanji3.mp4',
    imgUrl: "https://live.staticflickr.com/65535/52269112884_7c92e1bbd0_h.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/52269112884_7c92e1bbd0_h.jpg",
    individualPageImgUrl: 'https://live.staticflickr.com/65535/52269112884_7c92e1bbd0_h.jpg',
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/52269112884_7c92e1bbd0_h.jpg",
    backgroundColour: "#b575a8",
    responsibleFor: 'everything: data processing, design, visualisation, page code',
    tools: 'Svelte, JavaScript, D3.js, HTML5 Canvas...',
    toolsArray: ['Svelte', 'JavaScript', 'D3.js', 'HTML5 Canvas', 'Python'],
    client: 'Personal project',
    standardLayout: true, 
    description: 
    <>
    <p>
        Network graphs showing the connections between kanji and radicals they include. 
        My hypothesis was that visualising kanji like this, i.e. using a force graph that 
        naturally nudges kanji which contain similar building blocks together, might help with kanji memorisation. 
        I also used the classification by concept by Wiki dataset to explore patterns between kanji belonging 
        to similar meaning categories and their constituent parts.
    </p>
    </>
  },
  {
    id: 'fleeing-ukraine', 
    hasPage: true, 
    size: 'full',
    tag: 'work-reuters',
    projectTypeArray: ["data visualisation", "front-end"],
    title: "Fleeing Ukraine",
    websiteUrl: "https://graphics.reuters.com/UKRAINE-CRISIS/REFUGEES/dwvkrqzlnpm/",
    videoUrl: './ukraine-refugees2.mp4',
    imgUrl: "https://live.staticflickr.com/65535/52268982976_717bf74290_h.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/52268982976_717bf74290_h.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/52268982976_717bf74290_h.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/52268982976_717bf74290_h.jpg",
    backgroundColour: "#547eab",
    responsibleFor: 'code for 3D and 2D graphs, visualisation and page design (partial)',
    tools: 'Svelte, JavaScript, Three.js, D3.js...',
    toolsArray: ['Svelte', 'JavaScript', 'Three.js', 'D3.js', 'HTML5 Canvas'],
    awards: 'SND 2023 Award of excellence',
    awardsArray: [ 
      {
        award: 'SND 2023 Award of excellence',
        url: 'https://snd.org/best-of-design-competitions/snd44-annual-creative-competition-results/'
      }
    ],
    client: 'Reuters Graphics',
    standardLayout: true, 
    description:  <></>
  },
  {
    id: 'taylor-swift', 
    hasPage: true, 
    size: 'full',
    tag: 'work-reuters',
    projectTypeArray: ["data visualisation", "data art"],
    title: "The unstoppable pop of Taylor Swift",
    websiteUrl: "https://www.reuters.com/graphics/MUSIC-TAYLORSWIFT/SPOTIFY/dwpkarywqpm/",
    videoUrl: '',
    imgUrl: "https://live.staticflickr.com/65535/53116119938_1af741bdb4_c.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/53116119938_1af741bdb4_c.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/53116119938_1af741bdb4_c.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/53116119938_1af741bdb4_c.jpg",
    backgroundColour: "#b39cbc",
    responsibleFor: 'Interactive radial bar charts for the Spotify metrics and billboard chart implementation & contributions to design.',
    tools: 'Svelte, JavaScript, D3.js',
    toolsArray: ['Svelte', 'JavaScript', 'D3.js'],
    awards: 'SND 2024 Silver (part of portfolio)',
    awardsArray: [
      {
        award: 'SND 2024 Silver award in 10b. Portfolio: Story Page Design (organization, staff or team)',
        url: 'https://snd.org/snd45-results/'
      }
    ],
    client: 'Reuters Graphics',
    standardLayout: true, 
    description: ''
  },
  {
    id: 'anime-timeline', 
    hasPage: true, 
    size: 'full',
    tag: 'side-project',
    projectTypeArray: ["data art"],
    title: "Timeline of Anime",
    websiteUrl: "https://animetimeline.netlify.app/",
    videoUrl: './anime-timeline1.mp4',
    imgUrl: 'https://live.staticflickr.com/65535/51100639753_1f4281a9e2_o.png',
    smallImgUrl: 'https://live.staticflickr.com/65535/51100904620_e7c1a12e14_o.png',
    individualPageImgUrl: "https://live.staticflickr.com/65535/51100639753_1f4281a9e2_o.png",
    individualPageSmallImgUrl: 'https://live.staticflickr.com/65535/51100904620_e7c1a12e14_o.png',
    backgroundColour: "#4E1B34",
    responsibleFor: 'everything: data processing, design, visualisation, page code',
    tools: 'React, JavaScript, D3.js, Python',
    toolsArray: ['React', 'JavaScript', 'D3.js', 'Python'],
    client: 'Personal project',
    standardLayout: true, 
    description: 
    <>
      <p>
        I started this project with the idea of expressing through visualisation 
        the evolution of anime genres over time. Was sci-fi more popular in the 90s, were the 2000s truly the 
        ‘golden age’ of anime, and if so, what genres were prevalent during that time? As is often the case, 
        the story I imagined the data would tell was different to reality. 
      </p>
      <br />
      <p>
        <a style={{color: "#4E1B34"}} className="link-project" href="https://animetimelinedemo.netlify.app/" target="_blank">Here</a> is
        the version I used for a D3 talk 
        I gave at LeWagon Tokyo; the GitHub repository is  
        over <a style={{color: "#4E1B34"}} className="link-project" href="https://github.com/deaxmachina/lewagon_demo_vanilla" target="_blank">here</a>.
      </p>
    </>    
  },
  {
    id: 'world-cup-2022', 
    hasPage: true, 
    size: 'full',
    tag: 'work-reuters',
    projectTypeArray: ["data visualisation", "front-end"],
    title: "World Cup 2022",
    websiteUrl: "https://www.reuters.com/graphics/WORLD-CUP/akveqzmgwvr/",
    videoUrl: './worldcup2.mp4',
    imgUrl: "https://live.staticflickr.com/65535/52769893479_404150a5f6_c.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/52769893479_404150a5f6_c.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/52769893479_404150a5f6_c.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/52769893479_404150a5f6_c.jpg",
    backgroundColour: "#7064b3",
    responsibleFor: 'code implemetation, roughly equally shared',
    tools: 'Svelte, JavaScript, D3.js',
    toolsArray: ['Svelte', 'JavaScript', 'D3.js'],
    awards: '2023 IIB awards shortlist',
    awardsArray: [
      {
        award: '2023 IIB awards shortlist: Leisure, games & sport category',
        url: 'https://www.informationisbeautifulawards.com/showcase/6472-world-cup'
      }
    ],
    client: 'Reuters Graphics',
    standardLayout: true, 
    description: 
    <>
    <p>
        Collection of pages for the World Cup 2022 Reuters real-time coverage, including pages for each team and match, venues, and bracket.
        Match pages, bracket and live match widget on reuters.com updated real time for the duration of the World Cup. 
        I worked on the menus, match cards, live widget, team history, and re-worked an earlier version the bracket visualisation. 
        I also provided real-time support and bug fixes for the duration of the event, and especially during live matches. 
        I split the dev work with a colleague and implemented designs based on designer mock-ups, working collaboratively and iteratively throughout.
    </p>
    </>
  },
  {
    id: 'abba-sketch', 
    hasPage: true, 
    size: 'full',
    tag: 'side-project',
    projectTypeArray: ["data art", "creative coding"],
    title: "Abba sketch: albums",
    websiteUrl: "https://openprocessing.org/sketch/2253610",
    videoUrl: '',
    imgUrl: "https://live.staticflickr.com/65535/53700780690_c220216ddc_c.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/53700780690_c220216ddc_c.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/53700680634_74508e3f75_c.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/53700680634_74508e3f75_c.jpg",
    backgroundColour: "#b88140",
    responsibleFor: 'everything',
    tools: 'React, JavaScript, Three.js, R3F, D3.js, p5.js...',
    toolsArray: ['React', 'JavaScript', 'Three.js', 'React 3 Fiber', 'D3.js', 'GSAP', 'p5.js', 'p5 sound'],
    client: 'Personal project',
    standardLayout: true, 
    description: 
    <>
    <p>
        A spin-off page for the songs visualisations only 
        of my <a className="link-project" href='https://abba50.netlify.app/'>ABBA @ 50 project</a>.
    </p>
    </>
  },
  {
    id: 'aot-paths', 
    hasPage: true, 
    size: 'full',
    tag: 'side-project',
    projectTypeArray: ["creative coding"],
    title: "The paths",
    websiteUrl: "https://aot-paths.netlify.app/",
    videoUrl: './paths1.mp4',
    imgUrl: "https://live.staticflickr.com/65535/52268877683_37540de79c_h.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/52268877683_37540de79c_h.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/52268877683_37540de79c_h.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/52268877683_37540de79c_h.jpg",
    backgroundColour: "#6d91f6",
    responsibleFor: 'everything',
    tools: 'JavaScript, Three.js, GLSL',
    toolsArray: ['JavaScript', 'Three.js', 'GLSL'],
    client: 'Personal project',
    standardLayout: true, 
    description: 
    <>
      <p>
        A small tribute to the animanga Attack on Titan – a 3D scene of “the Paths”. 
        Note that I did not optimise this! It works great on an overpowered MacBook, but not so great on an older computer or phone.    
      </p>
    </>
  },
  {
    id: 'generative-sketches', 
    hasPage: true, 
    size: 'full',
    tag: 'side-project',
    projectTypeArray: ["creative coding"],
    title: "Generative sketches",
    websiteUrl: "https://generative-sketches.netlify.app/",
    videoUrl: './generative-sketches.mp4',
    imgUrl: "https://live.staticflickr.com/65535/52770126833_252e6c31b5_b.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/52770126833_252e6c31b5_b.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/52770126833_252e6c31b5_b.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/52770126833_252e6c31b5_b.jpg",
    backgroundColour: "#7064b3",
    responsibleFor: 'everything',
    tools: 'Svelte, Three.js, GLSL, Midjourney',
    toolsArray: ['Svelte', 'Three.js', 'GLSL', 'Midjourney'],
    client: 'Personal project',
    standardLayout: true, 
    description: 
    <>
    <p>
        A small collection of experiments with Three.js and Midjourney, testing out simple generative patterns and aesthetics. 
    </p>
    </>
  },
  {
    id: 'japanese-earthquakes', 
    hasPage: true, 
    size: 'full',
    tag: 'side-project',
    projectTypeArray: ["data visualisation"],
    title: "Earthquake Disasters in Japan",
    websiteUrl: "https://japan-earthquakes.netlify.app/",
    imgUrl: "https://live.staticflickr.com/65535/51100108341_dffc0a04d8_o.png",
    smallImgUrl: "https://live.staticflickr.com/65535/51100108341_dffc0a04d8_o.png",
    individualPageImgUrl: "https://live.staticflickr.com/65535/51100108341_dffc0a04d8_o.png",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/51100108341_dffc0a04d8_o.png",
    backgroundColour: "#286380",
    responsibleFor: 'everything: data preparation, visualisation, website',
    tools: 'React, D3.js, GSAP, Python',
    toolsArray: 'React, D3.js, GSAP, Python',
    client: 'Personal project',
    standardLayout: true, 
    description:
    <>
      <p>
        Between September 2020 and March 2021, I worked on a project to record the memories of survivors of 
        the 2011 Tohoku earthquake and tsunami disaster in north Japan. I wanted to find out more about the 
        history of earthquakes in Japan and set out to create this visualisation, where you can see the magnitude 
        and number of casualties over time side by side. 2011 saw the biggest earthquake in recorded Japanese history, 
        but the deadliest one (1923 Kanto) was far smaller in intensity. 
      </p>
    </>
  },
  {
    id: 'covid-swells', 
    hasPage: true, 
    size: 'full',
    tag: 'work-reuters',
    projectTypeArray: ["data visualisation"],
    title: "Covid swells return to Europe",
    websiteUrl: "https://graphics.reuters.com/HEALTH-CORONAVIRUS/EUROPE/klvyknwllvg/index.html",
    imgUrl: "https://live.staticflickr.com/65535/52269140548_d850c34089_h.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/52269275779_1543937678_h.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/52269275779_1543937678_h.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/52269275779_1543937678_h.jpg",
    backgroundColour: "#547fb1",
    responsibleFor: 'data processing (partial), visualisation design (partial) and code for swells graphs and vaccination pacing graph',
    tools: 'Svelte, JavaScript, D3.js, Python',
    toolsArray: 'Svelte, JavaScript, D3.js, Python',
    client: 'Reuters Graphics',
    standardLayout: true, 
    description: ''
  },
  {
    id: 'french-elections', 
    hasPage: true, 
    size: 'full',
    tag: 'work-reuters',
    projectTypeArray: ["data visualisation", "front-end"],
    title: "French Elections 2022",
    websiteUrl: "https://graphics.reuters.com/FRANCE-ELECTION/POLLS/zjvqkomzlvx/polls/",
    imgUrl: "https://live.staticflickr.com/65535/53845198111_5fbbf4e6fb_c.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/53845198111_5fbbf4e6fb_c.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/52268037402_5f3de30dee_h.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/52268037402_5f3de30dee_h.jpg",
    backgroundColour: "#182438",
    responsibleFor: 'data collection and processing, visualisation design and code, page code',
    tools: 'Svelte, JavaScript, D3.js, Python...',
    toolsArray: ['Svelte', 'JavaScript', 'D3.js', 'HTML5 Canvas', 'Python'],
    client: 'Reuters Graphics',
    standardLayout: true, 
    description: <></>
  },
  {
    id: 'europe-gas-tracker', 
    hasPage: true, 
    size: 'full',
    tag: 'work-reuters',
    projectTypeArray: ["data visualisation"],
    title: "How much of Europe's gas storage is filled",
    websiteUrl: "https://graphics.reuters.com/UKRAINE-CRISIS/EUROPE-GAS/zdvxozxzopx/",
    imgUrl: "https://live.staticflickr.com/65535/52280053967_fb5900df39_h.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/53844314672_131bcff44a_c.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/52280049477_31107f1c8f_h.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/52280049477_31107f1c8f_h.jpg",
    backgroundColour: "#547eab",
    responsibleFor: 'front-end code (visualisation and page)',
    tools: 'Svelte, JavaScript, D3.js',
    toolsArray: ['Svelte', 'JavaScript', 'D3.js'],
    client: 'Reuters Graphics',
    standardLayout: true, 
    description:  <></>
  },
  {
    id: 'co2-emissions', 
    hasPage: true, 
    size: 'full',
    tag: 'side-project',
    projectTypeArray: ["data visualisation"],
    title: "CO2 Emissions in Cities",
    websiteUrl: "https://co2cities.netlify.app/",
    imgUrl: "https://live.staticflickr.com/65535/51100260017_687728e4c8_o.png",
    smallImgUrl: "https://live.staticflickr.com/65535/51100260017_687728e4c8_o.png",
    individualPageImgUrl: "https://live.staticflickr.com/65535/51100260017_687728e4c8_o.png",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/51100260017_687728e4c8_o.png",
    backgroundColour: "#2E5659",
    responsibleFor: 'everything: data preparation, visualisation, website',
    tools: 'React, JavaScript, D3.js, Python',
    toolsArray: ['React', 'JavaScript', 'D3.js', 'Python'],
    client: 'Hackathon project',
    standardLayout: true, 
    description: 
    <>
      <p>
        Hackathon project for <a href="https://climate-crisis.devpost.com/" className="link-project" target="_blank"> 2021 Climate Crisis AI Hackathon</a> by <a href="https://launchlab.ai/" className="link-project" target="_blank">AI Launch Lab</a> and <a href="https://www.climatereality.ca/" className="link-project" target="_blank">The Climate Reality Project Canada</a>. 
        <br></br>
        Completed over the course of one weekend (~30 hours) in January 2021.
        Visualisation that can be used to view average CO2 emissions of cities worldwide at a glance, 
        as well as to dive into the data for a specific city – 
        both its emissions and trends over time. 
      </p>
    </>
  },
  {
    id: 'it-is-getting-hotter', 
    hasPage: true, 
    size: 'full',
    tag: 'work-reuters',
    projectTypeArray: ["data visualisation"],
    title: "It's getting hotter all year round",
    websiteUrl: "https://graphics.reuters.com/CLIMATE-CHANGE/znpneamnkvl/",
    videoUrl: './itsgettinghotter1.mp4',
    imgUrl: "https://live.staticflickr.com/65535/52269448720_59e1b67673_h.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/52269448720_59e1b67673_h.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/52269448720_59e1b67673_h.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/52269448720_59e1b67673_h.jpg",
    backgroundColour: "#aea4db",
    responsibleFor: 'data collection, visualisation design and code',
    tools: 'Svelte, JavaScript, D3.js, HTML5 Canvas',
    toolsArray: ['Svelte', 'JavaScript', 'D3.js', 'HTML5 Canvas'],
    client: 'Reuters Graphics',
    standardLayout: true, 
    description:  <></>
  },
  {
    id: 'us-primaries-tracker', 
    hasPage: true, 
    size: 'full',
    tag: 'work-reuters',
    projectTypeArray: ["data visualisation", "front-end"],
    title: "2024 Delegate tracker",
    websiteUrl: "https://www.reuters.com/graphics/USA-ELECTION/PRIMARIES/gkplxymmwpb/",
    videoUrl: '',
    imgUrl: "https://live.staticflickr.com/65535/53706066643_2e607d39bd_c.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/53706066643_2e607d39bd_c.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/53706066643_2e607d39bd_c.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/53706066643_2e607d39bd_c.jpg",
    backgroundColour: "#b2396e",
    responsibleFor: 'Entire front end, including graphs and data munging to get display information from raw API data.',
    tools: 'Svelte, JavaScript, D3.js',
    toolsArray: ['Svelte', 'JavaScript', 'D3.js'],
    client: 'Reuters Graphics',
    standardLayout: true, 
    description: ''
  },
  {
    id: 'iwate-archive', 
    hasPage: true, 
    size: 'full',
    tag: 'work-other',
    projectTypeArray: ["data visualisation", "front-end"],
    title: "Tohoku Earthquake 10th Anniv. Archive",
    websiteUrl: "https://311narratives.archiving.jp",
    imgUrl: "https://live.staticflickr.com/65535/51100202969_ab9cbb0a93_o.png",
    smallImgUrl: "https://live.staticflickr.com/65535/51100210929_d1f6d1a474_o.png",
    individualPageImgUrl: "https://live.staticflickr.com/65535/51100210929_d1f6d1a474_o.png",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/51100210929_d1f6d1a474_o.png",
    backgroundColour: "#222E3A",
    responsibleFor: 'data analysis, NLP, visualisation, website',
    tools: 'React, JavaScript, D3.js, Python, spaCy',
    toolsArray: ['React', 'JavaScript', 'D3.js', 'Python', 'spaCy'],
    awards: 'Good Design Awards グッドデザイン賞...',
    awardsArray: ['Good Design Awards 東日本大震災とグッドデザイン賞2011-2021'],
    client: 'University of Tokyo / Iwate Nippo 岩手日報',
    standardLayout: true, 
    description:  
    <>
      <p>
        <a style={{color: "#222E3A"}} className="link-project" href="https://www.iwate-np.co.jp/" target="_blank">Iwate Nippo 岩手日報</a> and <a style={{color: "#222E3A"}} className="link-project" href="https://labo.wtnv.jp/" target="_blank">Watanave Lab</a> at the University of Tokyo 
        <br></br>
        The objective of this archive-visualisation was to create a virtual space to
        preserve the thoughts, memories and narratives of survivors of 
        the <a a style={{color: "#222E3A"}} className="link-project" href="https://en.wikipedia.org/wiki/2011_T%C5%8Dhoku_earthquake_and_tsunami" target="_blank">2011 Tohoku earthquake and tsunami disaster</a>,
        using the content of over 500 interviews. This included people’s 
        movements after 11th March 2011, their messages to their deceased loved ones, the 
        rebuilding of their homes, and their experiences over the past 10 years. 
      </p>
      <br />
      <p>
        My talented colleague, Dr Takata Yurina created 
        a <a style={{color: "#222E3A"}} className="link-project" href="https://311stories.archiving.jp/" target="_blank">map of the movements</a> of
        people whose homes were destroyed – many of them having to move over 4 times in the past 10 years. 
        The full archive page can be viewed 
        on <a style={{color: "#222E3A"}} className="link-project" href="https://www.iwate-np.co.jp/page/higashinihon2021#01-01" target="_blank">the Iwate Nippo website</a>.     
      </p>

    </>
  },
  {
    id: 'covid-news-timeline-japan',
    hasPage: true,  
    size: 'full',
    tag: 'work-other',
    projectTypeArray: ["data visualisation"],
    title: "Covid-19 Event Timeline in Japan",
    websiteUrl: "https://wtnv-lab.github.io/yahoo_news_covid_timeline/",
    videoUrl: './yahoo-news-covid-timeline1.mp4',
    imgUrl: 'https://live.staticflickr.com/65535/51225744751_40fe1a4bd2_o.png',
    smallImgUrl: 'https://live.staticflickr.com/65535/51226514274_36a7971232_o.png',
    individualPageImgUrl: "https://live.staticflickr.com/65535/51225744751_40fe1a4bd2_o.png",
    individualPageSmallImgUrl: 'https://live.staticflickr.com/65535/51225744751_40fe1a4bd2_o.png',
    backgroundColour: "#2B505F",
    responsibleFor: 'NLP, visualisation, website',
    tools: 'JavaScript, D3.js, GSAP, Python',
    toolsArray: ['JavaScript', 'D3.js', 'GSAP', 'Python'],
    client: 'University of Tokyo',
    standardLayout: true, 
    description: 
    <>
        <br/>
        The aim of this archive project was to document the events and topics surrounding the Covid-19 pandemic in Japan, 
        starting from Jan 2020 and running until Dec 2021, primarily via the use of news headlines. 

        The data is 
        from <a style={{color: "#2B505F"}} className="link-project" target="blank" href="http://agora.ex.nii.ac.jp/crisis/covid-19/mass-media/">the Covid-19 News Analysis Database</a> by <a style={{color: "#2B505F"}} className="link-project" target="blank"  href="http://agora.ex.nii.ac.jp/~kitamoto/">Prof Asanobu Kitamoto</a>; articles from Yahoo! Japan. 

    </>      
  },
  {
    id: 'i-dont-like-you', 
    hasPage: true, 
    size: 'full',
    tag: 'side-project',
    projectTypeArray: ["data art"],
    title: "Hate Crime in London - data art",
    websiteUrl: "https://deaxmachina.github.io/hatecrime_uk_p5/",
    videoUrl: './hatecrime1.mp4',
    imgUrl: 'https://live.staticflickr.com/65535/51359070135_7aaf27802e_o.png',
    smallImgUrl: 'https://live.staticflickr.com/65535/51359070135_7aaf27802e_o.png',
    individualPageImgUrl: 'https://live.staticflickr.com/65535/51357330062_7e5e5d40f1_o.png',
    individualPageSmallImgUrl: 'https://live.staticflickr.com/65535/51357330062_7e5e5d40f1_o.png',
    backgroundColour: "#51AF98",
    responsibleFor: 'everything: data gathering, design, visualisation, page code',
    tools: 'JavaScript, p5.js',
    toolsArray: ['JavaScript', 'p5.js'],
    client: 'Personal project',
    standardLayout: true, 
    description: 
    <>
    <p>
      <em>personal project</em> for 
      the <a className="link-project" href="https://showcase.p5js.org/" target='_blank'>p5.js 2021 Showcase: The Love Ethic!</a> 
      <br></br>
      I created this piece as a submission to the p5.js 2021 Showcase in July 2021. 
      I wanted to express with data art both the existing and the missing numbers behind 
      racist hate crime in the UK, and specifically in London. 
    </p>
    </> 
  },
  {
    id: 'svelte-patterns', 
    hasPage: true, 
    size: 'full',
    tag: 'work-reuters',
    projectTypeArray: ["front-end"],
    title: "Svelte Patterns",
    websiteUrl: "https://reuters-graphics.github.io/example_svelte-graph-patterns/",
    videoUrl: '',
    imgUrl: "https://live.staticflickr.com/65535/53115918199_0624a1b952_c.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/53115918199_0624a1b952_c.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/53115918199_0624a1b952_c.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/53115918199_0624a1b952_c.jpg",
    backgroundColour: "#dc4d46",
    responsibleFor: 'everything',
    tools: 'Svelte, JavaScript, D3.js, GSAP',
    toolsArray: ['Svelte', 'JavaScript', 'D3.js', 'GSAP'],
    client: 'Reuters Graphics',
    standardLayout: true, 
    description:  
    <>
    <p>
    <a style={{ textDecoration: 'underline'}} href='https://github.com/reuters-graphics/example_svelte-graph-patterns' target='_blank'>GitHub repo</a>
    <br></br><br></br>
    This project is a collection of examples and templates for working with Svelte in a number of situations that commonly 
    arise when making D3 graphs, scrollytelling webpages and other kinds of content we often produce.
    <br></br><br></br>
    It is meant to be a continuous work in progress 🛠️ and is by no means an exhaustive, or necessarily a 
    'best practices' 👓 type of collection. All the examples are use cases that I have encountered, 
    built a minimal example around and documented. They come with working code, explained code snippets 
    and notes about the approach taken. ⚠️ They might come with links to the Svelte repl where 
    I originally worked on the example, but these are not always the latest or the best version.
    </p>
    </>
  },
  {
    id: 'tdb-companies-graph', 
    hasPage: true, 
    size: 'full',
    tag: 'work-other',
    projectTypeArray: ["data visualisation", "front-end"],
    title: "Company Relationships Graphs",
    websiteUrl: "https://wtnv-lab.github.io/yahoo_news_covid_timeline/",
    imgUrl: 'https://live.staticflickr.com/65535/51357233830_24893c43ef_o.png',
    smallImgUrl: 'https://live.staticflickr.com/65535/51357233830_24893c43ef_o.png',
    individualPageImgUrl: 'https://live.staticflickr.com/65535/51509252857_26eb8a7148_o.png',
    individualPageSmallImgUrl: 'https://live.staticflickr.com/65535/51509252857_26eb8a7148_o.png',
    backgroundColour: "#62488F",
    responsibleFor: 'visualisation, website',
    tools: 'React, JavaScript, D3.js, Python...',
    toolsArray: ['React', 'JavaScript', 'D3.js', 'HTML5 Canvas', 'Python'],
    client: 'Teikoku Databank 株式会社 帝国データバンク',
    standardLayout: false, 
    description: 
    <></> 
  },
  {
    id: 'olympics-museum', 
    hasPage: true, 
    size: 'full',
    tag: 'work-other',
    projectTypeArray: ["data visualisation"],
    title: "Tokyo Olympics Museum School Trip",
    websiteUrl: "https://olympics.netlify.app/",
    videoUrl: './olympics2.mp4',
    imgUrl: "https://live.staticflickr.com/65535/51100179841_0cfe4b31b2_o.png",
    smallImgUrl: "https://live.staticflickr.com/65535/51100319547_51b0024bbb_o.png",
    individualPageImgUrl: "https://live.staticflickr.com/65535/51100179841_0cfe4b31b2_o.png",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/51100319547_51b0024bbb_o.png",
    backgroundColour: "#A62343",
    responsibleFor: 'data collection, visualisation, website',
    tools: 'React, JavaScript, D3.js, Rough.js, Python',
    toolsArray: ['React', 'JavaScript', 'D3.js', 'Rough.js', 'Python'],
    client: 'University of Tokyo',
    standardLayout: true, 
    description:  
    <>
      <p>
        A collaborative project between the Universities 
        of Tokyo and Tsukuba, coordinated by teaching bodies in Japan, with the purpose of producing 
        materials for classroom study prior to school trips to 
        the <a href="https://japan-olympicmuseum.jp/en/" style={{color: "#A62343"}} className="link-project" target="_blank">Olympics Museum in Tokyo</a>.
        The target audience was secondary school students in schools all around Japan. 
      </p>
      <br />
      <p>
        The questions and accompanying visualisations serve the purpose of cues for group discussions among 
        the students before they visit the museum and aim to bring up important topics around the history 
        and goals of the Olympics and Paralympics. The current iteration is a rough draft, or a PoC to show 
        what is possible through the use of interactive visualisations. 
        The Japanese version can be found <a href="https://olympicsjp.netlify.app/" style={{color: "#A62343"}} className="link-project" target="_blank">here</a>.
      </p>
    </>
  },
  {
    id: 'disney-anniv', 
    hasPage: false, 
    size: 'small-contribution',
    tag: 'work',
    projectTypeArray: ["front-end"],
    title: "Drawing on the past",
    websiteUrl: "https://www.reuters.com/graphics/DISNEY-100/HISTORY/znvnzmzgjvl/",
    // videoUrl: './dragonflies.mp4',
    imgUrl: 'https://live.staticflickr.com/65535/53882430274_137cc5fd9f_c.jpg',
    smallImgUrl: 'https://live.staticflickr.com/65535/53882430274_137cc5fd9f_c.jpg',
    individualPageImgUrl: 'https://live.staticflickr.com/65535/53882430274_137cc5fd9f_c.jpgg',
    individualPageSmallImgUrl: 'https://live.staticflickr.com/65535/53882430274_137cc5fd9f_c.jpg',
    backgroundColour: "gold",
    responsibleFor: 'technical implementation of depth scrolly section, parallax section',
    tools: 'Svelte, JavaScript, GSAP',
    toolsArray: ['Svelte', 'JavaScript', 'GSAP'],
    awards: 'SND 2024 Bronze + Award of excellence x3',
    awardsArray: [
      'SND 2024 Bronze award in 10f. Portfolio: Art Direction/Illustration (organization, staff or team)',
      'SND 2024 Award of excellence: 1A. Design: Features', 
      'SND 2024 Award of excellence: 1B. Design: Business', 
      'SND 2024 Award of excellence: 3a. Elements: Animation design'
    ],
    client: 'Reuters Graphics',
    standardLayout: true, 
    description: ''
  },
  {
    id: 'ukraine-civilians', 
    hasPage: false, 
    size: 'small-contribution',
    projectTypeArray: ["front-end"],
    tag: 'work-reuters',
    title: "Civilian lives and homes destroyed by the conflict",
    websiteUrl: "https://graphics.reuters.com/UKRAINE-CRISIS/CIVILIANS/zgpomygqmpd/",
    imgUrl: "https://live.staticflickr.com/65535/52946649902_e0c35b1231_c.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/52946649902_e0c35b1231_c.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/52268201602_fe49481d1f_h.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/52268201602_fe49481d1f_h.jpg",
    backgroundColour: "#2e343f",
    responsibleFor: 'technical implementation of video components',
    tools: 'Svelte, JavaScript, GSAP',
    toolsArray: ['Svelte', 'JavaScript', 'GSAP'],
    awards: 'SND 2023 Bronze',
    awardsArray: [ 
      'SND 2023 Bronze'
    ],
    client: 'Reuters Graphics',
    standardLayout: true, 
    description: ''
  },
  {
    id: 'ukraine-1-year', 
    hasPage: false, 
    size: 'small-contribution',
    tag: 'work-reuters',
    projectTypeArray: ["front-end"],
    title: "How Ukraine endured",
    websiteUrl: "https://www.reuters.com/graphics/UKRAINE-CRISIS/ANNIVERSARY-SURVIVAL/movaklxlmva/",
    imgUrl: "https://live.staticflickr.com/65535/52769100417_f983f8f024_c.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/52769100417_f983f8f024_c.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/52769100417_f983f8f024_c.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/52769100417_f983f8f024_c.jpg",
    backgroundColour: "#333333",
    responsibleFor: 'code implemetation',
    tools: 'Svelte, JavaScript',
    toolsArray: ['Svelte', 'JavaScript'],
    client: 'Reuters Graphics',
    standardLayout: true, 
    description: ''
  },
  {
    id: 'war-ukraine-food-crisis', 
    hasPage: true, 
    size: 'small-contribution',
    tag: 'work-reuters',
    projectTypeArray: ["data visualisation"],
    title: "The war in Ukraine is fuelling a global food crisis.",
    websiteUrl: "https://graphics.reuters.com/UKRAINE-CRISIS/FOOD/zjvqkgomjvx/",
    imgUrl: "https://live.staticflickr.com/65535/52268148217_55aff3e04c_h.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/52268148217_55aff3e04c_h.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/52268148217_55aff3e04c_h.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/52268148217_55aff3e04c_h.jpg",
    backgroundColour: "#d65562",
    responsibleFor: 'hero graphic, page design and code, some of the graphs on the page',
    tools: 'Svelte, JavaScript, Datawrapper, D3.js, Adobe Illustrator',
    toolsArray: ['Svelte', 'JavaScript', 'Datawrapper', 'D3.js', 'Adobe Illustrator'],
    client: 'Reuters Graphics',
    standardLayout: true, 
    description: ''
  },
  {
    id: 'road-to-stalemate', 
    hasPage: true, 
    size: 'small-contribution',
    tag: 'work-reuters',
    projectTypeArray: ["data visualisation", "front-end"],
    title: "The Road to Stalemate",
    websiteUrl: "https://graphics.reuters.com/UKRAINE-CRISIS/CONTROL/gdpzygorxvw/",
    imgUrl: "https://live.staticflickr.com/65535/52269159878_371c4c3cba_h.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/52269159878_371c4c3cba_h.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/52269159878_371c4c3cba_h.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/52269159878_371c4c3cba_h.jpg",
    backgroundColour: "#ea8677",
    responsibleFor: 'technical implementation of maps (partial) and other page code (partial)',
    tools: 'Svelte, JavaScript, D3.js, HTML5 Canvas',
    toolsArray: ['Svelte', 'JavaScript', 'D3.js', 'HTML5 Canvas'],
    client: 'Reuters Graphics',
    standardLayout: true, 
    description: ''
  },
  {
    id: 'ukraine-six-months', 
    hasPage: false, 
    size: 'small-contribution',
    tag: 'work-reuters',
    projectTypeArray: ["data visualisation"],
    title: "Six months of the war in Ukraine",
    websiteUrl: "https://www.reuters.com/graphics/UKRAINE-CRISIS/jnvwenoqdvw/",
    imgUrl: "https://live.staticflickr.com/65535/53882133777_e8bce07b57_z.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/53882133777_e8bce07b57_z.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/53882133777_e8bce07b57_z.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/53882133777_e8bce07b57_z.jpg",
    backgroundColour: "#b575a8",
    responsibleFor: 'D3 graphics on the page',
    tools: 'D3.js',
    toolsArray: ['D3.js'],
    client: 'Reuters Graphics',
    standardLayout: true, 
    description: '',
  },
  {
    id: 'perlin-dance', 
    hasPage: false, 
    size: 'small-project',
    tag: 'side-project',
    projectTypeArray: ["creative coding"],
    title: "Perlin Noise Dance",
    websiteUrl: "https://openprocessing.org/sketch/2137367",
    imgUrl: 'https://live.staticflickr.com/65535/53881686077_47701f53c1_c.jpg',
    smallImgUrl: 'https://live.staticflickr.com/65535/53881686077_47701f53c1_c.jpg',
    individualPageImgUrl: "https://live.staticflickr.com/65535/53881686077_47701f53c1_c.jpg",
    individualPageSmallImgUrl: 'https://live.staticflickr.com/65535/53881686077_47701f53c1_c.jpg',
    backgroundColour: "#805880",
    responsibleFor: 'everything',
    tools: 'p5.js',
    toolsArray: ['p5.js'],
    client: 'Personal project',
    description: ""
  },
  {
    id: 'blobby-perlin', 
    hasPage: false, 
    size: 'small-project',
    tag: 'side-project',
    projectTypeArray: ["creative coding"],
    title: "Blobby Ephemeral Flowers",
    websiteUrl: "https://openprocessing.org/sketch/2142133",
    imgUrl: 'https://live.staticflickr.com/65535/53882584761_bce214d55c_z.jpg',
    smallImgUrl: 'https://live.staticflickr.com/65535/53882584761_bce214d55c_z.jpg',
    individualPageImgUrl: 'https://live.staticflickr.com/65535/53882584761_bce214d55c_z.jpg',
    individualPageSmallImgUrl: 'https://live.staticflickr.com/65535/53882584761_bce214d55c_z.jpg',
    backgroundColour: "#805880",
    responsibleFor: 'everything',
    tools: 'p5.js',
    toolsArray: ['p5.js'],
    client: 'Personal project',
    description: ""
  },
  {
    id: 'murakami-books', 
    hasPage: false, 
    size: 'small-project',
    tag: 'side-project',
    projectTypeArray: ["data art", "creative coding"],
    title: "Books of Haruki Murakami",
    websiteUrl: "https://openprocessing.org/sketch/2144155",
    imgUrl: 'https://live.staticflickr.com/65535/53882420059_1ce3d5042c_c.jpg',
    smallImgUrl: 'https://live.staticflickr.com/65535/53882420059_1ce3d5042c_c.jpg',
    individualPageImgUrl: 'https://live.staticflickr.com/65535/53882420059_1ce3d5042c_c.jpg',
    individualPageSmallImgUrl: 'https://live.staticflickr.com/65535/53882420059_1ce3d5042c_c.jpg',
    backgroundColour: "gold",
    responsibleFor: 'everything: design, implementation',
    tools: 'JavaScript, p5.js',
    toolsArray: ['JavaScript', 'p5.js'],
    client: 'Personal project',
    standardLayout: true, 
    description: <> </> 
  },
  {
    id: 'dragonflies', 
    hasPage: true, 
    size: 'small-project',
    tag: 'side-project',
    projectTypeArray: ["creative coding"],
    title: "Generative Dragonflies",
    websiteUrl: "https://editor.p5js.org/deaxmachina/full/tm2Ls3cCu",
    videoUrl: './dragonflies.mp4',
    imgUrl: './dragonflies1.jpg',
    smallImgUrl: './dragonflies1.jpg',
    individualPageImgUrl: './dragonflies1.jpg',
    individualPageSmallImgUrl: './dragonflies1.jpg',
    backgroundColour: "gold",
    responsibleFor: 'everything: design, implementation',
    tools: 'JavaScript, p5.js, D3.js',
    toolsArray: ['JavaScript', 'p5.js', 'D3.js'],
    client: 'Personal project',
    standardLayout: true, 
    description: 
    <>
      <p>Work in progress: experiments in generative dragonflies.</p>
      <br></br>
      <a className="link-project" href="https://editor.p5js.org/deaxmachina/full/tm2Ls3cCu" target='_blank'>Experiment 1</a> 
      <br></br>
      <a className="link-project" href="https://editor.p5js.org/deaxmachina/full/TMuluhtbz" target='_blank'>Experiment 2</a> 
      <br></br>
      <a className="link-project" href="https://editor.p5js.org/deaxmachina/full/AocQdThMv" target='_blank'>Experiment 3</a> 
      <br></br>
    </> 
  },
  {
    id: 'tree-brush', 
    hasPage: false, 
    size: 'small-project',
    tag: 'side-project',
    projectTypeArray: ["creative coding"],
    title: "Tree with p5 brush",
    websiteUrl: "https://openprocessing.org/sketch/2151128",
    imgUrl: "https://live.staticflickr.com/65535/53883210913_4fd13eef31_z.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/53883210913_4fd13eef31_z.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/53883210913_4fd13eef31_z.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/53883210913_4fd13eef31_z.jpg",
    backgroundColour: "#b575a8",
    responsibleFor: 'everything',
    tools: 'p5.js, p5 brush',
    toolsArray: ['p5.js','p5 brush'],
    client: 'Personal project',
    standardLayout: true, 
    description: '',
  },
  {
    id: 'lunar-ny-2021', 
    hasPage: false, 
    size: 'small-project',
    tag: 'side-project',
    projectTypeArray: ["data art"],
    title: "Lunar New Year 2021",
    websiteUrl: "https://lunar2021.netlify.app/",
    imgUrl: "https://live.staticflickr.com/65535/53883299789_ab38213671_z.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/53883299789_ab38213671_z.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/53883299789_ab38213671_z.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/53883299789_ab38213671_z.jpg",
    backgroundColour: "#b575a8",
    responsibleFor: 'everything',
    tools: 'D3.js',
    toolsArray: ['D3.js'],
    client: 'Personal project',
    standardLayout: true, 
    description: '',
  },
  {
    id: 'anime-colours', 
    hasPage: true, 
    size: 'small-project',
    tag: 'side-project',
    projectTypeArray: ["data art", "creative coding"],
    title: "Visualisations of colours in anime",
    websiteUrl: "https://observablehq.com/@deaxmachina/colours-in-arcane",
    imgUrl: "https://live.staticflickr.com/65535/52269365575_8aab9f523a_h.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/52269365575_8aab9f523a_h.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/52269365575_8aab9f523a_h.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/52269365575_8aab9f523a_h.jpg",
    backgroundColour: "#252e25",
    responsibleFor: 'data gathering, concept, visualisation',
    tools: 'JavaScript, D3.js, HTML5 Canvas, GSAP, Python',
    toolsArray: ['JavaScript', 'D3.js', 'HTML5 Canvas', 'GSAP', 'Python'],
    client: 'Personal project',
    standardLayout: true, 
    description: 
    <> 
    <p>
    The mood of an animation contained in its colour palette. A collection of visualisations of colour in anime, currently including: <a href="https://observablehq.com/@deaxmachina/all-the-colours-in-totoro"
      style={{color: "#252e25"}} className="link-project" target="_blank">Totoro</a>, <a href="https://observablehq.com/@deaxmachina/colours-in-arcane"
      style={{color: "#252e25"}} className="link-project" target="_blank">Arcane</a>
    </p>
    </>
  },
  {
    id: 'words-lifetime', 
    hasPage: false, 
    size: 'small-project',
    tag: 'side-project',
    projectTypeArray: ["data art"],
    title: "Words we say in a lifetime",
    websiteUrl: "https://lifetimeofwords.netlify.app/",
    imgUrl: 'https://live.staticflickr.com/65535/51182741664_87330e57a0_o.jpg',
    smallImgUrl: 'https://live.staticflickr.com/65535/51182741664_87330e57a0_o.jpg',
    individualPageImgUrl: "https://live.staticflickr.com/65535/51183053540_9ed8338364_o.png",
    individualPageSmallImgUrl: 'https://live.staticflickr.com/65535/51183053540_9ed8338364_o.png',
    backgroundColour: "#805880",
    responsibleFor: 'data preparation, visualisation, website',
    tools: 'JavaScript, D3.js, GSAP, Python',
    toolsArray: ['JavaScript', 'D3.js', 'GSAP', 'Python'],
    client: 'Personal project',
    description: ""
  },
  {
    id: 'co2-trees', 
    hasPage: false, 
    size: 'small-project',
    tag: 'side-project',
    projectTypeArray: ["data art", "creative coding"],
    title: "Trees and CO2 in the atmosphere",
    websiteUrl: "https://deaxmachina.github.io/p5_trees/",
    imgUrl: 'https://live.staticflickr.com/65535/51276665860_581042e6c9_o.png',
    smallImgUrl: 'https://live.staticflickr.com/65535/51276665860_581042e6c9_o.png',
    individualPageImgUrl: "https://live.staticflickr.com/65535/51276665860_581042e6c9_o.png",
    individualPageSmallImgUrl: 'https://live.staticflickr.com/65535/51276665860_581042e6c9_o.png',
    backgroundColour: "#219ebc",
    responsibleFor: 'visualisation, website',
    tools: 'JavaScript, p5.js',
    toolsArray: ['JavaScript', 'p5.js'],
    client: 'Personal project',
    description: ""
  },
  {
    id: 'sakura-kyoto',
    hasPage: false, 
    size: 'small-project',
    tag: 'side-project', 
    projectTypeArray: ["data art"],
    title: "Cherry Blossom Bloom Times in Kyoto",
    websiteUrl: "https://observablehq.com/@deaxmachina/cherry-blossom-bloom-times-in-kyoto",
    imgUrl: 'https://live.staticflickr.com/65535/51102462279_101779f316_o.png',
    smallImgUrl: 'https://live.staticflickr.com/65535/51102629263_70096ca930_o.png',
    individualPageImgUrl: "https://live.staticflickr.com/65535/51102462279_101779f316_o.png",
    individualPageSmallImgUrl: 'https://live.staticflickr.com/65535/51102629263_70096ca930_o.png',
    backgroundColour: "#e27396",
    responsibleFor: 'data preparation, visualisation, website',
    tools: 'JavaScript, D3.js, Python',
    toolsArray: ['JavaScript', 'D3.js', 'Python'],
    client: 'Personal project',
    description: ""
  },
  {
    id: 'rugby-bracket', 
    hasPage: false, 
    size: 'small-project',
    tag: 'work',
    projectTypeArray: ["data visualisation"],
    title: "Rugby bracket 2023",
    websiteUrl: "https://www.reuters.com/graphics/RUGBY-UNION-WORLDCUP/BRACKET/egpbmlgjavq/",
    imgUrl: 'https://live.staticflickr.com/65535/53882505270_3ae050ff73_c.jpg',
    smallImgUrl: 'https://live.staticflickr.com/65535/53882505270_3ae050ff73_c.jpg',
    individualPageImgUrl: 'https://live.staticflickr.com/65535/53882505270_3ae050ff73_c.jpg',
    individualPageSmallImgUrl: 'https://live.staticflickr.com/65535/53882505270_3ae050ff73_c.jpg',
    backgroundColour: "gold",
    responsibleFor: 'implementation of front-end',
    tools: 'Svelte, JavaScript, D3.js',
    toolsArray: ['Svelte', 'JavaScript', 'D3.js'],
    client: 'Reuters Graphics',
    standardLayout: true, 
    description: <> </> 
  },
  // {
  //   id: 'steam-games', 
  //   hasPage: false, 
  //   size: 'small-project',
  //   tag: 'side-project',
  //   title: "Games on Steam, analysis",
  //   websiteUrl: "https://observablehq.com/d/69533edb762fa00d",
  //   imgUrl: "https://live.staticflickr.com/65535/52770126948_d4121cf335_b.jpg",
  //   smallImgUrl: "https://live.staticflickr.com/65535/52770126948_d4121cf335_b.jpg",
  //   individualPageImgUrl: "https://live.staticflickr.com/65535/52770126948_d4121cf335_b.jpg",
  //   individualPageSmallImgUrl: "https://live.staticflickr.com/65535/52770126948_d4121cf335_b.jpg",
  //   backgroundColour: "#b575a8",
  //   responsibleFor: 'everything: data analysis, visualisation',
  //   tools: 'Observable Plot, Python',
  //   toolsArray: ['Observable Plot', 'Python'],
  //   client: 'Personal project',
  //   standardLayout: true, 
  //   description: '',
  // },
  // {
  //   id: 'fortune-ceos', 
  //   hasPage: false, 
  //   size: 'small-project',
  //   tag: 'side-project',
  //   title: "Fortune 1000 CEOs",
  //   websiteUrl: "https://observablehq.com/@deaxmachina/fortune-1000-us-companies-2020",
  //   imgUrl: "https://live.staticflickr.com/65535/52268899061_251d619abf_h.jpg",
  //   smallImgUrl: "https://live.staticflickr.com/65535/52268899041_a73ec3416e_h.jpg",
  //   individualPageImgUrl: "https://live.staticflickr.com/65535/52268899061_251d619abf_h.jpg",
  //   individualPageSmallImgUrl: "https://live.staticflickr.com/65535/52268899041_a73ec3416e_h.jpg",
  //   backgroundColour: "#de7457",
  //   responsibleFor: 'design, visualisation',
  //   tools: 'JavaScript, D3.js',
  //   toolsArray: ['JavaScript', 'D3.js'],
  //   client: 'Personal project',
  //   standardLayout: true, 
  //   description: ""
  // },
]


export default projectsMetadata; 