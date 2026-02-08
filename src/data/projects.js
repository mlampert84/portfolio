import Satzanalysator from "../images/satz-analysator-2.png"
import MusicalMemory from "../images/musical-memory.png"
import Proprietary from "../images/Proprietary.png"
import CorpusCoranicum from "../images/CorpusCoranicum.png"
const professionalProjects = [
  {
    title: "Corpus Coranicum",
    description:
      "I developed <a href='https://corpuscoranicum.de' target='_blank'>this site</a> together with a colleague at the BBAW. Our assignment was to update the  existing website for a Quran research project at the BBAW.  That site and codebase had atrophied over the years, so we decided for a complete rewrite. We made a Laravel application that pulled data from the existing MySql Database and functioned as a JSON Rest API. We then built the frontend as a Vue/Typescript SPA that consumed the Rest API.",
    victories: ["The website we made was so much easier to navigate than the old website, and we received a lot of positive feedback from its users.", "It felt great to support a research project with such international reach."],
    defeats: ["Choosing an SPA over a standard MVC architecture that would deliver finished Html was, in retrospect, a mistake.  The site is less performant than it could otherwise be, it has proved difficult to archive, and it was tricky to make the site visible to Google.", "The site still narrowly follows the organization and layout of the old website it replaced. We could do so much better, but the research project was, after running for almost 20 years, shut down."],
    technology: ["Vue", "Typescript", "Laravel", "Tailwind", "XSLT", "Docker", "Nginx"],
    image: CorpusCoranicum,
    link: "https://corpuscoranicum.de",
  },
  {
    title: "Audit Applications",
    description:
      "For almost three years, I worked with about eight other developers in a team at PWC Deutschland.  Our goal was to build various software applications that auditors could use to streamline their process for auditing companies.  One of these applications was the checklist management component of <a href='https://www.pwc.de/de/im-fokus/abschlusspruefung/unsere-tools.html' target='_blank'>ALI – Checklisten 2.0</a>.  It allowed auditors to construct and modify various lists of topics they had to address in a standard audit.  I spent a year just doing frontend development with VueJs, and, for a pilot project, Elm, and then I switched to backend development with Java Spring Boot.",
    victories: ["I had an awesome boss, Kiriakos Krastillis, who formed me from a self-taught amateur programmer into a decent novice software engineer."],
    defeats: ["I didn't stay long enough to see any of our software projects come to fruition.  When my boss left the company, the work culture suffered, as did our timeline for completing a big software project.  When a partner at the firm told my team in a meeting that missing our deadline meant that we were deficient in our craft, I decided it was time to leave."],
    technology: ["Vue", "Java Spring Boot", "Elm"],
    image: Proprietary,
    link: "https://www.pwc.de/de/im-fokus/digitale-abschlusspruefung/unsere-tools.html",
  },
]
const personalProjects = [
  {
    title: "Satzanalysator",
    description:
      "This small frontend application allows teachers and students of German to easily mark the main parts of a sentence. When learning to read in a foreign language, identifying the main parts of speech is half the battle.",
    victories: ["Placeholder victory 1", "Placeholder victory 2"],
    defeats: ["Placeholder defeat 1", "Placeholder defeat 2"],
    technology: ["react", "typescript"],
    image: Satzanalysator,
    link: "https://satzanalysator.com/",
  },
  {
    title: "Musical Memory",
    description:
      "The game Memory, but instead of matching pictures, the players match snippets of music.",
    victories: ["Placeholder victory 1", "Placeholder victory 2"],
    defeats: ["Placeholder defeat 1", "Placeholder defeat 2"],
    technology: ["elm", "webpack"],
    image: MusicalMemory,
    link: "https://github.com/mlampert84/musical_memory",
  },
]

export { personalProjects, professionalProjects } 
