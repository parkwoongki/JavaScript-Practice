let persons = [{
        name: "hong",
        age: 20
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

persons.sort((p1, p2) => p1.age - p2.age);
console.log(persons);

persons.sort((p1, p2) => p1.name.localeCompare(p2.name)); // �迭��ü�� �����ع��� �̸����� �����ع����°�
console.log(persons);