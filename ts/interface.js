var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
    }
    EmailValidator.prototype.isValid = function (value) {
        console.log("some validator logic");
    };
    EmailValidator.prototype.setMessage = function (message) {
        console.log("another interface implementation");
    };
    return EmailValidator;
}());
