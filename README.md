# The Six Server

The Six Server is a backend application designed for managing sports-related articles and user accounts. It allows admins to create, read, update, and delete articles and users while ensuring secure and efficient operations.

---

## Features

- **Article Management**:

  - Admins can create, read, update, and delete articles.
  - Supports file uploads for article images.

- **User Management**:

  - Admins can create, update, and delete user accounts.
  - Ensures secure user authentication and authorization.
  - Users can Register an Login to their account

- **Authentication & Security**:

  - JWT-based authentication for secure access.
  - Password hashing using bcrypt.js.

- **Data Validation**:

  - Input validation powered by `validator` to ensure data integrity.

- **File Handling**:
  - Multer integration for seamless file uploads.

---

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **File Uploads**: Multer
- **Validation**: Validator.js
- **Security**: bcrypt.js
