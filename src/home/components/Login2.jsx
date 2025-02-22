"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React from "react";
import { Link } from "react-router-dom";
// import React, { useState } from "react";
import { BiLogoApple, BiLogoFacebook, BiLogoGoogle } from "react-icons/bi";

export function Login2() {
  return (
    <section id="relume" className="px-[5%]">
      <div className="relative flex min-h-svh flex-col justify-center overflow-auto py-24 lg:py-20">
        <div className="absolute left-0 right-0 top-0 flex h-16 w-full items-center justify-between md:h-18">
          <a href="/">
            <img
              src="src/assets/logo.png"
              alt="Logo text"
              className="w-32 h-auto "
            />
          </a>
          <div className="inline-flex gap-x-1">
            <p className="hidden md:block">
              Don't have an account? Create one today!
            </p>
            <Link to="/signup" className=" underline"> Sign Up </Link>
          </div>
        </div>
        <div className="mx-auto w-full max-w-sm">
          <div className="mb-8 text-center md:mb-10 lg:mb-12">
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Log In
            </h1>
            <p className="md:text-md">
              Access your account to find the best tutors.
            </p>
          </div>
          <form className="grid grid-cols-1 gap-4">
            <Input type="email" id="email" placeholder="Email" />
            <Input type="password" id="password" placeholder="Password" />
            <Button
              variant={undefined}
              size={undefined}
              iconLeft={undefined}
              iconRight={undefined}
            >
              Log In
            </Button>
            <div className="my-3 h-px w-full bg-border-primary md:my-4" />
            <Button
              variant="secondary"
              title="Log in with Google"
              iconLeft={<BiLogoGoogle className="size-6" />}
              className="gap-x-3"
            >
              Log in with Google
            </Button>
            <Button
              variant="secondary"
              title="Log in with Facebook"
              iconLeft={<BiLogoFacebook className="size-6" />}
              className="gap-x-3"
            >
              Log in with Facebook
            </Button>
            <Button
              variant="secondary"
              title="Log in with Apple"
              iconLeft={<BiLogoApple className="size-6" />}
              className="gap-x-3"
            >
              Log in with Apple
            </Button>
          </form>
          <div className="mt-5 w-full text-center md:mt-6">
            <a href="#" className="underline">
              Forgot your password?
            </a>
          </div>
        </div>
        <footer className="absolute bottom-0 left-0 right-0 flex h-16 w-full items-center justify-center md:h-18">
          <p className="text-sm">© 2024 TutorMatch</p>
        </footer>
      </div>
    </section>
  );
}
