// our JavaScript goes here
const Pet = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Purple"),
            React.createElement("h2", {}, "Labrador"),
            React.createElement("h2", {}, "4 Months")
        ]
    )
}


const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me App"),
            React.createElement(Pet),
            React.createElement(Pet)
        ]
    )
} 

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))