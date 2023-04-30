export const getUser = () => {
  return JSON.parse(sessionStorage.getItem("user"));
};

export const saveUser = (userInfo) => {
  sessionStorage.setItem("user", JSON.stringify(userInfo));
};

export const clearUser = () => {
  sessionStorage.removeItem("user");
};

export const validateUser = () => {
  if (getUser()) {
    return true;
  }
  return false;
};
