"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  FileText,
  Users,
  Inbox,
  Globe,
  LogOut,
  Menu,
  X,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [adminUser, setAdminUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [inquiryCount, setInquiryCount] = useState(0);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const res = await fetch("/api/admin/status");
        const data = await res.json();
        if (data.authenticated) {
          setAdminUser(data.user);
        } else {
          router.push(`/admin/login?redirect=${pathname}`);
        }
      } catch (err) {
        router.push(`/admin/login?redirect=${pathname}`);
      } finally {
        setLoading(false);
      }
    };

    verifyAuth();
  }, [pathname, router]);

  // Fetch inquiry stats for the sidebar badge
  useEffect(() => {
    const fetchInquiryStats = async () => {
      try {
        const res = await fetch("/api/contact");
        const data = await res.json();
        if (data.success && data.stats) {
          setInquiryCount(data.stats.newCount || data.stats.total || 0);
        }
      } catch (err) {
        // silent fallback
      }
    };

    fetchInquiryStats();
  }, [pathname]);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-slate-900 flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-8 h-8 rounded-full border-2 border-slate-900 border-t-transparent animate-spin mx-auto" />
          <p className="text-xs text-slate-500 font-medium">Verifying admin access...</p>
        </div>
      </div>
    );
  }

  if (!adminUser) return null;

  const navItems = [
    {
      label: "Posts Manager (/post)",
      href: "/dashboard/posts",
      icon: FileText,
      badge: "Posts",
    },
    {
      label: "Blog Articles (/blog)",
      href: "/dashboard/blog",
      icon: FileText,
      badge: "Live",
    },
    {
      label: "Kalki Members",
      href: "/dashboard/members",
      icon: Users,
      badge: "Team",
    },
    {
      label: "Contact Inquiries",
      href: "/dashboard/inquiries",
      icon: Inbox,
      badge: inquiryCount > 0 ? `${inquiryCount} new` : "Leads",
      highlight: inquiryCount > 0,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col md:flex-row antialiased">
      {/* Mobile Top Navigation Bar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-black text-white flex items-center justify-center text-xs font-black">
            K
          </div>
          <span className="text-sm font-bold tracking-tight text-slate-900">
            Kalki <span className="font-normal text-slate-500">Admin</span>
          </span>
        </div>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          aria-label="Toggle Menu"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* DESKTOP & MOBILE SIDEBAR (Clean White with Slate Borders & Black Accents) */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-40 h-screen w-64 bg-white border-r border-slate-200 p-5 flex flex-col justify-between transition-transform duration-200 shrink-0 ${
          sidebarOpen ? "translate-x-0 shadow-xl" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="space-y-6">
          {/* Brand Identity */}
          <div className="flex items-center gap-3 px-2 pt-2">
            <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-black text-sm">
              K
            </div>
            <div>
              <div className="text-base font-bold text-slate-900 tracking-tight leading-none">
                Kalki Admin
              </div>
              <div className="text-[11px] text-slate-500 font-normal mt-1">
                Workspace Portal
              </div>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="space-y-1 pt-2">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-3 pb-2">
              Management
            </div>

            {navItems.map((item) => {
              const active = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? "bg-black text-white shadow-sm font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${active ? "text-white" : "text-slate-500"}`} />
                    <span>{item.label}</span>
                  </div>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-mono ${
                      active
                        ? "bg-white/20 text-white"
                        : item.highlight
                        ? "bg-slate-900 text-white font-semibold"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {item.badge}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Live Website Quick Links */}
          <div className="space-y-1 pt-4 border-t border-slate-200">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-3 pb-2">
              Website
            </div>

            <Link
              href="/contact"
              target="_blank"
              className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span>Live Contact Page</span>
              </div>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </Link>

            <Link
              href="/blog"
              target="_blank"
              className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span>Live Blog Journal</span>
              </div>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </Link>

            <Link
              href="/"
              target="_blank"
              className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span>Kalki Homepage</span>
              </div>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </Link>
          </div>
        </div>

        {/* Bottom User Info & Sign Out */}
        <div className="pt-4 border-t border-slate-200 space-y-3">
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <div className="text-xs font-semibold text-slate-900 leading-none">
              Administrator
            </div>
            <div className="text-[11px] text-slate-500 truncate mt-1 font-mono">
              {adminUser.email}
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-4 sm:p-8 lg:p-10 max-w-7xl overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
