import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Container
import Login from "./container/Login";
import PublishWork from "./container/PublishWork";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/publish-work">
					<PublishWork />
				</Route>
				<Route path="/">
					<Login />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
