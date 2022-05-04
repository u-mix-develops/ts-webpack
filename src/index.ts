console.log(123);

let a = 0;
const b = () => {
    for (;;) {
        a++;
        console.debug(a);
        if (a > 1000) {
            return;
        }
    }
};
b();
