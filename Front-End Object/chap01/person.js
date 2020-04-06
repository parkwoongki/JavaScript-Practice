let person = {
    name: "hong",
    age: 16
};

console.log(person);
console.log(person.name);
console.log(person.age);

let person2 = {}; // ����ִ� ��ü �������

// ������ �˾Ƽ� �߰�����
person2.name = "hong";
person2.age = 16;
console.log(person2);

let person3 = {};

person3["name"] = "hong"; // �ڹ��� �� ���� ���� ������ ������ ������ -> Ű�� ��� -> ��!
person3["age"] = 16;
console.log(person3);
console.log(person3["name"]);

function createPerson(name, age) {
    return {
        name: name, // �Ӽ���: ��
        age: age
    };
}

let person4 = createPerson("hong", 16);
let person5 = createPerson("kang", 18);

console.log(person4);
console.log(person5);

// �� �����ϰ�!
function createPerson(name, age) {
    return {
        name,
        age
    };
}

let person6 = createPerson("hong", 16);

console.log(person6);



// �� �����ϰ�!
function createPerson(name, age) {
    return {
        name : "hong",
        age : 16
    };
}

let person7 = createPerson();
let person8 = createPerson();

person.name = "kang";
person.age = 20;

console.log(person7);
console.log(person8);
