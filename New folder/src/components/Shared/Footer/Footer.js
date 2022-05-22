import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer class="footer p-10 bg-primary mt-10 text-white md:px-20 mx-auto">
      <div className="lg:ml-14">
        <svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          class="fill-current mt-10 text-black"
        >
          <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
        </svg>
        <h1>
          Copyright ©2022 All rights reserved | <br /> This template is made
          with by
          <span className="span"> Abi Abdullah</span>
        </h1>
      </div>
      <div className="lg:ml-14">
        <span class=" text-xl font-bold text-black">Services</span>
        <h1 class="link link-hover text-lg font-semibold">Branding</h1>
        <h1 class="link link-hover text-lg font-semibold">Repair</h1>
        <h1 class="link link-hover text-lg font-semibold">Manufacturer</h1>
        <h1 class="link link-hover text-lg font-semibold">Tools Manufacturer</h1>
      </div>
      <div className="lg:ml-14">
        <span class=" text-xl font-bold text-black">Follow Us</span>
        <h1>Let us be social</h1>
        <div className="flex gap-5">
          <BsFacebook className=" text-xl font-bold" />
          <BsTwitter className=" text-xl font-bold" />
          <BsInstagram className=" text-xl font-bold" />
        </div>
      </div>
      <div>
        <span class=" text-xl font-bold text-black">Newsletter</span>
        <div class="form-control full">
          <label class="label">
            <span class="label-text text-lg font-semibold text-white">
              Enter your email address
            </span>
          </label>
          <div class="relative">
            <input
              type="text"
              placeholder="username@site.com"
              class="input input-bordered w-full pr-16"
            />
            <button class="btn bg-white absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
