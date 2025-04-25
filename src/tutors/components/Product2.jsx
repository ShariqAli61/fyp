"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Product2() {
  return (
    <section id="relume" className="bodycolor px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-end gap-12 md:mb-18 md:grid-cols-[1fr_max-content] lg:mb-20 lg:gap-20">
          <div className="max-w-lg">
            {/* <p className="mb-3 font-semibold md:mb-4">Tutors</p> */}
            <h1 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">
              Tutors
            </h1>
            <p className="md:text-md">
              Explore our qualified tutors ready to help you!
            </p>
          </div>
          <div className="hidden md:flex">
            <Button className="amber-button" variant="secondary" size="primary" title="View all">
              View all
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-items-start gap-x-5 gap-y-12 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <div>
            <a className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a className="flex justify-between md:text-md">
              <div className="mr-4">
                <h3 className="font-semibold">John Doe</h3>
                <div className="text-sm">Math</div>
              </div>
              <div className="text-md font-semibold md:text-lg">$45</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Add to cart"
              className="amber-button mt-3 w-full md:mt-4"
            >
              Add to cart
            </Button>
          </div>
          <div>
            <a className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a className="flex justify-between md:text-md">
              <div className="mr-4">
                <h3 className="font-semibold">Jane Smith</h3>
                <div className="text-sm">Science</div>
              </div>
              <div className="text-md font-semibold md:text-lg">$50</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Add to cart"
              className="amber-button mt-3 w-full md:mt-4"
            >
              Add to cart
            </Button>
          </div>
          <div>
            <a className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a className="flex justify-between md:text-md">
              <div className="mr-4">
                <h3 className="font-semibold">Alice Johnson</h3>
                <div className="text-sm">English</div>
              </div>
              <div className="text-md font-semibold md:text-lg">$55</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Add to cart"
              className="amber-button mt-3 w-full md:mt-4"
            >
              Add to cart
            </Button>
          </div>
          <div>
            <a className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a className="flex justify-between md:text-md">
              <div className="mr-4">
                <h3 className="font-semibold">Michael Brown</h3>
                <div className="text-sm">History</div>
              </div>
              <div className="text-md font-semibold md:text-lg">$60</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Add to cart"
              className="amber-button mt-3 w-full md:mt-4"
            >
              Add to cart
            </Button>
          </div>
          <div>
            <a className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a className="flex justify-between md:text-md">
              <div className="mr-4">
                <h3 className="font-semibold">Emily Davis</h3>
                <div className="text-sm">Biology</div>
              </div>
              <div className="text-md font-semibold md:text-lg">$65</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Add to cart"
              className="amber-button mt-3 w-full md:mt-4"
            >
              Add to cart
            </Button>
          </div>
          <div>
            <a className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a className="flex justify-between md:text-md">
              <div className="mr-4">
                <h3 className="font-semibold">David Wilson</h3>
                <div className="text-sm">Physics</div>
              </div>
              <div className="text-md font-semibold md:text-lg">$70</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Add to cart"
              className="amber-button mt-3 w-full md:mt-4"
            >
              Add to cart
            </Button>
          </div>
          <div>
            <a className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a className="flex justify-between md:text-md">
              <div className="mr-4">
                <h3 className="font-semibold">Sophia Martinez</h3>
                <div className="text-sm">Chemistry</div>
              </div>
              <div className="text-md font-semibold md:text-lg">$75</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Add to cart"
              className="amber-button mt-3 w-full md:mt-4"
            >
              Add to cart
            </Button>
          </div>
          <div>
            <a className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a className="flex justify-between md:text-md">
              <div className="mr-4">
                <h3 className="font-semibold">Liam Taylor</h3>
                <div className="text-sm">Geography</div>
              </div>
              <div className="text-md font-semibold md:text-lg">$80</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Add to cart"
              className="amber-button mt-3 w-full md:mt-4"
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
