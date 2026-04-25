# Web Dev Final Project

## Project Pitch

### Idea

Remote Work Café Finder

### Details

- User Persona: Freelancer or remote worker in Toronto
- Problem: Finding a café with good wifi, outlets, and remote-work vibe
- Gallery: Café cards filterable by neighbourhood, feature, or rating
- Widget: Current weather to determine whether to go out
- Form: "Suggest a café" with custom field validation

## Tech Stack & Rationale

| Technology               | Rationale                                                                                                 |
| ------------------------ | --------------------------------------------------------------------------------------------------------- |
| **HTML5**                | Semantic markup provides accessibility and SEO benefits                                                   |
| **CSS3**                 | Modern features like Flexbox, Grid, and CSS custom properties enable responsive design without frameworks |
| **JavaScript (Vanilla)** | No build tools or frameworks required — demonstrates core DOM manipulation and event handling             |
| **Open-Meteo API**       | Free, no API key required for weather data — eliminates authentication complexity                         |

### Challenges & Solutions

Creating a seamless infinite scroll for the hero ticker proved challenging because CSS percentage-based animations reference the container's width, not the content's width. It was solved by adding width: `max-content` to the track element and adjusting the animation to scroll exactly 50% (one complete set of images) before looping back.

## How to Run the Project

**Live Demo:** https://remote-work-cafe-finder.netlify.app/

**Local Development:**

1. **Clone or download** the project to your local machine
2. **Open the project** in a code editor (VS Code recommended)
3. **Launch a local server** — the simplest way is using the VS Code "Live Server" extension:
   - Install the "Live Server" extension
   - Right-click `index.html` and select "Open with Live Server"
4. **Alternatively**, open `index.html` directly in a browser (note: some features like weather data may require a local server)
