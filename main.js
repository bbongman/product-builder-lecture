const quotes = [
    {
        text: "가장 큰 위험은 아무런 위험도 감수하지 않는 것이다.",
        author: "마크 저커버그"
    },
    {
        text: "성공은 최종적인 것이 아니며, 실패는 치명적인 것이 아니다. 중요한 것은 계속 나아가는 용기다.",
        author: "윈스턴 처칠"
    },
    {
        text: "당신이 할 수 있다고 믿든 할 수 없다고 믿든, 당신이 믿는 대로 될 것이다.",
        author: "헨리 포드"
    },
    {
        text: "어제와 똑같은 삶을 살면서 다른 미래를 기대하는 것은 정신병 초기 증세이다.",
        author: "알베르트 아인슈타인"
    },
    {
        text: "시작하기 위해 위대해질 필요는 없지만, 위대해지기 위해 시작해야 한다.",
        author: "지그 지글러"
    },
    {
        text: "나만이 내 인생을 바꿀 수 있다. 아무도 날 대신해 해줄 수 없다.",
        author: "캐롤 버넷"
    },
    {
        text: "꿈을 이룰 수 있는 가장 좋은 방법은 깨어있는 것이다.",
        author: "폴 발레리"
    },
    {
        text: "성공은 매일 반복되는 작은 노력들의 합계다.",
        author: "로버트 콜리어"
    },
    {
        text: "우리가 두려워해야 할 유일한 것은 두려움 그 자체다.",
        author: "프랭클린 D. 루스벨트"
    },
    {
        text: "오늘 할 수 있는 일을 내일로 미루지 마라.",
        author: "벤자민 프랭클린"
    },
    {
        text: "인생에서 가장 큰 영광은 결코 넘어지지 않는 데 있는 것이 아니라, 넘어질 때마다 다시 일어나는 데 있다.",
        author: "넬슨 만델라"
    },
    {
        text: "길을 찾거나, 아니면 만들어라.",
        author: "한니발 바르카"
    },
    {
        text: "미래를 예측하는 가장 좋은 방법은 미래를 창조하는 것이다.",
        author: "피터 드러커"
    },
    {
        text: "실패는 성공을 향한 디딤돌일 뿐이다.",
        author: "에이브러햄 링컨"
    },
    {
        text: "천재는 1%의 영감과 99%의 노력으로 이루어진다.",
        author: "토마스 에디슨"
    }
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote() {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    const quoteContainer = document.getElementById('quote-container');

    // 애니메이션 초기화 (새로 적용하기 위해 요소를 잠시 숨겼다 보여줌)
    quoteElement.style.animation = 'none';
    authorElement.style.animation = 'none';
    
    // 강제 리플로우 (브라우저가 스타일 변화를 즉시 인지하게 함)
    void quoteElement.offsetWidth;
    void authorElement.offsetWidth;

    const { text, author } = getRandomQuote();
    
    quoteElement.textContent = `"${text}"`;
    authorElement.textContent = `- ${author}`;

    // 애니메이션 다시 적용
    quoteElement.style.animation = 'fadeIn 0.8s ease-out';
    authorElement.style.animation = 'fadeIn 1.2s ease-out';
}

document.getElementById('new-quote-btn').addEventListener('click', displayQuote);

// 페이지 로드 시 첫 명언 표시
window.addEventListener('DOMContentLoaded', displayQuote);

// Form submission feedback
const form = document.getElementById('partnership-form');
if (form) {
    form.addEventListener('submit', function() {
        const submitBtn = form.querySelector('.submit-btn');
        submitBtn.disabled = true;
        submitBtn.textContent = '보내는 중...';
        submitBtn.style.opacity = '0.7';
        submitBtn.style.cursor = 'not-allowed';
    });
}

