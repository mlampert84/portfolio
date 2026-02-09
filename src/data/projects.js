import Satzanalysator from "../images/satz-analysator-2.png"
import Proprietary from "../images/Proprietary.png"
import CorpusCoranicum from "../images/CorpusCoranicum.png"
import EdiarumWebdav from "../images/ediarum-webdav.png"
import EdiarumBackend from "../images/ediarum-backend.png"
import KishibEditor from "../images/kishib.png"

const professionalProjects = [
  {
    title: "Ediarum Webdav",
    description:
      `Ediarum is a suite of software packages developed at the Berlin-Brandenburg Academy of Sciences with the aim of allowing users to easily edit the XML files that form the basis of our critical editions.  Before I wrote Ediarum Webdav, we were storing the XML files in eXist-db, an XML database.  This created some problems. For one, the files were not automatically checked into Git version control.  Additionally, eXist-db would on occasion crash, and recovering the latest state of the XML files could be challenging if not, on occasion, impossible. Finally, eXist-db appeared to, on occasion, remove semantically relevant whitespace from the XML files we gave it to store.  In dialogue with my colleagues, I developed Ediarum Webdav with a simple goal in mind: deliver the XML files (from a Git repoistory on a server) over Webdav to Oxygen, the XML editor we use at the Academy, and automaticaly commit any changes to the files to version control.  Using Laravel PHP, I slapped together a user mangaement and project management console, and integrated an open source PHP webdav library, as you can see on <a href="https://github.com/ediarum/ediarum.WEBDAV">its github page</a>.`,
    victories: [
      "About a dozen projects at the Academy now use this software.  It has been humming along without incident (fingers crossed!) for over a year.  The project data is now securely stored in Git version control with multiple backups on multiple servers."
    ],
    defeats: ["None yet. As the software has become critical to the technical infrastructore of multiple critical edition projects, I've begun to feel that a rewrite in Java, which, in my opinion, provides more robust typing and testing possibilities than Php, might make sense. But at the moment the tradeoffs of doing that don't quite seem worth it."],
    technology: ["Vue", "Php Laravel", "Tailwind"],
    image: EdiarumWebdav,
    link: "https://github.com/ediarum/ediarum.WEBDAV",
  },
  {
    title: "Kishib Editor",
    description:
      "I started working with the Kishib research team in April 2025. They are a team of archeologists whose goal is to build a complete database off all known, legitimately acquired, ancient cylinder seals from Near Eastern cuniform societies.  I inherited from them a MySql database of about 20,000 seals, which they had, up until that point, managed directly via a MySql client. I had the assignment to build out their technical infrastructure for data input.  The result is a CRUD application suited (hopefully!) to their needs.  It handles both manual form input, as well as data import from excel files. Building a CRUD application for complex data entities takes time and requires close coordination with the subject matter experts.  Recently, with the LLM tool Claude Code, I have been able to increase my development velocity of the online editor.  As of this writing (February 2026), Claude feels revolutionary, in comparison to ChatGPT or Github Copilot, which provide good assistance for writing software, but don't seem to shift the entire paradigm the way a really good agenic software like Claude Code seems to do.",
    victories: ["After many months of work, the Kishib research team now has a somewhat viable system."],
    defeats: ["At the beginning of my work on the porject, I suggested that I could produce both the Editor and a first version of a public-facing website within a year.  I massively overpromised.  Since then, a wonderful second software developer has, thankfully, joined the project and taken over responsibility for building the public-facing website."],
    technology: ["Claude Code", "Laravel", "Vue/Vuetify"],
    image: KishibEditor,
    link: "https://www.bbaw.de/forschung/kisib-digital-corpus-of-ancient-west-asian-seals-and-sealings",
  },
  {
    title: "Ediarum Backend",
    description:
      "Ediarum Backend, currently in development, is a tool to map XML data to a database, be it a Sql Database or a Fulltext Search Engine.  I wanted to build a software that is faster, simpler, and more reliable than the XML database we currently use at the Berlin-Brandenburg Academy of Sciences.  The software consists of an intuitive UI built with Vuetify that allows the user to define what data (via XPath) to pull from which files, and then a backend Rest API, written in Kotlin, that saves those mappings and pushes the data to a database.",
    victories: ["The project is too new to say. Claude Code is helping me develop an MVP in a reasonable amount of time."],
    defeats: ["To early to say."],
    technology: ["Kotlin" , "Vue/Vuetify"],
    image: EdiarumBackend,
    link: null,
  },
  {
    title: "Corpus Coranicum",
    description:
      "I developed <a href='https://corpuscoranicum.de' target='_blank'>the website for Corpus Coranicum</a>, a research project on the Quran, together with a colleague at the Berlin-Brandenburg Academy of Sciences. Our assignment was to update the  existing website that had been around for years.  That site and its codebase had atrophied over the years, so we decided for a complete rewrite. We made a Laravel application that pulled data from the existing MySql Database and functioned as a JSON Rest API. We then built the frontend as a Vue/Typescript SPA that consumed the Rest API.",
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
]

export { professionalProjects } 
