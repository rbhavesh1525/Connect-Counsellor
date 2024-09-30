import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CourseManagement from './CourseManagement';
import BlogManagement from './BlogManagement';
import AdminNav from './AdminNav';
import './AdminPanel.css';
import AdminBanner from './AdminBanner';
import WebinarManagement from './WebinarManagement'

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <AdminNav />
      
      <div className="admin-panel-content">
      
      </div>
    </div>
  );
};

export default AdminPanel;
