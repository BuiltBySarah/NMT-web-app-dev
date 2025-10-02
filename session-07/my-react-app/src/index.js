//Problems I had (in case React decides to stop working again):
// Killing the current process -
// netstat -ano | findstr :3000
// The last number is the ID
// TCP    0.0.0.0:3000    0.0.0.0:0    LISTENING    12345
// taskkill /PID 12345 /F
// Re-run npm start on Command prompt

import React from "react";
import { createRoot } from "react-dom/client";

const App = () => <h1>Hello, React!</h1>;

createRoot(document.getElementById("root")).render(<App />);
