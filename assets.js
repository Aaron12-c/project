// src/assets/data.js

// ----------- IMPORT IMAGES -----------
import logo from "./logo.svg";
import menu_icon from "./menu_icon.svg";
import close_icon from "./close_icon.svg";
import search_icon from "./search_icon.svg";
import cart_icon from "./cart_icon.svg";
import facebook_logo from "./facebook_logo.svg";
import instagram_logo from "./instagram_logo.svg";
import twitter_logo from "./twitter_logo.svg";
import benz_engine from "./benz_engine.png";
import benz_headlight from "./benz_headlight.png";
import benz_bumper from "./benz_bumper.png";
import benz_tyre from "./benz_tyre.png";
import benz_brake from "./benz_brake.png";
import benz_logo from "./benz_logo.png";
import testimonial_user1 from "./testimonial_user1.png";
import testimonial_user2 from "./testimonial_user2.png";
import testimonial_user3 from "./testimonial_user3.png";

// ----------- NAV LINKS -----------
export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

// ----------- WHY CHOOSE US SECTION -----------
export const whyChooseUs = [
  {
    id: 1,
    title: "Genuine Benz Parts",
    description:
      "We provide 100% original Mercedes-Benz spare parts sourced directly from certified distributors.",
    icon: benz_logo,
  },
  {
    id: 2,
    title: "Fast Nationwide Delivery",
    description:
      "We ensure quick delivery across Nigeria so you can get your parts when you need them.",
    icon: cart_icon,
  },
  {
    id: 3,
    title: "Affordable Prices",
    description:
      "Get the best deals on authentic Benz components without compromising quality.",
    icon: search_icon,
  },
  {
    id: 4,
    title: "Expert Support",
    description:
      "Our support team is available to guide you in choosing the right parts for your vehicle.",
    icon: menu_icon,
  },
];

// ----------- TESTIMONIALS -----------
export const testimonials = [
  {
    id: 1,
    name: "James Adewale",
    role: "Auto Mechanic, Lagos",
    message:
      "I’ve been getting all my Benz parts here for over a year — everything is top quality and delivery is always on time!",
    image: testimonial_user1,
  },
  {
    id: 2,
    name: "Fatima Musa",
    role: "Car Enthusiast, Abuja",
    message:
      "Their customer service is excellent. They helped me find the right headlights for my Benz GLK. Highly recommend!",
    image: testimonial_user2,
  },
  {
    id: 3,
    name: "Chuka Onyekachi",
    role: "Workshop Owner, Enugu",
    message:
      "This is the best place to buy genuine Mercedes parts online. Easy to order and quick delivery!",
    image: testimonial_user3,
  },
];

// ----------- DUMMY CAR PARTS DATA -----------
export const carParts = [
  {
    _id: "part001",
    name: "Mercedes-Benz Engine (C-Class 2019)",
    image: benz_engine,
    price: 1500000,
    category: "Engine",
    stock: 4,
    description:
      "High-performance Mercedes-Benz C-Class 2019 engine with 2.0L turbocharger. Tested and verified for efficiency.",
  },
  {
    _id: "part002",
    name: "Benz LED Headlight (E-Class 2020)",
    image: benz_headlight,
    price: 320000,
    category: "Lighting",
    stock: 8,
    description:
      "OEM Mercedes-Benz LED headlight for E-Class models (2020+). High durability and crystal-clear illumination.",
  },
  {
    _id: "part003",
    name: "Front Bumper (Benz GLK 2015)",
    image: benz_bumper,
    price: 180000,
    category: "Body Parts",
    stock: 5,
    description:
      "Original Mercedes-Benz GLK front bumper made from durable ABS plastic with perfect fit and finish.",
  },
  {
    _id: "part004",
    name: "Mercedes-Benz Alloy Wheel (Set of 4)",
    image: benz_tyre,
    price: 600000,
    category: "Wheels & Tires",
    stock: 6,
    description:
      "Premium alloy wheels designed for comfort and control. Fits most Benz sedans and SUVs.",
  },
  {
    _id: "part005",
    name: "Benz Brake Disc (C-Class 2021)",
    image: benz_brake,
    price: 95000,
    category: "Brakes",
    stock: 12,
    description:
      "High-quality brake discs for Mercedes-Benz C-Class 2021. Reliable stopping power with long lifespan.",
  },
];

// ----------- FOOTER SOCIALS -----------
export const socials = [
  { name: "Facebook", icon: facebook_logo, link: "https://facebook.com" },
  { name: "Instagram", icon: instagram_logo, link: "https://instagram.com" },
  { name: "Twitter", icon: twitter_logo, link: "https://twitter.com" },
];

// ----------- EXPORT ASSETS -----------
export const assets = {
  logo,
  menu_icon,
  close_icon,
  search_icon,
  cart_icon,
};
