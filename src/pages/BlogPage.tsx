import React, { useState } from 'react';
import { FileText, Clock, User, Calendar, ArrowRight, X, CheckCircle, Share2 } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blog';

export const BlogPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
          Knowledge Base & Engineering Insights
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Industrial Printing Insights & Updates
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          Technical buyer guides, substrate engineering tips, printhead preservation protocols, and wholesale distribution perspectives from our Kirti Nagar engineering desk.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.id}
            id={post.slug}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-sky-500 hover:shadow-lg transition-all flex flex-col justify-between group"
          >
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-sky-700">{post.category}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.readTime}</span>
                </span>
              </div>

              <h2 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                {post.title}
              </h2>

              <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span>{post.author}</span>
                </span>
              </div>
            </div>

            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">{post.publishDate}</span>
              <button
                type="button"
                onClick={() => setSelectedPost(post)}
                className="font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1 cursor-pointer"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Interactive Modal for Reading Full Article */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
          <div className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between shrink-0">
              <div className="space-y-1 pr-6">
                <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                  {selectedPost.category} · {selectedPost.readTime}
                </span>
                <h3 className="text-lg sm:text-xl font-bold leading-tight">
                  {selectedPost.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-700 leading-relaxed">
              <div className="flex items-center justify-between text-xs text-slate-500 pb-3 border-b border-slate-100">
                <span>By {selectedPost.author}</span>
                <span>Published {selectedPost.publishDate}</span>
              </div>

              {/* Excerpt Lead */}
              <p className="text-base font-medium text-slate-900 bg-slate-50 p-4 rounded-xl border-l-4 border-sky-600">
                {selectedPost.excerpt}
              </p>

              {/* Content Paragraphs */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                {selectedPost.content.map((p, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Key Takeaways */}
              <div className="bg-sky-50 p-5 rounded-xl border border-sky-200 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-sky-950">
                  Key Takeaways for Machine Buyers
                </h4>
                <ul className="space-y-2 text-xs text-sky-900">
                  {selectedPost.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span>Have technical inquiries regarding this guide?</span>
                <a
                  href="tel:+919999936706"
                  className="font-bold text-sky-700 hover:underline"
                >
                  Call Engineering Desk: +91 99999 36706
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
