import "../assets/css/app.css";
import "../assets/css/style.css";
import SideBar from "./SideBar";
import ContentWrapper from "./ContentWrapper";

function App() {
	return (
		<div id="wrapper">
			<SideBar />
			<ContentWrapper />
		</div>
	);
}

export default App;
