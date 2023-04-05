



1. This course has been initially setup with React 18 CDN links, but as of making this repo, React no more recommends CDNs. so as you can see in the second commit of the repo, we added two CDN scripts, one is about React and another is about REACT DOM. the reason for this differentiation is because React now also has things like React Native and React 360, so the first script "React" handles all the features/library for core react and the "React DOM" handles specfic parts that is needed for Broswer Rendering.
2. The first thing that goes into notice is that React uses PascalCase as the naming convention for its components. Why : because then it will be easy to distinguish between regular HTML elements and React components.
3. The next thing will be  `React.createElement`  which is a function from React that creates a new Element (JSX/HTML) in the virtual DOM. Yes it is different because it pushes the element not into the actual DOM but into React DOM. the first argument that goes into it is the element type (h1, p, div). the second argument will be an object {} that accepts attributes for that element. the third argument will accept child elements or textnodes. below a prope code explanation for it
```javascript
const element = React.createElement(
  'h1',
  { className: 'my-title' },
  'Hello, World!'
);

console.log(element);
// Output: { type: 'h1', props: { className: 'my-title', children: 'Hello, World!' }, key: null, ref: null }
```
4. So using React.createElement we create a new Component. what is a component? it is completely piece of small functional code block (a small app basically), which can be used again and again in the same project. Imagine it is like a rubber stamp. we created the rubber stamp once then whenever we needed that, we just do a boom on the paper.
5. Next thing will be : One way data Flow. React has this rule that any data can be passed from Parent component to Child component but vice versa is not possible. It is really good for debugging as it shows us the full track of the data.
