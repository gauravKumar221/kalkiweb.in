"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  TrendingUp,
  Bot,
  Code2,
  ShoppingBag,
  Store,
  Palette,
  Smartphone,
  Server,
  Headphones,
  Star,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Activity,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { serviceShowcaseData } from "@/data/service-showcase-data";

/**
 * Realistic Barcode Graphic Component
 */
const BarcodeGraphic = () => (
  <div className="flex items-center justify-between h-7 w-full gap-[2px] overflow-hidden px-1 pt-1 select-none opacity-85">
    {[
      4, 2, 6, 2, 8, 3, 5, 2, 7, 3, 2, 6, 4, 8, 2, 5, 3, 7, 2, 6, 4, 3, 5, 2,
      8, 3, 4, 6, 2, 5, 3, 7, 2, 5, 4, 8, 2, 6, 3, 7, 2,
    ].map((height, i) => (
      <div
        key={i}
        className={cn(
          "bg-neutral-800 rounded-sm shrink-0",
          i % 4 === 0
            ? "w-[3.5px]"
            : i % 3 === 0
            ? "w-[2.5px]"
            : i % 2 === 0
            ? "w-[1.5px]"
            : "w-[1px]",
          "h-full"
        )}
      />
    ))}
  </div>
);

/**
 * Icon Helper for Bottom-Right Assistant Card
 */
function renderAssistantIcon(iconKey) {
  switch (iconKey) {
    case "trending":
      return <TrendingUp className="w-4 h-4 text-emerald-400" />;
    case "code":
      return <Code2 className="w-4 h-4 text-emerald-400" />;
    case "shopping":
      return <ShoppingBag className="w-4 h-4 text-amber-400" />;
    case "store":
      return <Store className="w-4 h-4 text-emerald-400" />;
    case "palette":
      return <Palette className="w-4 h-4 text-orange-400" />;
    case "smartphone":
      return <Smartphone className="w-4 h-4 text-sky-400" />;
    case "server":
      return <Server className="w-4 h-4 text-indigo-400" />;
    case "headphones":
      return <Headphones className="w-4 h-4 text-teal-400" />;
    case "bot":
    default:
      return <Bot className="w-4 h-4 text-purple-400" />;
  }
}

/**
 * ServiceFeatureShowcase
 * Reusable showcase section with interactive floating cards, dynamic island phone,
 * and concentric radar rings. Automatically personalizes mockups for every service
 * with targeted value propositions for New Business Owners.
 */
export default function ServiceFeatureShowcase({
  serviceType,
  title,
  subtitle,
  slides = [],
  features = [],
  defaultDescription,
  reverse = false,
  className = "",
}) {
  const pathname = usePathname() || "";

  // Auto-detect serviceKey from prop or active URL pathname
  let effectiveKey = serviceType;
  if (!effectiveKey) {
    if (pathname.includes("digital-marketing")) effectiveKey = "digital-marketing";
    else if (pathname.includes("ai-services")) effectiveKey = "ai-services";
    else if (pathname.includes("web-development")) effectiveKey = "web-development";
    else if (pathname.includes("shopify-development")) effectiveKey = "shopify-development";
    else if (pathname.includes("ecommerce")) effectiveKey = "ecommerce";
    else if (pathname.includes("graphic-ui-ux")) effectiveKey = "graphic-ui-ux";
    else if (pathname.includes("mobile-app-development")) effectiveKey = "mobile-app-development";
    else if (pathname.includes("devops")) effectiveKey = "devops";
    else if (pathname.includes("back-office")) effectiveKey = "back-office";
    else effectiveKey = "digital-marketing";
  }

  // Load configured content dataset for this service
  const data = serviceShowcaseData[effectiveKey] || serviceShowcaseData["digital-marketing"];

  // Determine headlines
  let titleLine1 = data.titleLine1;
  let titleLine2 = data.titleLine2;

  if (title && !title.toLowerCase().includes("flight") && !title.toLowerCase().includes("book")) {
    const words = title.trim().split(/\s+/);
    if (words.length <= 2) {
      titleLine1 = words[0] || data.titleLine1;
      titleLine2 = words.slice(1).join(" ") || data.titleLine2;
    } else {
      const mid = Math.ceil(words.length / 2);
      titleLine1 = words.slice(0, mid).join(" ");
      titleLine2 = words.slice(mid).join(" ");
    }
  }

  const effectiveSubtitle =
    subtitle && !subtitle.toLowerCase().includes("flight")
      ? subtitle
      : data.subtitle;

  return (
    <section
      className={cn(
        "py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-[#F9FCFA] via-[#F4F9F6] to-[#EEF6F2] text-neutral-900 border-y border-neutral-200/80 select-none",
        className
      )}
    >
      {/* Background Concentric Radar Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <div className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border border-emerald-500/15" />
        <div className="absolute w-[520px] h-[520px] sm:w-[680px] sm:h-[680px] rounded-full border border-emerald-500/15" />
        <div className="absolute w-[760px] h-[760px] sm:w-[940px] sm:h-[940px] rounded-full border border-emerald-500/10" />
        <div className="absolute w-[1000px] h-[1000px] sm:w-[1240px] sm:h-[1240px] rounded-full border border-emerald-500/10" />
        <div className="absolute w-[1300px] h-[1300px] sm:w-[1550px] sm:h-[1550px] rounded-full border border-emerald-500/5" />
        {/* Soft Radial Ambient Glow */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-emerald-100/40 blur-[130px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with Embedded Pill Cutout Images */}
        <div className="text-center max-w-4xl mx-auto mb-14 md:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-neutral-900 uppercase leading-[1.1] sm:leading-[1.15]">
            <span className="inline-flex items-center justify-center gap-2 sm:gap-3">
              <span className="w-12 h-8 sm:w-18 sm:h-11 md:w-22 md:h-13 rounded-full overflow-hidden inline-block shadow-md border-2 border-white shrink-0 hover:scale-105 transition-transform duration-300">
                <img
                  src={data.pillImage1}
                  alt={data.pillAlt1}
                  className="w-full h-full object-cover"
                />
              </span>
              <span>{titleLine1}</span>
            </span>
            {titleLine2 && (
              <>
                <br className="hidden sm:inline" />
                <span className="inline-flex items-center justify-center gap-2 sm:gap-3 mt-1 sm:mt-2">
                  <span>{titleLine2}</span>
                  <span className="w-12 h-8 sm:w-18 sm:h-11 md:w-22 md:h-13 rounded-full overflow-hidden inline-block shadow-md border-2 border-white shrink-0 hover:scale-105 transition-transform duration-300">
                    <img
                      src={data.pillImage2}
                      alt={data.pillAlt2}
                      className="w-full h-full object-cover"
                    />
                  </span>
                </span>
              </>
            )}
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-600 font-medium max-w-2xl mx-auto leading-relaxed">
            {effectiveSubtitle}
          </p>
        </div>

        {/* Central Mockup Arena */}
        <div className="relative max-w-5xl mx-auto flex items-center justify-center min-h-[680px] md:min-h-[740px] pb-10">
          {/* ========================================================= */}
          {/* FLOATING CARD 1: TOP LEFT - Primary Metric & Users Stack   */}
          {/* ========================================================= */}
          <div className="hidden md:flex flex-col gap-2 absolute left-0 lg:left-6 top-8 lg:top-14 z-30 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-neutral-100/90 w-52 hover:-translate-y-1 transition-all duration-300 group">
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-black text-neutral-900 tracking-tight">
                {data.card1.metric}
              </span>
              <div className="flex items-center gap-1 text-[11px] font-semibold text-neutral-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/50">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span>{data.card1.rating}</span>
              </div>
            </div>
            <span className="text-xs font-medium text-neutral-500">
              {data.card1.label}
            </span>

            {/* Overlapping User Avatars Stack */}
            <div className="flex items-center -space-x-2 pt-1">
              {data.card1.avatars.map((avatarUrl, idx) => (
                <img
                  key={idx}
                  src={avatarUrl}
                  alt="Customer"
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                />
              ))}
              <div className="w-7 h-7 rounded-full border-2 border-white bg-neutral-950 text-white text-[10px] font-bold flex items-center justify-center">
                {data.card1.avatarExtra}
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* FLOATING CARD 2: BOTTOM LEFT - Real-time Pipeline / Ticket */}
          {/* ========================================================= */}
          <div className="hidden md:flex flex-col gap-3 absolute left-2 lg:left-10 bottom-6 lg:bottom-12 z-30 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-neutral-100/90 w-64 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
              <span className="text-xs font-bold text-neutral-900 tracking-tight">
                {data.card2.title}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                {data.card2.badge}
              </span>
            </div>

            {/* Item 1 */}
            <div className="flex items-center justify-between text-left">
              <div className="flex items-center gap-2">
                <img
                  src={data.card2.item1.avatar}
                  alt="Lead"
                  className="w-6 h-6 rounded-full object-cover border border-neutral-200"
                />
                <div>
                  <p className="text-[9px] font-medium text-neutral-400 uppercase tracking-wider leading-none">
                    {data.card2.item1.tag}
                  </p>
                  <p className="text-xs font-bold text-neutral-800 leading-tight">
                    {data.card2.item1.name}
                  </p>
                  <p className="text-[10px] text-neutral-500 leading-none mt-0.5">
                    {data.card2.item1.sub}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[9px] text-neutral-400 block uppercase">
                  {data.card2.item1.metricTag}
                </span>
                <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                  {data.card2.item1.metricValue}
                </span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center justify-between text-left">
              <div className="flex items-center gap-2">
                <img
                  src={data.card2.item2.avatar}
                  alt="Lead"
                  className="w-6 h-6 rounded-full object-cover border border-neutral-200"
                />
                <div>
                  <p className="text-[9px] font-medium text-neutral-400 uppercase tracking-wider leading-none">
                    {data.card2.item2.tag}
                  </p>
                  <p className="text-xs font-bold text-neutral-800 leading-tight">
                    {data.card2.item2.name}
                  </p>
                  <p className="text-[10px] text-neutral-500 leading-none mt-0.5">
                    {data.card2.item2.sub}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[9px] text-neutral-400 block uppercase">
                  {data.card2.item2.metricTag}
                </span>
                <span className="text-xs font-black text-neutral-800 bg-neutral-100 px-1.5 py-0.5 rounded">
                  {data.card2.item2.metricValue}
                </span>
              </div>
            </div>

            {/* Barcode Graphic */}
            <div className="pt-2 border-t border-dashed border-neutral-200">
              <BarcodeGraphic />
              <span className="text-[8px] font-mono uppercase tracking-widest text-neutral-400 text-center block mt-1">
                {data.card2.barcodeLabel}
              </span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* CENTER: SMARTPHONE MOCKUP                                 */}
          {/* ========================================================= */}
          <div className="relative z-20 w-[300px] sm:w-[325px] md:w-[340px] rounded-[48px] p-3 bg-neutral-950 border-[4px] border-neutral-800/90 shadow-[0_25px_60px_rgba(0,0,0,0.25)] ring-1 ring-neutral-900/50">
            {/* Screen Bezel */}
            <div className="rounded-[38px] overflow-hidden bg-neutral-50 flex flex-col h-[570px] sm:h-[600px] border border-neutral-200/50 relative">
              {/* Status Bar & Dynamic Island */}
              <div
                className={cn(
                  "bg-gradient-to-r px-6 pt-3 pb-1 flex items-center justify-between text-white text-[11px] font-semibold relative z-30",
                  data.phone.gradient
                )}
              >
                <span>09:41</span>
                {/* Dynamic Island Pill */}
                <div className="w-20 h-4 bg-neutral-950 rounded-full mx-auto" />
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px]">5G</span>
                  <div className="w-4 h-2 rounded-sm border border-white flex items-center p-0.5">
                    <div className="w-full h-full bg-white rounded-[1px]" />
                  </div>
                </div>
              </div>

              {/* Dynamic Gradient App Header */}
              <div
                className={cn(
                  "bg-gradient-to-b p-5 pb-8 text-white relative",
                  data.phone.gradient
                )}
              >
                <div className="flex items-start justify-between">
                  <div className="text-left">
                    <h3 className="text-xl font-bold leading-tight drop-shadow-sm">
                      {data.phone.headerTop}
                    </h3>
                    <h3 className="text-2xl font-black tracking-tight drop-shadow-sm">
                      {data.phone.headerMain}
                    </h3>
                  </div>
                  {/* User Profile Avatar */}
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-md shrink-0">
                    <img
                      src={data.phone.userAvatar}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Interactive Configuration Card inside Phone */}
              <div className="-mt-5 mx-3.5 bg-white rounded-2xl p-4 shadow-lg border border-neutral-100 text-left relative z-20 space-y-3">
                {/* Field 1 */}
                <div className="relative">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                    {data.phone.form.field1Label}
                  </span>
                  <span className="text-sm font-bold text-neutral-900 block truncate pr-8">
                    {data.phone.form.field1Value}
                  </span>

                  {/* Sparkle Action Button */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neutral-950 text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  </div>
                </div>

                {/* Field 2 */}
                <div className="border-t border-neutral-100 pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                    {data.phone.form.field2Label}
                  </span>
                  <span className="text-sm font-bold text-neutral-900 block truncate">
                    {data.phone.form.field2Value}
                  </span>
                </div>

                {/* Field 3 & 4 Grid */}
                <div className="border-t border-neutral-100 pt-2 grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1">
                      <Activity className="w-3 h-3 text-neutral-400" />
                      {data.phone.form.field3Label}
                    </span>
                    <span className="text-xs font-bold text-neutral-900 block truncate">
                      {data.phone.form.field3Value}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1">
                      <Zap className="w-3 h-3 text-neutral-400" />
                      {data.phone.form.field4Label}
                    </span>
                    <span className="text-xs font-bold text-neutral-900 block truncate">
                      {data.phone.form.field4Value}
                    </span>
                  </div>
                </div>

                {/* Primary Action Button */}
                <button
                  type="button"
                  className="w-full mt-2 py-2.5 bg-neutral-950 hover:bg-neutral-800 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer group"
                >
                  <span>{data.phone.form.btnText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

              {/* Live Telemetry / Status Card inside Phone */}
              <div className="p-3.5 pt-4 text-left flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-neutral-900">
                      {data.phone.liveCard.badge}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live
                    </span>
                  </div>

                  {/* Telemetry Card */}
                  <div className="bg-white rounded-xl p-3 border border-neutral-100 shadow-sm">
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center text-[8px] font-black">
                        ✓
                      </div>
                      <span className="text-xs font-bold text-neutral-800">
                        {data.phone.liveCard.title}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-center">
                      <div className="text-left">
                        <span className="text-sm font-black text-neutral-900 block">
                          {data.phone.liveCard.leftValue}
                        </span>
                        <span className="text-[10px] text-neutral-400">
                          {data.phone.liveCard.leftLabel}
                        </span>
                      </div>

                      {/* Middle Badge */}
                      <div className="flex flex-col items-center px-2">
                        <span className="text-[9px] font-medium text-neutral-400 mb-0.5">
                          {data.phone.liveCard.middleLabel}
                        </span>
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/60">
                          <TrendingUp className="w-3 h-3 text-emerald-600" />
                          <span className="text-[11px] font-black text-emerald-700">
                            {data.phone.liveCard.middleValue}
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-sm font-black text-neutral-900 block">
                          {data.phone.liveCard.rightValue}
                        </span>
                        <span className="text-[10px] text-neutral-400">
                          {data.phone.liveCard.rightLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Home Indicator Bar */}
                <div className="w-28 h-1 bg-neutral-300 rounded-full mx-auto mt-2" />
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* FLOATING CARD 3: TOP RIGHT - Performance / Revenue Card   */}
          {/* ========================================================= */}
          <div className="hidden md:flex flex-col gap-3 absolute right-0 lg:right-6 top-6 lg:top-12 z-30 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-neutral-100/90 w-64 hover:-translate-y-1 transition-all duration-300 text-left">
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold",
                  data.card3.iconColor
                )}
              >
                ✓
              </div>
              <span className="text-xs font-bold text-neutral-900">
                {data.card3.badgeTitle}
              </span>
            </div>

            <div className="flex items-center justify-between text-center py-1">
              <div className="text-left">
                <span className="text-xs font-black text-neutral-900 block">
                  {data.card3.statLeft}
                </span>
                <span className="text-[9px] text-neutral-400">
                  {data.card3.labelLeft}
                </span>
              </div>

              <div className="flex flex-col items-center px-1">
                <span className="text-[8px] font-medium text-neutral-400">
                  {data.card3.labelMid}
                </span>
                <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600 text-[10px] font-bold">
                  {data.card3.statMid}
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs font-black text-neutral-900 block">
                  {data.card3.statRight}
                </span>
                <span className="text-[9px] text-neutral-400">
                  {data.card3.labelRight}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
              <div>
                <span className="text-base font-black text-neutral-900">
                  {data.card3.price}
                </span>
                <span className="text-[10px] text-neutral-400 ml-1">
                  {data.card3.priceUnit}
                </span>
              </div>
              <button
                type="button"
                className="bg-neutral-950 hover:bg-neutral-800 text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-sm transition-all"
              >
                {data.card3.btnText}
              </button>
            </div>
          </div>

          {/* ========================================================= */}
          {/* FLOATING CARD 4: MIDDLE RIGHT - Value Prop Banner         */}
          {/* ========================================================= */}
          <div
            className={cn(
              "hidden md:flex flex-col justify-center absolute right-2 lg:right-10 top-56 lg:top-64 z-30 text-white rounded-2xl p-4 w-48 hover:-translate-y-1 transition-all duration-300 text-left",
              data.card4.gradient
            )}
          >
            <span className="text-3xl font-black tracking-tight leading-none">
              {data.card4.metric}
            </span>
            <span className="text-xs font-medium text-white/95 leading-snug mt-1.5">
              {data.card4.label}
            </span>
          </div>

          {/* ========================================================= */}
          {/* FLOATING CARD 5: BOTTOM RIGHT - Dedicated AI Bot Pill     */}
          {/* ========================================================= */}
          <div className="hidden md:flex items-center gap-3 absolute right-0 lg:right-6 bottom-8 lg:bottom-14 z-30 bg-white/95 backdrop-blur-md rounded-full px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-neutral-100/90 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-neutral-950 text-white flex items-center justify-center shadow-md">
              {renderAssistantIcon(data.card5.icon)}
            </div>
            <div className="text-left pr-2">
              <p className="text-xs font-bold text-neutral-900 leading-none">
                {data.card5.title}
              </p>
              <p className="text-[11px] text-neutral-400 font-medium leading-none mt-1">
                {data.card5.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile View: High-Impact Badges */}
        <div className="flex md:hidden flex-wrap items-center justify-center gap-3 mt-6">
          <div className="bg-white rounded-xl p-3 shadow-md border border-neutral-100 flex items-center gap-2">
            <span className="text-base font-black text-neutral-900">
              {data.mobile.card1Metric}
            </span>
            <span className="text-xs text-neutral-600">
              {data.mobile.card1Label}
            </span>
          </div>
          <div
            className={cn(
              "text-white rounded-xl p-3 shadow-md flex items-center gap-2",
              data.card4.gradient
            )}
          >
            <span className="text-base font-black">
              {data.mobile.card2Metric}
            </span>
            <span className="text-xs font-medium">
              {data.mobile.card2Label}
            </span>
          </div>
        </div>

        {/* Optional: Features list tags if features prop is provided */}
        {features && features.length > 0 && (
          <div className="mt-14 pt-8 border-t border-neutral-200/60 max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {features.map((feature, idx) => {
                const itemTitle =
                  typeof feature === "string" ? feature : feature.title;
                return (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-neutral-200 text-xs sm:text-sm font-semibold text-neutral-700 shadow-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{itemTitle}</span>
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
