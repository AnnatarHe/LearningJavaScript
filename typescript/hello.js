var Student = (function () {
    function Student(firstname, middleinitial, lastname) {
        this.firstname = firstname;
        this.middleinitial = middleinitial;
        this.lastname = lastname;
        this.fullname = firstname + ' ' + middleinitial + ' ' + lastname;
    }
    return Student;
})();
function greeter(person) {
    return 'Hello' + person.firstname + ' ' + person.lastname;
}
var user = {
    firstname: 'Jane',
    lastname: 'User'
};
document.body.innerHTML = greeter(user);
//# sourceMappingURL=hello.js.map