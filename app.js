import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement("div", {
    id: "heading",
}, [
    React.createElement("h1", {id: "heading1"}, "First"),
    React.createElement("div", {}, [
        React.createElement("h2", {id: "heading2"}, "Second"),
        React.createElement("h3", {id: "heading3"}, "Third")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(element);