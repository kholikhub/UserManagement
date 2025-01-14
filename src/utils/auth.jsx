// Get user from localStorage
export const getUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
};

// Login user
export const loginUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    return user;
  }
  return null;
};

// Logout user
export const logoutUser = () => {
  localStorage.removeItem("currentUser");
};

// Register user
export const registerUser = (email, password, role) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userExists = users.some((user) => user.email === email);

  if (userExists) {
    return false; // User already exists
  }

  users.push({ email, password, role });
  localStorage.setItem("users", JSON.stringify(users));
  return true; // Registration successful
};
