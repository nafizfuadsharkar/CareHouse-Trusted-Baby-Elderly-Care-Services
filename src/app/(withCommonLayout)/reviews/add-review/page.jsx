'use client';

import React, { useState } from 'react';
import { createReview } from '@/Services/reviews.service';
import { Star } from 'lucide-react';

const AddReviewPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    serviceId: '',
    rating: 0,
    comment: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRating = (value) => {
    setFormData({ ...formData, rating: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await createReview(formData);
      setSuccess('Review submitted successfully!');
      setFormData({
        name: '',
        serviceId: '',
        rating: 0,
        comment: '',
      });
    } catch (err) {
      setError('Failed to submit review. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Add a Review
          </h2>
          <p className="text-gray-500 mt-1">
            Share your experience with our service
          </p>
        </div>

        {/* Alerts */}
        {success && (
          <p className="mb-4 text-sm text-green-600 bg-green-50 p-3 rounded">
            {success}
          </p>
        )}
        {error && (
          <p className="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded">
            {error}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe Isha"
              required
              className="
                w-full px-4 py-2 rounded-lg border
                bg-white text-gray-800
                placeholder:text-gray-400
                focus:ring-2 focus:ring-emerald-500
                focus:outline-none
              "
            />
          </div>

          {/* Service ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Service ID
            </label>
            <input
              type="text"
              name="serviceId"
              value={formData.serviceId}
              onChange={handleChange}
              placeholder="service-123"
              required
              className="
                w-full px-4 py-2 rounded-lg border
                bg-white text-gray-800
                placeholder:text-gray-400
                focus:ring-2 focus:ring-emerald-500
                focus:outline-none
              "
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rating
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  onClick={() => handleRating(star)}
                  className={`w-6 h-6 cursor-pointer transition ${
                    star <= formData.rating
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Comment */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Comment
            </label>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Excellent service! Highly recommend."
              rows={4}
              required
              className="
                w-full px-4 py-2 rounded-lg border
                bg-white text-gray-800
                placeholder:text-gray-400
                focus:ring-2 focus:ring-emerald-500
                focus:outline-none
              "
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full py-3 rounded-lg font-semibold text-white
              bg-emerald-600 hover:bg-emerald-700
              transition disabled:opacity-60
            "
          >
            {loading ? 'Submitting...' : 'Submit Review'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddReviewPage;
