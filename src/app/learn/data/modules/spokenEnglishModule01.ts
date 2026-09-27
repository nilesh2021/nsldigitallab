import { PublishedModule } from "../../types";
import { lessonClose, RIYA, speakingCheck } from "./spokenEnglishLessonHelpers";

export const spokenEnglishModule01: PublishedModule = {
  pathSlug: "spoken-english-communication",
  pathTitle: "Spoken English Communication",
  moduleSlug: "speak-with-confidence",
  moduleNumber: "01",
  title: "Speak with Confidence",
  estimatedTime: "40–55 minutes",
  syllabusHref: "/learn/spoken-english-communication",
  seo: {
    title:
      "Speak with Confidence | Spoken English for Beginners | NSL Digital Lab",
    description:
      "Build spoken English confidence with a daily 10-minute habit, fewer filler words, and simple recording practice for students and freshers.",
    keywords:
      "speak English with confidence, spoken English practice, how to speak English fluently, spoken English for beginners, filler words",
    canonical:
      "/learn/spoken-english-communication/speak-with-confidence",
  },
  nextModule: {
    href: "/learn/spoken-english-communication/pronunciation-practice",
    label: "Next: Module 02",
  },
  intro: {
    headline: "Confidence comes from speaking, not from waiting",
    body: [
      `${RIYA} already understands English in class. In interviews she goes quiet. That is not a lack of intelligence. It is a lack of speaking reps.`,
      "This module treats confidence as a skill. You will practise short, daily speaking — the same way you would practise a sport.",
      "You do not need a British or American accent. You need to finish sentences, pause instead of filling silence, and hear your own voice enough times that it stops feeling strange.",
    ],
    youWillLearn: [
      "Why most people freeze even when they know the answer",
      "A 10-minute daily speaking routine",
      "How to replace filler words with a pause",
      "How to record yourself without feeling embarrassed",
    ],
  },
  lessons: [
    {
      slug: "confidence-is-practice",
      title: "Confidence is a practice, not a personality",
      minutes: "8 min",
      summary:
        "You get confident after you speak, not before. Start small enough that you cannot fail.",
      blocks: [
        {
          type: "p",
          text: "Many students wait until they “feel ready.” Ready never arrives. The first 20 times you speak out loud will feel clumsy. That is the work.",
        },
        {
          type: "term",
          term: "Speaking confidence",
          meaning:
            "The ability to start a sentence, finish it, and recover if you make a small mistake — without going silent.",
        },
        {
          type: "ul",
          items: [
            "You do not need perfect grammar to be understood.",
            "Interviewers in India care more about clarity than accent.",
            "A short answer that finishes is better than a long answer that trails off.",
          ],
        },
        ...lessonClose({
          mistake:
            "Waiting for the perfect sentence in your head, then saying nothing.",
          takeaway:
            "Start with one complete sentence. Then add a second. That is how confidence is built.",
          tip: "Speak standing up. It makes your voice louder and your pauses cleaner.",
          exerciseSteps: [
            "Stand up and say: “My name is [your name]. I am learning spoken English for interviews.”",
            "Say it again, slower. Then once more, looking at a wall instead of a screen.",
          ],
          check: speakingCheck(
            "What builds speaking confidence fastest?",
            "Short daily speaking practice",
            "Waiting until you feel fully ready",
            "Only reading English silently",
            "Confidence grows from speaking reps, not from waiting.",
          ),
        }),
      ],
    },
    {
      slug: "ten-minute-habit",
      title: "A 10-minute daily speaking habit",
      minutes: "10 min",
      summary:
        "Ten minutes a day beats a two-hour weekend session you skip.",
      blocks: [
        {
          type: "p",
          text: "Use the same time every day: after breakfast, on a walk, or before sleep. The habit matters more than the clock.",
        },
        {
          type: "ul",
          items: [
            "Minutes 1–2: warm up. Read one paragraph out loud.",
            "Minutes 3–6: speak. Describe your day, a project, or a news story in your own words.",
            "Minutes 7–8: record 60 seconds of that same topic.",
            "Minutes 9–10: listen once. Note one thing to improve tomorrow, not ten.",
          ],
        },
        {
          type: "tip",
          text: "If you miss a day, do two minutes the next morning. Do not “restart next Monday.”",
        },
        ...lessonClose({
          mistake: "Doing a long practice once a week and calling it a habit.",
          takeaway: "Short and daily beats long and rare.",
          tip: "Keep a running note titled “Today I spoke about…” so you never sit staring at a blank mind.",
          exerciseSteps: [
            "Set a 10-minute timer.",
            "Speak about yesterday in English until the timer ends. Do not stop to correct every word.",
          ],
          check: speakingCheck(
            "The best spoken-English schedule is:",
            "About 10 minutes every day",
            "Three hours only on Sunday",
            "Only during actual interviews",
            "Daily short practice is the habit that sticks.",
          ),
        }),
      ],
    },
    {
      slug: "filler-words-and-pauses",
      title: "Filler words and the pause",
      minutes: "8 min",
      summary:
        "Replace “um”, “like”, and “basically” with a one-second pause.",
      blocks: [
        {
          type: "p",
          text: "Fillers appear when your mouth is waiting for your brain. A pause is not a failure. It sounds calm. A string of “um” sounds unsure.",
        },
        {
          type: "ul",
          items: [
            "Common fillers: um, uh, like, you know, basically, actually, I mean.",
            "Better: stop, breathe, then continue the sentence.",
            "If you lose the word, say: “Let me put that more simply.” Then finish.",
          ],
        },
        ...lessonClose({
          mistake: "Filling every silence because silence feels rude.",
          takeaway: "A one-second pause is professional. A filler chain is not.",
          tip: "When you record, count how many fillers you used. Aim to cut that number in half this week.",
          exerciseSteps: [
            "Answer this out loud: “What did you learn last week?”",
            "Do it again. This time, if you need time, stay silent for one second instead of saying “um.”",
          ],
          check: speakingCheck(
            "If you cannot find a word, the best move is to:",
            "Pause, then finish the sentence",
            "Keep saying “um” until the word appears",
            "Switch to another language mid-sentence",
            "A short pause sounds more confident than filler words.",
          ),
        }),
      ],
    },
    {
      slug: "record-without-shame",
      title: "Record yourself without shame",
      minutes: "8 min",
      summary:
        "Your recorded voice sounds different from the voice in your head. That is normal.",
      blocks: [
        {
          type: "p",
          text: "Everyone dislikes their first recordings. You are not listening to judge personality. You are listening for three things: Did you finish sentences? Did you rush? Did people get the point?",
        },
        {
          type: "ul",
          items: [
            "Record in a quiet room. Hold the phone a little away from your mouth.",
            "Listen once. Write one win and one fix.",
            "Do not delete the first recording. You will want it in two weeks.",
          ],
        },
        ...lessonClose({
          mistake: "Recording, hearing one mistake, and never recording again.",
          takeaway: "One recording a day is a progress log, not a performance.",
          tip: "Name files by date: 2026-09-27-intro.wav. Progress becomes visible.",
          exerciseSteps: [
            "Record 60 seconds: who you are, what you are studying, and one skill you want.",
            "Listen once and write: one thing that was clear, one thing to slow down.",
          ],
          check: speakingCheck(
            "When you listen to a recording, you should:",
            "Note one win and one fix",
            "List every mistake and stop practising",
            "Compare your accent to a news anchor",
            "One improvement per day is enough.",
          ),
        }),
      ],
    },
  ],
  miniProject: {
    title: "Mini project: two 60-second recordings",
    goal: "Prove you can start, speak, and finish — twice.",
    starterLabel: "Recording checklist",
    steps: [
      "Record a 60-second self-introduction.",
      "Record a 60-second recap of your day.",
      "Listen to both once.",
      "Write one sentence about what you will do more slowly tomorrow.",
    ],
    starterCode: `File names:
[date]-intro
[date]-day-recap

Intro must include:
- Name
- What you study or do
- One skill you are building
- Why you are practising English

Day recap must include:
- One thing you did
- One thing you learned
- One thing you will do tomorrow`,
    doneWhen: [
      "Both recordings are about 45–75 seconds.",
      "You finished every sentence you started.",
      "You wrote one improvement for tomorrow.",
    ],
  },
  summary: {
    headline: "You now have a speaking habit, not a wish",
    body: [
      "Confidence is the result of short daily speaking, clean pauses, and recordings you actually listen to.",
      "Next you will make those sentences easier to hear: pronunciation, stress, and tone.",
    ],
    recap: [
      "Speak daily for about 10 minutes",
      "Pause instead of filling silence",
      "Record once a day and keep the file",
    ],
  },
  knowledgeCheck: speakingCheck(
    "Riya knows the answer but freezes in interviews. What should she do first?",
    "Practise speaking out loud for 10 minutes a day",
    "Wait until her accent sounds native",
    "Only study grammar books silently",
    "Speaking reps reduce freeze. Accent is not the first problem.",
  ),
};

export default spokenEnglishModule01;
