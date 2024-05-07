import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (response.ok) {
        setSuccess(true);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="flex gap-48 ml-28">
      <div className="flex flex-col items-center mt-32">
        <span className="text-5xl font-bold">Get in Touch</span>
        <span className="text-5xl text-orange-300 font-bold">Contact me</span>
      </div>
      <div className="flex flex-col gap-14 mt-32">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <input
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-96 h-14 border-2 border-orange-400 mt-4 text-black rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-96 h-14 border-2 border-orange-400 mt-4 text-black rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <textarea
              id="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-96 h-32 border-2 border-orange-400 mt-4 text-black rounded-lg"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <button
              type="submit"
              disabled={loading}
              className="w-24 h-9 rounded-2xl text-white bg-orange-300 hover:text-orange-300 border hover:border-orange-300 hover:bg-white shadow-2xl shadow-orange-300 mt-4"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
          {error && <div className="text-red-500">{error}</div>}
          {success && <div className="text-green-500">Message sent!</div>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
