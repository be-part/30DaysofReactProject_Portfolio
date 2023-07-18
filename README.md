# 30DaysOfReact Project

## Day 03

### Intro

This is a react app to practise and consolidate my React and JavaScript skills.

### Skills recapped and covered:

* Setting up a React app, including using create-react-app and forming the files and folders manually
* The contents of the React boilerplate
* Passing static and dynamic data
* Rendering lists
* Adding styling: inline, internal or external 

### Additional notes of learning:

This tutorial was created with React 16.13.1, however, React is currently on 18.2.0.
I noticed that while the tutorial uses ReactDOM.render(), from 18 onwards, React now uses createRoot().render().
The createRoot() method is used to create a root for a React application.
The render() method is called on the root to render the React component tree. 

And so, in my practise projects I have opted to use:

`const rootElement = document.getElementById('root')`

`createRoot(rootElement).render(app);`

