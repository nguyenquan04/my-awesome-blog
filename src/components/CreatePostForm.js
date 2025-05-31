import React, { useState } from 'react';

function CreatePostForm() {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  // Xử lý khi input thay đổi
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Xử lý khi submit form
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn reload trang
    console.log('Dữ liệu bài viết mới:', formData);

    // Reset form sau khi submit
    setFormData({
      title: '',
      content: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <h2>Tạo bài viết mới</h2>
      <div>
        <label>Tiêu đề:</label><br />
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Nội dung:</label><br />
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Đăng bài</button>
    </form>
  );
}

export default CreatePostForm;
