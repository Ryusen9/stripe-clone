import shape1 from "../../public/logos/shape_1.svg";
import shape2 from "../../public/logos/shape_2.svg";
import shape3 from "../../public/logos/shape_3.svg";
import shape4 from "../../public/logos/shape_4.svg";

import {
  Building2,
  Cpu,
  Heart,
  Rocket,
  ShoppingBasket,
  Umbrella,
} from "lucide-react";

export const navMenuLinks = [
  {
    title: "Products",
    subMenu: true,
    subMenuItems: [
      {
        title: "Global Payments",
        links: [
          {
            name: "Payments",
            link: "/payments",
            desc: "Online Payments",
            shape: shape1,
          },
          {
            name: "Terminal",
            link: "/terminal",
            desc: "In-person payments",
            shape: shape2,
          },
          {
            name: "Billing",
            link: "/billing",
            desc: "Invoicing and subscriptions",
            shape: shape3,
          },
          {
            name: "Connect",
            link: "/connect",
            desc: "For platforms and marketplaces",
            shape: shape4,
          },
        ],
      },
    ],
    more: true,
    sideBarItems: [
      {
        name: "Payment Methods",
        link: "/payment-methods",
      },
      {
        name: "Link",
        link: "/link",
      },
      {
        name: "Atlas",
        link: "/atlas",
      },
      {
        name: "Climate",
        link: "/climate",
      },
    ],
  },
  {
    title: "Solutions",
    subMenu: true,
    subMenuItems: [
      {
        title: "By Stage",
        links: [
          {
            name: "Enterprise",
            icon: Building2,
            link: "/enterprise",
          },
          {
            name: "Startups",
            icon: Rocket,
            link: "/startups",
          },
        ],
      },
      {
        title: "By use case",
        links: [
          {
            name: "AI Companies",
            link: "/ai-companies",
            icon: Cpu,
          },
          {
            name: "E-commerce",
            link: "/e-commerce",
            icon: ShoppingBasket,
          },
          {
            name: "Insurance",
            link: "/insurance",
            icon: Umbrella,
          },
          {
            name: "Nonprofit",
            link: "/nonprofit",
            icon: Heart,
          },
        ],
      },
    ],
    more: false,
  },
  {
    title: "Developers",
    link: "/developers",
    subMenu: false,
  },
  {
    title: "Resources",
    link: "/resources",
    subMenu: false,
  },
  {
    title: "Pricing",
    link: "/pricing",
    subMenu: false,
  },
];