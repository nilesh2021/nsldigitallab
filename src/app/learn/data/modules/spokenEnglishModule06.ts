import { PublishedModule } from "../../types";
import { lessonClose, speakingCheck } from "./spokenEnglishLessonHelpers";

export const spokenEnglishModule06: PublishedModule = {
  pathSlug: "spoken-english-communication",
  pathTitle: "Spoken English Communication",
  moduleSlug: "professional-english",
  moduleNumber: "06",
  title: "Professional English",
  estimatedTime: "40–55 minutes",
  syllabusHref: "/learn/spoken-english-communication",
  seo: {
    title:
      "Professional English | Meetings Calls and Client Conversations | NSL Digital Lab",
    description:
      "Learn workplace English for meetings, video calls, client updates, and professional WhatsApp or email follow-ups.",
    keywords:
      "professional English, meeting English phrases, client communication English, email English for office, workplace English for freshers",
    canonical:
      "/learn/spoken-english-communication/professional-english",
  },
  prevModule: {
    href: "/learn/spoken-english-communication/grammar-for-speaking",
    label: "Previous: Module 05",
  },
  intro: {
    headline: "Workplace English is short, specific, and calm",
    body: [
      "In internships you will join calls, give updates, and write follow-ups. You do not need fancy vocabulary. You need to say what is done, what is blocked, and what happens next.",
      "This last module gives you phrases for meetings, calls, client conversations, and written follow-up that matches how you speak.",
    ],
    youWillLearn: [
      "Meeting English: join, update, disagree politely",
      "Call and video-call phrases",
      "Client updates without overpromising",
      "WhatsApp and email English that still sounds professional",
    ],
  },
  lessons: [
    {
      slug: "meeting-english",
      title: "Meeting English",
      minutes: "10 min",
      summary:
        "Join clearly, update in three lines, disagree without a fight.",
      blocks: [
        {
          type: "ul",
          items: [
            "Join: “Hi everyone, this is Riya from the intern team.”",
            "Update: “Done: homepage wireframes. Doing: mobile version. Blocked: waiting on brand colours.”",
            "Ask: “Could I share a question on the form fields?”",
            "Disagree: “I see it differently — users missed the button in testing. Could we try a higher contrast?”",
          ],
        },
        {
          type: "p",
          text: "Done / doing / blocked is enough for most stand-ups. Do not tell the whole week’s diary.",
        },
        ...lessonClose({
          mistake: "Staying on mute the entire meeting, then chatting “I agree” with no content.",
          takeaway: "One clear update is better than silence.",
          tip: "Write your three-line update before the call starts.",
          exerciseSteps: [
            "Write a Done / Doing / Blocked update for your current week.",
            "Say it in under 20 seconds.",
          ],
          check: speakingCheck(
            "A useful intern update includes:",
            "What is done, what is in progress, and any blocker",
            "Your entire weekend",
            "Only “all good”",
            "Done / doing / blocked is the professional default.",
          ),
        }),
      ],
    },
    {
      slug: "calls",
      title: "Calls and video calls",
      minutes: "8 min",
      summary:
        "Check audio, state the purpose, end with a next step.",
      blocks: [
        {
          type: "ul",
          items: [
            "Start: “Hi, can you hear me clearly?”",
            "Purpose: “I’m calling to confirm the intern start date.”",
            "If the line is bad: “Your audio is breaking up. Can we switch to a chat message?”",
            "End: “I’ll send the notes in the next ten minutes. Thanks for your time.”",
          ],
        },
        ...lessonClose({
          mistake: "Jumping into the topic before checking that people can hear you.",
          takeaway: "Audio check, purpose, next step.",
          tip: "Keep a glass of water nearby. Dry mouth makes you rush.",
          exerciseSteps: [
            "Practise a 30-second call: greeting, purpose, one question, close.",
          ],
          check: speakingCheck(
            "A professional way to end a call is:",
            "Confirm the next step and thank them",
            "Hang up as soon as you are done talking",
            "Say “bye bye” five times",
            "Next step plus thanks is enough.",
          ),
        }),
      ],
    },
    {
      slug: "client-conversations",
      title: "Client conversations",
      minutes: "8 min",
      summary:
        "Be clear about scope, timing, and what you need from them.",
      blocks: [
        {
          type: "ul",
          items: [
            "Status: “We shared the first homepage draft yesterday.”",
            "Need: “Could you confirm the logo files by Thursday?”",
            "Delay: “The test is taking longer than planned. We will share results on Friday.”",
            "Do not promise: “It will definitely go viral.” Promise: “We will run the ad for seven days and review the numbers together.”",
          ],
        },
        ...lessonClose({
          mistake: "Saying yes to a new request in the meeting without checking time.",
          takeaway: "“Let me check the timeline and confirm by this evening.”",
          tip: "If you do not know, say you will check. Guessing dates destroys trust.",
          exerciseSteps: [
            "Say a status + a need in two sentences, as if you are on a client call.",
          ],
          check: speakingCheck(
            "If a client adds extra work in a meeting, a safe reply is:",
            "“Let me check the timeline and confirm today.”",
            "“Yes, no problem, tonight.”",
            "Silence",
            "Check first. Then confirm. That is professional.",
          ),
        }),
      ],
    },
    {
      slug: "written-follow-up",
      title: "WhatsApp and email that match your speech",
      minutes: "8 min",
      summary:
        "Write the way you should speak: short, specific, polite.",
      blocks: [
        {
          type: "ul",
          items: [
            "Subject or first line: what this is. “Homepage draft for review.”",
            "Body: what you did, what you need, by when.",
            "Close: “Happy to jump on a call if that is easier.”",
            "WhatsApp: same content, fewer lines. No “mam please see” repeated five times.",
          ],
        },
        {
          type: "p",
          text: "Spoken and written professional English are the same skill. If you can say the update, you can type it.",
        },
        ...lessonClose({
          mistake: "A 400-word email that hides the ask in paragraph four.",
          takeaway: "What / need / when. Then stop.",
          tip: "Read the message out loud. If you would not say it on a call, rewrite it.",
          exerciseSteps: [
            "Write a four-line follow-up after a meeting.",
            "Read it out loud and cut one extra sentence.",
          ],
          check: speakingCheck(
            "A professional follow-up should make clear:",
            "What you did, what you need, and by when",
            "Your life story",
            "Only emojis",
            "What / need / when is the whole message.",
          ),
        }),
      ],
    },
  ],
  miniProject: {
    title: "Mini project: mock meeting + follow-up",
    goal: "Run a five-minute meeting and send a matching message.",
    starterLabel: "Meeting script",
    steps: [
      "Write a 20-second Done / Doing / Blocked update.",
      "Practise it with a friend or recording.",
      "Send (or draft) a four-line follow-up with what / need / when.",
    ],
    starterCode: `Spoken update:
Done:
Doing:
Blocked:

Follow-up:
Hi [Name],
Thanks for the call.
I will share [deliverable] by [time].
Could you confirm [thing you need] by [time]?
Thanks,
[Your name]`,
    doneWhen: [
      "The spoken update is under 25 seconds.",
      "The follow-up has a clear ask and a time.",
      "You would be willing to send that message to a manager.",
    ],
  },
  summary: {
    headline: "You can now speak at work, not only in class",
    body: [
      "Meetings, calls, clients, and follow-ups all use the same short pattern: purpose, update, ask, next step.",
      "Keep the 10-minute habit. Use this path’s practice sheet before interviews.",
    ],
    recap: [
      "Done / doing / blocked",
      "Purpose then next step on calls",
      "What / need / when in writing",
    ],
  },
  knowledgeCheck: speakingCheck(
    "The most useful intern update in a meeting is:",
    "Done, doing, and any blocker",
    "A full autobiography",
    "“Fine” with no detail",
    "Three lines. That is the professional habit.",
  ),
};

export default spokenEnglishModule06;
