import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<div class="container-fluid">
			<App />

			<small>
				Developed by{" "}
				<a
					href="https://www.linkedin.com/in/mi-le-hagen-5aa0b617/"
					target="_blank"
					rel="noreferrer"
				>
					Mi Le Hagen
				</a>
				, open-sourced on{" "}
				<a
					href="https://github.com/milehagen/final-project-react-weather-app"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
				, and hosted on{" "}
				<a
					href="https://quirky-mccarthy-6ccac6.netlify.app/"
					target="_blank"
					rel="noreferrer"
				>
					Netlify
				</a>
			</small>
		</div>
	</React.StrictMode>,
	document.getElementById("root")
);
