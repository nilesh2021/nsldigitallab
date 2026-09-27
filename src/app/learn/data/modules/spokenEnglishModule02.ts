import { PublishedModule } from "../../types";
import { lessonClose, speakingCheck } from "./spokenEnglishLessonHelpers";

export const spokenEnglishModule02: PublishedModule = {
  pathSlug: "spoken-english-communication",
  pathTitle: "Spoken English Communication",
  moduleSlug: "pronunciation-practice",
  moduleNumber: "02",
  title: "Pronunciation Practice",
  estimatedTime: "40–55 minutes",
  syllabusHref: "/learn/spoken-english-communication",
  seo: {
    title:
      "Pronunciation Practice | Word Stress and Tone | NSL Digital Lab",
    description:
      "Learn clear English pronunciation, word stress, and tone for interviews and everyday conversation. Clarity matters more than accent.",
    keywords:
      "English pronunciation practice, word stress in English, spoken English tone, clear pronunciation, interview English pronunciation",
    canonical:
      "/learn/spoken-english-communication/pronunciation-practice",
  },
  prevModule: {
    href: "/learn/spoken-english-communication/speak-with-confidence",
    label: "Previous: Module 01",
  },
  nextModule: {
    href: "/learn/spoken-english-communication/daily-conversation-skills",
    label: "Next: Module 03",
  },
  intro: {
    headline: "People need to understand you the first time",
    body: [
      "Pronunciation is not about sounding British or American. It is about being easy to follow on a phone call or in a noisy interview room.",
      "Two skills do most of the work: word stress (which part of the word is stronger) and tone (whether your voice rises, falls, or stays steady).",
      "You will practise words that show up in internships, offices, and HR rounds.",
    ],
    youWillLearn: [
      "Why clarity beats accent",
      "Word stress and sentence stress",
      "Tone for statements, questions, and requests",
      "A short list of high-value interview words",
    ],
  },
  lessons: [
    {
      slug: "clarity-not-accent",
      title: "Clarity, not accent",
      minutes: "8 min",
      summary:
        "Interviewers want to understand you. They are not scoring your accent.",
      blocks: [
        {
          type: "p",
          text: "India has many English accents. That is normal. Problems start when words are swallowed, spoken too fast, or stressed on the wrong syllable.",
        },
        {
          type: "ul",
          items: [
            "Finish the last sound of a word: “project”, not “proje”.",
            "Slow down 10%. Fast speech hides mistakes.",
            "Open your mouth a little more on long vowels: “team”, “need”, “please”.",
          ],
        },
        ...lessonClose({
          mistake: "Copying a movie accent instead of finishing your words.",
          takeaway: "Clear and slightly slower beats fast and fancy.",
          tip: "Record one sentence at your normal speed, then the same sentence 10% slower. Keep the slower one.",
          exerciseSteps: [
            "Say: “I designed a simple checkout flow in Figma.”",
            "Say it again, finishing every word, especially “designed”, “simple”, and “Figma.”",
          ],
          check: speakingCheck(
            "The main pronunciation goal in interviews is:",
            "Being easy to understand",
            "Sounding exactly like a news presenter",
            "Speaking as fast as possible",
            "Clarity is the goal. Accent is not a score.",
          ),
        }),
      ],
    },
    {
      slug: "word-stress",
      title: "Word stress and sentence stress",
      minutes: "10 min",
      summary:
        "English is easier to hear when the right syllable is stronger.",
      blocks: [
        {
          type: "term",
          term: "Word stress",
          meaning:
            "The stronger beat in a word. In “interview”, the stress is on IN: IN-ter-view.",
        },
        {
          type: "ul",
          items: [
            "INterview, deVELopment, deSIGN, proJECT (noun: PRO-ject; verb: pro-JECT).",
            "comMUNIcation, preSENtation, opporTUnity.",
            "Sentence stress: make the important words louder — names, numbers, verbs — and keep small words lighter.",
          ],
        },
        {
          type: "p",
          text: "Try: “I built a **portfolio** with **three case studies**.” If every word has equal stress, it sounds flat and hard to follow.",
        },
        ...lessonClose({
          mistake: "Stressing every syllable the same, so nothing stands out.",
          takeaway: "One strong beat per word. Extra volume on the words that carry meaning.",
          tip: "Tap the table on the stressed syllable. If you cannot tap it, you do not know the stress yet.",
          exerciseSteps: [
            "Say: interview, designer, internship, communication, presentation.",
            "Record them. Listen for a clear strong syllable in each.",
          ],
          check: speakingCheck(
            "In the word “interview”, the strong syllable is usually:",
            "IN",
            "ter",
            "view",
            "The common stress is IN-ter-view.",
          ),
        }),
      ],
    },
    {
      slug: "tone",
      title: "Tone: statements, questions, requests",
      minutes: "8 min",
      summary:
        "The same words can sound rude or polite depending on tone.",
      blocks: [
        {
          type: "ul",
          items: [
            "Statements usually fall at the end: “I completed the internship.”",
            "Yes/no questions often rise: “Can I share my screen?”",
            "Polite requests stay warm and slightly slower: “Could you repeat that, please?”",
          ],
        },
        {
          type: "p",
          text: "If your tone is flat on a request, it can sound like an order. If it rises on a statement, it can sound unsure — as if you are asking permission to exist.",
        },
        ...lessonClose({
          mistake: "Using a rising tone on every sentence, which sounds like you are guessing.",
          takeaway: "Statements fall. Questions can rise. Requests stay calm.",
          tip: "Smile slightly on requests and greetings. People hear it even on a call.",
          exerciseSteps: [
            "Say as a statement: “I am available from Monday.”",
            "Say as a question: “Are you available on Monday?”",
            "Say as a request: “Could we meet on Monday, please?”",
          ],
          check: speakingCheck(
            "A falling tone at the end of a sentence usually means:",
            "You are making a statement",
            "You are always being rude",
            "You forgot the question mark",
            "Statements typically fall. Questions often rise.",
          ),
        }),
      ],
    },
    {
      slug: "interview-words",
      title: "Interview and office words to practise",
      minutes: "8 min",
      summary:
        "A short list you will actually use in HR rounds and internships.",
      blocks: [
        {
          type: "ul",
          items: [
            "internship, opportunity, responsible, experience, contribution",
            "deadline, feedback, collaboration, presentation, stakeholder",
            "Figma, prototype, research, campaign, analytics",
            "available, relocate, strengths, weakness, salary",
          ],
        },
        {
          type: "tip",
          text: "Put this list in your phone. Practise 12 words a day, not 100.",
        },
        ...lessonClose({
          mistake: "Learning rare idioms instead of the words on your own resume.",
          takeaway: "Practise the words you will say in your introduction and project story.",
          tip: "Circle every hard word on your resume and practise those first.",
          exerciseSteps: [
            "Pick 12 words from your resume or this list.",
            "Say each one slowly, then in a full sentence: “I used Figma to design the prototype.”",
          ],
          check: speakingCheck(
            "The best pronunciation word list is:",
            "Words from your resume and interviews",
            "Rare idioms from movies",
            "Only tongue twisters",
            "Practise the words you will actually say.",
          ),
        }),
      ],
    },
  ],
  miniProject: {
    title: "Mini project: 12 stressed words",
    goal: "Record a clean version of 12 words you will use in interviews.",
    starterLabel: "Word list",
    steps: [
      "Choose 12 words from your resume plus this module.",
      "Mark the stressed syllable.",
      "Record each word, then each word in a sentence.",
      "Rerecord any word that still feels swallowed.",
    ],
    starterCode: `Word | Stress | Sentence
internship | IN-tern-ship | I am looking for a design internship.
Figma | FIG-ma | I designed the screens in Figma.
prototype | PRO-to-type | I built a clickable prototype.
communication | com-mu-ni-CA-tion | I want to improve my communication.
opportunity | op-por-TU-ni-ty | This role is a good opportunity to learn.`,
    doneWhen: [
      "You have 12 recordings.",
      "A friend can repeat each word after one listen.",
      "Each word also appears in a full sentence.",
    ],
  },
  summary: {
    headline: "You are aiming for clear, not foreign",
    body: [
      "Finish words, stress the right syllable, and match tone to the job of the sentence.",
      "Next you will use that clarity in everyday conversations.",
    ],
    recap: [
      "Slow down slightly and finish sounds",
      "Stress the strong syllable",
      "Practise resume and interview words",
    ],
  },
  knowledgeCheck: speakingCheck(
    "What should you practise first for interview pronunciation?",
    "Words from your resume, said slowly with correct stress",
    "A full British accent",
    "Only silent reading",
    "Clarity on the words you will actually say is the fastest win.",
  ),
};

export default spokenEnglishModule02;
