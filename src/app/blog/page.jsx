"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  PenSquare,
  LogOut,
  Shield,
  Layers,
  X,
  ArrowRight,
  ArrowDown,
  Sparkles,
  LayoutDashboard,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// 16 Categories precisely matching Reference Screenshot 1
const referenceCategories = [
  "All",
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

export default function BlogPage() {
  const router = useRouter();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(4);
  const [loadingMore, setLoadingMore] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch articles from MongoDB Atlas
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/posts", { cache: "no-store" });
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setPosts(data.data);
      }
    } catch (err) {
      console.error("Failed to load blog posts:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Reset visible count whenever category filter or search query changes
  useEffect(() => {
    setVisibleCount(4);
  }, [selectedCategory, searchQuery]);

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 4);
      setLoadingMore(false);
    }, 250);
  };

  // Filtered posts based on category and search query
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" ||
        post.category?.toLowerCase() === selectedCategory.toLowerCase() ||
        post.tags?.some((t) => t.toLowerCase() === selectedCategory.toLowerCase());

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title?.toLowerCase().includes(q) ||
        post.snippet?.toLowerCase().includes(q) ||
        post.category?.toLowerCase().includes(q) ||
        post.tags?.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white text-[#101828] pt-28 pb-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title Section - Matching Screenshot 1 */}
        <div className="text-left pt-6 sm:pt-10 mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#0f172a]">
              Digital Marketing <span className="text-[#1e1b4b]">Blog</span>
            </h1>
          </div>
        </div>

        {/* Category Tag Cloud - Clean Light Multi-line Pills Matching Screenshot 1 */}
        <div className="mb-10 text-left">
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {referenceCategories.map((cat) => {
              const active = selectedCategory.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-[13px] font-medium transition-all duration-200 cursor-pointer border ${
                    active
                      ? "bg-[#0f172a] text-white border-[#0f172a] font-bold shadow-sm"
                      : "bg-white text-[#334155] border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 hover:text-black shadow-xs"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Subheading: Showing 1-X of Y Articles & Search Bar - Matching Screenshot 1 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-neutral-200">
          <p className="text-xs sm:text-sm font-semibold text-[#475467] text-left">
            Showing 1-{Math.min(visibleCount, filteredPosts.length)} of {filteredPosts.length} Articles
            {selectedCategory !== "All" && (
              <span className="text-indigo-600 ml-1">in {selectedCategory}</span>
            )}
          </p>

          {/* Quick Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-10 pr-9 py-2 rounded-xl bg-neutral-50 border border-neutral-200 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-indigo-600 focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Loading Skeleton */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-pulse">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div
                key={n}
                className="aspect-[4/5] rounded-2xl bg-neutral-100 border border-neutral-200"
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredPosts.length === 0 && (
          <div className="text-center py-20 bg-neutral-50 rounded-3xl border border-neutral-200 p-8 max-w-lg mx-auto space-y-4">
            <div className="w-14 h-14 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center mx-auto text-indigo-600">
              <Layers className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900">No Articles Found</h3>
            <p className="text-xs sm:text-sm text-neutral-500">
              No articles match the filter "{selectedCategory}".
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="rounded-full text-xs text-neutral-700 border-neutral-300 cursor-pointer"
            >
              Reset Filters
            </Button>
          </div>
        )}

        {/* 4-Column Poster-Style Card Grid - Matching Screenshot 1 */}
        {!loading && filteredPosts.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredPosts.slice(0, visibleCount).map((article) => (
                <Link
                  key={article._id || article.slug}
                  href={`/blog/${article.slug}`}
                  className="group relative block aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200/80 hover:border-neutral-400 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* Full-bleed Cover Image */}
                  <Image
                    src={article.coverImage || "/illustrations/team_collaboration.jpg"}
                    alt={article.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Dark Gradient Overlay for Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-wider text-white">
                      {article.category}
                    </span>
                  </div>

                  {/* Bottom Overlaid Title - Matching Screenshot 1 */}
                  <div className="absolute inset-x-0 bottom-0 p-5 z-10 text-left">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-primary transition-colors tracking-tight leading-snug line-clamp-3">
                      {article.title}
                    </h3>

                    <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-300 font-medium pt-2 border-t border-white/15">
                      <span>{article.readTime || "5 min read"}</span>
                      <span className="text-white font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Read <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredPosts.length && (
              <div className="pt-12 text-center">
                <button
                  onClick={handleLoadMore}
                  disabled={loadingMore}
                  className="px-8 py-3.5 rounded-full bg-slate-900 hover:bg-black text-white font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-xl transition-all active:scale-95 flex items-center gap-2.5 mx-auto disabled:opacity-75 cursor-pointer"
                >
                  {loadingMore ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Loading more articles...</span>
                    </>
                  ) : (
                    <>
                      <span>Load More Articles</span>
                      <ArrowDown className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-xs text-neutral-400 font-medium mt-3">
                  Showing {Math.min(visibleCount, filteredPosts.length)} of {filteredPosts.length} published articles
                </p>
              </div>
            )}

            {/* Reached End Indicator */}
            {visibleCount >= filteredPosts.length && filteredPosts.length > 4 && (
              <div className="pt-12 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 text-neutral-600 text-xs font-semibold border border-neutral-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                  <span>Showing all {filteredPosts.length} articles</span>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
