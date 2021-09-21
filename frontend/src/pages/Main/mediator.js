export const Logout = ({ history }) => {
    localStorage.removeItem("toobiauth");
    localStorage.removeItem("user");
    history.push("/login");
};
