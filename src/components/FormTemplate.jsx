import React, { useState } from "react";

export default function FormTemplate({ title }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://hooks.zapier.com/hooks/catch/25300476/usph5ce/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("❌ Something went wrong.");
      }
    } catch (error) {
      setStatus("⚠️ Error sending message.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0b1c3a] text-white p-6">
      <h2 className="text-3xl font-bold mb-6">{title || "Contact Form"}</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white text-[#0b1c3a] rounded-2xl shadow-lg p-6 w-full max-w-md"
      >
        <label className="block mb-2 font-semibold">Name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          required
          className="w-full mb-4 p-2 border rounded"
        />

        <label className="block mb-2 font-semibold">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          required
          className="w-full mb-4 p-2 border rounded"
        />

        <label className="block mb-2 font-semibold">Phone</label>
        <input
          type="text"
          name="phone"
          onChange={handleChange}
          value={formData.phone}
          className="w-full mb-4 p-2 border rounded"
        />

        <label className="block mb-2 font-semibold">Message</label>
        <textarea
          name="message"
          onChange={handleChange}
          value={formData.message}
          required
          className="w-full mb-4 p-2 border rounded h-24"
        />

        <button
          type="submit"
          className="w-full bg-[#0b1c3a] text-white font-bold py-2 rounded hover:scale-105 transition-transform"
        >
          Send
        </button>
      </form>

      {status && <p className="mt-4 text-sm">{status}</p>}
    </div>
  );
}
