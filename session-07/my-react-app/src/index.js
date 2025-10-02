//Problems I had (in case React decides to stop working again):
// Killing the current process -
// netstat -ano | findstr :3000
// The last number is the ID
// TCP    0.0.0.0:3000    0.0.0.0:0    LISTENING    12345
// taskkill /PID 12345 /F
// Re-run npm start on Command prompt

import React from "react";
import { createRoot } from "react-dom/client";

//  const App = () => <h1>Hello, React!</h1>;

//  createRoot(document.getElementById("root")).render(<App />);

const root = createRoot(document.getElementById('root'));
root.render(<App />);
//Usage example
function App() {
    const items = [
        { id: 1, title: "First Item" },
        { id: 2, title: "Second Item" },
        { id: 3, title: "Third Item" },
    ];
// Your code goes here to return JSX
// Hint: you will need to loop through these items
    function ItemList({ items }) {
    //template
    return (
        <ol>
        {items.map((item)=> (
            <li key={item.id}>{item.title}</li>
            ))}
        </ol>
    );
    }
    // render
    return <ItemList items={items} />
}

