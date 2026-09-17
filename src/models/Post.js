import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [200, "Title cannot exceed 200 characters"],
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    snippet: {
      type: String,
      required: [true, "Snippet/Excerpt is required"],
      trim: true,
      maxlength: [500, "Snippet cannot exceed 500 characters"],
    },
    metaTitle: {
      type: String,
      trim: true,
      maxlength: [160, "Meta title cannot exceed 160 characters"],
    },
    metaDescription: {
      type: String,
      trim: true,
      maxlength: [300, "Meta description cannot exceed 300 characters"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      default: "Web Development",
      trim: true,
    },
    coverImage: {
      type: String,
      default: "/illustrations/team_collaboration.jpg",
    },
    author: {
      name: {
        type: String,
        default: "Kalki Team",
      },
      role: {
        type: String,
        default: "Creative & Engineering Lead",
      },
      avatar: {
        type: String,
        default: "/images videos/gaurav.png",
      },
    },
    tags: {
      type: [String],
      default: ["Next.js", "Design", "Growth"],
    },
    readTime: {
      type: String,
      default: "5 min read",
    },
    published: {
      type: Boolean,
      default: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent mongoose model overwrite error during Next.js hot reload
export default mongoose.models.Post || mongoose.model("Post", PostSchema);
