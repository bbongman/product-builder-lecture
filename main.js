class FortuneResult extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            .fortune-content {
                font-size: 1.1rem;
                line-height: 1.8;
                white-space: pre-wrap;
                text-align: left;
                padding: 10px;
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
    const hour = document.getElementById('hour').value;

    if (!year || !month || !day || hour === "") {
        alert('생년월일과 태어난 시간을 모두 입력해주세요.');
        return;
    }

    const heavenlyStems = ["갑(甲)", "을(乙)", "병(丙)", "정(丁)", "무(戊)", "기(己)", "경(庚)", "신(辛)", "임(壬)", "계(癸)"];
    const earthlyBranches = ["자(子)", "축(丑)", "인(寅)", "묘(卯)", "진(辰)", "사(巳)", "오(午)", "미(未)", "신(申)", "유(酉)", "술(술)", "해(亥)"];

    const getPillar = (val1, val2) => heavenlyStems[val1 % 10] + earthlyBranches[val2 % 12];

    const yearPillar = getPillar(parseInt(year), parseInt(year) + 8);
    const monthPillar = getPillar(parseInt(year) + parseInt(month), parseInt(month) + 2);
    const dayPillar = getPillar(parseInt(month) + parseInt(day), parseInt(day) + 6);
    const hourPillar = getPillar(parseInt(day) + parseInt(hour), parseInt(hour) + 4);

    const fortunes = [
        "강인한 생명력과 추진력을 가진 사주입니다. 리더의 자질이 돋보입니다.",
        "예술적 감각이 뛰어나고 섬세한 성품을 지녔습니다. 창의적인 일에 적합합니다.",
        "따뜻한 포용력과 인덕이 있는 사주입니다. 주변 사람들의 도움을 많이 받게 됩니다.",
        "냉철한 판단력과 논리적인 사고를 가졌습니다. 전문직 분야에서 대성할 운입니다.",
        "흙처럼 단단하고 믿음직한 성격입니다. 재물운이 안정적으로 흐르는 사주입니다.",
        "물처럼 유연하고 지혜로운 처세술을 가졌습니다. 어떤 환경에서도 잘 적응합니다.",
        "불처럼 정열적이고 활동적인 에너지가 넘칩니다. 변화를 주도하는 삶을 살게 됩니다.",
        "보석처럼 빛나는 재능과 품격을 갖췄습니다. 명예운이 매우 높은 사주입니다.",
        "거목처럼 든든한 버팀목이 되어주는 성품입니다. 사회적으로 큰 기여를 하게 됩니다.",
        "끝없는 호기심과 탐구심이 강한 사주입니다. 끊임없이 배우고 성장하는 운세입니다."
    ];

    const fortuneIndex = (parseInt(year) + parseInt(month) + parseInt(day) + parseInt(hour)) % fortunes.length;
    const resultText = `
        [사주 분석 결과]
        년주: ${yearPillar} / 월주: ${monthPillar}
        일주: ${dayPillar} / 시주: ${hourPillar}
        
        분석: ${fortunes[fortuneIndex]}
    `;

    const container = document.getElementById('fortune-result-container');
    container.innerHTML = ''; 
    const fortuneElement = document.createElement('fortune-result');
    fortuneElement.setAttribute('text', resultText);
    container.appendChild(fortuneElement);
});
