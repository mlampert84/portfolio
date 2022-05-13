import Satzanalysator from "../images/satz-analysator-2.png"
import MusicalMemory from "../images/musical-memory.png"
import Proprietary from "../images/Proprietary.png"
import CorpusCoranicum from "../images/CorpusCoranicum.png"
const professionalProjects = [
  {
    title: "Corpus Coranicum",
    description:
      "I developed this site toegher with a partner on a two-person team.  We used existing data from a MySql Database to build a JSON API with Laravel, which is then consumed by a Vue/Typescript Frontend.",
    technology: ["Vue/Typescript", "Laravel", "Tailwind", "XSLT", "Docker", "Nginx"],
    image: CorpusCoranicum,
    link: "https://corpuscoranicum.de",
  },
  {
    title: "Audit Applications",
    description:
      "Various applications for data retrieval and managing checklists that are designed to help auditors with their audit process.  One of these applications was the checklist management component of <a href='https://www.pwc.de/de/im-fokus/digitale-abschlusspruefung/unsere-tools.html' target='_blank'>ALI – Checklisten 2.0</a>.",
    technology: ["Vue", "Java Spring Boot", "Elm"],
    image: Proprietary,
    link: "https://www.pwc.de/de/im-fokus/digitale-abschlusspruefung/unsere-tools.html",
  },
]
const personalProjects = [
  {
    title: "Satzanalysator",
    description:
      "This small frontend application allows teachers and students of German to easily mark the main parts of a sentence.  When learing to read in a foreign language, identifying the main parts of speech is half the battle.",
    technology: ["react", "typescript"],
    image: Satzanalysator,
    link: "https://satzanalysator.com/",
  },
  {
    title: "Musical Memory",
    description:
      "The game Memory, but instead of matching pictures, the players match snippets of music.",
    technology: ["elm", "webpack"],
    image: MusicalMemory,
    link: "https://github.com/mlampert84/musical_memory",
  },
]

export { personalProjects, professionalProjects } 
