let persons = [{
        name: "ȫ�浿",
        age: 16
    },
    {
        name: "�Ӳ���",
        age: 18
    },
    {
        name: "����ġ",
        age: 19
    }
];

let person = persons.find(p => p.age == 18);
console.log(person); // ó�� ã�� �ϳ��� ���� �Ѵ�.

person = persons.findIndex(p => p.age == 18);
console.log(person);