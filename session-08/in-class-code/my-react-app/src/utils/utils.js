export const getUserInfo = function(object) {
  return `Name: ${object.firstName} ${object.lastName}, Age: ${object.age}`;
}

export const formatUserSkills = function(object) {
  return object.map((skill) => skill.toUpperCase());
}

  