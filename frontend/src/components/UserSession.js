import { backendLink } from "./meta";

export const getUser = async () => {
	const userBaiscInfo = JSON.parse(sessionStorage.getItem("user"));
	if (!userBaiscInfo) return false;
	return await fetch(backendLink + "/info/" + userBaiscInfo.name)
		.then((response) => response.json())
		.then((response) => {
			return response;
		})
		.catch((err) => {
			console.log(err);
			return false;
		});
};

export const saveUser = (userInfo) => {
	sessionStorage.setItem("user", JSON.stringify(userInfo));
};

export const clearUser = () => {
	sessionStorage.removeItem("user");
};
