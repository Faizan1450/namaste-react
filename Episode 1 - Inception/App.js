const heading = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h2", { id: "heading1" }, "Heading 1"),
        React.createElement("h2", { id: "heading2" }, "Heading 2")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h2", { id: "heading1" }, "Heading 1"),
        React.createElement("h2", { id: "heading2" }, "Heading 2")
    ])
]);

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);