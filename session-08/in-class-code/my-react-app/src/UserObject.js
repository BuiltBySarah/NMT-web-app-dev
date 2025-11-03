import React from 'react';
import ReactDOM from "react-dom/client";
import { getUserInfo, formatUserSkills } from './utils/utils.js'; // Step 1 fix the import statement

function UserProfile(props) {
  // Step 2 create object correctly
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    isStudent: false,
    skills: ['JavaScript', 'React', 'CSS']
  };

  // Step 3 fix the map method & fix duplicated method
  const formattedSkills = formatUserSkills(user.skills);

  // Step 4 destructure props properly
  const {
    firstName, 
    lastName, 
    age, 
    isStudent, 
    skills
  } = user;

  // Step 5 Fix the ternary operator
  const greetingMessage = `Hello, ${firstName ? firstName : 'Guest'}!`;

  // Step 6 Fix the duplicated method
  // const formattedSkills = formatSkills(user.skills);

  // Use getUserInfo utility function to generate user info string
  const userInfo = getUserInfo(user);

  return (
    <div>
      <h1>User Profile</h1>
      <p>{greetingMessage}</p>
      <p>Age: {age > 18 ? "Adult" : "Minor"}</p>
      <p>Skills: {formattedSkills.join(', ')}</p>
    </div>
  );
}

export default UserProfile;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<UserProfile />);