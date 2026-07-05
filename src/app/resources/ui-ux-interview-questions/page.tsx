'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface InterviewQuestion {
  id: string;
  question: string;
  answer: string | React.ReactNode;
  category: string;
}

interface Category {
  name: string;
  questions: InterviewQuestion[];
}

const UIUXInterviewQuestionsPage = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const questions: Category[] = [
    {
      name: 'Fundamentals',
      questions: [
        {
          id: 'q1',
          question: 'What is UX?',
          answer: (
            <div>
              <p className="mb-3">
                UX is all about the user's journey or experience when they interact with the product or services.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Primary focus: Understand the user's needs, business logic, preferences, requirements, behaviors, and motivation</li>
                <li>Provide positive and satisfactory results</li>
                <li>Key elements: User research, competitor analysis, IA, User Journey, Testing</li>
              </ul>
            </div>
          ),
          category: 'Fundamentals',
        },
        {
          id: 'q2',
          question: 'What is UI?',
          answer: (
            <div>
              <p className="mb-3">
                UI is all about the overall look and feel of the product and services.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Includes color schemes, typography, buttons, layouts</li>
                <li>Visually appealing, intuitive and user-friendly design interfaces</li>
                <li>Focuses on the visual presentation and interaction elements</li>
              </ul>
            </div>
          ),
          category: 'Fundamentals',
        },
        {
          id: 'q3',
          question: 'What is the UX Design Process?',
          answer: (
            <div>
              <p className="mb-4 font-semibold">The UX Design Process follows 5 key stages:</p>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold">1. Discover (Empathy)</p>
                  <p className="text-sm text-gray-700">Understand business goals and user goals through stakeholder interviews, competitor analysis, and user research</p>
                </div>
                <div>
                  <p className="font-semibold">2. Define</p>
                  <p className="text-sm text-gray-700">Create documents like user persona, empathy map, and customer journey map based on research</p>
                </div>
                <div>
                  <p className="font-semibold">3. Ideate</p>
                  <p className="text-sm text-gray-700">Design Information Architecture (IA), Flowcharts, and User Journey maps</p>
                </div>
                <div>
                  <p className="font-semibold">4. Prototype</p>
                  <p className="text-sm text-gray-700">Create wireframes or final layouts to show how the product will function</p>
                </div>
                <div>
                  <p className="font-semibold">5. Testing</p>
                  <p className="text-sm text-gray-700">Test with actual users and implement feedback (Alpha → Stakeholder → Beta testing)</p>
                </div>
              </div>
            </div>
          ),
          category: 'Fundamentals',
        },
      ],
    },
    {
      name: 'UX Principles & Concepts',
      questions: [
        {
          id: 'q4',
          question: 'What are the key Design Principles in UI/UX?',
          answer: (
            <div>
              <div className="space-y-2">
                <p className="font-semibold text-sm mb-3">(Mnemonic: SCARUCHCUSAC)</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <p className="font-semibold">1. Simplicity</p>
                    <p className="text-sm text-gray-700">Keep things easy to understand and use</p>
                  </div>
                  <div>
                    <p className="font-semibold">2. Consistency</p>
                    <p className="text-sm text-gray-700">Make everything look and work the same way</p>
                  </div>
                  <div>
                    <p className="font-semibold">3. Accessibility</p>
                    <p className="text-sm text-gray-700">Design for everyone, including people with disabilities</p>
                  </div>
                  <div>
                    <p className="font-semibold">4. Responsiveness</p>
                    <p className="text-sm text-gray-700">Works well on different devices and screen sizes</p>
                  </div>
                  <div>
                    <p className="font-semibold">5. User-Centric Design</p>
                    <p className="text-sm text-gray-700">Design with the user's needs in mind</p>
                  </div>
                  <div>
                    <p className="font-semibold">6. Confirmation</p>
                    <p className="text-sm text-gray-700">Give feedback for user actions</p>
                  </div>
                  <div>
                    <p className="font-semibold">7. Hierarchy</p>
                    <p className="text-sm text-gray-700">Arrange elements by importance</p>
                  </div>
                  <div>
                    <p className="font-semibold">8. Context</p>
                    <p className="text-sm text-gray-700">Design for user's environment and situation</p>
                  </div>
                  <div>
                    <p className="font-semibold">9. Usability</p>
                    <p className="text-sm text-gray-700">Easy to learn and use efficiently</p>
                  </div>
                  <div>
                    <p className="font-semibold">10. Storytelling</p>
                    <p className="text-sm text-gray-700">Create memorable experiences</p>
                  </div>
                  <div>
                    <p className="font-semibold">11. Animations</p>
                    <p className="text-sm text-gray-700">Use motion purposefully for engagement</p>
                  </div>
                  <div>
                    <p className="font-semibold">12. User Control</p>
                    <p className="text-sm text-gray-700">Allow customization and control</p>
                  </div>
                </div>
              </div>
            </div>
          ),
          category: 'UX Principles & Concepts',
        },
        {
          id: 'q5',
          question: 'What are Usability Elements?',
          answer: (
            <div>
              <p className="mb-3 text-sm">"Usability is about the user and how they understand and use the things."</p>
              <div className="space-y-2">
                <div>
                  <p className="font-semibold">Effectiveness</p>
                  <p className="text-sm text-gray-700">Support user to complete actions accurately</p>
                </div>
                <div>
                  <p className="font-semibold">Efficiency</p>
                  <p className="text-sm text-gray-700">Users can perform tasks quickly through the easiest process</p>
                </div>
                <div>
                  <p className="font-semibold">Engagement</p>
                  <p className="text-sm text-gray-700">Pleasant to use and appropriate to use</p>
                </div>
                <div>
                  <p className="font-semibold">Error Tolerance</p>
                  <p className="text-sm text-gray-700">Support range of actions and show errors in genuine actions</p>
                </div>
                <div>
                  <p className="font-semibold">Ease of Learning</p>
                  <p className="text-sm text-gray-700">New users can accomplish goals easily</p>
                </div>
              </div>
            </div>
          ),
          category: 'UX Principles & Concepts',
        },
      ],
    },
    {
      name: 'User Research & Analysis',
      questions: [
        {
          id: 'q6',
          question: 'What is User Research and why is it important?',
          answer: (
            <div>
              <p className="mb-3">
                User research helps understand users better by talking to and observing them to learn what they like, dislike, and need.
              </p>
              <div className="space-y-2">
                <div>
                  <p className="font-semibold">Goals:</p>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    <li>Understand attitudes, pain points, behaviors, experiences, and motivations</li>
                    <li>Create user-centered solutions</li>
                    <li>Prevent problems before they happen</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Research Methods:</p>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    <li>Interviews (small audiences)</li>
                    <li>Field Studies (medium audience)</li>
                    <li>Surveys (large audiences)</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          category: 'User Research & Analysis',
        },
        {
          id: 'q7',
          question: 'What is Competitor Analysis?',
          answer: (
            <div>
              <p className="mb-3">
                A systematic process of evaluating and understanding the strategies, strengths, weaknesses, and overall performance of competitors.
              </p>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-sm mb-2">Reasons for Competitor Analysis:</p>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Focus efforts on the target market</li>
                    <li>Know the strength and weakness of competitors</li>
                    <li>Have reliable evidence when making product changes</li>
                    <li>Understand where your product stands in the market</li>
                    <li>Help solve usability problems</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-sm mb-2">Competitor Types:</p>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li><span className="font-semibold">Direct:</span> Offer the same product/service (e.g., Flipkart for Bazaar app)</li>
                    <li><span className="font-semibold">Indirect:</span> Offer something similar (e.g., Myntra for Bazaar app)</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          category: 'User Research & Analysis',
        },
        {
          id: 'q8',
          question: 'What is a User Persona?',
          answer: (
            <div>
              <p className="mb-3">
                A comprehensive profile of your ideal customer - a fictional profile of a user that helps designers develop and understand products better.
              </p>
              <div className="space-y-2">
                <p className="font-semibold text-sm">User Persona Includes:</p>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  <li>Demographics (Name, age, profession, technology, location, brands)</li>
                  <li>User Scenario (Context of how they use the product)</li>
                  <li>User Needs (What they want to achieve)</li>
                  <li>Pain Points (Challenges and frustrations)</li>
                  <li>Technology (Devices and platforms they use)</li>
                  <li>Personality (Traits and characteristics)</li>
                </ul>
              </div>
            </div>
          ),
          category: 'User Research & Analysis',
        },
        {
          id: 'q9',
          question: 'What is an Empathy Map?',
          answer: (
            <div>
              <p className="mb-3">A tool consisting of 4 quadrants that helps understand the user better:</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Says</p>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    <li>What they say about the product</li>
                    <li>Their preferences and expectations</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Thinks</p>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    <li>What they think about the product</li>
                    <li>Budget considerations</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Does</p>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    <li>Comparison activities</li>
                    <li>Review reading behavior</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Feels</p>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    <li>Emotions (worried, excited, happy)</li>
                    <li>Trust and satisfaction levels</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          category: 'User Research & Analysis',
        },
        {
          id: 'q10',
          question: 'What is a Customer Journey Map?',
          answer: (
            <div>
              <p className="mb-3">
                A visual representation of the process a customer goes through to achieve their goal, outlining the experiences they have with your brand.
              </p>
              <div className="space-y-2">
                <p className="font-semibold text-sm">Key Benefits:</p>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  <li>Helps designers understand the user's perspective</li>
                  <li>Shows emotions and interactions at different touchpoints</li>
                  <li>Identifies delighting features and opportunities</li>
                  <li>Creates customer-focused mentality</li>
                </ul>
                <p className="font-semibold text-sm mt-3">Typical Stages:</p>
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="bg-blue-100 px-2 py-1 rounded">Signup</span>
                  <span className="bg-blue-100 px-2 py-1 rounded">Shopping</span>
                  <span className="bg-blue-100 px-2 py-1 rounded">Payment</span>
                  <span className="bg-blue-100 px-2 py-1 rounded">Tracking</span>
                  <span className="bg-blue-100 px-2 py-1 rounded">Return/Exchange</span>
                </div>
              </div>
            </div>
          ),
          category: 'User Research & Analysis',
        },
      ],
    },
    {
      name: 'Information Architecture & Wireframing',
      questions: [
        {
          id: 'q11',
          question: 'What is Information Architecture (IA)?',
          answer: (
            <div>
              <p className="mb-3">
                IA is like the blueprint or map for organizing information in a way that makes sense to users. It helps users navigate and understand digital platforms better.
              </p>
              <div className="space-y-2">
                <p className="font-semibold text-sm">Components:</p>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  <li>Arranging content clearly</li>
                  <li>Labeling things clearly</li>
                  <li>Creating easy ways to move around (menus, links)</li>
                  <li>Making sure people can easily find what they're looking for</li>
                </ul>
                <p className="font-semibold text-sm mt-3">Types of Navigation Systems:</p>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  <li>Hierarchical (Main navigation system)</li>
                  <li>Adaptive</li>
                  <li>Search, Sort & Filter</li>
                </ul>
              </div>
            </div>
          ),
          category: 'Information Architecture & Wireframing',
        },
        {
          id: 'q12',
          question: 'What is a User Flow Chart?',
          answer: (
            <div>
              <p className="mb-3">
                A diagrammatic representation of a sequence of steps and decisions using symbols, shapes, and arrows.
              </p>
              <div className="space-y-2">
                <p className="font-semibold text-sm">Key Parts:</p>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  <li>Onboarding/Ways to dashboard/Login</li>
                  <li>Information Architecture</li>
                  <li>Payment Process</li>
                  <li>Decision points and user actions</li>
                </ul>
              </div>
            </div>
          ),
          category: 'Information Architecture & Wireframing',
        },
        {
          id: 'q13',
          question: 'What are Wireframes and their types?',
          answer: (
            <div>
              <p className="mb-3">
                Wireframes are layouts that give an idea about how the final product will function, how pages will be arranged, and how users will interact with the product.
              </p>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold">Low Fidelity Wireframes (LFW)</p>
                  <p className="text-sm text-gray-700">Very rough layout of screen diagrams in black & white, used for quick concepts and discussions</p>
                </div>
                <div>
                  <p className="font-semibold">High Fidelity Wireframes (HFW)</p>
                  <p className="text-sm text-gray-700">Pixel-perfect screen diagrams with detailed styling, colors, and typography</p>
                </div>
              </div>
            </div>
          ),
          category: 'Information Architecture & Wireframing',
        },
      ],
    },
    {
      name: 'Testing & Design Trends',
      questions: [
        {
          id: 'q14',
          question: 'What are the phases of Testing in UX Design?',
          answer: (
            <div>
              <p className="mb-3">Design goes through at least three phases of testing:</p>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold">1. Alpha Testing (Internal)</p>
                  <p className="text-sm text-gray-700">Team tests the product internally to look for technical glitches and usability problems</p>
                </div>
                <div>
                  <p className="font-semibold">2. Stakeholder Testing</p>
                  <p className="text-sm text-gray-700">Product undergoes testing with stakeholders to ensure alignment with company vision, legal guidelines, and government regulations</p>
                </div>
                <div>
                  <p className="font-semibold">3. Beta Testing (External)</p>
                  <p className="text-sm text-gray-700">External test with potential users to verify the product is usable, equitable, enjoyable, and useful</p>
                </div>
              </div>
            </div>
          ),
          category: 'Testing & Design Trends',
        },
        {
          id: 'q15',
          question: 'What are current trends in UI/UX Design?',
          answer: (
            <div>
              <div className="space-y-2">
                <div>
                  <p className="font-semibold">Dark Mode</p>
                  <p className="text-sm text-gray-700">A design trend offering a dark color scheme for better readability and reduced eye strain</p>
                </div>
                <div>
                  <p className="font-semibold">Microinteractions</p>
                  <p className="text-sm text-gray-700">Small animations or visual cues that provide feedback to users and enhance overall experience</p>
                </div>
                <div>
                  <p className="font-semibold">Voice User Interface (VUI)</p>
                  <p className="text-sm text-gray-700">Integration of voice commands and interactions into digital products</p>
                </div>
                <div>
                  <p className="font-semibold">Minimalism</p>
                  <p className="text-sm text-gray-700">A design approach focusing on simplicity and removing unnecessary elements</p>
                </div>
              </div>
            </div>
          ),
          category: 'Testing & Design Trends',
        },
      ],
    },
    {
      name: 'Case Studies & Examples',
      questions: [
        {
          id: 'q16',
          question: 'What is a UX Case Study?',
          answer: (
            <div>
              <p className="mb-3">A comprehensive document that demonstrates the UX design process for a product or service.</p>
              <div className="space-y-2">
                <p className="font-semibold text-sm">Key Components:</p>
                <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                  <li>Introduction to app (Description and Objective)</li>
                  <li>UX Process Diagram</li>
                  <li>Competitor Research & Analysis</li>
                  <li>User Research (Key points, Problem statement, Persona, Experience map)</li>
                  <li>Information Architecture (Card sorting, Navigation)</li>
                  <li>User Flowchart</li>
                  <li>User Journey with Low Fidelity Design</li>
                  <li>Usability Test Report and Actions</li>
                </ol>
              </div>
            </div>
          ),
          category: 'Case Studies & Examples',
        },
        {
          id: 'q17',
          question: 'Real-World Example: Banking App Poor UX',
          answer: (
            <div>
              <p className="mb-3 font-semibold">Problem Scenario:</p>
              <p className="text-sm text-gray-700 mb-3">
                A banking app promises a seamless experience but users face:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Improper navigation and unfamiliar terms</li>
                <li>Unclear icons and convoluted action flows</li>
                <li>Help section buried deep in settings</li>
                <li>Confusing error messages without guidance</li>
              </ul>
              <p className="text-sm text-gray-700 mt-3">
                <span className="font-semibold">Lesson:</span> This highlights the importance of clear, intuitive design with user-friendly features and adequate support.
              </p>
            </div>
          ),
          category: 'Case Studies & Examples',
        },
      ],
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">UI/UX Design Interview Questions</h1>
          <p className="text-blue-100 text-lg">
            Comprehensive guide to master UI/UX design interview questions and concepts
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        {questions.map((category) => (
          <div key={category.name} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-blue-500">
              {category.name}
            </h2>

            <div className="space-y-4">
              {category.questions.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="w-full p-6 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">
                      {item.question}
                    </h3>
                    <ChevronDown
                      size={24}
                      className={`text-blue-600 flex-shrink-0 transition-transform ${
                        expandedId === item.id ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>

                  {expandedId === item.id && (
                    <div className="px-6 pb-6 pt-2 bg-gray-50 border-t border-gray-200">
                      <div className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Footer Note */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-3">💡 Key Takeaways</h3>
          <ul className="text-blue-800 space-y-2 text-sm">
            <li>• UX Design is a user-centered iterative process</li>
            <li>• Always conduct thorough user research and competitor analysis</li>
            <li>• Design principles like simplicity and consistency are fundamental</li>
            <li>• Testing with real users is crucial for validating design decisions</li>
            <li>• Usability elements (Effectiveness, Efficiency, Engagement, etc.) are core to good design</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UIUXInterviewQuestionsPage;
