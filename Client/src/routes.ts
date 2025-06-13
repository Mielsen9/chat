import { createBrowserRouter } from "react-router-dom";
import App from "./App";

// Створення маршрутів за допомогою createBrowserRouter
export const router = createBrowserRouter([
		{
			path: "/",
			element: <App/> ,
			// children: [
			// 	{ path: "/", element: <Main/> },
			// ],
		},
	],
	// {
	// 	basename: "/zvir-petro-v-portfolio", // Шлях до репозиторію на GitHub
	// }
);