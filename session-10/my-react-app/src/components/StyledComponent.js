import React, {useState, useEffect} from 'react'
import ReactDOM from "react-dom/client";
import "./style.css";

export default function StyledComponent() {
  const [index, setIndex] = useState(3);

  useEffect(() => {​
    function consoleMessage() {​
    	console.log("this is my message");  ​
	  }​
    consoleMessage();​

  }, [index]); // Dependency array​


    return (
      <>
        <section className="animatedSection">
        This is a styled section with animation
        </section>
        <button className="button is-primary" onClick={() => setAnimationDuration(animationDuration + 1)}>Click Me</button>
      </>
    );
  }

// 2) Get a reference to the div with ID root
const element = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(element);
// Stage 6 ------
root.render(<StyledComponent />);




























// import React, {useState, useEffect} from 'react'
// export default function StyledComponent() {
//   const [animationDuration, setAnimationDuration] = useState(3)

//   useEffect(() => {
//     console.log(`Component mounted ${animationDuration}`);

//     return () => {
//       console.log(`Component unmounted ${animationDuration}`);
//     }
//   }, [animationDuration])

//     return (
//       <>
//         <section className="animatedSection" style={{animation: `fadeInScale ${animationDuration}s ease-in-out infinite`}}>
//         This is a styled section with animation
//         </section>
//         <button className="button is-primary" onClick={() => setAnimationDuration(animationDuration + 1)}>Click Me</button>
//       </>
//     );
//   }