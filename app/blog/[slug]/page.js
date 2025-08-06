import BlogPost from '@/components/blog/BlogPost';

export async function generateMetadata({ params }) {
  // In a real app, you'd fetch the post data here
  return {
    title: `Blog Post - PetroTech Solutions`,
    description: 'Read the latest insights from PetroTech Solutions.',
  };
}

export default function BlogPostPage({ params }) {
  return <BlogPost slug={params.slug} />;
}