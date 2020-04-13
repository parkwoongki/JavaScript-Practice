let obj = {
    count: 0,
    startTimter: function () {
        console.log(this.count);
        let callback = function () {
            console.log(this.count++);
        };
        setInterval(callback, 1000);
    }
}

obj.startTimter(); // setInterval ���ο��� count�� ����.



let obj2 = {
    count: 0,
    startTimter: function () {
        console.log(this.count);
        let callback = () => console.log(this.count++); // �ڹٷ� ġ�� inner class���� ����. obj2�� this��.
        setInterval(callback, 1000);
    }
}

obj2.startTimter(); // setInterval ���ο��� count�� ����.