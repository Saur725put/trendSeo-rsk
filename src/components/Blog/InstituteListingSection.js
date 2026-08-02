"use client";
import React, { useState, useEffect } from "react";
import { Calendar, User, FileText } from "lucide-react";

const API_URL = "http://localhost:8000";

export default function PostDetails({ id }) {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/api/v1/blog/getblogdetails/${id}`, {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();

        if (data.success) {
          setBlog(data.blog);
        } else {
          setError(data.message || "Blog not found");
        }
      } catch (err) {
        console.error("Error fetching blog details:", err);
        setError("Failed to load blog");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  useEffect(() => {
    if (!blog?.scripts?.length) return;

    const injected = [];
    blog.scripts.forEach((scriptContent, idx) => {
      const scriptEl = document.createElement("script");
      scriptEl.type = "application/ld+json";
      scriptEl.text = scriptContent;
      scriptEl.dataset.blogScript = idx;
      document.head.appendChild(scriptEl);
      injected.push(scriptEl);
    });

    return () => {
      injected.forEach((el) => document.head.removeChild(el));
    };
  }, [blog]);

  if (loading) {
    return (
      <article
        style={{ backgroundColor: "#101010" }}
        className="w-full min-h-screen flex items-center justify-center text-zinc-500 text-sm"
      >
        Loading post...
      </article>
    );
  }

  if (error || !blog) {
    return (
      <article
        style={{ backgroundColor: "#101010" }}
        className="w-full min-h-screen flex items-center justify-center text-zinc-500 text-sm"
      >
        {error || "Blog not found"}
      </article>
    );
  }

  const formattedDate = blog.createdAt
    ? new Date(blog.createdAt).toLocaleDateString("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
      })
    : null;

  return (
    <article
      style={{ backgroundColor: "#101010" }}
      className="w-full min-h-screen py-20 px-6 md:px-12 lg:px-24 antialiased text-zinc-300 font-sans"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col space-y-12">

        <header className="w-full flex flex-col space-y-4 border-b border-zinc-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 w-fit">
            <span className="text-[10px] font-mono font-bold tracking-widest text-blue-400 uppercase">
              Blog
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {blog.h1 || blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-zinc-500 pt-2">
            <div className="flex items-center gap-1.5">
              <User size={13} className="text-zinc-600" />
              <span>{blog.createdBy || "Admin"}</span>
            </div>
            {formattedDate && (
              <div className="flex items-center gap-1.5">
                <Calendar size={13} className="text-zinc-600" />
                <span>{formattedDate}</span>
              </div>
            )}
          </div>
        </header>

        {blog.thumbnail && (
          <div
            style={{ backgroundColor: "#242424" }}
            className="w-full h-[320px] md:h-[460px] rounded-2xl border border-white/5 overflow-hidden relative shadow-2xl"
          >
            <img
              src={blog.thumbnail}
              alt={blog.h1 || blog.title}
              className="w-full h-full object-cover opacity-85"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-black/30 pointer-events-none" />
          </div>
        )}

        {blog.metaDescription && (
          <p className="text-base md:text-lg leading-relaxed text-zinc-400 border-l-2 border-blue-500 pl-4">
            {blog.metaDescription}
          </p>
        )}

        <hr className="border-zinc-900 my-2" />

        <div className="flex items-center gap-3 text-white">
          <FileText className="text-blue-500" size={20} />
          <span className="text-sm font-mono uppercase tracking-wider text-blue-400">
            Full Article
          </span>
        </div>

        <div
          className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-blue-400 prose-strong:text-white prose-img:rounded-2xl"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

      </div>
    </article>
  );
}