let count;
class Ui {
    constructor (count, result) {
        this.count = count;
        this.result = result;
    }
    output() {
        a.value && b.value && operator.value != "" && Number.isInteger(count) 
        ? result.innerHTML = count
        : a.value && b.value && operator.value != "" && !Number.isInteger(count)
        ? result.innerHTML = count.toFixed(12).replace(/0*$/, "")
        : result.innerHTML = "";
    }
}
class Calculator {
    constructor (a, b) {
        this.a = Number(a);
        this.b = Number(b);
    }
    addition() {
        count = this.a + this.b;
        return count;
    }
    subtraction() {
        count = this.a - this.b;
        return count;
    }
    multiplication() {
        count = this.a * this.b;
        return count;
    }
    division() {
        count = this.a / this.b;
        return count;
    }
};
class App {
    run () {
        const a = document.querySelector("#a");
        const b = document.querySelector("#b");
        const operator = document.querySelector("#operator");
        const result = document.querySelector("#result");
        const numInput = Array.from(document.querySelectorAll(".numInput"));
        const outputResult = new Ui (count, result);
        function assignment () {
            numInput.forEach(function(elem) {
                elem.addEventListener('keypress', function(e) {
                    (/[^0-9.\-]/.test(e.key)) ? e.preventDefault(): null;
                });
                elem.addEventListener('keyup', function(e) {
                    elem.value.split('')[0] == "." ? elem.value = "": null;
                });
                elem.addEventListener('keyup', function(e) {
                    let drops = elem.value.split('').filter((item) => item === ".");
                    drops.length > 1 ? elem.value = "": null;
                });
                elem.addEventListener('keyup', function(e) {
                    elem.value.split('').includes("-", 1) ? elem.value = "" : null;
                });
            });
            operator.addEventListener('keypress', function(e) {
                (/[^*+/-]/.test(e.key)) ? e.preventDefault(): null;
            });
            a.addEventListener('keyup', function(e) {
                operation ();
            });
            operator.addEventListener('keyup', function(e) {
                operation ();
            });
            b.addEventListener('keyup', function(e) {
                operation ();
            });
        }
        assignment();
        function operation () {
            let calc = new Calculator (a.value, b.value);
            const symbols = {
                "+" : calc.addition(),
                "-" : calc.subtraction(),
                "*" : calc.multiplication(),
                "/" : calc.division(),
            };
            for (let key in symbols) {
                key == operator.value ? count = symbols[key]: null;
            }
            outputResult.output();
        }
    }
};
const app = new App();
app.run();