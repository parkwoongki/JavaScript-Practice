let rectangle = {
    width: 5,
    height: 7,
    area: function () {
        return this.width * this.height; // this. �� ���� �Ұ���.
    } // ���� ����
}

console.log(rectangle.area());

rectangle.area = function () {
    return this.width * this.height;
} // ������ ���� �� �ִ�. �ֱ� ������..


// Ž��

let person = {
    name: "hong",
    age: 16,
    area: function () {
        console.log("")
    },
    department: "soft"
};

for (let key in person) {
    let value = person[key];
    console.log("%s:%s", key, value);
} // ��ó��.. 

delete person.department; // ���� ����

console.log(person)

