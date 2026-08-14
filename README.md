# Task Manager - Full-Stack Java Application

A simple, clean, and functional task management application built with Java Spring Boot backend and React frontend. This project demonstrates practical full-stack development skills with modern technologies.

## 📋 Project Overview

Task Manager is a web application that allows users to create, view, update, complete, and delete tasks. It features a clean responsive interface with search and filter capabilities, making task management efficient and user-friendly.

## ✨ Features

- **Task Management**: Create, read, update, and delete tasks
- **Task Completion**: Mark tasks as completed with one click
- **Search**: Search tasks by title
- **Filter**: Filter tasks by status (Pending/Completed) and priority (Low/Medium/High)
- **Dashboard**: View task statistics (total, pending, completed)
- **Responsive Design**: Clean and modern UI that works on all devices
- **Real-time Updates**: Instant feedback on all operations
- **Validation**: Form validation with user-friendly error messages
- **Delete Confirmation**: Prevents accidental task deletion

## 🛠 Technology Stack

### Backend
- **Java 21** - Programming language
- **Spring Boot 3.2.0** - Application framework
- **Spring Web** - REST API support
- **Spring Data JPA** - Database ORM
- **MySQL 8.0** - Database
- **Maven** - Build tool
- **Lombok** - Reduce boilerplate code
- **Jakarta Validation** - Input validation
- **SpringDoc OpenAPI** - API documentation (Swagger)

### Frontend
- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Axios** - HTTP client
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling

### Development & Deployment
- **Git** - Version control
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Nginx** - Web server (for frontend)

## 🏗 Architecture

```
                 React Frontend
                       |
                     Axios
                       |
                       ↓
              Spring Boot REST API
                       |
                    Service
                       |
                  Repository
                       |
                       ↓
                    MySQL
```

### Backend Architecture
```
Controller (TaskController)
    ↓
Service (TaskService)
    ↓
Repository (TaskRepository)
    ↓
MySQL Database
```

## 📁 Project Structure

```
task-manager/
│
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/taskmanager/
│   │   │   │   ├── controller/
│   │   │   │   │   └── TaskController.java
│   │   │   │   ├── service/
│   │   │   │   │   └── TaskService.java
│   │   │   │   ├── repository/
│   │   │   │   │   └── TaskRepository.java
│   │   │   │   ├── entity/
│   │   │   │   │   └── Task.java
│   │   │   │   ├── dto/
│   │   │   │   │   └── TaskRequest.java
│   │   │   │   ├── exception/
│   │   │   │   │   ├── TaskNotFoundException.java
│   │   │   │   │   └── GlobalExceptionHandler.java
│   │   │   │   ├── config/
│   │   │   │   │   └── SwaggerConfig.java
│   │   │   │   └── TaskManagerApplication.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   │       └── java/com/taskmanager/
│   │           └── service/
│   │               └── TaskServiceTest.java
│   ├── pom.xml
│   ├── Dockerfile
│   └── .gitignore
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── taskApi.js
│   │   ├── components/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   └── TaskList.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── .env
│   ├── .env.production
│   └── .gitignore
│
├── docker-compose.yml
├── .env.example
├── .gitignore
└── README.md
```

## 🗄 Database Structure

### Tasks Table
```sql
CREATE TABLE tasks (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description VARCHAR(1000),
    priority VARCHAR(20) NOT NULL,
    status VARCHAR(20) NOT NULL,
    due_date DATE,
    created_at DATE,
    updated_at DATE
);
```

### Task Entity Fields
- **id**: Auto-generated unique identifier
- **title**: Task title (required, max 200 characters)
- **description**: Task description (optional, max 1000 characters)
- **priority**: Task priority (LOW, MEDIUM, HIGH)
- **status**: Task status (PENDING, COMPLETED)
- **dueDate**: Task due date (optional)
- **createdAt**: Automatic timestamp on creation
- **updatedAt**: Automatic timestamp on update

## 🔌 API Endpoints

### Base URL
- Local: `http://localhost:8080`
- Docker: `http://localhost:8080`

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Root endpoint - health check |
| GET | `/health` | Health check endpoint |
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/{id}` | Get task by ID |
| POST | `/api/tasks` | Create new task |
| PUT | `/api/tasks/{id}` | Update task |
| PATCH | `/api/tasks/{id}/complete` | Mark task as completed |
| DELETE | `/api/tasks/{id}` | Delete task |

### Example Requests

#### Health Check
```bash
GET /
```

#### Response
```text
Task Manager Backend is running
```

#### Health Status
```bash
GET /health
```

#### Response
```text
OK
```

#### Create Task
```bash
POST /api/tasks
Content-Type: application/json

{
  "title": "Complete Java Assignment",
  "description": "Finish Spring Boot project",
  "priority": "HIGH",
  "status": "PENDING",
  "dueDate": "2026-08-20"
}
```

#### Response
```json
{
  "id": 1,
  "title": "Complete Java Assignment",
  "description": "Finish Spring Boot project",
  "priority": "HIGH",
  "status": "PENDING",
  "dueDate": "2026-08-20",
  "createdAt": "2026-08-13",
  "updatedAt": "2026-08-13"
}
```

#### Update Task
```bash
PUT /api/tasks/1
Content-Type: application/json

{
  "title": "Complete Java Assignment",
  "description": "Finish Spring Boot project with tests",
  "priority": "HIGH",
  "status": "COMPLETED",
  "dueDate": "2026-08-20"
}
```

#### Error Response
```json
{
  "status": 404,
  "message": "Task not found with id: 1",
  "timestamp": "2026-08-13T10:30:00"
}
```

## 🚀 Getting Started

### Prerequisites
- Java 21 or higher
- Maven 3.6+
- Node.js 18+
- MySQL 8.0+ (for local development)
- Docker and Docker Compose (for containerized deployment)

### Option 1: Docker Compose (Recommended)

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd task-manager
   ```

2. **Start the application**
   ```bash
   docker compose up --build
   ```

3. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8080
   - Swagger UI: http://localhost:8080/swagger-ui.html

4. **Stop the application**
   ```bash
   docker compose down
   ```

### Option 2: Local Development

#### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Configure database**
   - Create MySQL database named `taskmanager`
   - Update `src/main/resources/application.properties` with your database credentials

3. **Build and run**
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

4. **Access Swagger UI**
   - http://localhost:8080/swagger-ui.html

#### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   - http://localhost:3000

## 🧪 Testing

### Backend Tests

Run the backend tests using Maven:
```bash
cd backend
mvn test
```

### Test Coverage
- Task creation
- Task retrieval (all and by ID)
- Task update
- Task completion
- Task deletion
- Error handling (task not found, invalid data)

## 📱 User Interface

### Dashboard
- Displays total tasks count
- Shows pending tasks count
- Shows completed tasks count

### Task Form
- Title input (required)
- Description textarea (optional)
- Priority dropdown (Low, Medium, High)
- Status dropdown (Pending, Completed)
- Due date picker (optional)
- Add/Update and Cancel buttons

### Task List
- Displays tasks as cards
- Shows task title, description, priority, status, and due date
- Edit, Complete, and Delete action buttons
- Color-coded priority badges
- Status indicators
- Empty state message when no tasks exist

### Search and Filter
- Search bar to filter tasks by title
- Status filter dropdown (All, Pending, Completed)
- Priority filter dropdown (All, Low, Medium, High)

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory (copy from `.env.example`):

```env
# Database Configuration
DB_HOST=mysql
DB_PORT=3306
DB_NAME=taskmanager
DB_USERNAME=taskuser
DB_PASSWORD=taskpassword

# Frontend Configuration
VITE_API_URL=http://localhost:8080
```

### Application Properties

Backend configuration is in `backend/src/main/resources/application.properties`:

```properties
# Application Configuration
spring.application.name=task-manager
server.port=8080

# Database Configuration
spring.datasource.url=jdbc:mysql://${DB_HOST:mysql}:${DB_PORT:3306}/${DB_NAME:taskmanager}?createDatabaseIfNotExist=true&useSSL=false&serverTimezone=UTC
spring.datasource.username=${DB_USERNAME:root}
spring.datasource.password=${DB_PASSWORD:rootpassword}

# JPA/Hibernate Configuration
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

## 📸 Screenshots

### Frontend Dashboard
![Dashboard](docs/screenshots/dashboard.png)

### Task Form
![Task Form](docs/screenshots/task-form.png)

### Task List
![Task List](docs/screenshots/task-list.png)

### Swagger UI
![Swagger](docs/screenshots/swagger.png)

## 🔒 Security Considerations

- Passwords and sensitive data are not committed to version control
- Environment variables are used for configuration
- CORS is configured for development
- Input validation on all API endpoints
- SQL injection prevention through JPA/Hibernate

## 🚦 Validation Rules

### Task Validation
- **Title**: Required, max 200 characters
- **Description**: Optional, max 1000 characters
- **Priority**: Required (LOW, MEDIUM, HIGH)
- **Status**: Required (PENDING, COMPLETED)
- **Due Date**: Optional, must be today or future date

## 🐛 Error Handling

The application handles various error scenarios:
- **404 Not Found**: Task not found
- **400 Bad Request**: Invalid task data or validation errors
- **500 Internal Server Error**: Unexpected server errors

All errors return structured JSON responses with status codes and messages.

## 🔄 Future Improvements

- User authentication and authorization
- Task categories and tags
- File attachments for tasks
- Task comments and collaboration
- Email notifications for due dates
- Calendar view for tasks
- Mobile app (React Native)
- Advanced reporting and analytics
- Task templates
- Recurring tasks

## 📝 License

This project is created for educational purposes as part of a Java Programming internship.

## 👥 Author

Built as part of the Java Programming Internship Project - Task 3: Full-Stack Java App (React)

## 🙏 Acknowledgments

- Spring Boot team for the excellent framework
- React team for the amazing UI library
- The open-source community for various tools and libraries

---

**Note**: This project is designed to be simple and functional, focusing on demonstrating core full-stack development skills without over-engineering.
