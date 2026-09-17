"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowUp,
  Send,
  Linkedin,
  Facebook,
  Menu,
  X,
  CheckCircle2,
  AlertCircle,
  Home,
  BookOpen,
  Users,
  Briefcase,
} from "lucide-react";

export default function ContactPage() {
  const [activeScreen, setActiveScreen] = useState(1); // 1 = Hero Screen, 2 = Contact Screen
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ type: "", text: "" });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (statusMsg.text) setStatusMsg({ type: "", text: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMsg({ type: "", text: "" });

    if (!formData.firstName.trim()) {
      setStatusMsg({ type: "error", text: "Please enter your First Name" });
      return;
    }
    if (!formData.email.trim()) {
      setStatusMsg({ type: "error", text: "Please enter your E-mail" });
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatusMsg({
          type: "success",
          text: "Thank you! Form submitted successfully. Our team will contact you soon.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatusMsg({
          type: "error",
          text: data.error || "Failed to submit. Please try again.",
        });
      }
    } catch (err) {
      setStatusMsg({
        type: "error",
        text: "Network error. Please check your connection and try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0c242c] flex flex-col items-center justify-center p-0 m-0 font-sans select-none overflow-x-hidden">
      {/* Container - Completely Edge-to-Edge / Zero Border Radius */}
      <div className="w-full max-w-md min-h-[100dvh] flex flex-col justify-between relative bg-[#0c242c] text-white rounded-none border-none shadow-none">
        
        <AnimatePresence mode="wait">
          {/* ======================================================== */}
          {/* SCREEN 1: HERO SCREEN (MATCHING SCREENSHOT 1)             */}
          {/* ======================================================== */}
          {activeScreen === 1 && (
            <motion.div
              key="screen-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="relative w-full min-h-[100dvh] flex flex-col justify-between p-6 sm:p-8 rounded-none border-none"
            >
              {/* Background Image of Truck on Highway at Golden Hour */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/illustrations/highway_truck_sunset.jpg"
                  alt="Highway Transport at Sunset"
                  fill
                  priority
                  className="object-cover object-center"
                />
                {/* Top and Bottom Gradient Overlays for optimal text contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-transparent to-black/90" />
              </div>

              {/* Top Brand Bar & Mobile Hamburger Menu */}
              <div className="relative z-10 flex items-center justify-between pt-2">
                {/* Brand Logo */}
                <div className="flex flex-col text-left">
                  <span className="text-2xl font-black tracking-tighter uppercase text-white leading-none drop-shadow-md">
                    CARGOX <br />
                    <span className="text-[#FACC15]">GROUP</span>
                  </span>
                </div>

                {/* Hamburger Icon */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2.5 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/60 transition-all border border-white/15 cursor-pointer"
                  aria-label="Toggle navigation menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

              {/* Dropdown Mobile Navigation Overlay */}
              {mobileMenuOpen && (
                <div className="absolute top-20 right-6 z-30 w-56 bg-[#0e2730]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-4 shadow-2xl space-y-2 animate-in fade-in zoom-in-95 duration-200">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-white/90 hover:bg-white/10 hover:text-white"
                  >
                    <Home className="w-4 h-4 text-[#FACC15]" />
                    <span>Home</span>
                  </Link>
                  <Link
                    href="/blog"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-white/90 hover:bg-white/10 hover:text-white"
                  >
                    <BookOpen className="w-4 h-4 text-[#FACC15]" />
                    <span>Blog Articles</span>
                  </Link>
                  <Link
                    href="/team"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-white/90 hover:bg-white/10 hover:text-white"
                  >
                    <Users className="w-4 h-4 text-[#FACC15]" />
                    <span>Our Team</span>
                  </Link>
                  <Link
                    href="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-white/90 hover:bg-white/10 hover:text-white"
                  >
                    <Briefcase className="w-4 h-4 text-[#FACC15]" />
                    <span>Services</span>
                  </Link>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setActiveScreen(2);
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-black bg-[#FACC15] hover:bg-[#EAB308] cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Contact Us</span>
                  </button>
                </div>
              )}

              {/* Lower Content: Giant Headline & Flawless Pill Button */}
              <div className="relative z-10 pb-4 space-y-6 text-left">
                {/* Big Bold Condensed Headline */}
                <h1 className="text-[52px] sm:text-[58px] font-black uppercase tracking-tight leading-[0.92] text-white drop-shadow-lg">
                  BEYOND <br />
                  <span className="text-[#FACC15]">BORDERS</span> <br />
                  AND LIMITS
                </h1>

                {/* Seamless Yellow Pill Button with Integrated Circle Arrow (No Border-Radius Glitch) */}
                <div className="pt-2">
                  <button
                    onClick={() => setActiveScreen(2)}
                    className="group inline-flex items-center bg-[#FACC15] hover:bg-[#EAB308] rounded-full pl-7 pr-2 py-2 shadow-xl transition-all active:scale-95 cursor-pointer"
                  >
                    <span className="text-slate-950 font-bold text-base sm:text-lg tracking-tight mr-3">
                      Get in touch
                    </span>
                    <div className="w-11 h-11 rounded-full bg-[#0c1e24] border-2 border-[#FACC15] flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-105 transition-transform">
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* ======================================================== */}
          {/* SCREEN 2: CONTACT US FORM (MATCHING SCREENSHOT 2)         */}
          {/* ======================================================== */}
          {activeScreen === 2 && (
            <motion.div
              key="screen-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="relative w-full min-h-[100dvh] bg-[#0c242c] text-white flex flex-col justify-between p-6 sm:p-8 rounded-none border-none text-left"
            >
              {/* Top Bar with Back Button */}
              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => setActiveScreen(1)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>

                <div className="text-xs font-mono text-slate-400">
                  Step 2 of 2
                </div>
              </div>

              {/* Form Title & Subtitle */}
              <div className="space-y-2 pt-4">
                <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
                  CONTACT <span className="text-[#FACC15]">US</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                  Complete the form and our team will contact you soon.
                </p>
              </div>

              {/* Form Fields & Submission */}
              <form onSubmit={handleSubmit} className="space-y-4 my-6">
                {/* First Name Input */}
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    required
                    className="w-full px-6 py-4 rounded-full bg-[#183640] border border-white/10 text-white placeholder:text-slate-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#FACC15] focus:border-transparent transition-all shadow-inner"
                  />
                </div>

                {/* Last Name Input */}
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="w-full px-6 py-4 rounded-full bg-[#183640] border border-white/10 text-white placeholder:text-slate-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#FACC15] focus:border-transparent transition-all shadow-inner"
                  />
                </div>

                {/* E-mail Input */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="E-mail"
                    required
                    className="w-full px-6 py-4 rounded-full bg-[#183640] border border-white/10 text-white placeholder:text-slate-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#FACC15] focus:border-transparent transition-all shadow-inner"
                  />
                </div>

                {/* Phone Number Input */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number (e.g. +91 98765 43210)"
                    className="w-full px-6 py-4 rounded-full bg-[#183640] border border-white/10 text-white placeholder:text-slate-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#FACC15] focus:border-transparent transition-all shadow-inner"
                  />
                </div>

                {/* Message / Project Requirements Input */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Your Message / Project Details..."
                    className="w-full px-6 py-3.5 rounded-2xl bg-[#183640] border border-white/10 text-white placeholder:text-slate-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#FACC15] focus:border-transparent transition-all shadow-inner resize-none"
                  />
                </div>

                {/* Status Feedback Message */}
                {statusMsg.text && (
                  <div
                    className={`p-3 rounded-2xl text-xs font-medium flex items-center gap-2 ${
                      statusMsg.type === "success"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : "bg-red-500/20 text-red-300 border border-red-500/30"
                    }`}
                  >
                    {statusMsg.type === "success" ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0" />
                    )}
                    <span>{statusMsg.text}</span>
                  </div>
                )}

                {/* Yellow Pill Send Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-full bg-[#FACC15] hover:bg-[#EAB308] text-slate-950 font-extrabold text-base tracking-wide shadow-lg hover:shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-slate-950 border-t-transparent animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send</span>
                  )}
                </button>
              </form>

              {/* Contact Details & Social / Action Footer */}
              <div className="space-y-6 pt-2">
                {/* Direct Contact Information */}
                <div className="space-y-1.5 text-slate-300 text-sm sm:text-base">
                  <div>
                    <a
                      href="mailto:kalkiweb06@gmail.com"
                      className="hover:text-white transition-colors"
                    >
                      info@cargoxgroup.com
                    </a>
                  </div>
                  <div>
                    <a
                      href="tel:+919304987505"
                      className="hover:text-white transition-colors"
                    >
                      +1 (555) 234-7890
                    </a>
                  </div>
                </div>

                {/* Bottom Row: Social Circles on Left, Return to Screen 1 on Right */}
                <div className="flex items-center justify-between pt-2">
                  {/* Social Circles */}
                  <div className="flex items-center gap-3">
                    {/* Telegram / Send */}
                    <a
                      href="https://wa.me/919304987505"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp Message"
                      className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center hover:scale-110 hover:bg-[#FACC15] transition-all shadow-md"
                    >
                      <Send className="w-5 h-5 -translate-x-0.5 translate-y-0.5" />
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/gaurav-kumar-307484238/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center hover:scale-110 hover:bg-[#FACC15] transition-all shadow-md"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>

                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook Profile"
                      className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center hover:scale-110 hover:bg-[#FACC15] transition-all shadow-md"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Return to Screen 1 Button */}
                  <button
                    onClick={() => setActiveScreen(1)}
                    aria-label="Back to Hero screen"
                    className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center hover:scale-110 hover:bg-[#FACC15] transition-all shadow-md cursor-pointer"
                  >
                    <ArrowUp className="w-5 h-5" />
                  </button>
                </div>

                {/* Copyright Note */}
                <div className="text-xs text-slate-400 pt-2">
                  © 2026. All rights reserved.
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
