let person = {
    name: "hong",
    age: 16
};
let info = {
    age: 20,
    department: "soft",
    year: 2
};

Object.assign(person, info);
console.log(person);

let person2 = Object.assign({}, person); // ��ü ����
console.log(person2);

// entries : ������ �迭 ����
console.log(Object.entries(person))

for (let [key, value] of Object.entries(person)) 
    console.log("%s:%s", key, value);

console.log(Object.keys(person)); // ����� keys
console.log(Object.values(person));



let person3 = {
    name: "hong",
    age: 16
};

Object.freeze(person3); // ���� ���ĵ� �ȹٲ�
console.log(Object.isFrozen(person3)); // �� ����ֽ��ϴ�.
