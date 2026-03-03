const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote-btn');

function displayQuote(selected) {
    // 페이드 효과를 위한 클래스 처리
    quoteText.style.opacity = 0;
    authorText.style.opacity = 0;

    setTimeout(() => {
        // 한국어 번역을 메인으로, 영어 원문을 보조로 표시
        quoteText.innerHTML = `
            <span class="ko-text">"${selected.ko}"</span>
            <small class="en-text">${selected.text}</small>
        `;
        authorText.innerText = `- ${selected.author}`;
        quoteText.style.opacity = 1;
        authorText.style.opacity = 1;
    }, 300);
}

function handleNewQuote() {
    // quotes.js의 getRandomQuote 함수 사용
    const selected = getRandomQuote();
    displayQuote(selected);
}

// 초기 로딩 시 랜덤 명언 설정
window.addEventListener('DOMContentLoaded', () => {
    handleNewQuote();
    
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

newQuoteBtn.addEventListener('click', handleNewQuote);

// Form Submission handling (간단한 피드백)
const form = document.getElementById('partnership-form');
if (form) {
    form.addEventListener('submit', () => {
        const btn = form.querySelector('.submit-btn');
        btn.innerText = '전송 중...';
        btn.disabled = true;
    });
}
