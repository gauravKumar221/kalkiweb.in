"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Plus,
  Trash2,
  ExternalLink,
  Search,
  Check,
  Linkedin,
  Instagram,
  MessageCircle,
  Mail,
  Shield,
  Award,
} from "lucide-react";

const initialMembers = [
  {
    id: "gaurav",
    name: "Gaurav Kumar",
    role: "Team Manager & Leadership",
    department: "Leadership & Strategy",
    image: "/images videos/gaurav.png",
    instagram: "@itzonly_gaurav",
    whatsapp: "+91 9304987505",
    linkedin: "https://www.linkedin.com/in/gaurav-kumar-307484238/",
    bio: "Gaurav Kumar leads the team with a strong focus on planning, management, and project execution. He coordinates different departments, manages client requirements, and ensures every project moves smoothly from concept to successful delivery.",
  },
  {
    id: "rajeev",
    name: "Rajeev",
    role: "Creative & Innovation Lead",
    department: "UI/UX & Creative",
    image: "/images videos/rajeev221.png",
    instagram: "@itzonly_gaurav",
    whatsapp: "+91 9304987505",
    linkedin: "https://www.linkedin.com",
    bio: "Rajeev brings creativity, fresh ideas, and innovative thinking to every project. From visual concepts and design direction to finding smarter solutions for complex requirements, he transforms ideas into practical digital experiences.",
  },
  {
    id: "rishav",
    name: "Rishav",
    role: "Tech Lead & Full-Stack Developer",
    department: "Engineering & AI",
    image: "/images videos/rishav221.png",
    instagram: "@itzonly_gaurav",
    whatsapp: "+91 9304987505",
    linkedin: "https://www.linkedin.com",
    bio: "Rishav works as our Tech Lead, specializing in Next.js, WordPress solutions, hosting management, website optimization, and technical infrastructure.",
  },
  {
    id: "andaz",
    name: "Andaz",
    role: "All-Rounder Design & Execution",
    department: "UI/UX & Creative",
    image: "/images videos/andaz.png",
    instagram: "@itzonly_gaurav",
    whatsapp: "+91 9304987505",
    linkedin: "https://www.linkedin.com",
    bio: "Andaz is an all-rounder who contributes across design, development, creative work, and project execution, keeping projects agile, flexible, and efficient.",
  },
  {
    id: "prince",
    name: "Prince Sharma",
    role: "Founder & Technical Director",
    department: "Leadership & Strategy",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    instagram: "@kalkiweb",
    whatsapp: "+91 9304987505",
    linkedin: "https://linkedin.com",
    bio: "Passionate technologist driving the vision at Kalki Web. Oversees full-stack architecture, client growth roadmaps, and next-gen AI workflows.",
  },
];

const departments = [
  "All",
  "Leadership & Strategy",
  "Engineering & AI",
  "UI/UX & Creative",
  "Growth & Marketing",
];

export default function DashboardMembersPage() {
  const [members, setMembers] = useState(initialMembers);
  const [selectedDept, setSelectedDept] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  const [newMember, setNewMember] = useState({
    name: "",
    role: "",
    department: "Engineering & AI",
    image: "/images videos/gaurav.png",
    whatsapp: "+91 9304987505",
    linkedin: "https://linkedin.com",
    bio: "",
  });

  const handleDeleteMember = (id, name) => {
    if (!confirm(`Are you sure you want to remove member "${name}"?`)) return;
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  const handleAddMember = (e) => {
    e.preventDefault();
    if (!newMember.name || !newMember.role) {
      alert("Please enter both name and role.");
      return;
    }

    const memberObj = {
      id: newMember.name.toLowerCase().replace(/\s+/g, "-") + "-" + Date.now(),
      ...newMember,
    };

    setMembers((prev) => [memberObj, ...prev]);
    setShowAddModal(false);
    setNewMember({
      name: "",
      role: "",
      department: "Engineering & AI",
      image: "/images videos/gaurav.png",
      whatsapp: "+91 9304987505",
      linkedin: "https://linkedin.com",
      bio: "",
    });
  };

  const filteredMembers = members.filter((m) => {
    const matchesDept =
      selectedDept === "All" || m.department === selectedDept;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      m.name.toLowerCase().includes(q) ||
      m.role.toLowerCase().includes(q) ||
      m.bio?.toLowerCase().includes(q);
    return matchesDept && matchesSearch;
  });

  return (
    <div className="space-y-6 text-left font-sans">
      {/* Top Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Kalki Members
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage team leaders, engineers, and creators featured across the Kalki Web team.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-black text-white text-xs font-semibold hover:bg-slate-800 transition-colors shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+ Add Kalki Member</span>
          </button>

          <Link
            href="/team"
            target="_blank"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
          >
            <span>Live Team Page</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            Total Members
          </div>
          <div className="text-2xl font-bold text-slate-900 mt-1">{members.length}</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            Departments
          </div>
          <div className="text-2xl font-bold text-slate-900 mt-1">
            {departments.length - 1}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            Leadership
          </div>
          <div className="text-2xl font-bold text-slate-900 mt-1">
            {members.filter((m) => m.department === "Leadership & Strategy").length}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            Engineers & Creatives
          </div>
          <div className="text-2xl font-bold text-slate-900 mt-1">
            {members.filter((m) => m.department !== "Leadership & Strategy").length}
          </div>
        </div>
      </div>

      {/* Search & Department Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search members by name or role..."
            className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 bg-slate-100 p-1 rounded-lg">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all whitespace-nowrap ${
                selectedDept === dept
                  ? "bg-white text-slate-900 shadow-sm font-semibold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      {/* Members Grid (Clean White Cards with Crisp Borders) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              {/* Member Avatar & Details */}
              <div className="flex items-start gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border border-slate-200 bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 text-base leading-snug truncate">
                      {member.name}
                    </h3>
                    <button
                      onClick={() => handleDeleteMember(member.id, member.name)}
                      className="text-slate-400 hover:text-red-600 p-1 rounded transition-colors"
                      title="Remove member"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="text-xs font-medium text-slate-600 truncate mt-0.5">
                    {member.role}
                  </p>

                  <span className="inline-block mt-2 px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200">
                    {member.department}
                  </span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mt-4">
                {member.bio}
              </p>
            </div>

            {/* Social & Contact Links */}
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                )}
                {member.whatsapp && (
                  <a
                    href={`https://wa.me/${member.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <span className="text-[11px] text-slate-400 font-mono">
                ID: {member.id}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Add Member Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-lg font-bold text-slate-900">Add Kalki Member</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-slate-700 text-sm"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddMember} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={newMember.name}
                  onChange={(e) =>
                    setNewMember((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="e.g. John Doe"
                  required
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Role / Title *
                </label>
                <input
                  type="text"
                  value={newMember.role}
                  onChange={(e) =>
                    setNewMember((prev) => ({ ...prev, role: e.target.value }))
                  }
                  placeholder="e.g. Senior Frontend Architect"
                  required
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Department
                </label>
                <select
                  value={newMember.department}
                  onChange={(e) =>
                    setNewMember((prev) => ({ ...prev, department: e.target.value }))
                  }
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-black"
                >
                  {departments
                    .filter((d) => d !== "All")
                    .map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Bio / Summary
                </label>
                <textarea
                  value={newMember.bio}
                  onChange={(e) =>
                    setNewMember((prev) => ({ ...prev, bio: e.target.value }))
                  }
                  rows={3}
                  placeholder="Short description of experience and responsibility..."
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-black"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-3.5 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-black text-white font-semibold hover:bg-slate-800"
                >
                  Save Member
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
