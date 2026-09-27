import { PublishedModule } from "../../types";
import { lessonClose, speakingCheck } from "./spokenEnglishLessonHelpers";

export const spokenEnglishModule03: PublishedModule = {
  pathSlug: "spoken-english-communication",
  pathTitle: "Spoken English Communication",
  moduleSlug: "daily-conversation-skills",
  moduleNumber: "03",
  title: "Daily Conversation Skills",
  estimatedTime: "40–55 minutes",
  syllabusHref: "/learn/spoken-english-communication",
  seo: {
    title:
      "Daily English Conversation Skills | Office Travel Shopping | NSL Digital Lab",
    description:
      "Practise everyday English conversations for shopping, travel, college, and office small talk with simple role-plays.",
    keywords:
      "daily English conversation, English for shopping, English for travel, office English conversation, small talk in English",
    canonical:
      "/learn/spoken-english-communication/daily-conversation-skills",
  },
  prevModule: {
    href: "/learn/spoken-english-communication/pronunciation-practice",
    label: "Previous: Module 02",
  },
  nextModule: {
    href: "/learn/spoken-english-communication/interview-communication",
    label: "Next: Module 04",
  },
  intro: {
    headline: "Most English is small, useful talk",
    body: [
      "You do not need a debate. You need greetings, questions, and a way to keep a conversation going for two minutes.",
      "This module gives you scripts for shops, travel, college, and the office. Scripts are training wheels. After a few days you will change the words.",
    ],
    youWillLearn: [
      "Greetings and small talk that do not sound robotic",
      "Shopping, travel, and asking-for-help phrases",
      "College and office everyday talk",
      "How to ask a follow-up so the conversation does not die",
    ],
  },
  lessons: [
    {
      slug: "greetings-small-talk",
      title: "Greetings and small talk",
      minutes: "8 min",
      summary:
        "Open, add one detail, then ask a question back.",
      blocks: [
        {
          type: "ul",
          items: [
            "Open: “Hi, I’m Riya. Nice to meet you.”",
            "Add one detail: “I’m in the design internship batch.”",
            "Ask back: “How about you — which team are you on?”",
          ],
        },
        {
          type: "p",
          text: "Safe small-talk topics: work, college, the event you are both at, the weather if it is actually extreme. Avoid salary, politics, and personal questions on first meeting.",
        },
        ...lessonClose({
          mistake: "Answering “I’m fine” and stopping, which ends the talk.",
          takeaway: "Open + one detail + a question back.",
          tip: "Prepare three personal facts you are happy to share: city, course, current project.",
          exerciseSteps: [
            "Write your three-line greeting.",
            "Say it to a mirror, then to a friend or a voice note.",
          ],
          check: speakingCheck(
            "A simple small-talk pattern is:",
            "Greeting, one detail, then a question",
            "A two-minute speech about yourself",
            "Only “Hi” and silence",
            "Give a little, then invite the other person to speak.",
          ),
        }),
      ],
    },
    {
      slug: "shopping-travel-help",
      title: "Shopping, travel, and asking for help",
      minutes: "10 min",
      summary:
        "Useful English is specific: what you need, and a polite ask.",
      blocks: [
        {
          type: "ul",
          items: [
            "Shop: “Excuse me, do you have this in a smaller size?”",
            "Travel: “Which platform is the Pune express?” / “How long does it take to the airport?”",
            "Help: “Could you help me find the registration desk?”",
            "If you did not hear: “Sorry, could you repeat that, please?”",
          ],
        },
        {
          type: "p",
          text: "Name the thing. “This” plus a point is fine in a shop. On a call, replace pointing with a noun: “the blue folder”, “the 6 p.m. bus”.",
        },
        ...lessonClose({
          mistake: "Saying only “This one?” without a noun, then getting the wrong thing.",
          takeaway: "Polite opener + specific need.",
          tip: "“Excuse me” at the start makes almost any request sound better.",
          exerciseSteps: [
            "Role-play buying a SIM or a notebook in English.",
            "Role-play asking a station staff member for the next train.",
          ],
          check: speakingCheck(
            "If you did not hear someone, a clear phrase is:",
            "“Sorry, could you repeat that, please?”",
            "“What?”",
            "Silence",
            "A short polite repeat request is professional.",
          ),
        }),
      ],
    },
    {
      slug: "college-office-talk",
      title: "College and office everyday talk",
      minutes: "8 min",
      summary:
        "The same pattern works at college and in internships.",
      blocks: [
        {
          type: "ul",
          items: [
            "Asking for a deadline: “When do you need this by?”",
            "Offering help: “I can take the first draft if that helps.”",
            "Checking understanding: “Just to confirm, I should send it by 5 p.m., right?”",
            "Joining a group: “Mind if I sit here? I’m Riya from the intern batch.”",
          ],
        },
        ...lessonClose({
          mistake: "Saying “Okay” to a task you did not understand.",
          takeaway: "Confirm the task in one sentence before you leave the chat.",
          tip: "Write the confirmation in WhatsApp if the spoken version still feels hard: “Sharing by 5 p.m. today.”",
          exerciseSteps: [
            "Ask a classmate for a deadline in English.",
            "Repeat the deadline back to confirm.",
          ],
          check: speakingCheck(
            "After you are given a task, you should:",
            "Confirm the deadline and the deliverable in one sentence",
            "Say okay even if you are unsure",
            "Wait until the deadline to ask",
            "A confirmation sentence prevents most intern mistakes.",
          ),
        }),
      ],
    },
    {
      slug: "keep-it-going",
      title: "Keep the conversation going",
      minutes: "8 min",
      summary:
        "Follow-up questions turn a greeting into a real talk.",
      blocks: [
        {
          type: "ul",
          items: [
            "What / which: “Which tool do you use for design?”",
            "How: “How did you start learning SEO?”",
            "Why (carefully): “What made you choose this internship?”",
            "Echo: they mention Pune → “Oh, I studied there. Which area?”",
          ],
        },
        {
          type: "p",
          text: "You do not need clever jokes. Curiosity plus one follow-up is enough.",
        },
        ...lessonClose({
          mistake: "Asking five questions in a row without sharing anything about yourself.",
          takeaway: "Question, listen, add one of your own details, then another question.",
          tip: "Prepare two follow-ups for any event: “What are you working on?” and “How’s that going?”",
          exerciseSteps: [
            "With a friend, practise a two-minute talk using only greetings and follow-ups.",
            "Swap roles.",
          ],
          check: speakingCheck(
            "A good follow-up after someone says they intern in SEO is:",
            "“Nice — what kind of work are you doing there?”",
            "“SEO is Google.”",
            "Changing the topic immediately",
            "Ask about their actual work. That is real conversation.",
          ),
        }),
      ],
    },
  ],
  miniProject: {
    title: "Mini project: three role-plays",
    goal: "Speak three everyday scenes without reading every word.",
    starterLabel: "Role-play cards",
    steps: [
      "Write 6–8 lines for a shop conversation.",
      "Write 6–8 lines for asking travel help.",
      "Write 6–8 lines for office/college small talk.",
      "Practise each twice: once reading, once from memory.",
    ],
    starterCode: `Shop:
You: Excuse me, do you have a plain notebook?
Staff: Yes, on the second shelf.
You: Great. How much is this one?
Staff: Forty rupees.
You: I’ll take it. Thank you.

Travel:
You: Excuse me, which bus goes to the station?
Staff: The 12A. It leaves from stand 4.
You: How long does it take?
Staff: About 25 minutes.

Office:
You: Hi, I’m Riya. I’m the new design intern.
Them: Welcome. I’m Aman, from content.
You: Nice to meet you. What are you working on this week?`,
    doneWhen: [
      "You can perform each scene without looking at every line.",
      "You used “excuse me” or “could you” at least once.",
      "You asked one follow-up question in the office scene.",
    ],
  },
  summary: {
    headline: "Daily English is a handful of patterns",
    body: [
      "Greet, add a detail, ask back. Name what you need. Confirm tasks. Follow up.",
      "Next you will use the same skills in the highest-pressure conversation: the interview.",
    ],
    recap: [
      "Open + detail + question",
      "Be specific when you ask for help",
      "Confirm tasks before you start",
    ],
  },
  knowledgeCheck: speakingCheck(
    "Someone says they are in a digital marketing internship. A natural follow-up is:",
    "“What kind of work are you doing there?”",
    "“Okay.” then silence",
    "A lecture on marketing theory",
    "Ask about their work. That keeps the conversation alive.",
  ),
};

export default spokenEnglishModule03;
