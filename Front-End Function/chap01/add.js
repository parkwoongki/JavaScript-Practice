function add(a, b) {
    return a + b;
}

function hello(name) {
    console.log(name);
}

console.log("3" == 3);

console.log(add(3, "4"));

console.log(add(3)); // ���� +undefined�� NaN

console.log(add()); // ���� ���൵ ������ �ȳ� �ٵ� �ָ�������.

hello()

console.log(3 / 'a')
console.log(3 / null)
console.log(3 / 0)


// �ָ����� �̷��� ó���Ѵ�. 1
function add2(a, b) {
    if (b == undefined) b = 0;
    return a + b;
}

console.log(add2(3));

// �ָ����� �̷��� ó���Ѵ�. 2 �����ϰ�
function add3(a, b) {
    if (!b) b = 0;
    return a + b;
}

console.log(add3(3));

// �ָ����� �̷��� ó���Ѵ�. 3 �����ϰ�
function add4(a, b) {
    return a + (b || 0);
}

console.log(add4(3));
console.log(add4(3, 4));
console.log();



/* ���� �Ķ���� */

function sum1(...a) { // spread syntax
    let result = 0;
    for (let i = 0; i < a.length; ++i)
        result += a[i];
    return result;
}

console.log(sum1(1, 2, 3, 4));
console.log(sum1(1, 2));
console.log(sum1(4));

function sum2(msg, ...a) { // spread syntax
    let result = 0;
    for (let i = 0; i < a.length; ++i)
        result += a[i];
    console.log(msg);
    return result;
}

console.log(sum2("Hello", 1, 2, 3, 4));
console.log(sum2("Hello", 1, 2));
console.log(sum2("Hello", 4));