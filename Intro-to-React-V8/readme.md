1. This course has been initially setup with React 18 CDN links, but as of making this repo, React no more recommends CDNs. so as you can see in the second commit of the repo, we added two CDN scripts, one is about React and another is about REACT DOM. the reason for this differentiation is because React now also has things like React Native and React 360, so the first script "React" handles all the features/library for core react and the "React DOM" handles specfic parts that is needed for Broswer Rendering.
2. The first thing that goes into notice is that React uses PascalCase as the naming convention for its components. Why : because then it will be easy to distinguish between regular HTML elements and React components.
3. The next thing will be `React.createElement` which is a function from React that creates a new Element (JSX/HTML) in the virtual DOM. Yes it is different because it pushes the element not into the actual DOM but into React DOM. the first argument that goes into it is the element type (h1, p, div). the second argument will be an object {} that accepts attributes for that element. the third argument will accept child elements or textnodes. below a prope code explanation for it

```javascript
const element = React.createElement(
  "h1",
  { className: "my-title" },
  "Hello, World!"
);

console.log(element);
// Output: { type: 'h1', props: { className: 'my-title', children: 'Hello, World!' }, key: null, ref: null }
```

4. So using React.createElement we create a new Component. what is a component? it is completely piece of small functional code block (a small app basically), which can be used again and again in the same project. Imagine it is like a rubber stamp. we created the rubber stamp once then whenever we needed that, we just do a boom on the paper.
5. Next thing will be : One way data Flow. React has this rule that any data can be passed from Parent component to Child component but vice versa is not possible. It is really good for debugging as it shows us the full track of the data. After React introduced it, most other Frameworks implemented the same.
6. And then this rule of data flow, gave birth to one of the fundamental React feature called : Props (properties). Props works just like function arguments but better. they are used for passing data from Parent to Children components. For an example, under a Showcase component there are multiple card components, but it is not ideal that every card is holding same data. so to fix this, while we are making our card components we can have its props set. hence every time we render a new card component, we can pass a new set of data to it through those props : a new image, a new heading, a new description, a new price etc.
7. Let's come back to createElement now. so for a long time now, ways like createElement has become obselete. the work of creating new element and pushing it to the Virtual DOM has been done by JSX. JSX is a syntax extension to the JavaScript, which allows us to write HTML in JavaScript.  [Here is the difference in files.](https://github.com/DebasishSahoo10/Frontend-Masters/commit/68144f1529bd0ae1f78d91b326717fee334dabc2). See how easy and declarative it is. From this JSX exentsion this whole feature of React being DECLARATIVE comes from. 
8. But including JSX makes the app break by default as broswer doesn't support JSX. to make it work we need some _build steps_ and a _build tool_. What are Build Steps : Build Steps are procceses that takes all the code of a modern app and performs multiple optimization keys on them to make the app load faster and be faster. Below are some of the build steps JSX needs :
```
Browser compatibility: As mentioned, browsers cannot natively understand JSX syntax. Therefore, a build tool is required to transpile the JSX code into regular JavaScript that can be executed by browsers.

Modularity and code organization: JSX is often used in conjunction with modular JavaScript frameworks like React, where code is organized into components. In order to use JSX components, a build tool is required to bundle the various component files together and transpile them into browser-readable JavaScript.

Optimization and performance: Build tools like webpack and Babel can optimize JSX code by removing dead code and minimizing bundle sizes. This can result in better performance and faster load times for applications that use JSX.
```
9. then comes Build Tools : these are the tools who performs the build steps the best. every build tools have some key rules to it and performs the optimisation different from others. For this repo let's use the latest trending one VITE. Here are few optimsation Vite does to a React code :
``` 
Parsing: Vite parses the entry point of the project to determine its dependencies.

Bundling: Vite then bundles the code, using a fast and efficient ES modules bundler to create an optimized dependency graph.

Transformation: Vite applies any necessary transformations to the code, such as compiling TypeScript or transpiling ES6 code to ES5.

Minification: Vite can optionally minify the code to reduce its size.

Asset Optimization: Vite can optimize assets like images, fonts, and CSS to reduce their file size.

Output: Vite then outputs the final build artifacts, such as JavaScript files, CSS files, and other assets, ready for deployment to a production environment.
```
10. Render functions are meant to be always state less it, it means they should not never modify/mutate global data (basically no side effects). Render functions also should be fast.
11. Hooks shouldn't be created on any condition, there usage can be conditonal but their creation shouldn't be.
12. ***React Component Lifecycle*** : the "life cycle" refers to the series of events or phases that a component goes through during its existence, from its creation to its removal from the DOM. In React class components have different methods that get called at specific points during their life cycle, allowing developers to perform actions or handle behavior at different stages of a component's existence. But when Functional Components took over, then all those methods have got replaced by hook called "useEffect", it tracks 3 basic things of a component : Mount(Birth/First Render) , Update (State Update mostly), Unmount(Death/Removal from DOM).
13. ***What are Hooks*** : Hooks are a feature introduced in React 16.8 that allows functional components in React to have state and side-effect capabilities, which were previously only available in class components. Hooks provide a more concise and intuitive way to manage state and side effects in functional components, without the need for class syntax and without introducing unnecessary nesting. We can imagine Hooks as extra features from React which gives us and our app some super powers over usual DOM manipulations
14. What is the Idea behind Hooks : The idea behind Hooks is to provide a more straightforward and unified way to handle state and side effects in React components. Prior to Hooks, complex state management and side-effect logic often required the use of class components with lifecycle methods, which could lead to cumbersome and harder-to-understand code. Hooks were introduced to simplify this process and make it easier to manage state and side effects in functional components.
15. Why Hooks are called Hooks : Hooks are called "Hooks" because they are special functions that allow developers to "hook into" React's lifecycle and state management features, enabling functional components to use previously exclusive features of class components
16. Naming of useEffect : The useEffect hook in React is called "useEffect" because it allows developers to perform side effects in functional components, such as fetching data, updating the DOM, or subscribing to data streams, after the component has rendered.
17. Can we have several useEffects for one component ? : Yes, it is perfectly fine to have multiple useEffects under one Component?
18. ***What is the useEffect hook*** : useEffect is a hook in React that allows you to perform side effects in functional components, such as fetching data, updating the DOM, or subscribing to data streams, after the component has rendered. It is commonly used for handling asynchronous operations or interactions with the external world.
19. The useEffect hook works by taking two arguments: a function and an array of dependencies. The function you pass as the first argument to useEffect will be executed after the component has rendered, and it will be executed again whenever any of the dependencies in the array change. The dependencies are specified as the second argument to useEffect, and they determine when the effect should be re-run. Now there can be three states of that dependency array, let's look at it via code examples :
```javascript
  const [data, setData] = useState([]);

  // On Every Render
  useEffect(() => {
    console.log("I will run first time my component rendered")
    console.log("And I will also run every time my component re-renders due to changes in its own state, props, or any other component in the app")
  });

  // Only on the First Render
  useEffect(() => {
    console.log("I will run only the first time my component rendered")
  }, []);

  // On the First Render + whenever the value of data changes (dependency array)
  useEffect(() => {
    console.log("I will run only when the the state called name changes")
  }, [data]);
```
20. What is the correct place for the hooks : hooks in React are typically placed inside the body of a functional component, above the return statement. Hooks are called at the top level of the component, and they should not be called inside loops, conditions, or nested functions. This ensures that hooks are called in the correct order and behave as expected in React functional components.
21. ***Cleanup in useEffects*** : The "cleanup" in useEffect refers to a mechanism that allows you to clean up any resources or side effects that were created by the useEffect hook when the component unmounts or when the dependencies of the useEffect hook change. This is important to prevent memory leaks and ensure that your component behaves correctly. In useEffect, you can return a cleanup function from the effect function, and React will automatically call that function when the component unmounts or when the effect is re-run due to changes in dependencies. The cleanup function is typically used to undo any operations or clean up resources that were created by the effect, such as unsubscribing from a data stream, cancelling a request, or removing event listeners. It's important to use the cleanup function effectively in useEffect to ensure that any resources or side effects created by the effect are properly cleaned up when they are no longer needed. This helps to maintain the performance and stability of your React components.
22. ***What are custom hooks*** : 
23. Breaking components into further components : so the question of when should we pull things out to make their individual component, when something becomes able to individually testable or individually usable or something (any component) is getting too big. Because smaller, single purpose components are easier to read.