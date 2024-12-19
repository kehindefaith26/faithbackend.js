//Address Book
const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Array to store contacts
let addressBook = [];

// Function to add a new contact
function addContact() {
    rl.question("Enter the contact's name: ", (name) => {
        rl.question("Enter the contact's phone number: ", (phone) => {
            rl.question("Enter the contact's email: ", (email) => {
                rl.question("Enter the contact's address: ", (address) => {
                    // Create a contact object
                    const contact = {
                        name: name,
                        phone: phone,
                        email: email,
                        address: address
                    };

                    // Add the contact to the address book
                    addressBook.push(contact);
                    console.log("Contact added successfully!");
                    mainMenu();
                });
            });
        });
    });
}

// Function to search for a contact by name
function searchContact() {
    rl.question("Enter the name of the contact to search: ", (name) => {
        const contact = addressBook.find(c => c.name.toLowerCase() === name.toLowerCase());

        if (contact) {
            console.log(`Contact found:
            Name: ${contact.name}
            Phone: ${contact.phone}
            Email: ${contact.email}
            Address: ${contact.address}`);
        } else {
            console.log("Contact not found.");
        }
        mainMenu();
    });
}

// Function to display all contacts
function displayContacts() {
    if (addressBook.length === 0) {
        console.log("No contacts available.");
    } else {
        console.log("Contacts:");
        addressBook.forEach((contact, index) => {
            console.log(`${index + 1}. ${contact.name}`);
        });
    }
    mainMenu();
}

// Main menu function
function mainMenu() {
    console.log("\nChoose an option:");
    console.log("1. Add Contact");
    console.log("2. Search Contact");
    console.log("3. Display Contacts");
    console.log("4. Exit");

    rl.question("Enter your choice: ", (choice) => {
        switch (choice) {
            case '1':
                addContact();
                break;
            case '2':
                searchContact();
                break;
            case '3':
                displayContacts();
                break;
            case '4':
                console.log("Exiting the address book application.");
                rl.close();
                break;
            default:
                console.log("Invalid choice. Please try again.");
                mainMenu();
        }
    });
}

// Start the address book application
mainMenu();