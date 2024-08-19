import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
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
  { id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia corrupti blanditiis voluptate esse quasi magni alias qui nesciunt ullam at!",
  },
  { id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hikling",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia corrupti blanditiis voluptate esse quasi magni alias qui nesciunt ullam at!",
  },
  { id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia corrupti blanditiis voluptate esse quasi magni alias qui nesciunt ullam at!",
  },
]

export const tours = [
  { id: 1,
      images: ",/images/tour-1,jpeg",
      date: "august 26th, 2024",
      title: "tibet adventure",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nam quo magnam repellendus repudiandae quas eveniet, laudantium nisi doloribus",
      location: "china",
      duration: 6,
      cost: 2100,
  },
  { id: 2,
    images: ",/images/tour-2,jpeg",
    date: "august 26th, 2024",
    title: "tibet adventure",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nam quo magnam repellendus repudiandae quas eveniet, laudantium nisi doloribus",
    location: "china",
    duration: 6,
    cost: 1800,        
},
{ id: 3,
  images: ",/images/tour-3,jpeg",
  date: "august 26th, 2024",
  title: "tibet adventure",
  info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nam quo magnam repellendus repudiandae quas eveniet, laudantium nisi doloribus",
  location: "china",
  duration: 6,
  cost: 1800,        
}
]
