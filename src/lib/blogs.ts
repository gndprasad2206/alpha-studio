export interface Blog {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  publishDate: string;
  author: string;
}

export const blogs: Blog[] = [
  {
    id: "1",
    slug: "wedding-photography-tips-for-couples",
    title: "Essential Wedding Photography Tips for Couples",
    description: "Discover how to prepare for your wedding day photoshoot to ensure you get the most breathtaking and natural photos.",
    content: `
## Preparing for Your Big Day

Your wedding day is one of the most important days of your life, and the photographs will be your gateway to those memories for decades to come. 

### 1. Communicate Your Vision
Always have a detailed meeting with your photographer before the big day. Share a Pinterest board or examples of shots you love. This helps us understand your unique aesthetic.

### 2. Trust Your Photographer
While it's good to have a shot list, the best moments are usually candid. Allow your photographer the creative freedom to capture those unstructured, genuine emotional moments.

### 3. Golden Hour is Your Best Friend
If possible, schedule a 30-minute session just for the two of you during "Golden Hour" (the hour before sunset). The lighting is soft, warm, and universally flattering.

Remember, the most beautiful photos are the ones where you are simply enjoying the moment together.
    `,
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
    publishDate: "2026-03-10",
    author: "MV Photography Team",
  },
  {
    id: "2",
    slug: "why-do-you-need-a-pre-wedding-shoot",
    title: "Why You Absolutely Need a Pre-Wedding Shoot",
    description: "Think a pre-wedding shoot is just an extra expense? Here are 5 reasons why it's actually a crucial part of your wedding journey.",
    content: `
## Building Comfort Before the Camera

Many couples feel awkward in front of a professional camera for the first time.

### The Trial Run
A pre-wedding shoot acts as a fantastic icebreaker between you and your photographer. You get to understand their style of direction, and they get to learn your best angles and how you interact as a couple.

### Telling Your Story
Your wedding day is about your vows, but your pre-wedding shoot can be about your journey. You can shoot at the place you first met, your favorite coffee shop, or doing an activity you both love.

Don't skip it—use it as a date day to get dressed up, have fun, and get some incredible photos without the stress of the wedding timeline.
    `,
    imageUrl: "https://images.unsplash.com/photo-1542042161784-26ab9e041e89?q=80&w=2070&auto=format&fit=crop",
    publishDate: "2026-02-28",
    author: "Alex Camera",
  },
  {
    id: "3",
    slug: "choosing-locations-for-baby-shoots",
    title: "Choosing the Right Location for Baby Shoots",
    description: "Safety and lighting are paramount. Learn how we choose the perfect environment to photograph your little ones.",
    content: `
## Comfort is Key

When photographing infants and toddlers, their comfort dictates the success of the shoot.

### The Studio Environment
For newborns (under 2 weeks), a controlled studio environment is highly recommended. We can control the temperature, lighting, and eliminate distracting noises.

### In-Home Lifestyle Shoots
For older babies, doing a lifestyle shoot in your own home often yields the most natural results. The baby is in their familiar environment, making them much more comfortable and willing to play.

Always prioritize safety over a 'cool' shot. We use composite images for any complex poses to ensure the baby is entirely supported at all times.
    `,
    imageUrl: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop",
    publishDate: "2026-02-15",
    author: "MV Photography Team",
  }
];

export async function getBlogs(): Promise<Blog[]> {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(blogs);
    }, 500);
  });
}

export async function getBlogBySlug(slug: string): Promise<Blog | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(blogs.find((blog) => blog.slug === slug));
    }, 500);
  });
}
