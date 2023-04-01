
// Create Element accepts 3 arguments
// 1. type of element
// 2. props
// 3. children

const headerContent = 'Hello World From Akshay Sani!'

const heading = React.createElement('h1', null, headerContent);
const parent = React.createElement('div', { id: 'haris' }, heading);

// console.log(parent); returns the object


// React DOM is used to render the element on the browser
// It renders object on the browser


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);