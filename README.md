# 30DaysOfReact Project Portfolio

## Intro

This is a react app to practise and consolidate my React and JavaScript skills. The mini apps in this project cover the skills from Days 01-18 in the #30 Days of React Challenge.

### Skills recapped and covered:

* Setting up a React app, including using create-react-app and forming the files and folders manually
* The contents of the React boilerplate including general folder setup
* Passing static and dynamic data
* Rendering lists
* Adding styling: inline, internal or external 
* Components
* Props
* State
* Conditional Rendering
* Events and handling events
* Forms and controlled vs. uncontrolled components
* React Router
* Contexts

### Additional notes of learning:

This tutorial was created with React 16.13.1, however, React is currently on 18.2.0.
I noticed that while the tutorial uses ReactDOM.render(), from 18 onwards, React now uses createRoot().render().
The createRoot() method is used to create a root for a React application.
The render() method is called on the root to render the React component tree. 

And so, in my practise projects I have opted to use:

`const rootElement = document.getElementById('root')`

`createRoot(rootElement).render(app);`

### What is #30 Days of React?

This is a challenge that takes place of 30 days to learn and practise the basics of React. The original repo can be found here: https://github.com/Asabeneh/30-Days-Of-React 