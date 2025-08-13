'use client';

import { useState, useEffect } from 'react';
import { X, Save } from 'lucide-react';

export default function PostForm({ post, onClose }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    image: '',
    slug: '',
  });
  const [uploadStatus, setUploadStatus] = useState(''); // success, error, or empty
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Replace this with your actual default placeholder image
  const DEFAULT_IMAGE =
    'https://via.placeholder.com/800x400?text=Default+Post+Image';

  // Replace these with your own Cloudinary values
  const CLOUDINARY_UPLOAD_PRESET = 'studymasterMedia';
  const CLOUDINARY_CLOUD_NAME = 'dkdw9jbxm';

  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title || '',
        description: post.description || '',
        content: post.content || '',
        image: post.image || '',
        slug: post.slug || '',
      });
    } else {
      setFormData({
        title: '',
        description: '',
        content: '',
        image: '',
        slug: '',
      });
    }
  }, [post]);

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title),
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadStatus('uploading');

    const formDataUpload = new FormData();
    formDataUpload.append('file', file);
    formDataUpload.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: formDataUpload,
        }
      );

      if (!res.ok) throw new Error('Cloudinary upload failed');

      const data = await res.json();
      setFormData((prev) => ({ ...prev, image: data.secure_url }));
      setUploadStatus('success');
    } catch (err) {
      console.error(err);
      setFormData((prev) => ({ ...prev, image: DEFAULT_IMAGE }));
      setUploadStatus('error');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const url = post
        ? `https://backendcontract-1.onrender.com/api/posts/${post._id}`
        : 'https://backendcontract-1.onrender.com/api/posts';

      const method = post ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        onClose();
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to save post');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-screen overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-lg font-medium text-gray-900">
            {post ? 'Edit Post' : 'Create New Post'}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={handleTitleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Slug *
            </label>
            <input
              type="text"
              required
              value={formData.slug}
              onChange={handleChange}
              name="slug"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              rows={3}
              required
              value={formData.description}
              onChange={handleChange}
              name="description"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full"
            />

            {uploadStatus === 'uploading' && (
              <p className="text-yellow-500 mt-2">Uploading image...</p>
            )}
            {uploadStatus === 'success' && (
              <p className="text-green-500 mt-2">Image uploaded successfully!</p>
            )}
            {uploadStatus === 'error' && (
              <p className="text-red-500 mt-2">
                Upload failed. Using default image.
              </p>
            )}

            {/* Show preview */}
            {formData.image && (
              <img
                src={formData.image}
                alt="Preview"
                className="mt-3 w-full h-48 object-cover rounded-md border"
              />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content *
            </label>
            <textarea
              rows={12}
              required
              value={formData.content}
              onChange={handleChange}
              name="content"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm bg-white hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? (
                'Saving...'
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  {post ? 'Update' : 'Create'} Post
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
