1. This course has been initially setup with React 18 CDN links, but as of making this repo, React no more recommends CDNs. so as you can see in the second commit of the repo, we added two CDN scripts, one is about React and another is about REACT DOM. the reason for this differentiation is because React now also has things like React Native and React 360, so the first script "React" handles all the features/library for core react and the "React DOM" handles specfic parts that is needed for Broswer Rendering.
2. The first thing that goes into notice is that React uses PascalCase as the naming convention for its components. Why : because then it will be easy to distinguish between regular HTML elements and React components and other JavaScript codes.
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
22. ***What are custom hooks*** : Custom hooks in React are user-defined hooks that allow developers to encapsulate reusable logic and behavior into functions that can be easily shared and reused across different components. Custom hooks are created using the same conventions as built-in React hooks, such as starting the function name with "use", and they can be used in functional components just like any other hook.
23. Is necessarily custom hooks need to use an existing hook to be a custom hook ? : No, it is not necessary for a custom hook in React to use an existing hook to be considered a custom hook. Custom hooks in React are simply functions that follow a specific naming convention (i.e., they start with "use") and are used to encapsulate logic that can be shared and reused across multiple components.
24. Breaking components into further components : so the question of when should we pull things out to make their individual component, when something becomes able to individually testable or individually usable or something (any component) is getting too big. Because smaller, single purpose components are easier to read. But making too many components just to have smallest pieces is also a bad idea. App performance will get slow on both the extreme scenarios.
25. Development Package vs. Production Package : Don't ever ship the Development Package of React as Production, because it is four times bigger than the Production Package. Slack famously did it once.
26. Strict Mode : Strict Mode ensures the proper working of your app and its statelessness before the actual render, so it runs every initialisation process twice (once before render and once for the render).
27. Issue of Stale State : The issue of stale state refers to a situation in React where the state used in a component is not updated to the latest value when it is accessed or used in a function or callback.In React, state updates are asynchronous and batched for performance reasons. This means that when you call a state update function, such as setState() in a functional component that uses useState(), the state is not immediately updated. Instead, React schedules the update to be processed later, and the component continues to execute the remaining code. This can lead to a potential issue of stale state, where the component may still be using an outdated value of state, even after calling a state update function.
28. How to avoid Stale State : Use functional updates for state: When updating state in React, it's recommended to use functional updates instead of directly modifying the current state. You can pass a function to the state updater function to ensure that you are always updating the state based on the latest state value. This can help avoid issues with stale state. Below is the code example =>
```javascript
const showHeros = () => {
  setTabList(prevTabList => heroes); // Use functional update
};
const showVillains = () => {
  setTabList(prevTabList => villains); // Use functional update
};

```
29. Function Memoization : Function memoization is a technique in computer programming where the result of a function is cached based on its input arguments, so that if the same input arguments are passed again, the cached result is returned instead of re-computing the result. This can be useful for optimizing expensive computations or calculations. This is super usefull when we are using a single call back multiple times. and this can be done in React by the hook called useCallback()
30. Why useState hook has been made as asynchronous? : The useState hook in React is designed to be asynchronous to optimize performance and improve the efficiency of state updates.
31. Then how to make it synchronous : by useEffect, if we pass the state variable as a dependency to the the useEffect, then it will run whenever that state variable changes.
32. Short Circuit Evaluation : Short-circuit evaluation in React, or in JavaScript in general, refers to the behavior where the evaluation of a logical expression stops as soon as the final result is determined, without fully evaluating all the operands. In JavaScript, logical expressions are evaluated from left to right, and due to short circuit evaluation it stops as soon as a truthy or falsy value is encountered. In React, short-circuit evaluation is often used in conditional rendering, where certain parts of the UI are conditionally rendered based on the truthiness or falsiness of a given value or expression.
```javascript
return (
  <div>
    {isDisplay && (
      <p>This text will be rendered only if isDisplay is truthy</p>
    )}
  </div>
);
```
33. Mutation in useState : when updating the state of useState variable, if we are directly mutating the previous state and then it won't update the state right away, that's why methods like map and filter works to successfully to update the previous state (as they make a copy of the provided array) but thinks like sort which directly mutates the array fails to update the array. Now why react works this way ?
34. Shallow Comparison : React uses a mechanism called "shallow comparison" to detect changes in state and trigger re-renders. When you mutate the previous state object or array directly, React may not detect the change, as the reference to the object or array remains the same. As a result, the component may not re-render, and the updated state may not be reflected in the UI.
35. Lifting State up : 
  - In React, "lifting state up" refers to a pattern where the state of a component is moved to a higher-level component in the component tree, making it accessible to multiple child components. This allows for sharing and managing state in a more centralized manner, making it easier to maintain and update the state across components.
  - The concept of lifting state up is based on the principle of "single source of truth," where the state is managed in a single location and passed down as props to child components. Child components can then modify the state through callbacks passed to them as props, and the updated state is propagated back up to the higher-level component, which re-renders and passes the updated state down to its children.
  - Lifting state up can be useful in various scenarios, such as when multiple components need to access and modify the same data, or when there is a need to synchronize the state of different components. By centralizing the state management in a higher-level component, it can help prevent issues like state duplication, inconsistent state, and make it easier to reason about the flow of data in a React application.
36. Link vs. NavLink (From React Router):
 - In React, Link and NavLink are components provided by the popular routing library react-router-dom for handling navigation between different routes in a single-page application (SPA). While both Link and NavLink can be used to create links, NavLink is a higher-level component that extends Link and provides additional features, including support for styling active links.
 - The main reason to use NavLink instead of Link is to highlight or apply special styles to the link that represents the currently active route. When a user clicks on a link and navigates to a different route, it is common to visually indicate the active link to provide feedback to the user about their current location within the application. This is typically achieved by applying a different style, such as changing the color, adding an underline, or changing the background color, to the active link.
37. Dot Notation vs. Bracket Notation (while accessing Object Properties) : Bracket notation allows for dynamic access to object properties, including properties that may be updated asynchronously. But Dot notation doesn't do that.
38. .JS (vs) .JSX (component naming) : While both ".js" and ".jsx" are valid file extensions for React components, naming your files with the ".jsx" extension can provide some additional benefits such as automatic compilation of JSX, clearer intent to other developers, differentiaton between pure JS stuff and React Components, and improved developer experience.
39. Synthetic React Events vs. Native Browser Event : "synthetic event" refers to events that are created and managed by the React library, while "native event" refers to events that are native to the browser and are handled directly by the browser. Here are some differnences : (1) Cross-browser consistency (2) Event delegation (3) Event pooling. Let's learn by an example below.
40. Why onChange reflects in the UI immidiately but regular event listener like "change" doesn't work that way : 
  - In React, the onChange event is a synthetic event that is triggered when the value of an input field or other form elements changes. When an onChange event is triggered, React automatically updates the component's state, re-renders the component, and reflects the updated state in the user interface immediately.
  - This behavior is possible because React uses a mechanism called "event delegation" and a process called "reconciliation" to optimize performance. Event delegation means that event handlers in React are attached to a higher-level DOM element, typically the root component, instead of attaching event handlers to individual DOM elements. When an event is triggered on a child DOM element, it is captured by the event handler attached to the root component, and React then determines which component's event handler should be called based on the event's target and the component tree.
  - Once the event handler is called, React updates the component's state and performs a process called "reconciliation" to determine what changes need to be made to the DOM to reflect the updated state. React then efficiently applies only the necessary changes to the DOM, resulting in fast and optimized UI updates.
  - On the other hand, when using regular event listeners like the native "change" event directly in JavaScript without React, the event handler is attached directly to the DOM element itself, and there is no automatic process of updating the component's state or performing reconciliation. Therefore, changes to the component's state may not be reflected in the user interface immediately, as the DOM updates are not optimized by React's reconciliation mechanism
  - In summary, React's synthetic events and its reconciliation mechanism provide optimized and efficient updates to the user interface when handling events, such as onChange, which reflects changes in the UI immediately. Regular event listeners like the native "change" event may not provide the same level of performance optimizations and may require additional manual handling to update the user interface.
41. Is React Backward Compatible : 
  - Yes, React generally strives to maintain backward compatibility, which means that code written using older versions of React should continue to work with newer versions of React without requiring major modifications. However, there may be exceptions where certain features or APIs are deprecated, changed, or removed in newer versions of React, which could potentially break existing code.
  - React follows a semantic versioning (semver) convention, which means that major version changes may introduce breaking changes, while minor and patch version changes are expected to be backward compatible. React provides detailed release notes and documentation for each version, outlining any changes, deprecations, or removals, to help developers understand the implications of upgrading.
42. Why we need a Router in our App : Reasons can be many but the most important one is to build SPAs (Single Page Applications).
43. Difference between A tag and Link tag : A tag refresh the page to take you to the given path. But Link does that without refreshing the page.
44. Note : Routing and Accessibility are hard when they go together but the React Router handeled this really well.
45. Note : useParam won't work without Router/BrowserRouter. But why we use useParams : to get the Dynamic Part of a Routing Link which we are passing through the Link/NavLink and then give it to the component we are passing as an element to the specific route
46. Can we have two dynamic ID in a single dynamic link in react router : Yes, It is Possible. To create a dynamic link with two dynamic IDs, you can use a nested parameterized route
```javascript
<Routes>
  <Route path="/users/:userId/orders/:orderId" element={<Order />} />
</Routes>
```