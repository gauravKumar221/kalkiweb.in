import dbConnect from "@/lib/mongodb";
import Post from "@/models/Post";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  try {
    await dbConnect();
    const post = await Post.findOne({ slug }).lean();

    if (!post) {
      return {
        title: "Article | Kalki Web",
        description: "Read the latest insights from Kalki Web.",
      };
    }

    const resolvedTitle = post.metaTitle || `${post.title} | Kalki Web`;
    const resolvedDesc = post.metaDescription || post.snippet;

    return {
      title: resolvedTitle,
      description: resolvedDesc,
      keywords: post.tags || [],
      alternates: {
        canonical: `https://www.kalkiweb.in/post/${post.slug}`,
      },
      openGraph: {
        title: resolvedTitle,
        description: resolvedDesc,
        url: `https://www.kalkiweb.in/post/${post.slug}`,
        siteName: "Kalki Web",
        locale: "en_IN",
        type: "article",
        images: post.coverImage ? [{ url: post.coverImage }] : [],
      },
      twitter: {
        card: "summary_large_image",
        title: resolvedTitle,
        description: resolvedDesc,
        images: post.coverImage ? [post.coverImage] : [],
      },
    };
  } catch (err) {
    return {
      title: "Article | Kalki Web",
      description: "Read the latest insights from Kalki Web.",
    };
  }
}

export default async function PostSingleLayout({ children, params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  let post = null;

  try {
    await dbConnect();
    post = await Post.findOne({ slug }).lean();
  } catch (err) {
    console.error("Failed to load post for schema:", err);
  }

  const jsonLd = post
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.snippet,
        image: post.coverImage
          ? [
              post.coverImage.startsWith("http")
                ? post.coverImage
                : `https://www.kalkiweb.in${post.coverImage.startsWith("/") ? post.coverImage : `/${post.coverImage}`}`,
            ]
          : undefined,
        datePublished: post.createdAt,
        dateModified: post.updatedAt,
        author: {
          "@type": "Person",
          name: post.author?.name || "Kalki Editorial Team",
          jobTitle: post.author?.role || "Senior Strategist",
        },
        publisher: {
          "@type": "Organization",
          name: "Kalki Web",
          logo: {
            "@type": "ImageObject",
            url: "https://www.kalkiweb.in/images%20videos/logo-color-dark-bg.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://www.kalkiweb.in/post/${post.slug}`,
        },
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {children}
    </>
  );
}
