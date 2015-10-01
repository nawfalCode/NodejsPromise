/**
 * Created by Nawfal on 01-Oct-15.
 */


function mainFunction() {
    return new Promise(function (resolve, reject) {
            var rand = Math.round(Math.random() * 100);
            console.log('The Rand is:' + rand);
            rand = 55;
            if (rand > 50) {
                resolve();
            }
            else {
                reject();
            }
        }
    );
}

var callBack = {
    operation1: function () {
        console.log('Operation 1');
    },
    operation2: function () {
        console.log('Operation 2');
    },
    operation3: function () {
        console.log('Operation 3');
    },
    operation4: function () {
        console.log('Operation 4');
    },
    operation5: function () {
        console.log('Operation 5');
    },
    operation6: function () {
        console.log('Operation 6');
    },
    errorFunc: function () {
        console.log('Error');
    }
};

mainFunction()
    .then(callBack.operation1)
    .then(callBack.operation2)
    .then(callBack.operation3)
    .then(callBack.operation4)
    .then(callBack.operation5)
    .then(callBack.operation6)
    .catch(callBack.errorFunc);



