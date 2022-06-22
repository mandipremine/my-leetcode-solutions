var a = {
    name: 'Mandip',
    show: function () {
        return this.name
    }
}

console.log(a.show());

var showFunc = a.show;
console.log(showFunc());