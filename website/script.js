
var ref = new Firebase('https://hiveio.firebaseio.com/');
createUser('rohan@techlabeducation.com', 'jenga')

function createUser(email, password){
    var newEmail = replacePeriods(email)
    ref.createUser({
        email    : email,
        password : password
    }, function(error, userData) {
        if (error) {
            console.log("Error creating user:", error);
        } else {
            console.log("Successfully created user account with uid:", userData.uid);
            ref.child('users').child(newEmail).set({
                ports: {
                    port1: {
                        type: 'empty',
                        value: 'empty'
                    },
                    port2: {
                        type: 'empty',
                        value: 'empty'
                    },
                    port3: {
                        type: 'empty',
                        value: 'empty'
                    },
                    port4: {
                        type: 'empty',
                        value: 'empty'
                    }
                } ,
                settings: {
                    email: email
                }
            })
        }
    });
}

function replacePeriods(email){
    return email.replace(/\./g,'*')
}