import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TutorPage from "./tutors/Tutor";
import AboutPage from "./about-us/About";
import ContactPage from "./contact-us/Contact"
import Signup1 from "./home/components/Signup1"
import EducatorPage from "./for-educators/Educators";
import { Login2 } from "./home/components/Login2";

import { Navbar2 } from "./home/components/Navbar2";
import { Header1 } from "./home/components/Header1";
import { Layout101 } from "./home/components/Layout101";
import { Layout240 } from "./home/components/Layout240";
import { Layout42 } from "./home/components/Layout42";
import { Cta25 } from "./home/components/Cta25";
import { Testimonial5 } from "./home/components/Testimonial5";
import { Contact22 } from "./home/components/Contact22";
import { Footer2 } from "./home/components/Footer2";

export default function App() {
  return (
    <Router>
      {/* <Navbar2 /> */}
       {/* Navbar appears on all pages */}

      <Routes>
      {/* <Navbar2 /> */}
        {/* Home Page - Shows all home components */}
        <Route
          path="/"
          element={
            <>
            <Navbar2 />
              <Header1 />
              <Layout101 />
              <Layout240 />
              <Layout42 />
              <Cta25 />
              <Testimonial5 />
              <Contact22 />
              <Footer2 />
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/tutor" element={<TutorPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Signup" element={<Signup1 />} />
        <Route path="/educators" element={<EducatorPage />} />
        <Route path="/login" element={<Login2 />} />
      </Routes>
    </Router>
  );
}

