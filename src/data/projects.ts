import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Divvy",
    href: "/projects",
    tags: ["Next JS, Convex, Clerk, Tailwind, Inngest, Shadcn UI,Vercel"],
    image: {
      LIGHT: "/images/projects/Divvy.png",
      DARK: "/images/projects/Divvy.png",
    },
  },
  {
    index: 1,
    title: "Novus",
    href: "/projects",
    tags: [
      "Next JS",
      "Tailwindcss",
      "Fabric.js",
      "ImageKit",
      "Shadcn UI",
      "Vercel",
    ],
    image: {
      LIGHT: "/images/projects/novus.png",
      DARK: "/images/projects/novus.png",
    },
  },
  {
    index: 2,
    title: "Axiom Hire",
    href: "/projects",
    tags: ["Reactjs", "Vite", "Tailwindcss", "Vercel", "Zustand", "React DND"],
    image: {
      LIGHT: "/images/projects/AxiomHire.png",
      DARK: "/images/projects/AxiomHire.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Divvy",
    favicon: "/images/projects/logos/mainlogo1.webp",
    imageUrl: ["/images/projects/Divvy.png", "/images/projects/Divvy1.png"],
    description:
      "Track shared expenses, split bills effortlessly, and settle up quickly. Never worry about who owes who again.",
    sourceCodeHref: "https://github.com/harsh7401/Divvy",
    liveWebsiteHref: "divvy-omega.vercel.app",
  },
  {
    name: "Novus",
    favicon: "/images/projects/logos/mainlogo1.webp",
    imageUrl: [
      "/images/projects/novus.png",
      "/images/projects/novus1.png",
      "/images/projects/novus2.png",
    ],
    description:
      "Harness the power of AI to perfect your photos. Our app offers a suite of advanced features, including resize, crop, seamless background replacement, and AI-powered enhancements to bring your images to life.",
    sourceCodeHref: "https://github.com/harsh7401/Novus",
    liveWebsiteHref: "novussss.vercel.app",
  },
  {
    name: "Axiom Hire",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/AxiomHire.png",
      "/images/projects/axomhire1.png",
    ],
    description:
      "Axiom Hire presents opportunities for job seekers and employers to connect and grows",
    sourceCodeHref: "https://github.com/harsh7401/Job_Portal",
    liveWebsiteHref: "axiomhire.vercel.app",
  },
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolioDark.webp",
      "/images/projects/portfolioLight.webp",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/BUMBAIYA/amitchauhan-v2",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
  {
    name: "SpenWise",
    favicon: "/images/projects/logos/covidtracker.ico",
    imageUrl: [
      "/images/projects/SW.png",
      // "/images/projects/SW1.png",
      "/images/projects/SW2.png",
      "/images/projects/SW3.png",
      "/images/projects/SW4.png",
      "/images/projects/SW5.png",
    ],
    description:
      "An AI-powered financail management platform that helps you track,analyze, and optimize your spending with real-time insights.",
    sourceCodeHref: "https://github.com/harsh7401/_SpendWise_",
    liveWebsiteHref: "https://spend-wise-puce.vercel.app/",
  },
  {
    name: "Stock predictor",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/stockPredictor.webp",
      "/images/projects/stockPredictorCandleChart.webp",
      "/images/projects/stockPredictorCompareChart.webp",
      "/images/projects/stockPredictorLineChart.webp",
    ],
    description:
      "Get prediction of opening and closing price of stocks price. Frontend is made using Reactjs and backend is made using Flask and Machine learning model are trained using Tensorflow",
    sourceCodeHref: "https://github.com/Rohrschachh/Stock-Market-Predictor",
  },
];
