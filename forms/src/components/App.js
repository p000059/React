import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import Blogs from '../pages/Blogs';
import Contact from '../pages/Contact';
import NoPage from '../pages/NoPage';
import Register from "../pages/Register";
import FormOne from "../pages/FormOne";
import FormFunction from "./FormFunction";
import Form from './Form';

export default function App() {
  
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Register" element={<Register />} />
          <Route path="FormOne" element={<FormOne />} />
          <Route path="FormFunction" element={<FormFunction></FormFunction>} />
          <Route path="Form" element={<Form></Form>}></Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}