class FortuneResult extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            .fortune-content {
                font-size: 1.2rem;
                line-height: 1.6;
            }
        `;

        const content = document.createElement('div');
        content.setAttribute('class', 'fortune-content');
        content.textContent = this.getAttribute('text');

        shadow.appendChild(style);
        shadow.appendChild(content);
    }
}

customElements.define('fortune-result', FortuneResult);

document.getElementById('get-fortune').addEventListener('click', () => {
    const year = document.getElementById('year').value;
    const month = document.getElementById('month').value;
    const day = document.getElementById('day').value;

    if (!year || !month || !day) {
        alert('생년월일을 모두 입력해주세요.');
        return;
    }

    const fortunes = [
        "오늘은 새로운 기회가 찾아오는 날입니다. 주저하지 말고 도전하세요.",
        "뜻밖의 행운이 당신을 기다리고 있습니다. 긍정적인 마음을 유지하세요.",
        "주변 사람들과의 관계에 좋은 변화가 있을 것입니다.",
        "금전운이 좋은 날입니다. 신중한 투자는 좋은 결과로 이어질 수 있습니다.",
        "건강에 신경 써야 할 때입니다. 충분한 휴식을 취하세요.",
        "오랫동안 고민하던 문제가 해결의 실마리를 찾게 될 것입니다.",
        "창의적인 아이디어가 샘솟는 날입니다. 메모하는 습관을 들여보세요.",
        "여행을 떠나기에 좋은 날입니다. 새로운 환경에서 활력을 얻을 수 있습니다.",
        "예상치 못한 만남이 기다리고 있습니다. 마음의 문을 열어두세요.",
        "학업이나 업무에서 좋은 성과를 거둘 수 있는 날입니다."
    ];

    const fortuneIndex = (parseInt(year) + parseInt(month) + parseInt(day)) % fortunes.length;
    const fortuneText = fortunes[fortuneIndex];

    const container = document.getElementById('fortune-result-container');
    container.innerHTML = ''; 
    const fortuneElement = document.createElement('fortune-result');
    fortuneElement.setAttribute('text', fortuneText);
    container.appendChild(fortuneElement);
});
