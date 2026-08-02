"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight, MessageSquare, Calendar, User, Loader2 } from "lucide-react";

const API_URL = "http://localhost:8000";

export default function EcommerceLatestPostsSection() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [noOfPage, setNoOfPage] = useState(1);

  // API Call Effect
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`${API_URL}/api/v1/blog/getallblogs/${page}`, {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();

        if (data.success) {
          const mapped = data.blogs.map((blog) => ({
            id: blog._id,
            category: blog.createdBy ? String(blog.createdBy).toUpperCase() : "BLOG",
            author: blog.createdBy || "Admin",
            title: blog.h1 || blog.title,
            date: new Date(blog.createdAt).toLocaleDateString("en-US", {
              month: "long",
              day: "2-digit",
              year: "numeric",
            }),
            comments: 0,
            thumbnail: blog.thumbnail || "/images/b2s/Transparency-and-integrity.png",
          }));
          
          setPosts(mapped);
          setNoOfPage(data.noOfPage || 1);
        } else {
          setError(data.message || "Failed to load blogs");
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [page]);

  // Scroll logic with state safety
  const updateScrollButtons = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const newCanScrollLeft = scrollLeft > 5;
      const newCanScrollRight = scrollLeft + clientWidth < scrollWidth - 5;

      setCanScrollLeft((prev) => (prev !== newCanScrollLeft ? newCanScrollLeft : prev));
      setCanScrollRight((prev) => (prev !== newCanScrollRight ? newCanScrollRight : prev));
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || posts.length === 0) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollButtons();
          ticking = false;
        });
        ticking = true;
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateScrollButtons, { passive: true });
    updateScrollButtons();

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [posts, updateScrollButtons]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollStep = direction === "left" ? -(clientWidth / 3) : (clientWidth / 3);

      scrollContainerRef.current.scrollBy({
        left: scrollStep,
        behavior: "smooth",
      });
    }
  };

  // 1. FULL COMPONENT LOADING STATE
  if (loading) {
    return (
      <section
        style={{ backgroundColor: "#101010" }}
        className="w-full min-h-[600px] flex flex-col items-center justify-center py-24 px-6 md:px-12 lg:px-24 text-white border-t border-zinc-900"
      >
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
          <p className="text-zinc-500 text-xs font-mono tracking-widest uppercase">
            Loading latest insights...
          </p>
        </div>
      </section>
    );
  }

  // 2. FULL COMPONENT ERROR STATE
  if (error) {
    return (
      <section
        style={{ backgroundColor: "#101010" }}
        className="w-full min-h-[400px] flex flex-col items-center justify-center py-24 px-6 md:px-12 lg:px-24 text-white border-t border-zinc-900"
      >
        <div className="text-center space-y-4 max-w-md">
          <p className="text-red-400 text-sm font-mono uppercase tracking-wider">Error Occurred</p>
          <p className="text-zinc-400 text-sm">{error}</p>
          <button 
            onClick={() => setPage(page)} // Retries by changing/triggering effect
            className="px-5 py-2 rounded-full border border-white/10 text-xs text-zinc-300 hover:text-white hover:bg-white/5 transition-all"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  // 3. FULL COMPONENT EMPTY STATE
  if (posts.length === 0) {
    return (
      <section
        style={{ backgroundColor: "#101010" }}
        className="w-full min-h-[400px] flex flex-col items-center justify-center py-24 px-6 md:px-12 lg:px-24 text-white border-t border-zinc-900"
      >
        <p className="text-zinc-500 text-sm">No blog posts published yet.</p>
      </section>
    );
  }

  // 4. ACTUAL RENDER STATE (When data is ready)
  return (
    <section
      style={{ backgroundColor: "#101010" }}
      className="w-full py-24 px-6 md:px-12 lg:px-24 antialiased text-white border-t border-zinc-900 relative overflow-hidden"
    >
      {/* SECTION 1: LATEST INSIGHTS */}
      <div className="w-full max-w-7xl mx-auto flex flex-col space-y-12 mb-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <div className="flex flex-col items-start space-y-4">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="text-[10px] font-mono font-black tracking-widest uppercase text-blue-400">
                Resources
              </span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-white">
              Latest Insights
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center transition-all ${
                canScrollLeft
                  ? "text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 cursor-pointer"
                  : "text-zinc-700 opacity-40 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center transition-all ${
                canScrollRight
                  ? "text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 cursor-pointer"
                  : "text-zinc-700 opacity-40 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="w-full overflow-x-auto pb-4 flex gap-6 snap-x snap-mandatory scrollbar-none"
          style={{ scrollBehavior: "smooth" }}
        >
          {posts.map((post) => (
            <div
              key={post.id}
              className="w-full min-w-0 shrink-0 grow-0 basis-full md:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)] snap-start flex flex-col space-y-5 group"
            >
              <div
                style={{ backgroundColor: "#242424" }}
                className="w-full h-[260px] rounded-2xl border border-white/5 overflow-hidden relative shadow-lg isolate"
              >
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 transform-gpu"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="flex flex-col space-y-3 px-1">
                <span className="text-[10px] font-mono font-black tracking-wider text-blue-400 uppercase">
                  {post.category}
                </span>

                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-blue-400 transition-colors duration-200 min-h-[56px]">
                  <a href={`/blog/${post.id}`} className="focus:outline-none">
                    {post.title}
                  </a>
                </h3>

                <div className="flex items-center gap-4 text-xs font-medium text-zinc-500 pt-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-zinc-600" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageSquare size={13} className="text-zinc-600" />
                    <span>{post.comments} comments</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}} />
    </section>
  );
}