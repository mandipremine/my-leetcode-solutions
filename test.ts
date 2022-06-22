var a = {
    name: 'Mandip',
    show: function () {
        return this.name
    }
}

console.log(a.show());

const showFunc = a.show
console.log(showFunc());