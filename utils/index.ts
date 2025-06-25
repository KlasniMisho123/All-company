import { serviceProps } from "@/types/types"

export const colorClassMap = {
  indigo: {
    bg: 'bg-indigo-500',
    borderBase: 'border-indigo-500',
    border: 'hover:border-indigo-500',
    'hc-text': 'text-indigo-600',
    'lc-text': 'bg-indigo-200',
    text: 'text-indigo-500',
    decoration: 'decoration-indigo-500',
  },
  blue: {
    bg: 'bg-blue-500',
    borderBase: 'border-blue-500',
    border: 'hover:border-blue-500',
    'hc-text': 'text-blue-600',
    'lc-text': 'bg-blue-200',
    text: 'text-blue-500',
    decoration: 'decoration-blue-500',
  },
  red: {
    bg: 'bg-red-500',
    borderBase: 'border-red-500',
    border: 'hover:border-red-500',
    'hc-text': 'text-red-600',
    'lc-text': 'bg-red-200',
    text: 'text-red-500',
    decoration: 'decoration-red-500',
  },
  green: {
    bg: 'bg-green-500',
    borderBase: 'border-green-500',
    border: 'hover:border-green-500',
    'hc-text': 'text-green-600',
    'lc-text': 'bg-green-200',
    text: 'text-green-500',
    decoration: 'decoration-green-500',
  },
  yellow: {
    bg: 'bg-yellow-500',
    borderBase: 'border-yellow-500',
    border: 'hover:border-yellow-500',
    'hc-text': 'text-yellow-600',
    'lc-text': 'bg-yellow-200',
    text: 'text-yellow-500',
    decoration: 'decoration-yellow-500',
  },
  pink: {
    bg: 'bg-pink-500',
    borderBase: 'border-pink-500',
    border: 'hover:border-pink-500',
    'hc-text': 'text-pink-600',
    'lc-text': 'bg-pink-200',
    text: 'text-pink-500',
    decoration: 'decoration-pink-500',
  },
  purple: {
    bg: 'bg-purple-500',
    borderBase: 'border-purple-500',
    border: 'hover:border-purple-500',
    'hc-text': 'text-purple-600',
    'lc-text': 'bg-purple-200',
    text: 'text-purple-500',
    decoration: 'decoration-purple-500',
  },sky: {
    bg: 'bg-sky-500',
    borderBase: 'border-sky-500',
    border: 'hover:border-sky-500',
    'hc-text': 'text-sky-600',
    'lc-text': 'bg-sky-200',
    text: 'text-sky-500',
    decoration: 'decoration-sky-500'
  },
  slate: {
    bg: 'bg-slate-700',
    borderBase: 'border-slate-700',
    border: 'hover:border-slate-700',
    'hc-text': 'text-slate-800',
    'lc-text': 'bg-slate-400',
    text: 'text-slate-600',
    decoration: 'decoration-slate-700'
  },amber: {
  bg: 'bg-amber-500',
  borderBase: 'border-amber-500',
  border: 'hover:border-amber-500',
  'hc-text': 'text-amber-600',
  'lc-text': 'bg-amber-200',
  text: 'text-amber-500',
  decoration: 'decoration-amber-500'
},
violet: {
  bg: 'bg-violet-500',
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
