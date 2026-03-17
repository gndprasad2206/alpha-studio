"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, LogOut, FileText } from "lucide-react";
import { blogs as initialBlogs } from "@/lib/blogs";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [blogs, setBlogs] = useState(initialBlogs);
  const [isEditing, setIsEditing] = useState(false);
  
  const [currentBlog, setCurrentBlog] = useState({
    id: "",
    title: "",
    slug: "",
    description: "",
    content: "",
    imageUrl: "",
    publishDate: "",
    author: "MV Photography Team"
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "mvphoto123") {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password. Try 'mvphoto123'");
    }
  };

  const handleSaveBlog = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentBlog.id) {
      // Edit
      setBlogs(blogs.map(b => b.id === currentBlog.id ? currentBlog : b));
    } else {
      // Add
      const newBlog = {
        ...currentBlog,
        id: Date.now().toString(),
        publishDate: currentBlog.publishDate || new Date().toISOString().split('T')[0]
      };
      setBlogs([newBlog, ...blogs]);
    }
    
    resetForm();
  };

  const editBlog = (id: string) => {
    const blogToEdit = blogs.find(b => b.id === id);
    if (blogToEdit) {
      setCurrentBlog(blogToEdit);
      setIsEditing(true);
    }
  };

  const deleteBlog = (id: string) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      setBlogs(blogs.filter(b => b.id !== id));
    }
  };

  const resetForm = () => {
    setIsEditing(false);
    setCurrentBlog({
      id: "",
      title: "",
      slug: "",
      description: "",
      content: "",
      imageUrl: "",
      publishDate: "",
      author: "MV Photography Team"
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-[#111] p-8 rounded-3xl border border-white/10 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold font-heading text-white">MV PHOTOGRAPHY</h1>
            <p className="text-gray-400 text-sm mt-2">Admin Dashboard Login</p>
          </div>
          
          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            <div>
              <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">Admin Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password..."
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-gold)]"
                required
              />
              <p className="text-xs text-gray-600 mt-2">Hint: mvphoto123</p>
            </div>
            
            <button 
              type="submit"
              className="w-full px-6 py-3 rounded-xl bg-[var(--color-brand-gold)] text-black font-semibold hover:bg-white transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col md:flex-row">
      
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-[#111] border-r border-white/10 p-6 flex flex-col">
        <div className="mb-10">
          <h1 className="text-xl font-bold font-heading text-white">MV PHOTOGRAPHY</h1>
          <span className="text-[var(--color-brand-gold)] text-xs uppercase tracking-widest">Admin Panel</span>
        </div>
        
        <nav className="flex-1 flex flex-col gap-2">
          <button 
            onClick={resetForm}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${!isEditing ? "bg-[var(--color-brand-purple)]/20 text-[var(--color-brand-purple)] border border-[var(--color-brand-purple)]/30" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}
          >
            <FileText size={18} /> Manage Blogs
          </button>
        </nav>
        
        <button 
          onClick={() => setIsAuthenticated(false)}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-400/10 transition-colors mt-auto"
        >
          <LogOut size={18} /> Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold font-heading text-white">Blog Management</h2>
              <p className="text-gray-400 text-sm mt-1">Create, edit, and orchestrate your studio's story.</p>
            </div>
            {!isEditing && (
              <button 
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-brand-gold)] text-black font-semibold hover:bg-white transition-colors"
              >
                <Plus size={18} /> Create New Post
              </button>
            )}
          </div>

          {isEditing ? (
            <div className="bg-[#111] border border-white/10 rounded-3xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-white font-heading">
                  {currentBlog.id ? "Edit Blog Post" : "Compose New Blog Post"}
                </h3>
                <button 
                  onClick={resetForm}
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Cancel
                </button>
              </div>

              <form onSubmit={handleSaveBlog} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">Post Title *</label>
                    <input 
                      type="text" 
                      required
                      value={currentBlog.title}
                      onChange={(e) => {
                        const title = e.target.value;
                        setCurrentBlog({
                          ...currentBlog, 
                          title, 
                          // Auto generate slug if it's a new post
                          slug: currentBlog.id ? currentBlog.slug : title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
                        })
                      }}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--color-brand-gold)] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">URL Slug *</label>
                    <input 
                      type="text" 
                      required
                      value={currentBlog.slug}
                      onChange={(e) => setCurrentBlog({...currentBlog, slug: e.target.value})}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-gray-400 focus:border-[var(--color-brand-gold)] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">Featured Image URL *</label>
                    <input 
                      type="url" 
                      required
                      value={currentBlog.imageUrl}
                      onChange={(e) => setCurrentBlog({...currentBlog, imageUrl: e.target.value})}
                      placeholder="/images/img_1.jpg"
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--color-brand-gold)] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">Publish Date *</label>
                    <input 
                      type="date" 
                      required
                      value={currentBlog.publishDate}
                      onChange={(e) => setCurrentBlog({...currentBlog, publishDate: e.target.value})}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--color-brand-gold)] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">Short Description *</label>
                  <textarea 
                    required
                    rows={2}
                    value={currentBlog.description}
                    onChange={(e) => setCurrentBlog({...currentBlog, description: e.target.value})}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--color-brand-gold)] focus:outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block flex items-center justify-between">
                    <span>Main Content (Markdown supported) *</span>
                  </label>
                  <textarea 
                    required
                    rows={12}
                    value={currentBlog.content}
                    onChange={(e) => setCurrentBlog({...currentBlog, content: e.target.value})}
                    placeholder="## Heading 2\n\nParagraph text here...\n\n### Heading 3\n\nMore text..."
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--color-brand-gold)] focus:outline-none font-mono text-sm"
                  />
                </div>

                <div className="flex justify-end gap-4 mt-6">
                  <button 
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-3 rounded-xl text-gray-400 font-semibold hover:text-white transition-colors border border-transparent hover:border-white/10"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-8 py-3 rounded-xl bg-[var(--color-brand-blue)] text-black font-semibold hover:bg-white transition-colors"
                  >
                    {currentBlog.id ? "Save Changes" : "Publish Post"}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {blogs.map((blog) => (
                <div key={blog.id} className="bg-[#111] border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 hover:border-white/20 transition-colors">
                  <div className="w-full sm:w-48 aspect-video rounded-xl overflow-hidden shrink-0">
                    <img src={blog.imageUrl} alt={blog.title} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white font-heading mb-2">{blog.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2 mb-3">{blog.description}</p>
                    <div className="flex items-center gap-4 text-xs font-medium text-gray-500 uppercase tracking-widest">
                      <span>{new Date(blog.publishDate).toLocaleDateString()}</span>
                      <span>&bull;</span>
                      <span>By {blog.author}</span>
                    </div>
                  </div>

                  <div className="flex sm:flex-col gap-3 shrink-0">
                    <button 
                      onClick={() => editBlog(blog.id)}
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-colors"
                      title="Edit"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button 
                      onClick={() => deleteBlog(blog.id)}
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-red-400 hover:bg-red-400 hover:text-white transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
              
              {blogs.length === 0 && (
                <div className="text-center py-20 bg-[#111] border border-white/5 rounded-3xl">
                  <p className="text-gray-400">No blog posts found.</p>
                  <button 
                    onClick={() => setIsEditing(true)}
                    className="mt-4 text-[var(--color-brand-gold)] hover:underline"
                  >
                    Create your first post
                  </button>
                </div>
              )}
            </div>
          )}

        </div>
      </div>

    </div>
  );
}
