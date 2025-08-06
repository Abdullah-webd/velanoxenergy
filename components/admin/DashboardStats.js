'use client';

import { useState, useEffect } from 'react';
import { FileText, MessageSquare, Eye, TrendingUp } from 'lucide-react';

export default function DashboardStats() {
  const [stats, setStats] = useState({
    totalPosts: 0,
    totalContacts: 0,
    totalViews: 0,
    recentPosts: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [postsRes, contactsRes] = await Promise.all([
        fetch('https://backendcontract-1.onrender.com/api/posts'),
        fetch('https://backendcontract-1.onrender.com/api/contacts', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
          },
        }),
      ]);

      const posts = await postsRes.json();
      const contacts = await contactsRes.json();
      if (!posts || posts.length === 0) return;

const totalView = posts.reduce((acc, post) => acc + post.views, 0);

setStats({
  totalPosts: posts.length,
  totalContacts: contacts.length,
  totalViews:totalView,
  recentPosts: posts.filter(post =>
    new Date(post.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  ).length
});

    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const statCards = [
    {
      name: 'Total Posts',
      value: stats.totalPosts,
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      name: 'Contact Messages',
      value: stats.totalContacts,
      icon: MessageSquare,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      name: 'Total Views',
      value: stats.totalViews,
      icon: Eye,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      name: 'Recent Posts',
      value: stats.recentPosts,
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat) => (
        <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className={`${stat.bgColor} p-3 rounded-md`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    {stat.name}
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {stat.value}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}