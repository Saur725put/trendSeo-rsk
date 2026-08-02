"use client";
import React, { useState, useEffect } from "react";
import { User, Calendar } from "lucide-react";

const API_URL = "http://localhost:8000";

export default function EcommercePopularPostsGrid() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [noOfPage, setNoOfPage] = useState(1);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/api/v1/blog/getallblogs/${page}`, {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();

        if (data.success) {
          const mapped = data.blogs.map((blog) => ({
            id: blog._id,
            title: blog.h1 || blog.title,
            author: blog.createdBy || "Admin",
            date: new Date(blog.createdAt).toLocaleDateString("en-US", {
              month: "long",
              day: "2-digit",
              year: "numeric",
            }),
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

  return (
    <section
      style={{ backgroundColor: "#101010" }}
      className="w-full py-24 px-6 md:px-12 lg:px-24 antialiased text-white border-t border-zinc-900"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col space-y-12">

        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-4xl font-extrabold tracking-tight text-white">
            Popular Insights
          </h2>
          <div className="h-1 w-12 bg-blue-500 rounded" />
        </div>

        {loading && (
          <div className="w-full flex justify-center py-12 text-zinc-500 text-sm">
            Loading posts...
          </div>
        )}

        {!loading && error && (
          <div className="w-full flex justify-center py-12 text-zinc-500 text-sm">
            {error}
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="w-full flex justify-center py-12 text-zinc-500 text-sm">
            No blog posts published yet.
          </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {posts.map((post) => (
              <div
                key={post.id}
                style={{ backgroundColor: "#242424" }}
                className="w-full rounded-2xl border border-white/5 overflow-hidden flex flex-col group transition-transform duration-300 hover:scale-[1.01]"
              >
                <div className="w-full h-[260px] overflow-hidden relative border-b border-zinc-800">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between space-y-5">
                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-blue-400 transition-colors duration-200 line-clamp-3">
                    <a href={`/blog/${post.id}`} className="focus:outline-none">
                      {post.title}
                    </a>
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-400 pt-2 border-t border-zinc-800/40">
                    <div className="flex items-center gap-1.5">
                      <User size={14} className="text-zinc-500" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-zinc-500" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && !error && noOfPage > 1 && (
          <div className="flex items-center justify-center gap-4 pt-6">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className={`px-5 py-2 rounded-full border border-white/10 text-sm ${
                page === 1
                  ? "text-zinc-700 opacity-40 cursor-not-allowed"
                  : "text-zinc-300 hover:text-white hover:bg-white/10 cursor-pointer"
              }`}
            >
              Previous
            </button>
            <span className="text-sm text-zinc-500">
              Page {page} of {noOfPage}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(noOfPage, p + 1))}
              disabled={page === noOfPage}
              className={`px-5 py-2 rounded-full border border-white/10 text-sm ${
                page === noOfPage
                  ? "text-zinc-700 opacity-40 cursor-not-allowed"
                  : "text-zinc-300 hover:text-white hover:bg-white/10 cursor-pointer"
              }`}
            >
              Next
            </button>
          </div>
        )}

      </div>
    </section>
  );
}