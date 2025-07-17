import { serviceProps } from "@/types/types"

export const colorClassMap = {
  indigo: {
    bg: 'bg-indigo-500',
    bgLight:'bg-indigo-100',
    borderBase: 'border-indigo-500',
    border: 'hover:border-indigo-500',
    'hc-text': 'text-indigo-600',
    'lc-text': 'bg-indigo-200',
    text: 'text-indigo-500',
    decoration: 'decoration-indigo-500',
  },
  blue: {
    bg: 'bg-blue-500',
    bgLight:'bg-blue-100',
    borderBase: 'border-blue-500',
    border: 'hover:border-blue-500',
    'hc-text': 'text-blue-600',
    'lc-text': 'bg-blue-200',
    text: 'text-blue-500',
    decoration: 'decoration-blue-500',
  },
  red: {
    bg: 'bg-red-500',
    bgLight:'bg-red-100',
    borderBase: 'border-red-500',
    border: 'hover:border-red-500',
    'hc-text': 'text-red-600',
    'lc-text': 'bg-red-200',
    text: 'text-red-500',
    decoration: 'decoration-red-500',
  },
  green: {
    bg: 'bg-green-500',
    bgLight:'bg-green-100',
    borderBase: 'border-green-500',
    border: 'hover:border-green-500',
    'hc-text': 'text-green-600',
    'lc-text': 'bg-green-200',
    text: 'text-green-500',
    decoration: 'decoration-green-500',
  },
  yellow: {
    bg: 'bg-yellow-500',
    bgLight:'bg-yellow-100',
    borderBase: 'border-yellow-500',
    border: 'hover:border-yellow-500',
    'hc-text': 'text-yellow-600',
    'lc-text': 'bg-yellow-200',
    text: 'text-yellow-500',
    decoration: 'decoration-yellow-500',
  },
  pink: {
    bg: 'bg-pink-500',
    bgLight:'bg-pink-100',
    borderBase: 'border-pink-500',
    border: 'hover:border-pink-500',
    'hc-text': 'text-pink-600',
    'lc-text': 'bg-pink-200',
    text: 'text-pink-500',
    decoration: 'decoration-pink-500',
  },
  purple: {
    bg: 'bg-purple-500',
    bgLight:'bg-purple-100',
    borderBase: 'border-purple-500',
    border: 'hover:border-purple-500',
    'hc-text': 'text-purple-600',
    'lc-text': 'bg-purple-200',
    text: 'text-purple-500',
    decoration: 'decoration-purple-500',
  },sky: {
    bg: 'bg-sky-500',
    bgLight:'bg-sky-100',
    borderBase: 'border-sky-500',
    border: 'hover:border-sky-500',
    'hc-text': 'text-sky-600',
    'lc-text': 'bg-sky-200',
    text: 'text-sky-500',
    decoration: 'decoration-sky-500'
  },
  slate: {
    bg: 'bg-slate-700',
    bgLight:'bg-slate-100',
    borderBase: 'border-slate-700',
    border: 'hover:border-slate-700',
    'hc-text': 'text-slate-800',
    'lc-text': 'bg-slate-400',
    text: 'text-slate-600',
    decoration: 'decoration-slate-700'
  },amber: {
  bg: 'bg-amber-500',
  bgLight:'bg-amber-100',
  borderBase: 'border-amber-500',
  border: 'hover:border-amber-500',
  'hc-text': 'text-amber-600',
  'lc-text': 'bg-amber-200',
  text: 'text-amber-500',
  decoration: 'decoration-amber-500'
},
violet: {
  bg: 'bg-violet-500',
  bgLight:'bg-violet-100',
  borderBase: 'border-violet-500',
  border: 'hover:border-violet-500',
  'hc-text': 'text-violet-600',
  'lc-text': 'bg-violet-200',
  text: 'text-violet-500',
  decoration: 'decoration-violet-500'
}
}

export const serviceCards:serviceProps[] = [
  {
    title:"Brand Identity",
    icon:"fa-solid fa-compass-drafting" ,
    color:"red",
    paragraph:"Complete visual systems from logos to style guides",
    linkSrc:"services/branding",
  },
  {
    title:"Print Design",
    icon:"fa-solid fa-pen-fancy",
    color:"blue",
    paragraph:"Stunning business cards, letterheads & packaging",
    linkSrc:"services/print",
  },
  {
    title:"Advertising",
    icon:"fa-solid fa-bullhorn" ,
    color:"sky",
    paragraph:"Eye-catching campaigns for print and digital",
    linkSrc:"services/branding",
  },
  {
    title:"Event Branding",
    icon:"fa-solid fa-champagne-glasses" ,
    color:"pink",
    paragraph:"Memorable visuals for exhibitions and launches",
    linkSrc:"/services/events",
  },
    {
    title: "Web Design",
    icon: "fa-solid fa-display",
    color: "indigo",
    paragraph: "Modern, responsive websites tailored to your brand",
    linkSrc: "/services/web-design",
  },
  {
    title: "UX/UI Design",
    icon: "fa-solid fa-cubes",
    color: "violet",
    paragraph: "Intuitive interfaces and seamless user experiences",
    linkSrc: "/services/ux-ui",
  },
  {
    title: "Packaging Design",
    icon: "fa-solid fa-box-open",
    color: "amber",
    paragraph: "Visually appealing packaging that sells your product on sight",
    linkSrc: "/services/packaging",
  },
  {
    title: "Merch Design",
    icon: "fa-solid fa-shirt",
    color: "green",
    paragraph: "Branded apparel, accessories, and swag your audience will love",
    linkSrc: "/services/merch",
  }
]

export const faqContent = [
  [
    "What services do you offer?", 
    "We offer a full range of creative services including brand identity design, logo creation, packaging and product visuals, motion graphics, and event branding. Whether you need a fresh brand image, promotional materials, or visually stunning digital content, we tailor each project to fit your unique goals and audience."
  ],

  [
    "Do you work with small businesses or only large brands?", 
    "We’re proud to support businesses of all sizes — from solo entrepreneurs launching their first product to global companies rebranding at scale. No matter your background or industry, we approach each project with the same level of creativity, strategy, and dedication."
  ],

  [
    "How long does a project usually take?", 
    "It depends on the complexity and scope of the project. Simple logo designs might take a few days, while full branding packages or motion design projects can take 2–4 weeks. We always provide an estimated timeline up front and keep you updated throughout the process."
  ],

  [
    "Can I request revisions?", 
    "Yes, of course. We want you to be 100% happy with the final result. Most of our packages include a set number of revisions, but we’re flexible and collaborative — your feedback is an essential part of our creative process."
  ],

  [
    "How do I get started?", 
    "Getting started is easy! Just send us a message through our contact form or email, and let us know a bit about your project. We’ll set up a quick chat to understand your needs, walk you through our process, and provide a custom quote with no obligations."
  ],

  [
    "Can you help with social media visuals too?", 
    "Absolutely. We create custom-designed visuals for platforms like Instagram, Facebook, LinkedIn, and TikTok — including post templates, motion content, and story formats — to help your brand stand out online and connect with your audience consistently."
  ]
];

export const responseStepsContent = [
  [
    "Strategy Call Booking",
    "fa-solid fa-video",
    "Schedule a 30-min online meeting to discuss your vision",
    "blue"
  ],
  [
    "Creative Alignment",
    "fa-solid fa-lightbulb",
    "We'll refine concepts based on our meeting notes",
    "purple"
  ],
  [
    "Design Sprint",
    "fa-solid fa-pen-fancy",
    "Crafting your solutions (2-3 options)",
    "orange"
  ],
  [
    "Revisions Round",
    "fa-solid fa-arrows-rotate",
    "Your feedback → our refinements (2 rounds included)",
    "teal"
  ],
  [
    "Final Handoff",
    "fa-solid fa-cloud-arrow-down",
    "All source files + style guide delivered",
    "indigo"
  ]
];