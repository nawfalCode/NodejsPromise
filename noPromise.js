/**
 * Created by Nawfal on 01-Oct-15.
 */


var callBack = {
    operation1: function (callBack) {
        console.log('Operation 1');
        callBack();
    },
    operation2: function (callBack) {
        console.log('Operation 2');
        callBack()
    },
    operation3: function (callBack) {
        console.log('Operation 3');
        callBack()
    },
    operation4: function (callBack) {
        console.log('Operation 4');
        callBack()
    },
    operation5: function (callBack) {
        console.log('Operation 5');
        callBack()
    },
    operation6: function () {
        console.log('Operation 6');
    },
    errorFunc: function (callBack) {
        console.log('Error');
        callBack();
    }
};

function mainFunction(callBack) {
    var rand = Math.round(Math.random() * 100);
    console.log('The Rand is:' + rand);
    if (rand > 50) {
        callBack();
    }
    else {
        console.log('Error')
    }
}

mainFunction(function () {
    callBack.operation1(function () {
        callBack.operation2(function () {
            callBack.operation3(function () {
                callBack.operation4(function () {
                    callBack.operation5(function () {
                        callBack.operation6();
                    });
                });
            });
        });
    });
});



