let person1 = {
    name: "hong",
    age: 16
};
let person2 = {
    name: "hong",
    age: 16
};

let p = person1;

console.log(person1 == person2);
console.log(person1 == p); // �ʹ� �翬�ϴ�.

// �ڹٿ����� ���ڿ��� ������
// �ڹٽ�ũ��Ʈ���� ���ڿ��� �⺻�ڷ���

let s1 = "hello world";
let s2 = "hello " + "world";

console.log(s1 == s2);

function equals(p1, p2) {
    return p1.name == p2.name &&
        p1.age == p2.age;
} // �ٵ� ���� ����� �ƴ� equals��� �Լ��� ���ϳ��� �����ϴϱ�..

person1 = {
    name: "hong",
    age: 16
};
person2 = {
    name: "jang",
    age: 16
};
let person3 = {
    name: "kang",
    age: 16
};
person4 = {
    person1,
    person2,
    person3
};

console.log(person4);

person4 = [{
        name: "hong",
        age: 16
    },
    {
        name: "hong",
        age: 16
    },
    {
        name: "hong",
        age: 16
    }
];

console.log(person4);

person4[2] = person4[1];
person4[1].age = 20;

console.log(person4);

