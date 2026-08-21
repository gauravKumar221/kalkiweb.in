
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Heart, MessageCircle } from "lucide-react";

const feedData = {
  username: "kalki_web",
  avatarUrl: "https://picsum.photos/150/150",
  posts: 119,
  followers: "1,234",
  following: 567,
  images: [
    { src: "https://picsum.photos/300/300?random=1", hint:"tech office", likes: 123, comments: 8 },
    { src: "https://picsum.photos/300/300?random=2", hint:"design process", likes: 234, comments: 12 },
    { src: "https://picsum.photos/300/300?random=3", hint:"team meeting", likes: 345, comments: 25 },
    { src: "https://picsum.photos/300/300?random=4", hint:"marketing results", likes: 456, comments: 33 },
    { src: "https://picsum.photos/300/300?random=5", hint:"website mockup", likes: 567, comments: 41 },
    { src: "https://picsum.photos/300/300?random=6", hint:"brand logo", likes: 678, comments: 50 },
  ],
};

const InstagramPost = ({ post }: { post: (typeof feedData.images)[0] }) => (
    <div className="group relative aspect-square overflow-hidden">
        <Image
            src={post.src}
            data-ai-hint={post.hint}
            alt="Instagram Post"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white">
            <div className="flex items-center gap-2">
                <Heart className="w-6 h-6" />
                <span className="font-bold">{post.likes}</span>
            </div>
            <div className="flex items-center gap-2">
                <MessageCircle className="w-6 h-6" />
                 <span className="font-bold">{post.comments}</span>
            </div>
        </div>
    </div>
);


export default function InstagramFeed() {
  return (
    <section className="py-12 border-y border-border/20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-4">
                 <Avatar className="w-16 h-16 md:w-24 md:h-24 border-4 border-primary">
                    <AvatarImage src={feedData.avatarUrl} data-ai-hint="company logo" />
                    <AvatarFallback>{feedData.username.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold">{feedData.username}</h2>
                    <div className="flex gap-4 text-muted-foreground mt-2">
                        <span><span className="font-bold text-foreground">{feedData.posts}</span> posts</span>
                        <span><span className="font-bold text-foreground">{feedData.followers}</span> followers</span>
                        <span><span className="font-bold text-foreground">{feedData.following}</span> following</span>
                    </div>
                </div>
            </div>
             <Button asChild variant="glitch">
                <Link href={`https://www.instagram.com/${feedData.username}/`} target="_blank" rel="noopener noreferrer">
                    Follow on Instagram
                </Link>
            </Button>
        </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {feedData.images.map((post) => (
          <InstagramPost key={post.src} post={post} />
        ))}
      </div>
    </section>
  );
}
