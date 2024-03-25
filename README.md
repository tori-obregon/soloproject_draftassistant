
# Fantasy Basketball Draft Assistant

A fantasy basketball draft assistant that help users understand the quality of their draft choices. 


## Tech Stack:

**Frontend**: HTML, CSS, JavaScript, React

**State Management**: Initially Redux, now transitioning to Jotai for simplicity and efficiency

**Backend**: Express (Node.js)

**Database**: PostgreSQL

**Build Tool**: Webpack


The initial version used Redux to manage the 400 basketball players each with their own set of stats, as well as managed the calculated drafted fantasy team state. 

In an attempt to simplify, Redux is being replaced by Jotai which reduces the number of files and complexity needed to manage state. 


## Next on the Roadmap

- **UI Enhancements:** Incorporate a UI library (e.g., NextUI or Shadcn) to elevate the user interface design.

- **Comprehensive Dashboard:** Finalize the dashboard with integrated calculations for a holistic view of drafted teams.

- **Data Import Functionality:** Enable users to import NBA player projections for personalized analysis.

- **Advanced Analytics:** Implement algorithms to convert raw statistical data into meaningful fantasy scores.

- **Interactive Features:** Introduce features like team reset, cost input, and data color coding to signify player quality.

## Lessons Learned:

This being the first full stack application I built after seriously deciding to switch to software engineering, this was the project where I got to flex my creativity to build a tool that I had wanted to build for a long time. In doing this project, I gained a greater understanding of how technologies can work together to bring a concept into reality. 

Key takeaways include:

- **Modular Development:** The importance of breaking down complex functionalities into manageable components, as well as thinking ahead of how my code will affect my future tasks.

- **Strategic Technology Integration:** This project required me to evaluate how best to include and set up technologies and frameworks in order to render what creatively I had planned for this app.

- **Continuous Learning:** Through this project I embraced the iterative process of learning, adapting, and evolving both the application and my skills as a developer.