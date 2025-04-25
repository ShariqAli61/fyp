"use client";
import { Link } from "react-router-dom";
// import Login2 from "./Login2";

import { Button, Input, Label } from "@relume_io/relume-ui";
import React, { useState } from "react";
import { BiLogoGoogle } from "react-icons/bi";

const useForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSetName = (e) => {
    setName(e.target.value);
  };

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, email, password });
  };

  return {
    name,
    handleSetName,
    email,
    handleSetEmail,
    password,
    handleSetPassword,
    handleSubmit,
  };
};

export default function Signup1() {
  const formState = useForm();
  return (
    <section id="relume" className="bodycolor px-[5%]">
      <div className="relative flex min-h-svh flex-col justify-center overflow-auto py-24 lg:pb-24 lg:pt-16">
        <div className="absolute left-0 right-0 top-0 flex h-16 items-center justify-between md:h-18">
          <a href="/">
            <img
              src="src/assets/logo.png"
              alt="Logo text" 
              className="w-32 h-auto "
              
            />
          </a>
          <div className="inline-flex gap-x-1">
            <p className="hidden md:block hidden md:block text-yellow-700">Already have an account?</p>
            {/* <a href="/Login" className="underline">
              Log In
            </a> */}
            <Link to="/login" className=" underline text-blue-700"> Login </Link>
            

          </div>
        </div>
        <div className="mx-auto w-full max-w-sm">
          <div className="rb-6 mb-6 text-center md:mb-8">
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-yellow-700">
              Sign Up
            </h1>
            <p className="md:text-md text-yellow-700">
            Signup your account to find the best tutors.
            </p>
          </div>
          <form
            className="grid grid-cols-1 gap-6"
            onSubmit={formState.handleSubmit}
          >
            <div className="grid grid-cols-1">
              <Label htmlFor="name" className="mb-2">
                Name*
              </Label>
              <Input
                placeholder="Name" 
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                type="text"
                id="name"
                required={true}
                value={formState.name}
                onChange={formState.handleSetName}
              />
              {/* <Input type="name" id="name" placeholder="Name" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400"/> */}
            </div>
            <div className="grid grid-cols-1">
              <Label htmlFor="email" className="mb-2">
                Email*
              </Label>
              <Input
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                type="email"
                id="email"
                required={true}
                value={formState.email}
                onChange={formState.handleSetEmail}
              />
            </div>
            <div className="grid grid-cols-1">
              <Label htmlFor="password" className="mb-2">
                Password*
              </Label>
              <Input
                placeholder="Password" 
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                type="password"
                id="password"
                required={true}
                value={formState.password}
                onChange={formState.handleSetPassword}
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <Button className="w-full bg-yellow-500 text-white p-3 mt-1 rounded-xl font-semibold hover:bg-yellow-600 transition duration-300 shadow-md" title="Sign up">Sign up</Button>
              <Button
                className="w-full bg-yellow-500 text-white p-3 mt-1 rounded-xl font-semibold hover:bg-yellow-600 transition duration-300 shadow-md gap-x-3"
                variant="secondary"
                title="Sign up with Google"
                iconLeft={<BiLogoGoogle className="size-6" />}
              >
                Sign up with Google
              </Button>
            </div>
          </form>
        </div>
        <footer className="absolute bottom-0 left-0 right-0 flex h-16 items-center justify-center md:h-18">
          <p className="text-sm">© 2024 TutorMatch</p>
        </footer>
      </div>
    </section>
  );
}
