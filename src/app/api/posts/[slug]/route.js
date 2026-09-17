import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Post from "@/models/Post";

export const dynamic = "force-dynamic";

// GET /api/posts/[slug] - Fetch single post by slug and increment views
export async function GET(request, { params }) {
  try {
    await dbConnect();
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    // Find and increment views counter
    const post = await Post.findOneAndUpdate(
      { slug, published: true },
      { $inc: { views: 1 } },
      { new: true }
    ).lean();

    if (!post) {
      return NextResponse.json(
        { success: false, error: "Post not found" },
        { status: 404 }
      );
    }

    // Fetch related articles (same category, excluding current post)
    const relatedPosts = await Post.find({
      category: post.category,
      slug: { $ne: slug },
      published: true,
    })
      .limit(3)
      .select("title slug snippet coverImage category readTime createdAt")
      .lean();

    return NextResponse.json({
      success: true,
      data: post,
      related: relatedPosts,
    });
  } catch (error) {
    console.error("GET /api/posts/[slug] error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to fetch post" },
      { status: 500 }
    );
  }
}

// PUT /api/posts/[slug] - Update post
export async function PUT(request, { params }) {
  try {
    await dbConnect();
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    const body = await request.json();

    if (body.tags && typeof body.tags === "string") {
      body.tags = body.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
    }

    let post = null;
    if (body._id || body.id) {
      post = await Post.findByIdAndUpdate(body._id || body.id, body, {
        new: true,
        runValidators: true,
      });
    }

    if (!post) {
      post = await Post.findOneAndUpdate({ slug }, body, {
        new: true,
        runValidators: true,
      });
    }

    if (!post) {
      return NextResponse.json(
        { success: false, error: "Post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Post updated successfully",
      data: post,
    });
  } catch (error) {
    console.error("PUT /api/posts/[slug] error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to update post" },
      { status: 500 }
    );
  }
}

// DELETE /api/posts/[slug] - Delete post
export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    const post = await Post.findOneAndDelete({ slug });

    if (!post) {
      return NextResponse.json(
        { success: false, error: "Post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Post deleted successfully",
    });
  } catch (error) {
    console.error("DELETE /api/posts/[slug] error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to delete post" },
      { status: 500 }
    );
  }
}
