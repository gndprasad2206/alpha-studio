import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogBySlug, getBlogs } from '@/lib/blogs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const blog = await getBlogBySlug(resolvedParams.slug);
  
  if (!blog) return { title: 'Not Found' };

  return {
    title: `${blog.title} | ALPHA STUDIO Blog`,
    description: blog.description,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const blog = await getBlogBySlug(resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  const allBlogs = await getBlogs();
  const relatedBlogs = allBlogs.filter((b) => b.id !== blog.id).slice(0, 2);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#050505] pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          
          <Link href="/blogs" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 text-sm uppercase tracking-wider font-medium">
            <ArrowLeft size={16} /> Back to Journal
          </Link>

          {/* Header */}
          <div className="mb-10 text-center">
            <span className="px-3 py-1 rounded-full bg-[var(--color-brand-purple)]/20 text-[var(--color-brand-purple)] text-xs uppercase tracking-widest font-medium border border-[var(--color-brand-purple)]/30 inline-block mb-6">
              Photography Article
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white leading-tight mb-6">
              {blog.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <span>By {blog.author}</span>
              <span>&bull;</span>
              <span>{new Date(blog.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-[21/9] w-full rounded-3xl overflow-hidden mb-16 border border-white/10">
            <img 
              src={blog.imageUrl} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Rich Text Content Simulator using prose */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-headings:text-white prose-a:text-[var(--color-brand-gold)] prose-img:rounded-2xl mx-auto">
            {/* Extremely simple markdown-like renderer for mock purposes */}
            {blog.content.split('\\n').map((paragraph, index) => {
              const trimmed = paragraph.trim();
              if (!trimmed) return null;
              
              if (trimmed.startsWith('## ')) {
                return <h2 key={index} className="text-3xl font-bold mt-12 mb-6">{trimmed.replace('## ', '')}</h2>;
              }
              if (trimmed.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-bold mt-8 mb-4">{trimmed.replace('### ', '')}</h3>;
              }
              return <p key={index} className="text-gray-300 leading-relaxed mb-6">{trimmed}</p>;
            })}
          </div>

          {/* Related Blogs */}
          <div className="mt-24 pt-12 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white font-heading mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <Link key={relatedBlog.id} href={`/blogs/${relatedBlog.slug}`} className="group flex gap-4 bg-[#111] p-4 rounded-2xl border border-white/5 hover:border-[var(--color-brand-gold)]/50 transition-colors">
                  <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden">
                    <img src={relatedBlog.imageUrl} alt={relatedBlog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-white font-heading font-semibold line-clamp-2 group-hover:text-[var(--color-brand-gold)] transition-colors mb-2 text-sm">
                      {relatedBlog.title}
                    </h4>
                    <span className="text-xs text-gray-500">{new Date(relatedBlog.publishDate).toLocaleDateString()}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
