// Case study data extracted from Manisha Shah's Notion portfolio
// Full case studies live in Notion; these are condensed summaries for the web portfolio.

const NOTION_ROOT = "https://wheat-drawer-2c3.notion.site";

export const CASE_STUDIES = {
  "subscription-tracker": {
    slug: "subscription-tracker",
    title: "Subscription Tracker App",
    tagline: "Simplifying subscription management with reminders, insights & centralized control.",
    accent: "#E07A5F",
    year: "2024",
    projectType: "Personal",
    role: "Lead UI/UX Designer",
    timeline: "8 weeks",
    tools: ["Figma", "Notion", "FigJam"],
    tags: ["Research", "UX", "UI", "Mobile App"],
    platform: "Mobile App",
    status: "shipped",
    notionUrl: `${NOTION_ROOT}/Subscription-Tracker-App-a64aeae0722e46f2b1eb08267703a854`,
    cover: "https://wheat-drawer-2c3.notion.site/image/attachment%3A2fbb03f6-ef0b-420d-9ca7-7be11571e3de%3AHero.png?table=block&id=79b5fce1-c858-4f83-aaa6-e075e59f2d40&spaceId=7e083159-0430-42df-95bb-193735c6a15e&width=2000&cache=v2",
    thumbnail: "https://wheat-drawer-2c3.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F7e083159-0430-42df-95bb-193735c6a15e%2Fdaf745d8-f409-4a7e-9757-6c4b479c2b4d%2FFrame_22256.png?id=a64aeae0-722e-46f2-b1eb-08267703a854&table=block&spaceId=7e083159-0430-42df-95bb-193735c6a15e&width=1200&cache=v2",
    overview:
      "A mobile application that lets users handle all their online subscriptions from a single location. It offers smart reminders for renewals, insights to reduce overspending, and personalized subscription optimization suggestions.",
    problem:
      "People have difficulties managing several subscriptions across different platforms. Missed renewals, unexpected charges, and lack of cost visibility occur. Users want simplicity in tracking their payments and proactive reminders to avoid frustration on financial matters.",
    insights: [
      "Users want a simple dashboard where they can track every subscription in one spot.",
      "Forgetting renewal dates leads to unwanted charges.",
      "Trial reminders are critical — people often forget to cancel.",
      "Users feel overwhelmed comparing different subscription plans.",
    ],
    solutions: [
      { t: "Centralized dashboard", d: "Input and organize every subscription — name, billing cycle, trial period — in one place." },
      { t: "Personalized recommendations", d: "Usage-pattern analysis surfaces discounts, upgrades, and better-fit plans." },
      { t: "Timely notifications", d: "Proactive alerts for trial ends, payment due dates, and available offers." },
      { t: "Rewards & loyalty", d: "Earn points for prolonged usage and referrals, redeemable for exclusive offers." },
    ],
    impact: [
      { n: "₹2–4k", l: "Est. yearly savings on forgotten subs" },
      { n: "3–5h", l: "Monthly time saved tracking" },
      { n: "1 hub", l: "Replaces apps + emails + bank checks" },
    ],
    takeaway:
      "The core emotion behind this problem is financial anxiety, not just inconvenience. Every decision — from a 7-day reminder window to a calming pink/blue palette — was anchored to reducing that anxiety.",
    screens: [
      "https://wheat-drawer-2c3.notion.site/image/attachment%3Ac39c69d3-3e64-433e-93e0-c0afd96153df%3AGroup_22255.png?table=block&id=21e4f010-2792-8014-852f-d39158b5bdca&spaceId=7e083159-0430-42df-95bb-193735c6a15e&width=2000&cache=v2",
      "https://wheat-drawer-2c3.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F7e083159-0430-42df-95bb-193735c6a15e%2F07fb1c58-0d19-4450-a37e-6d50b1ff2cc7%2FFrame_22256.png?table=block&id=21e4f010-2792-8086-8b29-e82dda2b60f4&spaceId=7e083159-0430-42df-95bb-193735c6a15e&width=2000&cache=v2",
    ],
  },

  "eco-buddy": {
    slug: "eco-buddy",
    title: "Eco Buddy",
    tagline: "Empowering sustainable shopping through clarity and transparent product credibility.",
    accent: "#2C5E3E",
    year: "2025",
    projectType: "Personal",
    role: "UI/UX Designer",
    timeline: "In progress",
    tools: ["Figma", "FigJam", "Notion"],
    tags: ["Research", "UX", "UI", "Mobile App", "Sustainability"],
    platform: "Mobile App",
    status: "wip",
    notionUrl: `${NOTION_ROOT}/Eco-Buddy-8fad678ee4e444fea055dcb90452ad63`,
    cover: "https://wheat-drawer-2c3.notion.site/image/attachment%3Aa363ed08-3e0e-40ae-8b6d-b0e82a3fb09a%3AGradient_Colorful_Minimalist_Coming__Soon_Banner_(1).jpg?id=8fad678e-e4e4-44fe-a055-dcb90452ad63&table=block&spaceId=7e083159-0430-42df-95bb-193735c6a15e&width=2000&cache=v2",
    thumbnail: "https://wheat-drawer-2c3.notion.site/image/attachment%3Aa363ed08-3e0e-40ae-8b6d-b0e82a3fb09a%3AGradient_Colorful_Minimalist_Coming__Soon_Banner_(1).jpg?id=8fad678e-e4e4-44fe-a055-dcb90452ad63&table=block&spaceId=7e083159-0430-42df-95bb-193735c6a15e&width=1200&cache=v2",
    overview:
      "Eco Buddy helps everyday shoppers make sustainable choices with confidence. It surfaces transparent product-credibility signals — certifications, materials, brand ethics — so eco-conscious consumers stop second-guessing every purchase.",
    problem:
      "Shoppers who want to buy sustainably are drowning in vague 'green' claims. There is no trusted, at-a-glance way to compare products on real sustainability data — so they either give up or feel guilty about their choices.",
    insights: [
      "'Greenwashing' erodes trust — users want proof, not marketing language.",
      "Certifications matter, but users don't remember what most of them mean.",
      "Decisions happen at the shelf — insights need to be scannable in seconds.",
    ],
    solutions: [
      { t: "Credibility score", d: "A single, transparent score aggregating certifications, materials, and brand practices." },
      { t: "Scan-to-compare", d: "Instantly compare alternatives with better sustainability profiles." },
      { t: "Explain-my-score", d: "Tap any factor to understand exactly why a product scored what it did." },
    ],
    takeaway:
      "This project is teaching me how much trust design carries — especially when users are being asked to change habits. High-fidelity work is in progress; research and low-fi flows are complete.",
    screens: [],
  },

  "vestly": {
    slug: "vestly",
    title: "Vestly",
    tagline: "Your AI stylist for the wardrobe you already own — dressed for every Indian occasion, in seconds.",
    accent: "#A259FF",
    year: "2025",
    projectType: "Personal",
    role: "UI/UX Designer",
    timeline: "In progress",
    tools: ["Figma", "FigJam", "Midjourney"],
    tags: ["Research", "UX", "UI", "Mobile App", "AI"],
    platform: "Mobile App",
    status: "wip",
    notionUrl: `${NOTION_ROOT}/Vestly-35a4f010279280c1861eeab97a83c73f`,
    cover: "https://wheat-drawer-2c3.notion.site/image/attachment%3Aa363ed08-3e0e-40ae-8b6d-b0e82a3fb09a%3AGradient_Colorful_Minimalist_Coming__Soon_Banner_(1).jpg?id=35a4f010-2792-80c1-861e-eab97a83c73f&table=block&spaceId=7e083159-0430-42df-95bb-193735c6a15e&width=2000&cache=v2",
    thumbnail: "https://wheat-drawer-2c3.notion.site/image/attachment%3Aa363ed08-3e0e-40ae-8b6d-b0e82a3fb09a%3AGradient_Colorful_Minimalist_Coming__Soon_Banner_(1).jpg?id=35a4f010-2792-80c1-861e-eab97a83c73f&table=block&spaceId=7e083159-0430-42df-95bb-193735c6a15e&width=1200&cache=v2",
    overview:
      "Vestly is an AI stylist built for Indian occasions — from casual to festive to formal. It reads your existing wardrobe, understands the event, and suggests outfits you can actually wear tonight, no shopping required.",
    problem:
      "Standing in front of an overflowing closet asking 'I have nothing to wear' is universal — but especially loaded in India, where occasion + weather + cultural expectation multiply the decision. Existing stylists focus on selling more clothes, not remixing what you own.",
    insights: [
      "Users want outfit help without pressure to buy new items.",
      "Occasion context (haldi, office, brunch, diwali) is non-negotiable.",
      "Trust in AI drops when suggestions ignore body-type or personal style.",
    ],
    solutions: [
      { t: "Wardrobe capture", d: "Photograph or import your existing pieces once; Vestly categorizes them automatically." },
      { t: "Occasion-aware outfits", d: "Tell the AI where you're going — it composes 3 outfit options from your own closet." },
      { t: "Style memory", d: "Learns from what you actually wear vs. skip, so it gets you." },
    ],
    takeaway:
      "Designing culturally-aware AI is a design problem, not just a data problem. Case study is a high-fidelity WIP — research + user flows + wireframes are done.",
    screens: [],
  },

  "smart-home": {
    slug: "smart-home",
    title: "Smart Home Web App",
    tagline: "Control lights, temperature, security, and more from a single smart app.",
    accent: "#1ABCFE",
    year: "2025",
    projectType: "Personal",
    role: "Lead UI/UX Designer",
    timeline: "Apr 3 → May 8, 2025",
    tools: ["Figma", "Notion", "FigJam"],
    tags: ["Research", "UX", "UI", "Web App"],
    platform: "Web App",
    status: "shipped",
    notionUrl: `${NOTION_ROOT}/Smart-Home-Web-App-2b34f010279280b49736db5c1a4eef12`,
    cover: "https://wheat-drawer-2c3.notion.site/image/attachment%3A1d610819-bcd2-4885-9d5d-a2217355b766%3AHero1.jpg?table=block&id=2b34f010-2792-80b4-9736-db5c1a4eef12&spaceId=7e083159-0430-42df-95bb-193735c6a15e&width=2000&cache=v2",
    thumbnail: "https://wheat-drawer-2c3.notion.site/image/attachment%3A1d610819-bcd2-4885-9d5d-a2217355b766%3AHero1.jpg?id=2b34f010-2792-80b4-9736-db5c1a4eef12&table=block&spaceId=7e083159-0430-42df-95bb-193735c6a15e&width=1200&cache=v2",
    overview:
      "A Smart Home App that transforms everyday living by connecting all smart devices into one seamless, intuitive platform. Manage lights, temperature, appliances, cameras, and automation presets from a single interface — mobile or web.",
    problem:
      "Managing multiple smart devices across different apps is confusing and time-consuming. Fragmented controls, poor visibility, and complex settings prevent users from fully utilizing smart home tech. There's a need for a unified system that enhances convenience, security, and energy efficiency.",
    insights: [
      "Users interact with multiple smart devices daily.",
      "App-switching feels frustrating and time-consuming.",
      "Automations and real-time monitoring improve peace of mind and efficiency.",
    ],
    solutions: [
      { t: "Unified dashboard", d: "Quick status overview and device control in a single glance." },
      { t: "Energy insights", d: "Consumption tracking helps smart decisions and real savings." },
      { t: "Live monitoring", d: "Real-time cameras and alerts for confident security." },
      { t: "Personalization", d: "Custom themes and device pairing tailored to the household." },
    ],
    impact: [
      { n: "40%", l: "Faster device control" },
      { n: "50%", l: "Lower cognitive load" },
      { n: "30%", l: "Better onboarding success" },
      { n: "10–15%", l: "Energy savings" },
    ],
    takeaway:
      "Designing for smart homes is about balancing functionality with simplicity — users should never feel overwhelmed. The more they understand what's happening in their home, the more confident and secure they feel.",
    screens: [
      "https://wheat-drawer-2c3.notion.site/image/attachment%3A093ce7ec-86a6-4889-b84b-6365b0d09d48%3AGroup_22259.jpg?table=block&id=2b44f010-2792-8071-bdb9-d449347c71ec&spaceId=7e083159-0430-42df-95bb-193735c6a15e&width=2000&cache=v2",
      "https://wheat-drawer-2c3.notion.site/image/attachment%3A3450789e-3a2c-41cf-a515-ff24a88c06dd%3AFrame_2608555.jpg?table=block&id=2b44f010-2792-8011-9d59-ca668b58fec8&spaceId=7e083159-0430-42df-95bb-193735c6a15e&width=2000&cache=v2",
      "https://wheat-drawer-2c3.notion.site/image/attachment%3A5fd6097d-e3da-4a2a-be6c-9111dc1d9ac6%3AFrame_2608557.jpg?table=block&id=2b44f010-2792-8091-94ba-d452538eced7&spaceId=7e083159-0430-42df-95bb-193735c6a15e&width=2000&cache=v2",
    ],
  },

  "kanban": {
    slug: "kanban",
    title: "Kanban App",
    tagline: "Enhancing task visibility & collaboration with an intuitive Kanban workflow.",
    accent: "#F24E1E",
    year: "2023",
    projectType: "Client — Steward Land Company",
    role: "UI/UX Designer",
    timeline: "6 weeks",
    tools: ["Adobe XD", "Figma"],
    tags: ["UX", "UI", "Web App", "Prototype"],
    platform: "Web App",
    status: "shipped",
    notionUrl: `${NOTION_ROOT}/Kanban-App-2554f010279280c28fd7e4350a60a841`,
    cover: "https://wheat-drawer-2c3.notion.site/image/attachment%3A4e9b52ba-6a49-46af-9e96-80a7eea43338%3AFrame_5_(1).png?table=block&id=2554f010-2792-80c2-8fd7-e4350a60a841&spaceId=7e083159-0430-42df-95bb-193735c6a15e&width=2000&cache=v2",
    thumbnail: "https://wheat-drawer-2c3.notion.site/image/attachment%3A4e9b52ba-6a49-46af-9e96-80a7eea43338%3AFrame_5_(1).png?id=2554f010-2792-80c2-8fd7-e4350a60a841&table=block&spaceId=7e083159-0430-42df-95bb-193735c6a15e&width=1200&cache=v2",
    overview:
      "A web-based Kanban application built for Steward Land Company — a real estate developer needing to coordinate personnel across multiple projects. The design blends professional polish with an approachable, collaborative feel.",
    problem:
      "Steward Land needed a digital tool to efficiently manage and coordinate personnel across multiple real estate projects. The challenge was balancing professionalism and industry expertise with something approachable and easy to adopt.",
    insights: [
      "Real-estate teams switch between many parallel projects daily.",
      "Status opacity across departments causes accountability gaps.",
      "Users adopt tools that feel warm — not corporate — even in serious industries.",
    ],
    solutions: [
      { t: "Board with clarity", d: "A professional, polished aesthetic (Inter + accent #FFAC0A) that reflects industry expertise." },
      { t: "Warm details", d: "Approachable design language that fosters collaboration over compliance." },
      { t: "Streamlined workflows", d: "Tracking tasks, responsibilities, and progress in a single Kanban board." },
    ],
    impact: [
      { n: "35%", l: "Faster task tracking" },
      { n: "↓", l: "Fewer project delays" },
      { n: "↑", l: "Adoption across departments" },
    ],
    takeaway:
      "Even in traditional industries, users adopt tools that feel human. A carefully chosen accent color and a friendly-professional type system did more for adoption than any onboarding flow.",
    screens: [
      "https://wheat-drawer-2c3.notion.site/image/attachment%3A28d27be2-6d0d-4f5e-8840-726836b13954%3AFrame_5.png?table=block&id=2554f010-2792-80fb-af9f-fbb42a36fb18&spaceId=7e083159-0430-42df-95bb-193735c6a15e&width=2000&cache=v2",
      "https://wheat-drawer-2c3.notion.site/image/attachment%3Ab377a972-d61d-4d81-ae2b-2d9cc686338a%3AFrame_22220.png?table=block&id=2554f010-2792-80e3-95d5-cf8ea7ba36bb&spaceId=7e083159-0430-42df-95bb-193735c6a15e&width=2000&cache=v2",
    ],
  },
};

// Ordered list used by the Projects grid on the home page
export const CASE_STUDY_ORDER = [
  "subscription-tracker",
  "smart-home",
  "kanban",
  "eco-buddy",
  "vestly",
];

export const NOTION_PORTFOLIO_URL = `${NOTION_ROOT}/Manisha-Shah-21e4f0102792803fa824ce509b11deee`;
