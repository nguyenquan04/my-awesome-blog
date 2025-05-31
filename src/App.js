import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PostItem from './components/PostItem';

function App() {
  // State quản lý danh sách bài viết
  const [posts, setPosts] = useState([]);

  // State quản lý việc hiển thị danh sách bài viết
  const [showPosts, setShowPosts] = useState(true);

  // useEffect chạy 1 lần khi component mount để load dữ liệu giả
  useEffect(() => {
    // Giả lập dữ liệu lấy từ API hoặc server
    const fakePosts = [
      { id: 1, title: 'Bài viết 1', content: 'Nội dung bài viết 1' },
      { id: 2, title: 'Bài viết 2', content: 'Nội dung bài viết 2' },
      { id: 3, title: 'Bài viết 3', content: 'Nội dung bài viết 3' }
    ];

    // Cập nhật state posts
    setPosts(fakePosts);
  }, []); // [] chỉ chạy 1 lần khi mount

  // Hàm xử lý toggle hiển thị bài viết
  const togglePosts = () => {
    setShowPosts(!showPosts);
  };

  return (
    <div>
      <Header />
      <main>
        <button onClick={togglePosts} style={{ marginBottom: '1rem' }}>
          {showPosts ? 'Ẩn bài viết' : 'Hiện bài viết'}
        </button>

        {showPosts ? (
          posts.map(post => (
            <PostItem key={post.id} title={post.title} content={post.content} />
          ))
        ) : (
          <p>Danh sách bài viết đã bị ẩn.</p>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
