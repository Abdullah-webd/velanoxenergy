'use client';

import { useState, useEffect } from 'react';
import { Mail, Calendar, Trash2 } from 'lucide-react';

export default function ContactManager() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('https://backendcontract-1.onrender.com/api/contacts', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setContacts(data);
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this contact message?')) return;

    try {
      const response = await fetch(`https://backendcontract-1.onrender.com/api/contacts/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
        },
      });

      if (response.ok) {
        setContacts(contacts.filter(contact => contact._id !== id));
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  if (loading) {
    return (
      <div className="bg-white shadow rounded-lg p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-300 rounded w-1/4"></div>
          <div className="space-y-3">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="h-20 bg-gray-300 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      {contacts.length === 0 ? (
        <div className="p-6 text-center">
          <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No contact messages yet.</p>
        </div>
      ) : (
        <div className="divide-y divide-gray-200">
          {contacts.map((contact) => (
            <div key={contact._id} className="p-6 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-medium text-gray-900">
                      {contact.name}
                    </h3>
                    <span className="text-sm text-gray-500">
                      ({contact.email})
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3">
                    {contact.message}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>
                      {new Date(contact.createdAt).toLocaleDateString()} at{' '}
                      {new Date(contact.createdAt).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(contact._id)}
                  className="p-2 text-gray-400 hover:text-red-600"
                  title="Delete Message"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}