"use client";

import React, { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  Eye,
  EyeOff,
  TrendingUp,
  CreditCard,
  Smartphone,
  Shield,
  CheckCircle2,
  Lock,
  Mail,
  User,
} from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTarget = searchParams.get("redirect") || "/dashboard/blog";

  const [email, setEmail] = useState("kalkiweb06@gmail.com");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), password: password.trim() }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setTimeout(() => {
          router.push(redirectTarget);
          router.refresh();
        }, 600);
      } else {
        setError(data.error || "Invalid email or password");
      }
    } catch (err) {
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row bg-[#191716] overflow-x-hidden">
      {/* LEFT PANEL: Payoneer Style Dark Showcase with Phone Mockup */}
      <div className="w-full lg:w-[48%] min-h-[480px] lg:min-h-screen bg-[#191716] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden select-none">
        {/* Concentric Radar Circles in Background */}
        <div className="absolute left-1/2 bottom-12 -translate-x-1/2 w-[700px] h-[700px] pointer-events-none opacity-20">
          <div className="absolute inset-0 rounded-full border border-white/30" />
          <div className="absolute inset-16 rounded-full border border-white/25" />
          <div className="absolute inset-32 rounded-full border border-white/20" />
          <div className="absolute inset-48 rounded-full border border-white/15" />
        </div>

        {/* Top Tagline */}
        <div className="relative z-10">
          <p className="text-xs sm:text-sm text-neutral-400 font-light tracking-wide max-w-sm">
            Intelligent digital agency – online performance & marketing solutions for you.
          </p>
        </div>

        {/* Center Headline: "Manage your agency" */}
        <div className="relative z-10 my-8 lg:my-0">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]">
            Manage <br />
            your agency
          </h1>
        </div>

        {/* Realistic Smartphone Mockup Displaying Live Dashboard Metrics */}
        <div className="relative z-10 flex justify-center lg:justify-start pt-6 pb-2">
          <div className="relative w-[280px] sm:w-[310px] bg-[#0c0c0e] rounded-[2.75rem] p-3 shadow-2xl border-[3px] border-[#36322e] transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
            {/* Phone Outer Bezel Shadow */}
            <div className="bg-[#121215] rounded-[2.25rem] p-4 text-white overflow-hidden shadow-inner">
              {/* Dynamic Island / Notch */}
              <div className="flex justify-between items-center mb-4 px-2">
                <span className="text-[11px] font-semibold text-neutral-400">9:41</span>
                <div className="w-16 h-3.5 bg-black rounded-full mx-auto" />
                <div className="flex items-center gap-1 text-[10px] text-neutral-400">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span>5G</span>
                </div>
              </div>

              {/* Weekly Analytics Card */}
              <div className="bg-[#1e1e24] rounded-2xl p-3.5 mb-3 border border-white/10 shadow-md">
                <div className="flex justify-between items-center text-[10px] text-neutral-400 mb-1">
                  <span>Week 4-10 July</span>
                  <span className="text-neutral-500">📅</span>
                </div>
                <div className="text-2xl font-black text-white tracking-tight mb-3">
                  897.00 <span className="text-xs font-normal text-neutral-400">€</span>
                </div>

                {/* Red/Coral Vertical Bar Chart */}
                <div className="flex items-end justify-between gap-1.5 h-14 pt-2 px-1 border-t border-white/5">
                  {[
                    { day: "Mon", h: "40%", high: false },
                    { day: "Tue", h: "65%", high: true },
                    { day: "Wed", h: "85%", high: true },
                    { day: "Thu", h: "50%", high: false },
                    { day: "Fri", h: "95%", high: true },
                    { day: "Sat", h: "35%", high: false },
                    { day: "Sun", h: "75%", high: true },
                  ].map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        style={{ height: bar.h }}
                        className={`w-full rounded-t-md transition-all ${
                          bar.high
                            ? "bg-gradient-to-t from-[#ea1c5d] to-[#ff4d2d]"
                            : "bg-[#383742]"
                        }`}
                      />
                      <span className="text-[8px] text-neutral-400">{bar.day}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-cards Row */}
              <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider mb-1.5 px-1">
                Category
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-[#1c1c22] rounded-xl p-2.5 border border-white/5">
                  <div className="text-[11px] font-bold text-white">785.00</div>
                  <div className="text-[9px] text-neutral-400 mt-0.5">Travel</div>
                </div>
                <div className="bg-[#1c1c22] rounded-xl p-2.5 border border-white/5">
                  <div className="text-[11px] font-bold text-white">950.00</div>
                  <div className="text-[9px] text-neutral-400 mt-0.5">Shopping</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL: Pure White Payoneer Style Login Form */}
      <div className="w-full lg:w-[52%] bg-white text-[#111827] min-h-screen p-8 sm:p-14 lg:p-20 flex flex-col justify-between rounded-t-[2.5rem] lg:rounded-t-none lg:rounded-l-[2.75rem] shadow-2xl z-20">
        {/* Top Header Bar with Multi-Color Ring Brand Logo & Sign Up link */}
        <div className="flex items-center justify-between w-full max-w-md mx-auto mb-8">
          {/* Logo with Gradient Ring Icon */}
          <Link href="/" className="flex items-center gap-2.5 cursor-pointer group">
            <div className="w-6 h-6 rounded-full border-[3.5px] border-t-[#ff4d2d] border-r-[#ea1c5d] border-b-[#814df5] border-l-[#10b981] group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#111827]">
              Kalki<span className="font-light text-neutral-600">Web</span>
            </span>
          </Link>

          <Link
            href="/blog"
            className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-neutral-500 hover:text-black transition-colors"
          >
            <User className="w-3.5 h-3.5" />
            <span>Public Site ↗</span>
          </Link>
        </div>

        {/* Center Sign In Form */}
        <div className="w-full max-w-md mx-auto my-auto py-6">
          <h2 className="text-4xl sm:text-5xl font-black text-[#111827] tracking-tight mb-8 text-left">
            Sign In
          </h2>

          {error && (
            <div className="mb-6 p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium text-left">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-6 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Sign in successful! Opening private dashboard...</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            {/* Email or Username Input (Rounded Full Pill) */}
            <div className="space-y-1">
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email or Username"
                className="w-full px-6 py-4 rounded-full border border-neutral-300/90 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all shadow-xs"
              />
            </div>

            {/* Password Input (Rounded Full Pill) */}
            <div className="space-y-1 relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-6 py-4 pr-12 rounded-full border border-neutral-300/90 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all shadow-xs"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {/* Forgot Password Link */}
            <div className="pt-1">
              <span className="text-xs font-semibold text-[#ff4d2d] hover:underline cursor-pointer">
                Forgot password?
              </span>
            </div>

            {/* Gradient Full Pill Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading || success}
                className="w-full rounded-full bg-gradient-to-r from-[#ff4e26] via-[#ff3b3b] to-[#ea1c5d] hover:opacity-95 text-white font-bold py-4 px-6 text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-red-500/25 transition-all duration-300 cursor-pointer disabled:opacity-70"
              >
                {loading ? (
                  <span>Signing In...</span>
                ) : (
                  <>
                    <ArrowRight className="w-4 h-4" />
                    <span>Sign In</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Quick Default Credentials Note */}
          <div className="mt-8 p-3 rounded-2xl bg-neutral-50 border border-neutral-200/80 text-left">
            <div className="text-[11px] text-neutral-500 font-medium leading-relaxed">
              Default Admin: <strong className="text-neutral-900">kalkiweb06@gmail.com</strong>
              <br />
              Default Pass: <strong className="text-neutral-900 font-mono">kalkiadmin@221</strong>
            </div>
          </div>
        </div>

        {/* Bottom Footer Credits */}
        <div className="w-full max-w-md mx-auto pt-6 text-center text-xs text-neutral-400 font-light">
          © 2026 Kalki Web Agency. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white text-center pt-40">Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}
