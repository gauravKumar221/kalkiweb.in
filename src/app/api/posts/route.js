import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Post from "@/models/Post";

export const dynamic = "force-dynamic";

// Helper function to create URL-friendly slug
function generateSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// GET /api/posts - Fetch posts with optional search and category filters
export async function GET(request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search");
    const category = searchParams.get("category");
    const featured = searchParams.get("featured");

    const query = { published: true };

    if (category && category !== "All") {
      query.category = { $regex: new RegExp(`^${category}$`, "i") };
    }

    if (featured === "true") {
      query.featured = true;
    }

    if (search) {
      const searchRegex = new RegExp(search, "i");
      query.$or = [
        { title: searchRegex },
        { snippet: searchRegex },
        { content: searchRegex },
        { tags: searchRegex },
      ];
    }

    const posts = await Post.find(query)
      .sort({ featured: -1, createdAt: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      count: posts.length,
      data: posts,
    });
  } catch (error) {
    console.error("GET /api/posts error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

// POST /api/posts - Create a new blog post
export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();
    const {
      title,
      slug: customSlug,
      snippet,
      content,
      category,
      coverImage,
      author,
      tags,
      readTime,
      featured,
      metaTitle,
      metaDescription,
    } = body;

    if (!title || !snippet || !content) {
      return NextResponse.json(
        {
          success: false,
          error: "Title, snippet, and content are required fields",
        },
        { status: 400 }
      );
    }

    // Generate base slug or use custom
    let slug = customSlug ? generateSlug(customSlug) : generateSlug(title);
    if (!slug) {
      slug = `post-${Date.now()}`;
    }

    // Check slug collision
    const existingPost = await Post.findOne({ slug });
    if (existingPost) {
      slug = `${slug}-${Date.now().toString().slice(-4)}`;
    }

    // Auto-calculate read time if missing
    let calculatedReadTime = readTime;
    if (!calculatedReadTime) {
      const wordCount = content.trim().split(/\s+/).length;
      calculatedReadTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;
    }

    // Process tags
    let processedTags = tags;
    if (typeof tags === "string") {
      processedTags = tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
    }

    const post = await Post.create({
      title,
      slug,
      snippet,
      metaTitle: metaTitle || title,
      metaDescription: metaDescription || snippet,
      content,
      category: category || "Web Development",
      coverImage: coverImage || "/illustrations/team_collaboration.jpg",
      author: {
        name: author?.name || "Kalki Team",
        role: author?.role || "Engineering & Growth Lead",
        avatar: author?.avatar || "/images videos/gaurav.png",
      },
      tags: processedTags && processedTags.length > 0 ? processedTags : ["Kalki", "Tech"],
      readTime: calculatedReadTime,
      featured: Boolean(featured),
      published: true,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Blog post published successfully",
        data: post,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/posts error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to create post" },
      { status: 500 }
    );
  }
}
