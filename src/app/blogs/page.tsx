import { Metadata } from 'next';
import Link from 'next/link';
import { getBlogs } from '@/lib/blogs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Photography Blog | ALPHA DIGITAL STUDIO',
  description: 'Read the latest tips, tricks, and stories from ALPHA DIGITAL STUDIO. Learn about wedding photography, pre-wedding shoots, and more.',
};

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#050505] pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Our Journal</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Behind the scenes, photography tips, and stories from our recent shoots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link key={blog.id} href={`/blogs/${blog.slug}`} className="group">
                <div className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden hover:border-[var(--color-brand-gold)]/50 transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="aspect-video w-full overflow-hidden relative">
                    <img 
                      src={blog.imageUrl} 
                      alt={blog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 text-xs text-white rounded-full border border-white/10">
                      {new Date(blog.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h2 className="text-xl font-bold text-white font-heading group-hover:text-[var(--color-brand-gold)] transition-colors mb-3 line-clamp-2">
                      {blog.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-1">
                      {blog.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between text-xs text-gray-500 font-medium uppercase tracking-wider">
                      <span>By {blog.author}</span>
                      <span className="text-[var(--color-brand-gold)] group-hover:translate-x-1 transition-transform">Read More &rarr;</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
