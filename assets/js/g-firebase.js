/**
 * Created by dgraves1271 on 5/17/16.
 */


var url = "https://gorilla-beta.firebaseio.com/";

var firebaseRef = new Firebase(url);

function funct1(evt)
{

    var name = $('#name').text();

    var email = $('#email').text();

    var date = Date();
    var ref = firebaseRef.child("signups");

    ref.authAnonymously(function(error, authData) {
        if (error) {
            console.log("Login Failed!", error);
        } else {
            console.log("Authenticated successfully with payload:", authData);
        }
    }, {
        remember: "sessionOnly"
    });

    ref.push({Title: title, Content: post, Date: date});
    evt.preventDefault();
}

var submit = document.getElementsByTagName('button')[0];

submit.onclick = funct1;