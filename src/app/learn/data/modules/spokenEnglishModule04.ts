import { PublishedModule } from "../../types";
import { lessonClose, speakingCheck } from "./spokenEnglishLessonHelpers";

export const spokenEnglishModule04: PublishedModule = {
  pathSlug: "spoken-english-communication",
  pathTitle: "Spoken English Communication",
  moduleSlug: "interview-communication",
  moduleNumber: "04",
  title: "Interview Communication",
  estimatedTime: "45–60 minutes",
  syllabusHref: "/learn/spoken-english-communication",
  seo: {
    title:
      "Interview Communication in English | Tell Me About Yourself | NSL Digital Lab",
    description:
      "Practise HR interview answers in English: tell me about yourself, STAR stories, strengths and weaknesses, and questions for the interviewer.",
    keywords:
      "tell me about yourself, HR interview questions in English, self introduction for freshers, STAR method interview, interview communication skills",
    canonical:
      "/learn/spoken-english-communication/interview-communication",
  },
  prevModule: {
    href: "/learn/spoken-english-communication/daily-conversation-skills",
    label: "Previous: Module 03",
  },
  nextModule: {
    href: "/learn/spoken-english-communication/grammar-for-speaking",
    label: "Next: Module 05",
  },
  intro: {
    headline: "Interviews are a short, spoken story",
    body: [
      "Most first-round HR interviews in India reuse the same questions. You do not need 50 answers. You need five that you can say out loud without freezing.",
      "This module gives you a self-introduction, STAR stories for freshers, and calm phrases for tricky questions.",
    ],
    youWillLearn: [
      "A 60–90 second “tell me about yourself” script",
      "STAR stories using college, internships, or projects",
      "Strengths, weaknesses, and salary language",
      "Questions you should ask at the end",
    ],
  },
  lessons: [
    {
      slug: "tell-me-about-yourself",
      title: "Tell me about yourself",
      minutes: "12 min",
      summary:
        "Present, past proof, future fit — in under 90 seconds.",
      blocks: [
        {
          type: "p",
          text: "This is not your life story. It is why they should keep talking to you.",
        },
        {
          type: "ul",
          items: [
            "Present: who you are now. “I’m Riya, a final-year student focusing on UI/UX.”",
            "Proof: one project or internship. “I redesigned a campus event app in Figma and tested it with eight students.”",
            "Fit: why this role. “I’m looking for an internship where I can do real research and handoff, not only mock screens.”",
          ],
        },
        {
          type: "related",
          href: "/resources/spoken-english-practice-sheet",
          kicker: "Free download",
          title: "Spoken English practice sheet",
          text: "Print the 10-minute habit, tell-me-about-yourself script, and pronunciation list.",
          ctaLabel: "Download the sheet",
        },
        ...lessonClose({
          mistake: "Starting from childhood and still talking at minute four.",
          takeaway: "Present, one proof, why this role. Stop.",
          tip: "Time it. If it is over 90 seconds, cut the school list.",
          exerciseSteps: [
            "Write three bullets: present, proof, fit.",
            "Record the spoken version. Cut anything that is not those three.",
          ],
          check: speakingCheck(
            "A strong “tell me about yourself” should mainly cover:",
            "Who you are now, one proof, and why this role",
            "Your full education from class 1",
            "Only your hobbies",
            "Present, proof, fit. That is the whole job of the answer.",
          ),
        }),
      ],
    },
    {
      slug: "star-for-freshers",
      title: "STAR stories when you have little work experience",
      minutes: "10 min",
      summary:
        "College projects, internships, events, and part-time work all count.",
      blocks: [
        {
          type: "term",
          term: "STAR",
          meaning:
            "Situation, Task, Action, Result. A way to tell one story instead of listing adjectives.",
        },
        {
          type: "ul",
          items: [
            "Situation: “Our college fest site kept losing registrations.”",
            "Task: “I had to simplify the form on mobile.”",
            "Action: “I interviewed five students, cut three fields, and tested a prototype.”",
            "Result: “Form completion in the test group went from messy drop-offs to everyone finishing.”",
          ],
        },
        {
          type: "p",
          text: "If you have no job, use a project, a club, a freelance gig, or a family business task. The structure matters more than the brand name.",
        },
        ...lessonClose({
          mistake: "Saying “I am a hard worker” with no story.",
          takeaway: "One STAR story beats five adjectives.",
          tip: "Prepare two stories: one about a problem you solved, one about working with other people.",
          exerciseSteps: [
            "Write STAR bullets for one project.",
            "Speak them in 60–75 seconds.",
          ],
          check: speakingCheck(
            "STAR is useful because it:",
            "Turns experience into a short story with a result",
            "Replaces the need for a portfolio",
            "Is only for managers",
            "Freshers can use projects. The structure still works.",
          ),
        }),
      ],
    },
    {
      slug: "tricky-hr-questions",
      title: "Strengths, weaknesses, salary, relocation",
      minutes: "10 min",
      summary:
        "Answer honestly, briefly, and with a plan — not with a speech.",
      blocks: [
        {
          type: "ul",
          items: [
            "Strength: name a skill they need, then give a 20-second example.",
            "Weakness: name a real one you are fixing. “I used to over-design. Now I time-box the first draft.” Do not say “I work too hard.”",
            "Salary: give a range if you must, or “I’m focused on the learning and the role. I’m open to your intern stipend range.”",
            "Relocation / night shifts: know your honest answer before the call.",
          ],
        },
        ...lessonClose({
          mistake: "Inventing a fake weakness or quoting a random salary number.",
          takeaway: "Short, honest, with a next step.",
          tip: "Write your salary range on paper before the interview so you do not panic-invent it.",
          exerciseSteps: [
            "Write one strength + example.",
            "Write one real weakness + what you are doing about it.",
            "Say both out loud.",
          ],
          check: speakingCheck(
            "A useful weakness answer includes:",
            "A real gap and how you are improving it",
            "“I have no weaknesses”",
            "A joke about sleeping too little",
            "Honesty plus a fix sounds mature.",
          ),
        }),
      ],
    },
    {
      slug: "questions-for-them",
      title: "Questions you should ask them",
      minutes: "8 min",
      summary:
        "“No questions” sounds like you do not want the job.",
      blocks: [
        {
          type: "ul",
          items: [
            "“What would a successful intern look like in the first 30 days?”",
            "“Which tools does the design / marketing team use day to day?”",
            "“Will I work on a live project or a training project?”",
            "“How is feedback given?”",
          ],
        },
        ...lessonClose({
          mistake: "Asking only about work-from-home and stipend in the first breath.",
          takeaway: "Ask about the work first. Logistics can come second.",
          tip: "Write two questions on a sticky note next to your laptop before a video interview.",
          exerciseSteps: [
            "Choose two questions from the list.",
            "Practise asking them slowly, as if the interview is ending.",
          ],
          check: speakingCheck(
            "At the end of an interview you should:",
            "Ask one or two questions about the work",
            "Say you have no questions",
            "Leave immediately",
            "Questions show interest and help you decide if the role is real.",
          ),
        }),
      ],
    },
  ],
  miniProject: {
    title: "Mini project: intro + two STAR answers",
    goal: "Be able to run a five-minute mock HR round without notes.",
    starterLabel: "Script sheet",
    steps: [
      "Write and record a 60–90 second introduction.",
      "Write two STAR stories (project + teamwork).",
      "Record each STAR in about one minute.",
      "Do a mock round with a friend or by playing the questions from your phone.",
    ],
    starterCode: `Q: Tell me about yourself
Present:
Proof:
Fit:

Q: Tell me about a project
S:
T:
A:
R:

Q: Tell me about a time you worked with others
S:
T:
A:
R:

Closing questions:
1.
2.`,
    doneWhen: [
      "Introduction is under 90 seconds.",
      "Both STAR answers have a result, even a small one.",
      "You can ask two questions at the end without reading.",
    ],
  },
  summary: {
    headline: "You now have an interview kit",
    body: [
      "Five spoken pieces cover most HR screens: intro, two stories, strength/weakness, and questions for them.",
      "Next you will clean the grammar that still trips you while you speak.",
    ],
    recap: [
      "Present, proof, fit",
      "STAR for projects",
      "Always ask a question back",
    ],
  },
  knowledgeCheck: speakingCheck(
    "What belongs in “tell me about yourself”?",
    "Who you are now, one proof, and why this role",
    "Your entire family background",
    "Only the company’s history",
    "Keep it short and relevant to the job.",
  ),
};

export default spokenEnglishModule04;
