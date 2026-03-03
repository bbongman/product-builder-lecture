const quotes = [
    { text: "포기하지 마세요. 시작은 언제나 힘든 법입니다.", author: "익명" },
    { text: "성공은 최종적인 것이 아니며, 실패는 치명적인 것이 아니다. 중요한 것은 지속하는 용기다.", author: "윈스턴 처칠" },
    { text: "당신이 할 수 있다고 믿든 할 수 없다고 믿든, 당신이 믿는 대로 될 것이다.", author: "헨리 포드" },
    { text: "어제와 똑같이 살면서 다른 미래를 기대하는 것은 정신병 초기 증세이다.", author: "알베르트 아인슈타인" },
    { text: "가장 큰 위험은 아무런 위험도 감수하지 않는 것이다.", author: "마크 저커버그" },
    { text: "기회는 일어나는 것이 아니라 만드는 것이다.", author: "크리스 그로서" },
    { text: "꿈을 이루기에 너무 늦은 나이란 없다.", author: "에드워드 알비" },
    { text: "실패는 성공으로 가는 과정일 뿐이다.", author: "익명" },
    { text: "오늘 걷지 않으면 내일은 뛰어야 한다.", author: "익명" },
    { text: "가장 높은 곳에 올라가려면 가장 낮은 곳부터 시작하라.", author: "푸블릴리우스 시루스" },
    { text: "자신을 믿는 순간, 어떻게 살아야 할지 알게 된다.", author: "괴테" },
    { text: "위대한 일을 해내는 유일한 방법은 당신이 하는 일을 사랑하는 것이다.", author: "스티브 잡스" }
];

const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote-btn');

function getRandomQuote() {
    // 현재 명언을 제외하고 랜덤하게 선택하기 위한 로직
    const currentQuote = quoteText.innerText;
    let availableQuotes = quotes.filter(q => `"${q.text}"` !== currentQuote);
    
    const randomIndex = Math.floor(Math.random() * availableQuotes.length);
    const selected = availableQuotes[randomIndex];

    // 페이드 효과를 위한 클래스 처리
    quoteText.style.opacity = 0;
    authorText.style.opacity = 0;

    setTimeout(() => {
        quoteText.innerText = `"${selected.text}"`;
        authorText.innerText = `- ${selected.author}`;
        quoteText.style.opacity = 1;
        authorText.style.opacity = 1;
    }, 300);
}

// 초기 로딩 시 랜덤 명언 설정
window.addEventListener('DOMContentLoaded', () => {
    getRandomQuote();
    
    // Smooth Scroll for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Navbar height compensation
                    behavior: 'smooth'
                });
            }
        });
    });
});

newQuoteBtn.addEventListener('click', getRandomQuote);

// Form Submission handling (간단한 피드백)
const form = document.getElementById('partnership-form');
if (form) {
    form.addEventListener('submit', () => {
        // Formspree가 처리하므로 전송 전 로직만 간단히
        const btn = form.querySelector('.submit-btn');
        btn.innerText = '전송 중...';
        btn.disabled = true;
    });
}
