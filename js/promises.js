var promisesTest = {

    test: function(res) {
        var promiseFunction = function() {
            return new Promise((resolve, reject) => {
                res === true ? resolve("success") : reject("failed");
            });
        };

        promiseFunction()
            .then(res => console.log("result is: " + res))
            .catch(error => console.log("an error has occured: " + error));
    }
}
