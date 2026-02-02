import img1 from "../../public/Photos/image2.png";
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
import accrodImg4 from "../../public/Photos/accord4.jpg";
import caroImg1 from "../../public/Image-foundation/10001.png";
import caroImg2 from "../../public/Image-foundation/10002.png";
import caroImg3 from "../../public/Image-foundation/10003.png";
import caroImg4 from "../../public/Image-foundation/10004.png";
import caroImg5 from "../../public/Image-foundation/10005.png";
import caroImg6 from "../../public/Image-foundation/10006.png";
import caroImg7 from "../../public/Image-foundation/10007.png";

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
