let a = []

for (let i = 0; i < 100; ++i) {
    a[i] = Math.floor(Math.random() * 100 + 1);
}

console.log(a);

for (let i = 0; i < a.length; ++i) {
    if (a[i] % 2 == 0) {
        a.splice(i--, 1); // �ڸ��� ���� ������ üũ�ع����� ��ĭ �ǳ� �ٰԵǹǷ� i--�Ͽ� �ٽ� �Ǻ�
    }
}

console.log(a);