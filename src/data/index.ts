import img1 from "../../public/Photos/10005.webp";
import img2 from "../../public/Photos/image3.png";
import img3 from "../../public/Photos/image4.png";
import img4 from "../../public/Photos/image6.jpg";
import logo1 from "../../public/logos/download1.svg";
import logo2 from "../../public/logos/download2.svg";
import logo3 from "../../public/logos/download3.svg";
import logo4 from "../../public/logos/download4.svg";
import accrodImg1 from "../../public/Photos/accord1.png";
import accrodImg2 from "../../public/Photos/accord2.png";
import accrodImg3 from "../../public/Photos/accord3.png";
import accrodImg4 from "../../public/Photos/accord4.png";
import caroImg1 from "../../public/Image-foundation/10001.png";
import caroImg2 from "../../public/Image-foundation/10002.png";
import caroImg3 from "../../public/Image-foundation/10003.png";
import caroImg4 from "../../public/Image-foundation/10004.png";
import caroImg5 from "../../public/Image-foundation/10005.png";
import caroImg6 from "../../public/Image-foundation/10006.png";
import amazonLogo from "../../public/logos/amazon.svg";
import instacartLogo from "../../public/logos/instacart.svg";
import shopifyLogo from "../../public/logos/shopify.svg";
import substackLogo from "../../public/logos/substack.svg";
import {
  LayoutGrid,
  LifeBuoy,
  Rocket,
  ShieldBan,
  TrendingUp,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";

export type LogoItem = {
  id: string;
  label: string;
  logoSrc?: StaticImageData | string | null;
  logoNode?: ReactNode;
};

export type TestimonialItem = {
  id: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  company: string;
  ctaText: string;
  ctaHref: string;
  avatarUrl: string;
};

export const backboneData = [
  { num: "135+", desc: "currencies and payment methods supported", img: img1 },
  { num: "$1.4T", desc: "in payments volume processed in 2024", img: img2 },
  { num: "99.999%", desc: "historical uptime for Stripe services", img: img3 },
  {
    num: "200M+",
    desc: "active subscriptions managed on Stripe Billing",
    img: img4,
  },
];

export const accordionData = [
  {
    title: "Hertz unifies commerce with Stripe.",
    logo: logo1,
    img: accrodImg1,
    bottom: [
      {
        bold: 160,
        norm: "countries",
      },
      {
        bold: "11k+",
        norm: "locations globally",
      },
      {
        bold: "Products",
        norm: "used Payments, Terminal, Connect, Radar, and Stripe Sigma",
      },
    ],
  },
  {
    title:
      "URBN consolidates $5 billion in online and in-store revenue onto Stripe.",
    logo: logo2,
    img: accrodImg2,
    bottom: [
      {
        bold: "5",
        norm: "consumer brands in retailer portfolio",
      },
      {
        bold: "700+",
        norm: "store locations",
      },
      {
        bold: "Products used",
        norm: "Payments, Terminal, Connect, Stripe Sigma, and Radar",
      },
    ],
  },
  {
    title: "Instacart powers online grocery delivery with Stripe.",
    logo: logo3,
    img: accrodImg3,
    bottom: [
      { bold: "600K+", norm: "shoppers" },
      { bold: "1.8K", norm: "retail partners across nearly 100K stores" },
      {
        bold: "Products used",
        norm: "Payments, Connect, Data Pipeline, and Issuing",
      },
    ],
  },
  {
    title: "Le Monde improves local and international payments with Stripe.",
    logo: logo4,
    img: accrodImg4,
    bottom: [
      { bold: "100%", norm: "of digital and print payments powered by Stripe" },
      { bold: "Less than 3 months", norm: "to implement and go live" },
      {
        bold: "Products used",
        norm: "Payments, Stripe Sigma, and Radar",
      },
    ],
  },
];

export const backboneGrid = [
  {
    icon: LayoutGrid,
    btnText: "View services",
    desc: "Professional services. Get tailored guidance from Stripe on implementation, complex integrations, or major migrations.",
  },
  {
    icon: Users,
    btnText: "View partners",
    desc: "Stripe-certified experts. Work with a Stripe consulting partner that can integrate and deploy Stripe solutions on your behalf.",
  },
  {
    icon: LifeBuoy,
    btnText: "View plans",
    desc: "Support plans. Receive ongoing assistance and day-to-day support for technical questions with tiered plans based on your needs.",
  },
];

export const caroFoundationData = [
  {
    btnTxt: "item1",
    desc: "Lovable grows into a vibe-coding juggernaut with Stripe.",
    img: caroImg1,
  },
  {
    btnTxt: "item2",
    desc: "Lyft scales its marketplace with Stripe.",
    img: caroImg2,
  },
  {
    btnTxt: "item3",
    desc: "Doordash powers on-demand delivery with Stripe.",
    img: caroImg3,
  },
  {
    btnTxt: "item4",
    desc: "Salesforce empowers global subscriptions with Stripe.",
    img: caroImg4,
  },
  {
    btnTxt: "item5",
    desc: "Meta scales payments for its global community with Stripe.",
    img: caroImg5,
  },
  {
    btnTxt: "item6",
    desc: "Amazon ramps up international sales with Stripe.",
    img: caroImg6,
  },
];

export const reviewsGrid = [
  {
    icon: Rocket,
    desc: "Get to market faster.Launch and scale payments products with lower operational overhead using embedded components and no-code tools.",
  },
  {
    icon: TrendingUp,
    desc: "Grow new lines of revenue.Monetize platform transactions—including payments, card interchange, and financing fees.",
  },
  {
    icon: ShieldBan,
    desc: "Manage platform risk.Stay ahead of global regulations with tools for compliance, credit risk, fraud prevention, and account security.",
  },
];

export const testimonialLogos: LogoItem[] = [
  { id: "amazon", label: "Amazon", logoSrc: amazonLogo },
  { id: "shopify", label: "Shopify", logoSrc: shopifyLogo },
  { id: "substack", label: "Substack", logoSrc: substackLogo },
  { id: "instacart", label: "Instacart", logoSrc: instacartLogo },
];

export const testimonialItems: TestimonialItem[] = [
  {
    id: "amazon",
    quote:
      "With Stripe, we have a global technology partner to help teams keep growing and evolving in new markets.",
    authorName: "Kurtis Moyer",
    authorTitle: "Lead Product Manager of Payments",
    company: "Amazon",
    ctaText: "Read the story",
    ctaHref: "#",
    avatarUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=192&h=192&q=80",
  },
  {
    id: "shopify",
    quote:
      "We streamlined onboarding and improved payment success rates while keeping the experience clean and consistent for customers.",
    authorName: "Jordan Lee",
    authorTitle: "Payments Product Lead",
    company: "Shopify",
    ctaText: "Read the story",
    ctaHref: "#",
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=192&h=192&q=80",
  },
  {
    id: "substack",
    quote:
      "Our creators can now get paid faster, with fewer failed payments—and less time spent on support.",
    authorName: "Avery Chen",
    authorTitle: "Platform PM",
    company: "Substack",
    ctaText: "Read the story",
    ctaHref: "#",
    avatarUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=192&h=192&q=80",
  },
  {
    id: "instacart",
    quote:
      "We expanded into new markets with a payments setup that scales, stays compliant, and keeps checkout effortless.",
    authorName: "Sam Rivera",
    authorTitle: "Director, Product",
    company: "Instacart",
    ctaText: "Read the story",
    ctaHref: "#",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=192&h=192&q=80",
  },
];

export const purposeData = [
  {num: "500M+", desc: "API requests per day"},
  {num: "10K+", desc: "API requests per second"},
  {num: "150k+", desc: "Transactions per second"},
]