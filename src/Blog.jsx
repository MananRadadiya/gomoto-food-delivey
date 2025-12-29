// src/Blog.jsx
import React from 'react';
import './Css/Blog.css';
import './Css/animations.css';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Top 5 Must-Try Burgers This Season',
      date: '2025-12-20',
      author: 'Chef John',
      category: 'Food Guide',
      excerpt: 'Discover the most delicious burger combinations that will satisfy your taste buds...',
      image: '🍔'
    },
    {
      id: 2,
      title: 'The Art of Perfect Pizza Making',
      date: '2025-12-18',
      author: 'Chef Maria',
      category: 'Cooking Tips',
      excerpt: 'Learn the secrets to making the perfect pizza at home with our expert guide...',
      image: '🍕'
    },
    {
      id: 3,
      title: 'Healthy Fast Food Choices',
      date: '2025-12-16',
      author: 'Nutritionist Alex',
      category: 'Health & Wellness',
      excerpt: 'Yes, you can enjoy fast food while maintaining a healthy lifestyle. Here is how...',
      image: '🥗'
    },
    {
      id: 4,
      title: 'Food Delivery Trends 2025',
      date: '2025-12-14',
      author: 'Industry Expert',
      category: 'Trends',
      excerpt: 'Explore the latest trends in food delivery and what to expect in the coming year...',
      image: '📦'
    }
  ];

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <div className="overlay"></div>
        <h1>Our Blog</h1>
        <p>Home / Blog</p>
      </div>

      <div className="blog-container">
        <div className="blog-header animate-slideUp">
          <h2>Latest Articles</h2>
          <p>Stay updated with our latest food stories, recipes, and tips</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id} 
              className="blog-card animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="blog-image">{post.image}</div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="category">{post.category}</span>
                  <span className="date">{post.date}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-footer">
                  <span className="author">By {post.author}</span>
                  <a href="#" className="read-more">Read More →</a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-pagination animate-slideUp">
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
