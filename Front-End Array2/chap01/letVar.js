var a = 3;
var a = 4;
// ������ �ƴϴ�...

let b = 3;
let b = 4; // ������ ���ϱ� var �������� let�� ���� ���� �ٶ����ϴ�.

function test() {
    for (var i = 1; i < 10; ++i) {
        var s = "hello";
    }
    console.log(s); // var�� ���� ����� �Լ��Ҽ��̴�.
}