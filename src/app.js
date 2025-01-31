const App = () => {
	// return React.createElement('h1', null, 'Hello, World!');
	return <h1>{apiURL}</h1>;
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));

const apiURL = process.env.APP_API_URL;
