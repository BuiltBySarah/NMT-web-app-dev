// Challenge 3 Starter
// Create the class and use the constructor method
class UserObject {
    constructor (fNameInput, lNameInput, ageInput) {
        this.firstName = fNameInput
        this.lastName = lNameInput
        this.age = ageInput
    }
}

// Create an instance of the ComplexObject class (hint: add the properties)
const userObjectInstance = new UserObject("Sarah", "Aristei", 19);

// Log the new instance of the object
console.log(userObjectInstance);