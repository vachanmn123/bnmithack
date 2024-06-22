import React from "react";

export default function Step1({ dataPost }) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div>
        <h2 className="text-3xl font-bold text-center">Basic Details</h2>
        <p className="text-gray-500 text-center">
          Let&apos;s start by entering your basic details
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          className="border-2 border-gray-400 rounded-lg p-2 text-black"
          placeholder="Username"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="border-2 border-gray-400 rounded-lg p-2 text-black"
          placeholder="Email"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          className="border-2 border-gray-400 rounded-lg p-2 text-black"
          placeholder="Phone"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          className="border-2 border-gray-400 rounded-lg p-2 text-black"
          placeholder="Age"
        />
      </div>
      <small className="text-gray-500 text-sm text-center">
        By clicking Next, you agree to our Terms and Conditions
      </small>
      <button
        className="bg-accent text-black p-2 rounded-lg mt-2 w-full"
        onClick={() =>
          dataPost(
            {
              username: document.getElementById("username").value,
              email: document.getElementById("email").value,
              phone: document.getElementById("phone").value,
              age: document.getElementById("age").value,
            },
            1
          )
        }
      >
        Next
      </button>
    </div>
  );
}
