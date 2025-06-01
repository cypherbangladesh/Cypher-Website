import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, Tag, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import BlogCard from "@/components/shared/blog-card"
// import { getBlogPost, getAllSlugs } from '@/lib/blogs' // removed because local getBlogPost is used

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  
  // In a real app, you would fetch the blog post from a database
  return {
    title: "7 ways to optimize your robotics project for efficiency",
    excerpt: "Learn the professional techniques to make your robotics projects more efficient and reliable.",
    content: `
      <p>Robotics projects can be complex and challenging, but with the right approach, you can significantly improve their efficiency and reliability. In this article, we'll explore seven proven strategies that professional robotics engineers use to optimize their projects.</p>
      
      <h2>1. Start with a Clear Design Plan</h2>
      <p>Before diving into building, take time to create a comprehensive design plan. This should include:</p>
      <ul>
        <li>Detailed specifications of your robot's functionality</li>
        <li>Component selection with power requirements</li>
        <li>Mechanical design considerations</li>
        <li>Software architecture</li>
      </ul>
      <p>A well-thought-out plan will save you countless hours of troubleshooting and redesign later in the process.</p>
      
      <h2>2. Choose the Right Microcontroller</h2>
      <p>The brain of your robot deserves careful consideration. Factors to consider include:</p>
      <ul>
        <li>Processing power needed for your algorithms</li>
        <li>I/O requirements for sensors and actuators</li>
        <li>Power consumption constraints</li>
        <li>Development environment and community support</li>
      </ul>
      <p>Popular options include Arduino for simpler projects, Raspberry Pi for more complex applications requiring computer vision or machine learning, and specialized controllers like the STM32 series for performance-critical applications.</p>
      
      <h2>3. Optimize Power Management</h2>
      <p>Efficient power management is crucial for any robotics project. Consider these approaches:</p>
      <ul>
        <li>Use voltage regulators appropriate for your components</li>
        <li>Implement sleep modes when possible</li>
        <li>Separate digital and analog power supplies to reduce noise</li>
        <li>Calculate power budgets to ensure adequate battery capacity</li>
      </ul>
      <p>Proper power management will extend battery life and improve the reliability of your robot's operations.</p>
      
      <h2>4. Implement Modular Design</h2>
      <p>Breaking your robot into functional modules makes development, testing, and maintenance much easier:</p>
      <ul>
        <li>Separate sensing, processing, and actuation systems</li>
        <li>Use standardized interfaces between modules</li>
        <li>Test each module independently before integration</li>
      </ul>
      <p>This approach allows team members to work in parallel and simplifies troubleshooting when issues arise.</p>
      
      <h2>5. Leverage Simulation Tools</h2>
      <p>Modern robotics development benefits greatly from simulation:</p>
      <ul>
        <li>Test algorithms before implementing on hardware</li>
        <li>Identify potential mechanical issues early</li>
        <li>Reduce development time and costs</li>
        <li>Train machine learning models in simulated environments</li>
      </ul>
      <p>Tools like Gazebo, Webots, and ROS simulation packages can dramatically improve your development workflow.</p>
      
      <h2>6. Implement Robust Error Handling</h2>
      <p>Robots operate in the real world where things don't always go as planned:</p>
      <ul>
        <li>Implement sensor validation and fusion techniques</li>
        <li>Design graceful degradation modes</li>
        <li>Use watchdog timers to recover from software hangs</li>
        <li>Log errors for post-operation analysis</li>
      </ul>
      <p>Good error handling can mean the difference between a minor hiccup and a catastrophic failure.</p>
      
      <h2>7. Continuous Integration and Testing</h2>
      <p>Adopt software development best practices:</p>
      <ul>
        <li>Use version control for both software and hardware designs</li>
        <li>Implement automated testing where possible</li>
        <li>Conduct regular integration tests</li>
        <li>Document your code and design decisions</li>
      </ul>
      <p>These practices ensure that your project remains maintainable as it grows in complexity.</p>
      
      <h2>Conclusion</h2>
      <p>By implementing these seven strategies, you'll be well on your way to creating more efficient and reliable robotics projects. Remember that optimization is an ongoing process—continuously evaluate your design and look for opportunities to improve.</p>
    `,
    image: "https://i.ibb.co/LXXQs1x2/6-17.webp",
    category: "Tips & Tricks",
    date: "March 15, 2025",
    readTime: "8 min read",
    author: {
      name: "Dr. Sarah Chen",
      role: "Robotics Engineer",
      avatar: "/placeholder.svg",
    },
    tags: ["Robotics", "Efficiency", "Engineering", "Design"],
  }
}

// This would typically come from a CMS or database
const getRelatedPosts = (slug: string) => {
  // In a real app, you would fetch related posts from a database
  return [
    {
      id: 2,
      title: "Inside a professional robotics lab: Organization tips",
      excerpt: "Discover how professional robotics labs organize their workspace for maximum productivity.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Workspace",
      date: "March 10, 2025",
      slug: "inside-professional-robotics-lab",
    },
    {
      id: 4,
      title: "Modern sensor technology is revolutionizing robotics",
      excerpt: "How the latest sensor technologies are changing what's possible in robotics projects.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Technology",
      date: "February 28, 2025",
      slug: "modern-sensor-technology",
    },
    {
      id: 5,
      title: "AI integration in robotics: What you need to know",
      excerpt: "The essential guide to integrating artificial intelligence into your robotics projects.",
      image: "/placeholder.svg?height=400&width=600",
      category: "AI & Robotics",
      date: "February 20, 2025",
      slug: "ai-integration-robotics",
    },
  ]
}
// import { FC } from 'react';
// interface PageProps {
//   params: {
//     slug: string;
//   };
// }
export default function BlogPostPage({ params }: { params: { slug: string } }) 
{
  const slug = params.slug
  console.log("Blog Post Slug:", slug)
  const post =  getBlogPost(slug)
  const relatedPosts = getRelatedPosts(slug)

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="pt-16 pb-8 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6">
            <Link href="/blogs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Back to Blog
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Avatar className="h-10 w-10">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{post.author.name}</p>
                <p className="text-xs text-muted-foreground">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span className="text-xs">{post.date}</span>
            </div>

            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span className="text-xs">{post.readTime}</span>
            </div>

            <div className="flex items-center gap-1 text-muted-foreground">
              <Tag className="h-4 w-4" />
              <span className="text-xs">{post.category}</span>
            </div>
          </div>

          <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-8">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>

          <div className="prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="border-t border-b py-4 sm:py-6 mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium">Tags:</span>
                {post.tags.map((tag, index) => (
                  <Link
                    key={index}
                    href={`/blogs/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm px-3 py-1 bg-muted rounded-full hover:bg-muted/80 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Share:</span>
                <Button type="button" className="h-8 w-8 rounded-full bg-transparent hover:bg-muted">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button type="button" className="h-8 w-8 rounded-full bg-transparent hover:bg-muted">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button type="button" className="h-8 w-8 rounded-full bg-transparent hover:bg-muted">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button type="button" className="h-8 w-8 rounded-full bg-transparent hover:bg-muted">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
