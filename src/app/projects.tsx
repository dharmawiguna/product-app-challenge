"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/porto/dashboard-job.gif",
    title: "Dashboard Development",
    subtitle: "Portal Job: Dashboard Admin",
    desc: "The project is crafted using TypeScript in conjunction with Next.js version 14.1.3, a powerful framework known for its server-side rendering capabilities and robust developer experience. Authentication features are seamlessly integrated using NextAuth",
    url: "https://github.com/dharmawiguna/job-hunter-dashboard",
    devLogo: [
      {
        name: "react",
        image: "/image/porto/dev-logos/react-logo.png",
      },
      {
        name: "next",
        image: "/image/porto/dev-logos/next-logo.png",
      },
      {
        name: "typescript",
        image: "/image/porto/dev-logos/ts-logo.png",
      },
      {
        name: "prisma",
        image: "/image/porto/dev-logos/prisma-logo.png",
      },
      {
        name: "supabase",
        image: "/image/porto/dev-logos/supabase-logo.png",
      },
      {
        name: "next-auth-logo",
        image: "/image/porto/dev-logos/next-auth-logo.png",
      },
    ],
    youtube: "https://youtu.be/WO1MvMyq4G0",
  },
  {
    img: "/image/porto/landing-job.gif",
    title: "Landing Page Development",
    subtitle: "Portal Job: Landing Page",
    desc: "The user interface is enriched with visually appealing and customizable components sourced from Shadcn/UI, enhancing the overall aesthetics and user experience of the application.",
    url: "https://github.com/dharmawiguna/job-hunter-web",
    devLogo: [
      {
        name: "react",
        image: "/image/porto/dev-logos/react-logo.png",
      },
      {
        name: "next",
        image: "/image/porto/dev-logos/next-logo.png",
      },
      {
        name: "typescript",
        image: "/image/porto/dev-logos/ts-logo.png",
      },
      {
        name: "prisma",
        image: "/image/porto/dev-logos/prisma-logo.png",
      },
      {
        name: "supabase",
        image: "/image/porto/dev-logos/supabase-logo.png",
      },
      {
        name: "next-auth-logo",
        image: "/image/porto/dev-logos/next-auth-logo.png",
      },
    ],
    youtube: "https://youtu.be/WO1MvMyq4G0",
  },
  {
    img: "/image/porto/good-game-frontend.png",
    title: "Web App Development",
    subtitle: "FE: Good Game - Top Up Voucher",
    desc: "Good Game is a web-based application that I built, used to purchase game vouchers provided by the Admin User of this application. This application has been integrated with the Midtrans Payment Method to make transactions easier.",
    url: "https://github.com/dharmawiguna/good-game",
    devLogo: [
      {
        name: "react",
        image: "/image/porto/dev-logos/react-logo.png",
      },
      {
        name: "next",
        image: "/image/porto/dev-logos/next-logo.png",
      },
      {
        name: "typescript",
        image: "/image/porto/dev-logos/ts-logo.png",
      },
    ],
    youtube: "",
  },
  {
    img: "/image/porto/good-game-backend-porto.gif",
    title: "Web App Development",
    subtitle: "BE: Good Game - Top Up Voucher",
    desc: "This application provides an API for Frontend needs in carrying out top-ups or transactions via data stored in MongoDB. In this project there is also an Admin Dashboard which was built using Express JS to carry out CRUD activities which will be displayed on the FrontEnd page.",
    url: "https://github.com/dharmawiguna/good-game-server",
    devLogo: [
      {
        name: "node",
        image: "/image/porto/dev-logos/node-logo.png",
      },
      {
        name: "express",
        image: "/image/porto/dev-logos/express-logo.png",
      },
      {
        name: "mongo",
        image: "/image/porto/dev-logos/mongo-logo.png",
      },
    ],
    youtube: "",
  },
  {
    img: "/image/porto/rent-house.gif",
    title: "Web App Development",
    subtitle: "Rent House Web",
    desc: "This house rental project is developed using Next.js 14, featuring secure authentication through NextAuth and efficient state management with Redux Toolkit. The frontend is tightly integrated with a powerful Laravel 11 backend, ensuring smooth data handling and API interactions.",
    url: "https://github.com/dharmawiguna/rent-house-frontend",
    devLogo: [
      {
        name: "react",
        image: "/image/porto/dev-logos/react-logo.png",
      },
      {
        name: "next",
        image: "/image/porto/dev-logos/next-logo.png",
      },
      {
        name: "typescript",
        image: "/image/porto/dev-logos/ts-logo.png",
      },
      {
        name: "next-auth-logo",
        image: "/image/porto/dev-logos/next-auth-logo.png",
      },
      {
        name: "tailwind",
        image: "/image/porto/dev-logos/tailwind-logo.png",
      },
    ],
    youtube: "https://youtu.be/dkMZE9vdlis",
  },
  {
    img: "/image/porto/foodmarket-porto.jpg",
    title: "Mobile App Development",
    subtitle: "Food Market",
    desc: "This project is a mobile application named MyApp, developed using React Native with TypeScript for both Android and iOS platforms. React Native enables efficient cross-platform development, while TypeScript provides static type checking for better code quality and maintainability. The backend is powered by Laravel 8, which serves as the main framework for creating a secure and efficient RESTful API. ",
    url: "https://github.com/dharmawiguna/foodmarket-apps",
    devLogo: [
      {
        name: "react",
        image: "/image/porto/dev-logos/react-logo.png",
      },
      {
        name: "typescript",
        image: "/image/porto/dev-logos/ts-logo.png",
      },
      {
        name: "next",
        image: "/image/porto/dev-logos/laravel-logo.png",
      },
    ],
    youtube: "https://youtu.be/ENAlCxCRa_E",
  },
  {
    img: "/image/porto/my_pocket.png",
    title: "Mobile App Development",
    subtitle: "E-Wallet: My Pocket",
    desc: "My Pocket is an e-wallet application built with the Dart or Flutter programming language. This application has been integrated via API using Axios, so users can top up money, purchase data packages, or make transfers to fellow users.",
    url: "https://github.com/dharmawiguna/my_pocket",
    devLogo: [
      {
        name: "flutter",
        image: "/image/porto/dev-logos/flutter-logo.png",
      },
    ],
    youtube: "https://youtu.be/-MgIOsdgzRg",
  },
  {
    img: "/image/porto/findworkspace-porto.png",
    title: "Mobile App Development",
    subtitle: "FindWorkspace",
    desc: "In this portfolio project, I transformed a UI design from Figma into a fully functional mobile application using React Native, ensuring a seamless translation of the design components and maintaining high performance and responsiveness across different devices.",
    url: "https://github.com/dharmawiguna/findworkspace",
    devLogo: [
      {
        name: "react",
        image: "/image/porto/dev-logos/react-logo.png",
      },
      {
        name: "typescript",
        image: "/image/porto/dev-logos/ts-logo.png",
      },
    ],
    youtube: "",
  },
  {
    img: "/image/porto/travel-porto.png",
    title: "Web App Development",
    subtitle: "Polismall Travel",
    desc: "This project is a project that I am working on at my current place of work. This is an application used to book travel + insurance from the company. This application was built using React JS and the AntDesign Framework",
    url: "https://www.youtube.com/watch?v=YsgRnrmex7U",
    devLogo: [
      {
        name: "react",
        image: "/image/porto/dev-logos/react-logo.png",
      },
      {
        name: "antdesign",
        image: "/image/porto/dev-logos/antdesign-logo.png",
      },
    ],
    youtube: "",
  },
  {
    img: "/image/porto/quick-simple.gif",
    title: "Web App Development",
    subtitle: "Real Time Chat: Quick Simple",
    desc: "This real-time chat application is built using Next.js 14 with TypeScript, offering high performance and security with features like server-side rendering. User authentication is integrated through Clerk, allowing login with Gmail and supporting multi-factor authentication for added security. Data is stored and managed using Convex.",
    url: "https://fast-oriole-20.accounts.dev/sign-in",
    devLogo: [
      {
        name: "react",
        image: "/image/porto/dev-logos/react-logo.png",
      },
      {
        name: "next",
        image: "/image/porto/dev-logos/next-logo.png",
      },
      {
        name: "convex",
        image: "/image/porto/dev-logos/convex-logo.png",
      },
      {
        name: "tailwind",
        image: "/image/porto/dev-logos/tailwind-logo.png",
      },
    ],
    youtube: "",
  },
  {
    img: "/image/porto/movie-porto.png",
    title: "Web App Development",
    subtitle: "Streaming: Movie Live",
    desc: "This application is a movie streaming application where the films on the dashboard are input by the Admin User. This application was built using Laravel Inertia combined with React JS and Tailwind as a CSS Framework.",
    url: "https://github.com/dharmawiguna/good-game-server",
    devLogo: [
      {
        name: "react",
        image: "/image/porto/dev-logos/react-logo.png",
      },
      {
        name: "laravel",
        image: "/image/porto/dev-logos/laravel-logo.png",
      },
      {
        name: "tailwind",
        image: "/image/porto/dev-logos/tailwind-logo.png",
      },
    ],
    youtube: "",
  },
  {
    img: "/image/porto/balikepundung-porto.gif",
    title: "Web App Development",
    subtitle: "Hotel - Bali Kepundung",
    desc: "Balikepundunghotel.id is a web app used to make hotel reservations. This web app was built using the Laravel Framework and the Bootstrap Framework.",
    url: "https://www.balikepundunghotel.com/",
    devLogo: [
      {
        name: "laravel",
        image: "/image/porto/dev-logos/laravel-logo.png",
      },
      {
        name: "bootstrap",
        image: "/image/porto/dev-logos/bootstrap-logo.png",
      },
    ],
    youtube: "",
  },
];

export function Projects() {
  return (
    <section className="py-0 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography
          variant="h2"
          color="blue-gray"
          className="mb-4"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Portofolio
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
