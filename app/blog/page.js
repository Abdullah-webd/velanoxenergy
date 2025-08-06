import BlogList from '@/components/blog/BlogList';

export const metadata = {
  title: 'Industry Insights - PetroTech Solutions Blog',
  description: 'Stay updated with the latest news, trends, and insights from the oil and gas manufacturing industry.',
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 mt-[70px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Industry Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest developments, trends, and expert insights from the oil and gas manufacturing sector.
          </p>
        </div>
        <BlogList />
      </div>
    </div>
  );
}