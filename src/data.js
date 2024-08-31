import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, reiciendis obcaecati perferendis minus ullam, cumque possimus?",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, reiciendis obcaecati perferendis minus ullam, cumque possimus?",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, reiciendis obcaecati perferendis minus ullam, cumque possimus?",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "August 26, 2024",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, reiciendis obcaecati perferendis minus ullam, cumque possimus?",
    location: "China",
    duration: "7 days",
    cost: "$2100",
  },
  {
    id: 2,
    image: tour2,
    date: "June 15, 2024",
    title: "Best of Java",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, reiciendis obcaecati perferendis minus ullam, cumque possimus?",
    location: "Indonesia",
    duration: "10 days",
    cost: "$2500",
  },
  {
    id: 3,
    image: tour3,
    date: "July 5, 2024",
    title: "Explore hong kong",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, reiciendis obcaecati perferendis minus ullam, cumque possimus?",
    location: "Hong Kong",
    duration: "14 days",
    cost: "$3200",
  },
  {
    id: 4,
    image: tour4,
    date: "August 26, 2024",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, reiciendis obcaecati perferendis minus ullam, cumque possimus?",
    location: "China",
    duration: "7 days",
    cost: "$2100",
  },
];
