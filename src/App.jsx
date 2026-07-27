import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./Components/Navbar";

import Home from "./components/Home One/Home One";
import HomeTwo from "./components/Home Two/Home Two";
import HomeThree from "./components/Home Three/Home Three";

import About from "./components/About One/About One";
import AboutTwo from "./components/About Two/About Two";

import Course from "./components/Course One/Course One";
import CourseTwo from "./components/Course Two/Course Two";
import CourseThree from "./components/Course Three/Course Three";

import Faq from "./components/Faq/Hero";

import Pricing from "./components/Pricing One/Pricing One";
import PricingTwo from "./Components/Pricing Two/Pricing Two";
import PricingThree from "./Components/Pricing Three/Pricing Three";

import Career from "./components/Career/Hero";
import Event from "./components/Event/Hero";
import Team from "./Components/Team/Team";

import Blog from "./Components/Blog One/Blog One";
import BlogTwo from "./components/Blog Two/Blog Two";
import BlogThree from "./components/Blog Three/Blog Three";

import Contact from "./components/Contact One/Contact One";
import ContactTwo from "./components/Contact Two/Contact Two";
import ContactThree from "./components/Contact Three/Contact Three";

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
