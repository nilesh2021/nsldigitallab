import { PublishedModule } from "../../types";
import { lessonClose, speakingCheck } from "./spokenEnglishLessonHelpers";

export const spokenEnglishModule05: PublishedModule = {
  pathSlug: "spoken-english-communication",
  pathTitle: "Spoken English Communication",
  moduleSlug: "grammar-for-speaking",
  moduleNumber: "05",
  title: "Grammar for Speaking",
  estimatedTime: "40–55 minutes",
  syllabusHref: "/learn/spoken-english-communication",
  seo: {
    title:
      "Grammar for Speaking | Practical Spoken English Patterns | NSL Digital Lab",
    description:
      "Learn practical English grammar for speaking: tenses you actually use, questions, polite requests, and common spoken mistakes.",
    keywords:
      "grammar for spoken English, spoken English grammar, how to make questions in English, polite requests English, English tenses for speaking",
    canonical:
      "/learn/spoken-english-communication/grammar-for-speaking",
  },
  prevModule: {
    href: "/learn/spoken-english-communication/interview-communication",
    label: "Previous: Module 04",
  },
  nextModule: {
    href: "/learn/spoken-english-communication/professional-english",
    label: "Next: Module 06",
  },
  intro: {
    headline: "Speak with a few reliable patterns",
    body: [
      "You do not need every tense in a grammar book. You need a handful of patterns you can use while looking someone in the eye.",
      "This module covers the tenses that show up in interviews, how to ask questions, how to make polite requests, and the mistakes that make speech sound unfinished.",
    ],
    youWillLearn: [
      "Present, past, and “I have done” for interviews",
      "Question forms that do not stall",
      "Polite requests and offers",
      "Fixes for common spoken grammar slips",
    ],
  },
  lessons: [
    {
      slug: "tenses-you-use",
      title: "Tenses you actually use when you speak",
      minutes: "10 min",
      summary:
        "Present simple, past simple, and present perfect cover most interviews.",
      blocks: [
        {
          type: "ul",
          items: [
            "Present simple for facts: “I study design.” “I use Figma.”",
            "Past simple for finished stories: “I interned last summer.” “I built the form.”",
            "Present perfect for experience: “I have used Google Analytics.” “I have presented to a client.”",
            "Going to / will for plans: “I’m going to share my screen.” “I’ll send the file after the call.”",
          ],
        },
        {
          type: "p",
          text: "If you mix them randomly (“I am intern last year”), the story gets hard to follow. Pick one time, then stay there until the story ends.",
        },
        ...lessonClose({
          mistake: "Telling a past story in present tense the whole way, then switching without a reason.",
          takeaway: "Facts = present. Finished story = past. Experience = have + verb.",
          tip: "For STAR answers, stay in past simple until the result.",
          exerciseSteps: [
            "Say three facts about yourself in present simple.",
            "Say one project story in past simple.",
            "Say two skills with “I have…”.",
          ],
          check: speakingCheck(
            "“I interned last summer” is:",
            "Past simple for a finished event",
            "Present simple",
            "A future plan",
            "Last summer is finished, so past simple fits.",
          ),
        }),
      ],
    },
    {
      slug: "questions",
      title: "Asking questions without freezing",
      minutes: "8 min",
      summary:
        "Yes/no questions need an auxiliary. Wh- questions need the question word first.",
      blocks: [
        {
          type: "ul",
          items: [
            "Yes/no: “Do you use Figma?” “Can I share my screen?” “Are you hiring interns this month?”",
            "Wh-: “What does the intern work on?” “When is the deadline?” “Who should I send this to?”",
            "If you forget the grammar, use a polite statement: “I wanted to check the deadline.”",
          ],
        },
        ...lessonClose({
          mistake: "“You are using Figma?” with a rising tone and hoping it counts.",
          takeaway: "Start with do/can/are/what/when. Then the rest of the sentence.",
          tip: "Write five questions you will ask in the next interview. Practise only those.",
          exerciseSteps: [
            "Turn these into questions: “The intern uses Figma.” “The deadline is Friday.”",
            "Say them out loud.",
          ],
          check: speakingCheck(
            "A clear yes/no question is:",
            "“Do you use Figma in this team?”",
            "“You Figma?”",
            "“Figma using?”",
            "Auxiliary + subject + verb is the pattern.",
          ),
        }),
      ],
    },
    {
      slug: "polite-requests",
      title: "Requests, offers, and softening",
      minutes: "8 min",
      summary:
        "Could / would / just to confirm keep workplace English polite.",
      blocks: [
        {
          type: "ul",
          items: [
            "Request: “Could you review this by tomorrow?”",
            "Permission: “May I join the call?” / “Is it okay if I send it tonight?”",
            "Offer: “I can take notes if that helps.”",
            "Soft confirm: “Just to confirm, you need the mobile screens first, right?”",
          ],
        },
        ...lessonClose({
          mistake: "“Send me the file.” to a manager, which sounds like an order.",
          takeaway: "Could you / would you / is it okay if…",
          tip: "Add “please” once. Twice in the same sentence sounds nervous.",
          exerciseSteps: [
            "Turn “Send the file” into a polite request.",
            "Turn “I will do the notes” into an offer.",
          ],
          check: speakingCheck(
            "A polite way to ask a manager for a file is:",
            "“Could you send the file when you have a moment?”",
            "“Send file.”",
            "“You must send it now.”",
            "Could you + request is the default workplace pattern.",
          ),
        }),
      ],
    },
    {
      slug: "spoken-slips",
      title: "Common spoken grammar slips",
      minutes: "8 min",
      summary:
        "Fix a short list. Ignore the rest until these are automatic.",
      blocks: [
        {
          type: "ul",
          items: [
            "He/she + s: “She works on SEO,” not “She work on SEO.”",
            "Did + base verb: “Did you finish?” not “Did you finished?”",
            "I am + -ing for now: “I am working on the homepage.”",
            "Articles: “I am a designer,” not “I am designer.”",
            "Prepositions: interested in, good at, responsible for.",
          ],
        },
        ...lessonClose({
          mistake: "Stopping mid-sentence to recast every tiny error.",
          takeaway: "Finish the thought. Fix the pattern in tomorrow’s practice.",
          tip: "Pick one slip this week. Put a reminder on your lock screen.",
          exerciseSteps: [
            "Correct and speak: “She work on Figma.” “Did you finished the task?” “I am designer.”",
          ],
          check: speakingCheck(
            "The correct sentence is:",
            "“Did you finish the task?”",
            "“Did you finished the task?”",
            "“Did you finishing the task?”",
            "After did, use the base verb.",
          ),
        }),
      ],
    },
  ],
  miniProject: {
    title: "Mini project: five repaired sentences",
    goal: "Turn broken sentences into natural speech and record them.",
    starterLabel: "Repair list",
    steps: [
      "Take five sentences you actually say (from a recording this week).",
      "Rewrite each one with a clean tense and a polite form if needed.",
      "Record the new versions.",
    ],
    starterCode: `Broken → Spoken
I am intern last year. → I interned last year.
She work on SEO. → She works on SEO.
You send file? → Could you send the file, please?
I am designer. → I am a designer.
Did you finished? → Did you finish?`,
    doneWhen: [
      "Five repaired sentences are recorded.",
      "Each one uses a clear tense.",
      "At least one is a polite request.",
    ],
  },
  summary: {
    headline: "A small grammar kit is enough to speak",
    body: [
      "Present, past, have-done, questions, and polite requests cover almost every internship conversation.",
      "Next you will use them in meetings, calls, and client updates.",
    ],
    recap: [
      "Match tense to time",
      "Start questions with do/can/what/when",
      "Soften requests with could/would",
    ],
  },
  knowledgeCheck: speakingCheck(
    "Which sentence is ready for an interview?",
    "“I interned last summer and I have used Figma.”",
    "“I am intern last summer and I use Figma yesterday.”",
    "“Did you finished Figma?”",
    "Past for the internship, have + used for experience.",
  ),
};

export default spokenEnglishModule05;
