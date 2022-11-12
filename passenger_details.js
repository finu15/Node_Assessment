const read = require('readline-sync')
const fs = require('fs')

while (true) {
    console.log("1. Add User");
    console.log("2. Update User");
    console.log("3. Delete User");
    console.log("4. Search User");
    console.log("5. Exit");

    let option = read.question('Please select an option: ');
    switch (option) {
        case "1":
            addUser();
            break;
        case "2":
            updateUser();
            break;
        case "3":
            deleteUser();
            break;
        case "4":
            // search();
            searchUserEmail();
            break;
        case "5":
            process.exit(0);
            break;
        default:
            console.log("Invalid option");
    }
}

function addUser() {
    console.log("Add User Selected");
    var user = {
        name: null,
        username: null,
        email: null,
        phone: []
    };
    user.name = read.question("Name of User: ");
    user.username = read.question("Enter a Username: ").toLowerCase();
    user.email = read.question("Email of User: ");
    user.phone[0] = read.question("Phone Number of user: ");
    let a = 1;
    while (a == 1) {
        let phn = read.question('Do you want to add more numbers?y/n: ');
        switch (phn) {
            case "y":

                number = read.question("How many numbers want to add? ");
                for (let i = 1; i <= number; i++) {

                    user.phone[i] = read.question("Alternate Phone Number: ");
                }

                break;
            case "n":
                a = 0;
        }

    }

    let fileName = getFileName(user.username);
    var json = JSON.stringify(user);
    fs.writeFileSync(fileName, json);
}


function getFileName(userName) {
    return `data/${userName}.json`;
}

function updateUser() {
    let userName = read.question('Enter the username: ');
    var fileName = getFileName(userName);

    var userText = fs.readFileSync(fileName, 'utf8');
    var user = JSON.parse(userText);

    console.log("Enter the details or leave it blank");
    let name = read.question("Name: ");
    let email = read.question("Email: ");
    let phone = read.question("Phone: ");

    user.name = name == "" ? user.name : name;
    user.email = email == "" ? user.email : email;
    user.phone = phone == "" ? user.phone : phone;

    fs.writeFileSync(fileName, JSON.stringify(user));
    console.log("User updated successfully 👍");
}

// function search() {

//     console.log("Enter the username to be searched")

//     var username = read.question("Enter the username: ");
//     var filename = getFileName(username);
//     var usertext = fs.readFileSync(filename, 'utf8');

//     var customer = JSON.parse(usertext)

//     console.log(customer.name)
//     console.log(customer.age)

// }

function searchUserEmail() {
    var email = read.question("Enter email: ");
    var files = fs.readdirSync("data");

    files.forEach(e => {

        var filedata = JSON.parse(fs.readFileSync("data/" + e, 'utf8'));

        if (filedata.email == email) {

            console.log(filedata);

        }

    })

}

function deleteUser() {
    var username = read.question("Enter the username: ");
    var fileName = getFileName(username);

    fs.unlinkSync(fileName);
    console.log("User has been deleted")
}