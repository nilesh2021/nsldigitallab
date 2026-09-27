import { MessageCircle } from "lucide-react";
import { INSTAGRAM_URL, LINKEDIN_COMPANY_URL } from "../../../../data/social";
import { LearningPath } from "../../types";

export { LINKEDIN_COMPANY_URL };

export const spokenEnglishCommunicationPath: LearningPath = {
  slug: "spoken-english-communication",
  title: "Spoken English Communication",
  eyebrow: "Communication path",
  tagline: "from first sentences to professional conversations",
  description:
    "A beginner path for students and job seekers who understand English but freeze when they have to speak. You will practise confidence, pronunciation, daily conversation, interview answers, spoken grammar, and workplace English.",
  level: "Beginner",
  estimatedTime: "4–6 weeks · ~20 hours",
  moduleLabel: "6 modules",
  prerequisites: [
    "You can read simple English sentences",
    "A phone or computer with a voice recorder (the Notes or Voice Memos app is enough)",
    "Willingness to speak out loud for 10 minutes a day — even if it feels awkward",
  ],
  outcomes: [
    "Speak daily English with less hesitation and fewer filler words",
    "Use clearer pronunciation, word stress, and a calm tone",
    "Handle common conversations at college, shops, travel, and the office",
    "Answer HR interview questions with a short, structured script",
    "Use practical grammar patterns that sound natural when you speak",
    "Join meetings, calls, and client conversations with simple professional English",
  ],
  linkedInUrl: LINKEDIN_COMPANY_URL,
  instagramUrl: INSTAGRAM_URL,
  download: {
    label: "Free spoken English practice sheet",
    href: "/downloads/spoken-english-practice-sheet.html",
  },
  seo: {
    title:
      "Spoken English Communication Course | Interview English | NSL Digital Lab",
    description:
      "Free spoken English path for freshers: confidence, pronunciation, daily conversation, HR interview answers, grammar for speaking, and professional English.",
    keywords:
      "spoken English for interview, tell me about yourself, HR interview questions in English, spoken English for freshers, pronunciation practice, professional English, self introduction for freshers",
    canonical: "/learn/spoken-english-communication",
  },
  icon: MessageCircle,
  modules: [
    {
      n: "01",
      slug: "speak-with-confidence",
      contentHref:
        "/learn/spoken-english-communication/speak-with-confidence",
      title: "Speak with Confidence",
      description:
        "Build confidence for daily English conversations through simple speaking practice, not memorised speeches.",
      topics: [
        "Why confidence is a skill, not a personality trait",
        "A 10-minute daily speaking habit",
        "Filler words and how to pause instead",
        "Recording yourself without judgement",
      ],
      miniProject: "Record a 60-second introduction and a 60-second recap of your day.",
    },
    {
      n: "02",
      slug: "pronunciation-practice",
      contentHref:
        "/learn/spoken-english-communication/pronunciation-practice",
      title: "Pronunciation Practice",
      description:
        "Learn clear pronunciation, tone, and word stress so people understand you the first time.",
      topics: [
        "Clarity vs accent",
        "Word stress and sentence stress",
        "Tone for questions, statements, and requests",
        "Practice words used in interviews and offices",
      ],
      miniProject: "Record 12 interview words with correct stress, then rerecord after feedback.",
    },
    {
      n: "03",
      slug: "daily-conversation-skills",
      contentHref:
        "/learn/spoken-english-communication/daily-conversation-skills",
      title: "Daily Conversation Skills",
      description:
        "Practise common conversations used in office, travel, shopping, and social situations.",
      topics: [
        "Greetings and small talk",
        "Shopping, travel, and asking for help",
        "College and office everyday talk",
        "How to keep a conversation going",
      ],
      miniProject: "Write and speak three short role-plays: shop, travel, and office.",
    },
    {
      n: "04",
      slug: "interview-communication",
      contentHref:
        "/learn/spoken-english-communication/interview-communication",
      title: "Interview Communication",
      description:
        "Improve answers, self-introduction, and professional speaking for job interviews.",
      topics: [
        "Tell me about yourself",
        "STAR stories for freshers",
        "Strengths, weaknesses, and salary questions",
        "Questions you should ask the interviewer",
      ],
      miniProject: "Record a 90-second self-introduction and two STAR answers.",
    },
    {
      n: "05",
      slug: "grammar-for-speaking",
      contentHref:
        "/learn/spoken-english-communication/grammar-for-speaking",
      title: "Grammar for Speaking",
      description:
        "Learn practical grammar patterns that help you speak naturally, without writing essays in your head.",
      topics: [
        "Tenses you actually use when you speak",
        "Questions, requests, and polite forms",
        "Connecting ideas with simple linking words",
        "Common spoken grammar mistakes",
      ],
      miniProject: "Turn five broken sentences into natural spoken English and record them.",
    },
    {
      n: "06",
      slug: "professional-english",
      contentHref:
        "/learn/spoken-english-communication/professional-english",
      title: "Professional English",
      description:
        "Improve workplace communication, meetings, calls, and client conversations.",
      topics: [
        "Meeting English",
        "Call and video-call phrases",
        "Client conversations and updates",
        "Email and WhatsApp English that sounds professional",
      ],
      miniProject: "Run a 5-minute mock meeting and send a short follow-up message.",
    },
  ],
};

export default spokenEnglishCommunicationPath;
