import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";

import Home from "./components/Home one/Home One";
import HomeTwo from "./components/Home two/Home Two";
import HomeThree from "./components/Home three/Home Three";

import About from "./components/About one/About One";
import AboutTwo from "./components/About two/About Two";

import Course from "./components/Course one/Course One";
import CourseTwo from "./components/Course two/Course Two";
import CourseThree from "./components/Course three/Course Three";

import Pricing from "./components/Pricing one/Pricing One";
import PricingTwo from "./components/Pricing Two/Pricing Two";
import PricingThree from "./components/Pricing Three/Pricing Three";

import Career from "./components/Career/Hero";
import Event from "./components/Event/Event";
import Team from "./components/Team/Team";

import Blog from "./components/Blog one/Blog One";
import BlogTwo from "./components/Blog two/Blog Two";
import BlogThree from "./components/Blog three/Blog Three";

import Contact from "./components/Contact one/Contact One";
import ContactTwo from "./components/Contact two/Contact Two";
import ContactThree from "./components/Contact three/Contact Three";
import Faq from "./components/FAQ/FAQ";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home-one" element={<Home />} />
        <Route path="/home-two" element={<HomeTwo />} />
        <Route path="/home-three" element={<HomeThree />} />

        <Route path="/about-one" element={<About />} />
        <Route path="/about-two" element={<AboutTwo />} />

        <Route path="/course-one" element={<Course />} />
        <Route path="/course-two" element={<CourseTwo />} />
        <Route path="/course-three" element={<CourseThree />} />

        <Route path="/faq" element={<Faq />} />

        <Route path="/pricing-one" element={<Pricing />} />
        <Route path="/pricing-two" element={<PricingTwo />} />
        <Route path="/pricing-three" element={<PricingThree />} />

        <Route path="/career" element={<Career />} />
        <Route path="/event" element={<Event />} />
        <Route path="/team" element={<Team />} />

        <Route path="/blog-one" element={<Blog />} />
        <Route path="/blog-two" element={<BlogTwo />} />
        <Route path="/blog-three" element={<BlogThree />} />

        <Route path="/contact-one" element={<Contact />} />
        <Route path="/contact-two" element={<ContactTwo />} />
        <Route path="/contact-three" element={<ContactThree />} />
      </Routes>
    </BrowserRouter>
  );
}
