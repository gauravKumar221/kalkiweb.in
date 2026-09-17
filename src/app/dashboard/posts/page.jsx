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
  Tag,
  Sparkles,
  Globe,
  Share2,
} from "lucide-react";

const presetImages = [
  { label: "SEO & Search", url: "/illustrations/seo_search_results.jpg" },
  { label: "Team Collaboration", url: "/illustrations/team_collaboration.jpg" },
  { label: "User & Conversion", url: "/illustrations/user_conversion.jpg" },
  { label: "Cloud & Server", url: "/illustrations/server_performance.jpg" },
];

const categories = [
  "Search Engine Optimization",
  "Digital Marketing",
  "PPC and Paid Search",
  "Web Design, CRO and UX",
  "E-Commerce",
  "Social Media Marketing",
  "AI Digital Marketing",
  "Content Marketing",
  "Email Marketing",
  "Data and Analytics",
  "Customer Experience",
  "Digital Management and Leadership",
  "Social Selling",
  "Careers",
];

// Target Keywords for One-Click Injection
const targetKeywordGroups = [
  {
    group: "Core SEO & Digital Marketing",
    keywords: [
      "Digital Marketing Agency India",
      "Best Digital Marketing Agency",
      "Digital Marketing Company India",
      "SEO Company India",
      "Top-Rated & Most Trusted SEO Company in India",
      "SEO Services India",
      "Best SEO Company",
      "Performance Marketing Agency",
      "Online Marketing Agency",
    ],
  },
  {
    group: "Web & E-Commerce Development",
    keywords: [
      "Web Design Company India",
      "Website Development Company",
      "Web Development Agency India",
      "Website Development Services India",
      "E-commerce Website Development",
      "Shopify Development Company",
      "WordPress Development Company",
    ],
  },
  {
    group: "PPC & Social Media",
    keywords: [
      "Google Ads Management",
      "PPC Management Services",
      "Google Ads Agency India",
      "Social Media Marketing Agency",
      "Social Media Marketing Services",
      "Lead Generation Agency",
      "Digital Branding Agency",
    ],
  },
  {
    group: "🎯 High-Intent & Commercial Keywords",
    keywords: [
      "Hire Digital Marketing Agency",
      "Digital Marketing Services for Business",
      "SEO Services for Small Business",
      "Affordable Digital Marketing Services",
      "Professional SEO Services",
    ],
  },
];

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function DashboardPostsPage() {
  const [activeTab, setActiveTab] = useState("list"); // 'list' | 'create'
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [lastCreatedSlug, setLastCreatedSlug] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    metaTitle: "",
    metaDescription: "",
    category: "Search Engine Optimization",
    snippet: "",
    content: "",
    coverImage: "/illustrations/seo_search_results.jpg",
    authorName: "Gaurav Kumar",
    authorRole: "Chief SEO Strategist",
    authorAvatar: "/images videos/gaurav.png",
    tags: "Top-Rated & Most Trusted SEO Company in India, Best Digital Marketing Agency",
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
        p.slug?.toLowerCase().includes(q) ||
        p.tags?.some((t) => t.toLowerCase().includes(q))
    );
  }, [posts, searchQuery]);

  // Handle slug sync with title if slug not manually customized
  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setFormData((prev) => ({
      ...prev,
      title: newTitle,
      slug: prev.slug === slugify(prev.title) || !prev.slug ? slugify(newTitle) : prev.slug,
      metaTitle: !prev.metaTitle || prev.metaTitle === `${prev.title} | Kalki Web` ? `${newTitle} | Kalki Web` : prev.metaTitle,
    }));
  };

  // Add keyword to tags helper
  const addKeywordToTags = (kw) => {
    setFormData((prev) => {
      const currentTags = prev.tags ? prev.tags.split(",").map((t) => t.trim()).filter(Boolean) : [];
      if (!currentTags.includes(kw)) {
        currentTags.push(kw);
      }
      return { ...prev, tags: currentTags.join(", ") };
    });
  };

  // Delete article
  const handleDelete = async (slug, title) => {
    if (!confirm(`Are you sure you want to delete "${title}"? This cannot be undone.`)) {
      return;
    }

    try {
      const res = await fetch(`/api/posts/${slug}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setPosts((prev) => prev.filter((p) => p.slug !== slug));
      } else {
        alert(data.error || "Failed to delete post");
      }
    } catch (err) {
      alert("Error deleting post");
    }
  };

  // Create article submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");
    setSubmitting(true);

    try {
      const payload = {
        title: formData.title.trim(),
        slug: formData.slug.trim(),
        metaTitle: formData.metaTitle.trim() || formData.title.trim(),
        metaDescription: formData.metaDescription.trim() || formData.snippet.trim(),
        snippet: formData.snippet.trim(),
        content: formData.content.trim(),
        category: formData.category,
        coverImage: formData.coverImage,
        tags: formData.tags,
        featured: formData.featured,
        author: {
          name: formData.authorName,
          role: formData.authorRole,
          avatar: formData.authorAvatar,
        },
      };

      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        const createdSlug = data.data.slug;
        setLastCreatedSlug(createdSlug);
        setSuccessMsg(`Post successfully published! Live at /post/${createdSlug} and /blog/${createdSlug}`);
        setFormData({
          title: "",
          slug: "",
          metaTitle: "",
          metaDescription: "",
          category: "Search Engine Optimization",
          snippet: "",
          content: "",
          coverImage: "/illustrations/seo_search_results.jpg",
          authorName: "Gaurav Kumar",
          authorRole: "Chief SEO Strategist",
          authorAvatar: "/images videos/gaurav.png",
          tags: "Top-Rated & Most Trusted SEO Company in India, Best Digital Marketing Agency",
          featured: false,
        });
        fetchPosts();
      } else {
        setError(data.error || "Failed to create post.");
      }
    } catch (err) {
      setError("Network error while creating post.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-2">
            <Globe className="w-3.5 h-3.5" />
            <span>Dual URL Routing: /post/[slug] & /blog/[slug]</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Posts & SEO Content Manager
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Create, publish, and manage high-ranking search articles with custom slugs, meta titles, descriptions, and keyword tags.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setActiveTab("list");
              fetchPosts();
            }}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold border transition-all ${
              activeTab === "list"
                ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>All Posts ({posts.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("create")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold border transition-all ${
              activeTab === "create"
                ? "bg-[#814df5] text-white border-[#814df5] shadow-sm"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
            }`}
          >
            <Plus className="w-4 h-4" />
            <span>Create New Post</span>
          </button>
        </div>
      </div>

      {/* Metrics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Published Posts</span>
            <FileText className="w-4 h-4 text-slate-400" />
          </div>
          <div className="text-2xl font-bold text-slate-900 mt-2">{posts.length}</div>
          <div className="text-[11px] text-emerald-600 mt-1 font-medium">MongoDB Atlas Synced</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Total Views</span>
            <TrendingUp className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-2xl font-bold text-slate-900 mt-2">{totalViews.toLocaleString()}</div>
          <div className="text-[11px] text-slate-400 mt-1">Organic & Direct Reads</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Active Categories</span>
            <Layers className="w-4 h-4 text-purple-500" />
          </div>
          <div className="text-2xl font-bold text-slate-900 mt-2">
            {new Set(posts.map((p) => p.category)).size}
          </div>
          <div className="text-[11px] text-slate-400 mt-1">Topical Clusters</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Live URL Endpoints</span>
            <Share2 className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-sm font-bold text-slate-900 mt-2">/post/ & /blog/</div>
          <div className="text-[11px] text-emerald-600 mt-1 font-medium">Indexed with Schema.org</div>
        </div>
      </div>

      {/* Main Tab Views */}
      {activeTab === "list" ? (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Filter Bar */}
          <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, slug, or keywords..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>

            <button
              onClick={fetchPosts}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              <span>Refresh</span>
            </button>
          </div>

          {/* Posts Table */}
          {loading ? (
            <div className="p-12 text-center text-xs text-slate-400">Loading articles from database...</div>
          ) : filteredPosts.length === 0 ? (
            <div className="p-12 text-center space-y-2">
              <FileText className="w-8 h-8 text-slate-300 mx-auto" />
              <p className="text-sm font-medium text-slate-700">No posts found</p>
              <p className="text-xs text-slate-400">Try a different search or create your first post.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-600">
                <thead className="bg-slate-50 border-b border-slate-100 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Article</th>
                    <th className="py-3 px-4">URLs (/post/ & /blog/)</th>
                    <th className="py-3 px-4">Category & SEO Tags</th>
                    <th className="py-3 px-4 text-center">Views</th>
                    <th className="py-3 px-4">Published</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredPosts.map((post) => (
                    <tr key={post._id || post.slug} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <div className="relative w-12 h-10 rounded-md overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                            {post.coverImage ? (
                              <Image
                                src={post.coverImage}
                                alt={post.title}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-slate-100">
                                <ImageIcon className="w-4 h-4 text-slate-300" />
                              </div>
                            )}
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 line-clamp-1 max-w-sm">
                              {post.title}
                            </div>
                            <div className="text-[11px] text-slate-400 mt-0.5">
                              by {post.author?.name || "Kalki Team"} • {post.readTime || "5 min read"}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="py-3.5 px-4 font-mono text-[11px]">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1 text-slate-700">
                            <span className="text-slate-400">/post/</span>
                            <span className="font-semibold text-slate-900 truncate max-w-[140px]">
                              {post.slug}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Link
                              href={`/post/${post.slug}`}
                              target="_blank"
                              className="text-[10px] font-semibold text-blue-600 hover:underline inline-flex items-center gap-0.5"
                            >
                              <span>View /post/</span>
                              <ExternalLink className="w-2.5 h-2.5" />
                            </Link>
                            <span className="text-slate-300">•</span>
                            <Link
                              href={`/blog/${post.slug}`}
                              target="_blank"
                              className="text-[10px] font-semibold text-purple-600 hover:underline inline-flex items-center gap-0.5"
                            >
                              <span>View /blog/</span>
                              <ExternalLink className="w-2.5 h-2.5" />
                            </Link>
                          </div>
                        </div>
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="space-y-1">
                          <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                            {post.category}
                          </span>
                          {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 max-w-[200px]">
                              {post.tags.slice(0, 2).map((t, idx) => (
                                <span
                                  key={idx}
                                  className="text-[9px] px-1.5 py-0.2 rounded bg-purple-50 text-purple-700 border border-purple-100"
                                >
                                  {t}
                                </span>
                              ))}
                              {post.tags.length > 2 && (
                                <span className="text-[9px] text-slate-400">
                                  +{post.tags.length - 2}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </td>

                      <td className="py-3.5 px-4 text-center font-semibold text-slate-800">
                        {post.views || 0}
                      </td>

                      <td className="py-3.5 px-4 text-[11px] text-slate-500 whitespace-nowrap">
                        {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : "Just now"}
                      </td>

                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => handleDelete(post.slug, post.title)}
                            className="p-1.5 text-slate-400 hover:text-red-600 rounded-md hover:bg-red-50 transition-colors"
                            title="Delete post"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
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
      ) : (
        /* Create New Post Form */
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          {error && (
            <div className="p-4 mb-6 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 font-medium">
              {error}
            </div>
          )}

          {successMsg && (
            <div className="p-4 mb-6 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-medium space-y-2">
              <div>{successMsg}</div>
              {lastCreatedSlug && (
                <div className="flex items-center gap-3 pt-1">
                  <Link
                    href={`/post/${lastCreatedSlug}`}
                    target="_blank"
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-600 text-white rounded-md font-bold text-xs hover:bg-emerald-700 transition-colors"
                  >
                    <span>Open /post/{lastCreatedSlug}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href={`/blog/${lastCreatedSlug}`}
                    target="_blank"
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-purple-600 text-white rounded-md font-bold text-xs hover:bg-purple-700 transition-colors"
                  >
                    <span>Open /blog/{lastCreatedSlug}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title & Custom Slug Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center justify-between">
                  <span>Article Title *</span>
                  <span className="text-[10px] text-slate-400 font-normal">H1 on page</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={handleTitleChange}
                  placeholder="e.g. Top-Rated & Most Trusted SEO Company in India: 2026 Strategy"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center justify-between">
                  <span>Custom URL Slug (/post/[slug]) *</span>
                  <span className="text-[10px] text-slate-400 font-normal">URL identifier</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-mono">
                    /post/
                  </span>
                  <input
                    type="text"
                    required
                    value={formData.slug}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, slug: slugify(e.target.value) }))
                    }
                    placeholder="top-rated-seo-company-india"
                    className="w-full pl-14 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>
              </div>
            </div>

            {/* SEO Meta Title & Meta Description */}
            <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>Search Engine Optimization (SEO) Meta Suite</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-medium text-slate-700">
                    <span>Meta Title (Google SERP Title)</span>
                    <span
                      className={`text-[10px] font-mono ${
                        formData.metaTitle.length > 65 ? "text-amber-600 font-bold" : "text-slate-400"
                      }`}
                    >
                      {formData.metaTitle.length}/60 chars
                    </span>
                  </div>
                  <input
                    type="text"
                    value={formData.metaTitle}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, metaTitle: e.target.value }))
                    }
                    placeholder="Top-Rated SEO Company in India | Kalki Web"
                    className="w-full px-3.5 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-medium text-slate-700">
                    <span>Meta Description (Google Snippet)</span>
                    <span
                      className={`text-[10px] font-mono ${
                        formData.metaDescription.length > 165 ? "text-amber-600 font-bold" : "text-slate-400"
                      }`}
                    >
                      {formData.metaDescription.length}/160 chars
                    </span>
                  </div>
                  <input
                    type="text"
                    value={formData.metaDescription}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, metaDescription: e.target.value }))
                    }
                    placeholder="Discover why Kalki Web is India's most trusted SEO and digital marketing agency..."
                    className="w-full px-3.5 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
              </div>

              {/* Keyword Cloud Helper */}
              <div className="space-y-2 pt-2 border-t border-slate-200/60">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-slate-500" />
                    <span>Target Keywords & Tags (Click to inject into tags)</span>
                  </label>
                  <span className="text-[10px] text-slate-400">Comma-separated</span>
                </div>

                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData((prev) => ({ ...prev, tags: e.target.value }))}
                  placeholder="Digital Marketing Agency India, Best SEO Company, Website Development Company"
                  className="w-full px-3.5 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
                />

                {/* Pre-curated Target Keyword Badges */}
                <div className="space-y-2.5 pt-2">
                  {targetKeywordGroups.map((grp, gIdx) => (
                    <div key={gIdx} className="space-y-1">
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        {grp.group}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {grp.keywords.map((kw, kIdx) => {
                          const isSelected = formData.tags
                            .split(",")
                            .map((t) => t.trim().toLowerCase())
                            .includes(kw.toLowerCase());
                          return (
                            <button
                              key={kIdx}
                              type="button"
                              onClick={() => addKeywordToTags(kw)}
                              className={`px-2 py-1 rounded text-[10px] font-medium transition-all ${
                                isSelected
                                  ? "bg-purple-600 text-white shadow-xs"
                                  : "bg-white text-slate-700 border border-slate-200 hover:border-purple-300 hover:text-purple-700"
                              }`}
                            >
                              + {kw}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Category & Excerpt */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value }))}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Card Snippet / Excerpt *
                </label>
                <input
                  type="text"
                  required
                  value={formData.snippet}
                  onChange={(e) => setFormData((prev) => ({ ...prev, snippet: e.target.value }))}
                  placeholder="Short 1-2 sentence overview for cards and search feeds"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>
            </div>

            {/* Cover Image */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Cover Image URL
              </label>
              <input
                type="text"
                value={formData.coverImage}
                onChange={(e) => setFormData((prev) => ({ ...prev, coverImage: e.target.value }))}
                placeholder="/illustrations/seo_search_results.jpg"
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
              <div className="flex flex-wrap gap-2 pt-1">
                {presetImages.map((preset) => (
                  <button
                    key={preset.url}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, coverImage: preset.url }))}
                    className={`text-[11px] px-2.5 py-1 rounded border transition-colors ${
                      formData.coverImage === preset.url
                        ? "bg-slate-900 text-white border-slate-900"
                        : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Author Information */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-700 uppercase">Author Name</label>
                <input
                  type="text"
                  value={formData.authorName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, authorName: e.target.value }))}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-700 uppercase">Author Role</label>
                <input
                  type="text"
                  value={formData.authorRole}
                  onChange={(e) => setFormData((prev) => ({ ...prev, authorRole: e.target.value }))}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-700 uppercase">Featured</label>
                <div className="pt-2">
                  <label className="inline-flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.featured}
                      onChange={(e) => setFormData((prev) => ({ ...prev, featured: e.target.checked }))}
                      className="w-4 h-4 rounded text-slate-900"
                    />
                    <span className="text-xs text-slate-700 font-medium">Pin to Featured</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Content (Markdown) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Article Body (Markdown Supported) *
                </label>
                <button
                  type="button"
                  onClick={() => setPreviewMode(!previewMode)}
                  className="text-xs font-semibold text-[#814df5] hover:underline"
                >
                  {previewMode ? "Edit Raw Markdown" : "Preview Formatting"}
                </button>
              </div>

              {previewMode ? (
                <div className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg min-h-[300px] prose prose-slate max-w-none text-xs">
                  <div className="font-bold text-base mb-2">{formData.title}</div>
                  <div className="whitespace-pre-wrap">{formData.content}</div>
                </div>
              ) : (
                <textarea
                  required
                  rows={14}
                  value={formData.content}
                  onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
                  placeholder="Write your in-depth article here. Use ## Subheadings, **bold keywords**, bullet points, and quotes..."
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              )}
            </div>

            {/* Submit Action */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setActiveTab("list")}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 disabled:opacity-50 transition-all shadow-sm"
              >
                {submitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Publishing to MongoDB...</span>
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Publish Article Live</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
