import React from 'react';

const TaskList = ({ tasks, onEdit, onComplete, onDelete }) => {
  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'HIGH': return 'priority-high';
      case 'MEDIUM': return 'priority-medium';
      case 'LOW': return 'priority-low';
      default: return '';
    }
  };

  const getStatusClass = (status) => {
    return status === 'COMPLETED' ? 'status-completed' : 'status-pending';
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'No due date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks found. Create your first task!</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <div key={task.id} className={`task-card ${getStatusClass(task.status)}`}>
          <div className="task-header">
            <h3>{task.title}</h3>
            <span className={`priority-badge ${getPriorityClass(task.priority)}`}>
              {task.priority}
            </span>
          </div>
          
          {task.description && (
            <p className="task-description">{task.description}</p>
          )}
          
          <div className="task-meta">
            <div className="meta-item">
              <span className="meta-label">Status:</span>
              <span className={`status-badge ${getStatusClass(task.status)}`}>
                {task.status}
              </span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Due:</span>
              <span className="due-date">{formatDate(task.dueDate)}</span>
            </div>
          </div>
          
          <div className="task-actions">
            <button 
              className="btn btn-sm btn-edit"
              onClick={() => onEdit(task)}
            >
              Edit
            </button>
            {task.status === 'PENDING' && (
              <button 
                className="btn btn-sm btn-complete"
                onClick={() => onComplete(task.id)}
              >
                Complete
              </button>
            )}
            <button 
              className="btn btn-sm btn-delete"
              onClick={() => onDelete(task.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
