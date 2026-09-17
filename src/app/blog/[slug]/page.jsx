"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Eye,
  Share2,
  Check,
  Play,
  Trash2,
  Shield,
  MessageCircle,
  Linkedin,
  Twitter,
  Facebook,
  Link as LinkIcon,
  LayoutDashboard,
  Pencil,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Related Free Video Lessons matching Reference Screenshot 2
const relatedVideoLessons = [
  {
    category: "Ethics and Practical AI Skills for Digital Professionals",
    title: "Accountability and Risk Management in an AI World",
    duration: "14 min video",
  },
  {
    category: "Analytics, Data, and Ethics",
    title: "Avoiding the Average Trap in Generative Search Models",
    duration: "18 min video",
  },
  {
    category: "Social Apps and Other Platforms",
    title: "Omnichannel Distribution & Algorithmic Hook Architecture",
    duration: "22 min video",
  },
  {
    category: "High-Velocity CRO",
    title: "Frictionless Funnels and Micro-Conversions",
    duration: "12 min video",
  },
];

export default function SingleArticlePage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug;

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [adminUser, setAdminUser] = useState(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/posts/${slug}`, { cache: "no-store" });
        const data = await res.json();
        if (data.success && data.data) {
          setPost(data.data);
        } else {
          setPost(null);
        }
      } catch (err) {
        console.error("Error fetching single article:", err);
      } finally {
        setLoading(false);
      }
    };

    const checkAdmin = async () => {
      try {
        const res = await fetch("/api/admin/status");
        const data = await res.json();
        if (data.authenticated) {
          setAdminUser(data.user);
        }
      } catch (e) {}
    };

    fetchPost();
    checkAdmin();
  }, [slug]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDelete = async () => {
    if (
      !confirm(
        "Are you sure you want to delete this article? This action cannot be undone.",
      )
    ) {
      return;
    }
    try {
      setDeleting(true);
      const res = await fetch(`/api/posts/${slug}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        router.push("/blog");
      } else {
        alert(data.error || "Failed to delete post");
      }
    } catch (err) {
      alert("Error deleting article");
    } finally {
      setDeleting(false);
    }
  };

  // Content renderer for Markdown-like blocks with clean editorial typography
  const renderContent = (content) => {
    if (!content) return null;

    const sections = content.split("\n\n");

    return sections.map((block, idx) => {
      const trimmed = block.trim();

      if (trimmed.startsWith("### ")) {
        return (
          <h3
            key={idx}
            className="text-xl sm:text-2xl font-bold text-[#0f172a] mt-8 mb-3 tracking-tight"
          >
            {trimmed.replace("### ", "")}
          </h3>
        );
      }

      if (trimmed.startsWith("## ")) {
        return (
          <h2
            key={idx}
            className="text-2xl sm:text-3xl font-black text-[#0f172a] mt-10 mb-4 tracking-tight border-b border-neutral-200 pb-3"
          >
            {trimmed.replace("## ", "")}
          </h2>
        );
      }

      if (trimmed.startsWith("> ")) {
        return (
          <blockquote
            key={idx}
            className="my-6 p-5 border-l-4 border-[#814df5] bg-[#faf8ff] rounded-r-2xl text-base sm:text-lg italic text-[#334155]"
          >
            {trimmed.replace(/^>\s*/, "").replace(/^"/, "").replace(/"$/, "")}
          </blockquote>
        );
      }

      if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        const items = trimmed
          .split("\n")
          .map((line) => line.replace(/^[-*]\s*/, ""));
        return (
          <ul
            key={idx}
            className="my-4 space-y-2 pl-4 list-disc marker:text-[#814df5] text-[#334155]"
          >
            {items.map((item, i) => (
              <li key={i} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        );
      }

      if (trimmed.startsWith("```")) {
        const codeLines = trimmed.split("\n");
        const lang = codeLines[0].replace("```", "") || "code";
        const codeBody = codeLines.slice(1, -1).join("\n");

        return (
          <div
            key={idx}
            className="my-6 rounded-2xl overflow-hidden border border-neutral-200 bg-[#0f172a] font-mono text-xs sm:text-sm shadow-md"
          >
            <div className="bg-[#1e293b] px-4 py-2 text-[11px] text-neutral-400 font-semibold border-b border-neutral-700 uppercase tracking-wider">
              {lang}
            </div>
            <pre className="p-4 overflow-x-auto text-emerald-400 leading-relaxed">
              <code>{codeBody}</code>
            </pre>
          </div>
        );
      }

      return (
        <p
          key={idx}
          className="text-base sm:text-[17px] text-[#334155] leading-[1.8] font-normal mb-5"
        >
          {trimmed}
        </p>
      );
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-neutral-900 pt-40 pb-24 flex items-center justify-center">
        <div className="text-center space-y-3 animate-pulse">
          <div className="w-10 h-10 rounded-full border-2 border-indigo-600 border-t-transparent animate-spin mx-auto" />
          <p className="text-xs text-neutral-500 font-medium">
            Loading article details...
          </p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white text-neutral-900 pt-40 pb-24 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4 space-y-4">
          <h2 className="text-2xl font-bold text-neutral-900">
            Article Not Found
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm">
            This article may have been unpublished or removed.
          </p>
          <Button
            asChild
            className="rounded-full bg-[#0f172a] text-white font-bold text-xs"
          >
            <Link href="/blog">← Back to Articles</Link>
          </Button>
        </div>
      </div>
    );
  }

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = encodeURIComponent(`Read "${post.title}" on Kalki Web:`);
  const formattedDate = new Date(post.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-white text-[#101828] pt-24 md:pt-28 pb-32">
      {/* Top Bar with "← Back to Articles" on Right - Matching Screenshot 2 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between border-b border-neutral-200">
        <div className="text-xs text-neutral-500 font-medium">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/blog" className="hover:text-black transition-colors">
            Blog
          </Link>{" "}
          /{" "}
          <span className="text-neutral-800 font-semibold">
            {post.category}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {adminUser && (
            <div className="flex items-center gap-2">
              <Link
                href={`/dashboard/posts?edit=${post.slug}`}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200 transition-colors flex items-center gap-1.5"
                title="Edit this post in Posts Manager"
              >
                <Pencil className="w-3.5 h-3.5" />
                <span>Edit Post</span>
              </Link>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 transition-colors flex items-center gap-1.5 disabled:opacity-50"
                title="Delete this post"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>{deleting ? "Deleting..." : "Delete"}</span>
              </button>
            </div>
          )}

          <Link
            href="/blog"
            className="text-xs sm:text-sm font-bold text-[#155dfc] hover:text-black transition-colors flex items-center gap-1.5"
          >
            <span>← Back to Articles</span>
          </Link>
        </div>
      </div>

      {/* Split Hero Section - Matching Screenshot 2 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Date, Big Title, Breadcrumb Tags, Author Chip */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="text-xs sm:text-sm font-semibold text-[#475467]">
              {formattedDate}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] tracking-tight leading-tight">
              {post.title}
            </h1>

            {/* Breadcrumb Tags Line - Matching Screenshot 2: Articles • Content Marketing • Search Engine Optimization */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#475467] font-medium">
              <span className="text-neutral-900 font-semibold">Articles</span>
              <span>•</span>
              <span className="text-[#155dfc] font-bold">{post.category}</span>
              {post.tags?.slice(0, 3).map((t, idx) => (
                <React.Fragment key={idx}>
                  <span>•</span>
                  <span className="text-[#475467]">{t}</span>
                </React.Fragment>
              ))}
            </div>

            {/* Author Chip - Matching Screenshot 2: Circular Avatar + "by Name / Posted on Date" */}
            <div className="pt-2 flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-neutral-200 bg-neutral-100 shadow-xs">
                <Image
                  src={post.author?.avatar || "/images videos/gaurav.png"}
                  alt={post.author?.name || "Author"}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-[#101828] leading-tight">
                  by{" "}
                  <span className="text-[#155dfc]">
                    {post.author?.name || "Tasmin Lofthouse"}
                  </span>
                </div>
                <div className="text-xs text-[#475467] leading-tight mt-1">
                  Posted on {formattedDate} • {post.readTime || "5 min read"}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Framed Graphic with Warm Tinted Container - Matching Screenshot 2 */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-[#fedac6] via-[#fcd2bc] to-[#f9be9f] p-4 sm:p-6 shadow-md border border-[#fedac6] flex items-center justify-center">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={
                    post.coverImage || "/illustrations/seo_search_results.jpg"
                  }
                  alt={post.title}
                  fill
                  unoptimized
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout with Floating Left Rail & Right Video Sidebar - Matching Screenshot 2 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Floating Social Share Rail - Matching Screenshot 2 */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-32 flex flex-col items-center gap-3">
              {/* Facebook */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white hover:bg-[#1877F2] border border-neutral-200 hover:border-[#1877F2] flex items-center justify-center text-neutral-600 hover:text-white transition-all shadow-xs"
                title="Share on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              {/* LinkedIn */}
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white hover:bg-[#0A66C2] border border-neutral-200 hover:border-[#0A66C2] flex items-center justify-center text-neutral-600 hover:text-white transition-all shadow-xs"
                title="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* Twitter / X */}
              <a
                href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white hover:bg-black border border-neutral-200 hover:border-black flex items-center justify-center text-neutral-600 hover:text-white transition-all shadow-xs"
                title="Share on X"
              >
                <Twitter className="w-4 h-4" />
              </a>

              {/* WhatsApp */}
              <a
                href={`https://api.whatsapp.com/send?text=${shareText}%20${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white hover:bg-[#25D366] border border-neutral-200 hover:border-[#25D366] flex items-center justify-center text-neutral-600 hover:text-white transition-all shadow-xs"
                title="Share on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              {/* Copy Link */}
              <button
                onClick={handleCopyLink}
                className="w-10 h-10 rounded-full bg-white hover:bg-neutral-900 border border-neutral-200 hover:border-neutral-900 flex items-center justify-center text-neutral-600 hover:text-white transition-all shadow-xs"
                title="Copy Link"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-600" />
                ) : (
                  <LinkIcon className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Center Column: Editorial Content Body */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="prose max-w-none">
              {renderContent(post.content)}
            </div>

            {/* Mobile Share Row */}
            <div className="lg:hidden pt-8 border-t border-neutral-200 flex items-center gap-3">
              <span className="text-xs font-bold text-neutral-500 uppercase">
                Share:
              </span>
              <button
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded-full bg-white border border-neutral-200 text-xs text-neutral-800 flex items-center gap-1.5 shadow-xs"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-green-600" />
                ) : (
                  <Share2 className="w-3.5 h-3.5" />
                )}
                <span>{copied ? "Link Copied!" : "Share Link"}</span>
              </button>
            </div>
          </div>

          {/* Right Sidebar: "RELATED FREE VIDEO LESSONS" - Matching Screenshot 2 */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-32 rounded-2xl border-2 border-[#814df5] bg-[#faf8ff] p-5 sm:p-6 shadow-xs text-left space-y-5">
              {/* Header Box */}
              <div className="border-b border-purple-200 pb-3">
                <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#814df5]">
                  Related Free Video Lessons
                </h4>
              </div>

              {/* Video Lessons List */}
              <div className="space-y-4">
                {relatedVideoLessons.map((lesson, idx) => (
                  <div
                    key={idx}
                    className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-white transition-colors cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#814df5] group-hover:bg-[#6d28d9] text-white flex items-center justify-center shrink-0 mt-0.5 transition-colors shadow-xs">
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </div>

                    <div className="space-y-1">
                      <div className="text-[11px] text-[#475467] font-medium leading-snug">
                        {lesson.category}
                      </div>
                      <h5 className="text-xs sm:text-sm font-bold text-[#101828] group-hover:text-[#814df5] transition-colors leading-snug">
                        {lesson.title}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Link */}
              <div className="pt-2 border-t border-purple-200">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#814df5] hover:text-[#6d28d9] transition-colors"
                >
                  <span>Request Custom Strategy Session</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
