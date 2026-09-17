"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Trash2,
  ExternalLink,
  Eye,
  Search,
  Plus,
  Calendar,
  Layers,
  Image as ImageIcon,
  Check,
  RefreshCw,
  TrendingUp,
} from "lucide-react";

const presetImages = [
  { label: "Team Collaboration", url: "/illustrations/team_collaboration.jpg" },
  { label: "SEO & Search", url: "/illustrations/seo_search_results.jpg" },
  { label: "User & Conversion", url: "/illustrations/user_conversion.jpg" },
  { label: "Cloud & Server", url: "/illustrations/server_performance.jpg" },
];

const categories = [
  "Digital Strategy",
  "Content Marketing",
  "Search Engine Optimization",
  "Email Marketing",
  "Social Media Marketing",
  "E-Commerce",
  "Data and Analytics",
  "Customer Experience",
  "Digital Management and Leadership",
  "Digital Marketing",
  "Display and Video Advertising",
  "PPC and Paid Search",
  "Web Design, CRO and UX",
  "Social Selling",
  "AI Digital Marketing",
  "Careers",
];

export default function DashboardBlogPage() {
  const [activeTab, setActiveTab] = useState("list"); // 'list' | 'create'
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    category: "AI Digital Marketing",
    snippet: "",
    content: "",
    coverImage: "/illustrations/seo_search_results.jpg",
    authorName: "Tasmin Lofthouse",
    authorRole: "Senior AI Strategist",
    authorAvatar: "/images videos/gaurav.png",
    tags: "AI, Marketing, Growth",
    featured: false,
  });

  const [previewMode, setPreviewMode] = useState(false);

  // Fetch articles
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/posts", { cache: "no-store" });
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setPosts(data.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const totalViews = useMemo(() => {
    return posts.reduce((acc, p) => acc + (p.views || 0), 0);
  }, [posts]);

  const filteredPosts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return posts;
    return posts.filter(
      (p) =>
        p.title?.toLowerCase().includes(q) ||
        p.category?.toLowerCase().includes(q) ||
        p.author?.name?.toLowerCase().includes(q)
    );
  }, [posts, searchQuery]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const insertMarkdown = (prefix, suffix = "") => {
    setFormData((prev) => ({
      ...prev,
      content: prev.content + `\n\n${prefix}Text${suffix}`,
    }));
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");

    if (!formData.title.trim() || !formData.snippet.trim() || !formData.content.trim()) {
      setError("Please complete all required fields (title, snippet, and content).");
      return;
    }

    try {
      setSubmitting(true);

      const payload = {
        title: formData.title.trim(),
        category: formData.category,
        snippet: formData.snippet.trim(),
        content: formData.content.trim(),
        coverImage: formData.coverImage,
        author: {
          name: formData.authorName,
          role: formData.authorRole,
          avatar: formData.authorAvatar,
        },
        tags: formData.tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
        featured: formData.featured,
      };

      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setSuccessMsg(`Article "${formData.title}" published successfully!`);
        setFormData({
          title: "",
          category: "AI Digital Marketing",
          snippet: "",
          content: "",
          coverImage: "/illustrations/seo_search_results.jpg",
          authorName: "Tasmin Lofthouse",
          authorRole: "Senior AI Strategist",
          authorAvatar: "/images videos/gaurav.png",
          tags: "AI, Marketing, Growth",
          featured: false,
        });
        await fetchPosts();
        setActiveTab("list");
      } else {
        setError(data.error || "Failed to publish post.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (slug, title) => {
    if (!confirm(`Are you sure you want to permanently delete "${title}"?`)) return;

    try {
      const res = await fetch(`/api/posts/${slug}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setPosts((prev) => prev.filter((p) => p.slug !== slug));
      } else {
        alert(data.error || "Failed to delete post");
      }
    } catch (err) {
      alert("Error deleting article");
    }
  };

  return (
    <div className="space-y-6 text-left font-sans">
      {/* Top Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Blog Articles
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Create, edit, and organize articles published on the Kalki Web Journal.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setActiveTab(activeTab === "list" ? "create" : "list")}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-black text-white text-xs font-semibold hover:bg-slate-800 transition-colors shadow-sm"
          >
            {activeTab === "list" ? (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>+ Create New Article</span>
              </>
            ) : (
              <>
                <FileText className="w-3.5 h-3.5" />
                <span>View Articles ({posts.length})</span>
              </>
            )}
          </button>

          <button
            onClick={fetchPosts}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            Total Articles
          </div>
          <div className="text-2xl font-bold text-slate-900 mt-1">{posts.length}</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            Total Views
          </div>
          <div className="text-2xl font-bold text-slate-900 mt-1">
            {totalViews.toLocaleString()}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            Categories
          </div>
          <div className="text-2xl font-bold text-slate-900 mt-1">
            {new Set(posts.map((p) => p.category)).size}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            Featured
          </div>
          <div className="text-2xl font-bold text-slate-900 mt-1">
            {posts.filter((p) => p.featured).length}
          </div>
        </div>
      </div>

      {/* TAB 1: ARTICLES LIST */}
      {activeTab === "list" && (
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles by title, category, or author..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
            />
          </div>

          {/* Clean White Articles Table */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            {loading ? (
              <div className="py-16 text-center text-slate-500 text-sm">
                <div className="w-6 h-6 border-2 border-slate-900 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                Loading published articles...
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="py-16 text-center text-slate-500 text-sm">
                No articles found matching "{searchQuery}".
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 text-xs uppercase tracking-wider font-semibold">
                    <tr>
                      <th className="px-5 py-3.5">Article</th>
                      <th className="px-5 py-3.5">Category</th>
                      <th className="px-5 py-3.5">Author</th>
                      <th className="px-5 py-3.5">Views</th>
                      <th className="px-5 py-3.5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredPosts.map((post) => (
                      <tr
                        key={post._id || post.slug}
                        className="hover:bg-slate-50/80 transition-colors"
                      >
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
                              <Image
                                src={post.coverImage || "/illustrations/seo_search_results.jpg"}
                                alt={post.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="truncate max-w-xs sm:max-w-md">
                              <div className="font-semibold text-slate-900 truncate">
                                {post.title}
                              </div>
                              <div className="text-xs text-slate-500 truncate mt-0.5">
                                {post.snippet}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-5 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                            {post.category}
                          </span>
                        </td>

                        <td className="px-5 py-4 text-xs text-slate-600">
                          {post.author?.name || "Kalki Team"}
                        </td>

                        <td className="px-5 py-4 text-xs text-slate-600 font-mono">
                          {post.views || 0}
                        </td>

                        <td className="px-5 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Link
                              href={`/blog/${post.slug}`}
                              target="_blank"
                              className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
                              title="View live article"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </Link>

                            <button
                              onClick={() => handleDelete(post.slug, post.title)}
                              className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                              title="Delete article"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: CREATE NEW POST FORM */}
      {activeTab === "create" && (
        <form onSubmit={handleCreatePost} className="space-y-6">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-600 font-medium">
              {error}
            </div>
          )}

          {successMsg && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-700 font-medium">
              {successMsg}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left 2 Cols: Main Content */}
            <div className="lg:col-span-2 space-y-5 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              {/* Title */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Article Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g., The Future of AI in Modern Marketing"
                  required
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                />
              </div>

              {/* Excerpt / Snippet */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Short Snippet / Excerpt *
                </label>
                <textarea
                  name="snippet"
                  value={formData.snippet}
                  onChange={handleChange}
                  rows={2}
                  placeholder="A short 1-2 sentence description shown in cards and SEO meta tags"
                  required
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                />
              </div>

              {/* Markdown Content */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Full Content (Markdown) *
                  </label>
                  <div className="flex items-center gap-1 text-xs">
                    <button
                      type="button"
                      onClick={() => insertMarkdown("## ")}
                      className="px-2 py-0.5 rounded border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                    >
                      H2
                    </button>
                    <button
                      type="button"
                      onClick={() => insertMarkdown("### ")}
                      className="px-2 py-0.5 rounded border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                    >
                      H3
                    </button>
                    <button
                      type="button"
                      onClick={() => insertMarkdown("**", "**")}
                      className="px-2 py-0.5 rounded border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 font-bold"
                    >
                      B
                    </button>
                    <button
                      type="button"
                      onClick={() => setPreviewMode(!previewMode)}
                      className="px-2.5 py-0.5 rounded bg-black text-white font-medium ml-2"
                    >
                      {previewMode ? "Edit" : "Preview"}
                    </button>
                  </div>
                </div>

                {previewMode ? (
                  <div className="min-h-[300px] p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 whitespace-pre-wrap">
                    {formData.content || "Nothing to preview yet..."}
                  </div>
                ) : (
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    rows={12}
                    placeholder="Write article content using standard markdown..."
                    required
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 text-sm font-mono focus:outline-none focus:border-black focus:ring-1 focus:ring-black leading-relaxed"
                  />
                )}
              </div>
            </div>

            {/* Right 1 Col: Metadata & Publishing */}
            <div className="space-y-5 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              {/* Category */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Cover Image */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Cover Image URL
                </label>
                <input
                  type="text"
                  name="coverImage"
                  value={formData.coverImage}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs font-mono focus:outline-none focus:border-black focus:ring-1 focus:ring-black mb-2"
                />

                <div className="grid grid-cols-2 gap-2 pt-1">
                  {presetImages.map((img) => (
                    <button
                      type="button"
                      key={img.url}
                      onClick={() => setFormData((p) => ({ ...p, coverImage: img.url }))}
                      className={`relative h-14 rounded-lg overflow-hidden border-2 transition-all ${
                        formData.coverImage === img.url
                          ? "border-black shadow-sm"
                          : "border-slate-200 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image src={img.url} alt={img.label} fill className="object-cover" />
                      {formData.coverImage === img.url && (
                        <div className="absolute top-1 right-1 bg-black text-white rounded-full p-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Author Info */}
              <div className="space-y-3 pt-3 border-t border-slate-200">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Author Name
                  </label>
                  <input
                    type="text"
                    name="authorName"
                    value={formData.authorName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs focus:outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Author Role
                  </label>
                  <input
                    type="text"
                    name="authorRole"
                    value={formData.authorRole}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              {/* Publish Button */}
              <div className="pt-4 border-t border-slate-200">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-2.5 rounded-lg bg-black text-white font-semibold text-sm hover:bg-slate-800 transition-colors shadow-sm disabled:opacity-75"
                >
                  {submitting ? "Publishing Article..." : "Publish Article"}
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
