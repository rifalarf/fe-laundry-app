export const login = (email, password) => {
  if (email === "admin@mail.com" && password === "admin123") {
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userEmail", email);
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem("isAuthenticated");
  localStorage.removeItem("userEmail");
};

export const isAuthenticated = () => {
  return localStorage.getItem("isAuthenticated") === "true";
};

export const getUserEmail = () => {
  return localStorage.getItem("userEmail") || "";
};
