import React from 'react';

const Dashboard = ({ tasks }) => {
  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter(task => task.status === 'PENDING').length;
  const completedTasks = tasks.filter(task => task.status === 'COMPLETED').length;

  return (
    <div className="dashboard">
      <h2>Task Manager Dashboard</h2>
      <div className="stats">
        <div className="stat-card">
          <h3>Total Tasks</h3>
          <p className="stat-number">{totalTasks}</p>
        </div>
        <div className="stat-card">
          <h3>Pending</h3>
          <p className="stat-number pending">{pendingTasks}</p>
        </div>
        <div className="stat-card">
          <h3>Completed</h3>
          <p className="stat-number completed">{completedTasks}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
