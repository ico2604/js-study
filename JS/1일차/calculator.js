 // JavaScript: 계산 로직
    const display = document.getElementById('display');

    // 입력값을 화면에 추가
    function appendToDisplay(input) {
        display.value += input;
    }

    // 화면 초기화
    function clearDisplay() {
        display.value = "";
    }

    // 실제 계산 수행
    function calculate() {
        try {
            // eval() 대신 더 안전한 계산 방식을 쓸 수도 있지만, 
            // 학습용 간단한 코드에서는 eval이 가장 직관적입니다.
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    }