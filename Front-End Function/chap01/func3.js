function outterFunc() {
    print("hello");

    function print(msg) {
        console.log(msg);
    }
} // print�� ȣ�� �Ұ�

let f = function (msg) {
    console.log(msg);
}

// ���� f�� �������?
let h = (function (msg) {
    console.log(msg)
})("hello") // �͸��Լ� : �� �ѹ� ���Ÿ� �̷��� �� �� �ִ�.

function factory() {
    return function (msg) {
        console.log(msg);
    }
}

let g = factory();
f("hello")