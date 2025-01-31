const App = () => {
	return React.createElement('h1', null, 'Hello, World!');
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
