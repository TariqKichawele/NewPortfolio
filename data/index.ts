export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];
  
export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
];
  
export const projects = [
    {
      id: 1,
      title: "Yoom - Video Conferencing App",
      des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://zoom-clone-topaz.vercel.app/",
    },
    {
      id: 2,
      title: "AI Image SaaS - Pixel Perfect",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://ai-images-seven.vercel.app/",
    },
    {
      id: 3,
      title: "NetMonitor",
      des: "NetMonitor is a comprehensive website monitoring tool built using TailwindCSS and Next.js. It provides real-time monitoring, alerting, and analytics to ensure your website is always up and running. The application is fully responsive, ensuring optimal performance across all devices",
      img: "/netmonitor.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg",],
      link: "https://net-monitor.vercel.app/",
    },
    {
      id: 4,
      title: "Figma Clone - FigPro",
      des: "The app allows users to create, edit and share designs in real-time with other users. Integrated Liveblocks for real-time collaborative editing functionality, enabling multiple users to work simultaneously on design projects and see changes in real-time",
      img: "/figpro.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg"],
      link: "https://figma-clone-jade-ten.vercel.app/"
    }
];
  
export const testimonials = [
    {
      quote:
        "Working with Tariq was a fantastic experience. His work ethic is unmatched, and his attention to detail ensures every aspect of the project is perfect. Also his promptness and clear communication made the entire process smooth and stress-free. If you need a dedicated professional to bring your vision to life, Tariq is the one to choose.",
      name: "Michael Johnson",
      title: "Viable Technologies",
      img: "/avatar1.webp"
    },
    {
      quote:
      "Tariq brought our vision to life with a stunning website that perfectly captures our brand identity. His proficiency in both web development and design is evident in the quality of his work. He was meticulous in his approach, ensuring that every detail was perfect and that the site was fully optimized for performance",
      name: "Danielle Clarence",
      title: "Founder of NetMonitor",
      img: "/avatar2.jpg.avif"
    },
    {
      quote:
        "We hired Tariq to design and develop our startup's website, and we couldn't be more impressed with the outcome. Tariq's ability to blend aesthetics with functionality resulted in a site that not only looks fantastic but also provides an excellent user experience. He was always available to answer questions and provided valuable insights that improved our initial ideas",
      name: "David Kijo",
      title: "Director of AlphaStream Technologies",
      img: "/avatar3.png"
    },
]
  
export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
];
  
export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Fullstack Developer",
      desc: "Designed and developed multiple web application including the frontend, backend and database systems",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
];
  
export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
];