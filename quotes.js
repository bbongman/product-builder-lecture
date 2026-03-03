// quotes.js - 동기부여 명언 200선
// category: success | challenge | wisdom | happiness

const quotes = [

  // ============================================================
  // 🔥 SUCCESS & GOALS (성공 & 목표) — 50개
  // ============================================================
  { id: 1,  category: "success", text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney", ko: "시작하는 방법은 말을 멈추고 행동하는 것이다." },
  { id: 2,  category: "success", text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", ko: "멈추지 않는 한, 얼마나 천천히 가는지는 중요하지 않다." },
  { id: 3,  category: "success", text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", ko: "성공이 끝이 아니고, 실패가 치명적인 것도 아니다. 중요한 건 계속하는 용기다." },
  { id: 4,  category: "success", text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", ko: "할 수 있다고 믿는 순간, 이미 절반은 온 것이다." },
  { id: 5,  category: "success", text: "The secret of getting ahead is getting started.", author: "Mark Twain", ko: "앞서 나가는 비결은 시작하는 것이다." },
  { id: 6,  category: "success", text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson", ko: "시계를 보지 말고, 시계처럼 행동하라. 계속 움직여라." },
  { id: 7,  category: "success", text: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar", ko: "위대해야 시작할 수 있는 게 아니라, 시작해야 위대해질 수 있다." },
  { id: 8,  category: "success", text: "Dream big and dare to fail.", author: "Norman Vaughan", ko: "크게 꿈꾸고 과감하게 실패하라." },
  { id: 9,  category: "success", text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau", ko: "성공은 보통 성공을 찾을 겨를도 없이 바쁜 사람에게 찾아온다." },
  { id: 10, category: "success", text: "Opportunities don't happen. You create them.", author: "Chris Grosser", ko: "기회는 저절로 생기지 않는다. 당신이 만드는 것이다." },
  { id: 11, category: "success", text: "Try not to become a man of success. Rather become a man of value.", author: "Albert Einstein", ko: "성공한 사람이 되려 하지 말고, 가치 있는 사람이 되려 하라." },
  { id: 12, category: "success", text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson", ko: "열심히 일할수록, 더 많은 행운이 따르는 것 같다." },
  { id: 13, category: "success", text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill", ko: "성공이란 열정을 잃지 않고 실패에서 실패로 걸어가는 것이다." },
  { id: 14, category: "success", text: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon", ko: "일보다 성공이 앞에 오는 곳은 사전뿐이다." },
  { id: 15, category: "success", text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi", ko: "쓰러지느냐가 아니라, 다시 일어서느냐가 중요하다." },
  { id: 16, category: "success", text: "If you want to achieve greatness, stop asking for permission.", author: "Anonymous", ko: "위대함을 이루고 싶다면 허락을 구하는 것을 멈춰라." },
  { id: 17, category: "success", text: "Things work out best for those who make the best of how things work out.", author: "John Wooden", ko: "주어진 상황을 최대한 활용하는 사람에게 결국 좋은 결과가 온다." },
  { id: 18, category: "success", text: "A goal without a plan is just a wish.", author: "Antoine de Saint-Exupéry", ko: "계획 없는 목표는 그냥 소원일 뿐이다." },
  { id: 19, category: "success", text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky", ko: "시도하지 않은 슛은 100% 빗나간다." },
  { id: 20, category: "success", text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford", ko: "할 수 있다고 생각하든, 없다고 생각하든, 둘 다 맞다." },
  { id: 21, category: "success", text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt", ko: "내일의 성취를 제한하는 유일한 것은 오늘의 의심이다." },
  { id: 22, category: "success", text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt", ko: "지금 있는 곳에서, 가진 것으로, 할 수 있는 것을 하라." },
  { id: 23, category: "success", text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe", ko: "지금 있는 곳에서 시작하라. 가진 것을 써라. 할 수 있는 것을 하라." },
  { id: 24, category: "success", text: "Setting goals is the first step in turning the invisible into the visible.", author: "Tony Robbins", ko: "목표를 설정하는 것은 보이지 않는 것을 보이게 만드는 첫 번째 단계다." },
  { id: 25, category: "success", text: "The difference between ordinary and extraordinary is that little extra.", author: "Jimmy Johnson", ko: "평범과 비범의 차이는 그 작은 '엑스트라'에 있다." },
  { id: 26, category: "success", text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs", ko: "시간은 유한하다. 남의 인생을 사느라 낭비하지 마라." },
  { id: 27, category: "success", text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein", ko: "모든 어려움 속에 기회가 있다." },
  { id: 28, category: "success", text: "It always seems impossible until it's done.", author: "Nelson Mandela", ko: "모든 것은 이루어지기 전까지 불가능해 보인다." },
  { id: 29, category: "success", text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett", ko: "마음속 두려움에 끌려다니지 말고, 가슴속 꿈에 이끌려라." },
  { id: 30, category: "success", text: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen Covey", ko: "나는 내 환경의 산물이 아니다. 나는 내 결정의 산물이다." },
  { id: 31, category: "success", text: "Every strike brings me closer to the next home run.", author: "Babe Ruth", ko: "매번 스트라이크는 나를 다음 홈런에 한 발짝 가깝게 만든다." },
  { id: 32, category: "success", text: "Champions keep playing until they get it right.", author: "Billie Jean King", ko: "챔피언은 제대로 될 때까지 계속 한다." },
  { id: 33, category: "success", text: "Definiteness of purpose is the starting point of all achievement.", author: "W. Clement Stone", ko: "명확한 목적의식이 모든 성취의 출발점이다." },
  { id: 34, category: "success", text: "Winning isn't everything, but wanting to win is.", author: "Vince Lombardi", ko: "이기는 것이 전부는 아니지만, 이기고자 하는 의지는 전부다." },
  { id: 35, category: "success", text: "Problems are not stop signs, they are guidelines.", author: "Robert H. Schuller", ko: "문제는 멈춤 신호가 아니라 방향 지침이다." },
  { id: 36, category: "success", text: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.", author: "Henry Ford", ko: "모든 것이 불리하게 돌아갈 때 기억하라. 비행기는 바람을 거슬러 이륙한다." },
  { id: 37, category: "success", text: "The most common way people give up their power is by thinking they don't have any.", author: "Alice Walker", ko: "사람들이 자신의 힘을 포기하는 가장 흔한 방법은 자신에게 그 힘이 없다고 생각하는 것이다." },
  { id: 38, category: "success", text: "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.", author: "Dale Carnegie", ko: "세상의 중요한 일들은 희망이 없어 보일 때도 계속 시도한 사람들에 의해 이루어졌다." },
  { id: 39, category: "success", text: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.", author: "Francis of Assisi", ko: "필요한 것부터 하라. 그 다음 가능한 것을 하라. 그러면 어느새 불가능한 것을 하고 있다." },
  { id: 40, category: "success", text: "Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.", author: "Samuel Beckett", ko: "시도했다. 실패했다. 상관없다. 다시 시도하라. 다시 실패하라. 더 나은 실패를 하라." },
  { id: 41, category: "success", text: "You become what you believe.", author: "Oprah Winfrey", ko: "당신이 믿는 것이 당신이 된다." },
  { id: 42, category: "success", text: "Keep your eyes on the stars, and your feet on the ground.", author: "Theodore Roosevelt", ko: "눈은 별을 향하되, 발은 땅에 딛어라." },
  { id: 43, category: "success", text: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis", ko: "성공의 길과 실패의 길은 거의 같다." },
  { id: 44, category: "success", text: "You can't use up creativity. The more you use, the more you have.", author: "Maya Angelou", ko: "창의성은 소진되지 않는다. 더 많이 쓸수록 더 많이 생긴다." },
  { id: 45, category: "success", text: "Someone is sitting in the shade today because someone planted a tree a long time ago.", author: "Warren Buffett", ko: "오늘 누군가가 그늘 아래 앉을 수 있는 건, 누군가가 오래전에 나무를 심었기 때문이다." },
  { id: 46, category: "success", text: "If you want something you've never had, you must be willing to do something you've never done.", author: "Thomas Jefferson", ko: "한 번도 가져본 적 없는 것을 원한다면, 한 번도 해본 적 없는 일을 해야 한다." },
  { id: 47, category: "success", text: "The question isn't who is going to let me; it's who is going to stop me.", author: "Ayn Rand", ko: "질문은 '누가 나를 허락할 것인가'가 아니라 '누가 나를 막을 것인가'다." },
  { id: 48, category: "success", text: "Success is liking yourself, liking what you do, and liking how you do it.", author: "Maya Angelou", ko: "성공은 자신을 좋아하고, 자신의 일을 좋아하고, 그 방식을 좋아하는 것이다." },
  { id: 49, category: "success", text: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.", author: "Maya Angelou", ko: "인생은 숨쉰 횟수로 측정되지 않고, 숨이 멎을 만큼 감동적인 순간들로 측정된다." },
  { id: 50, category: "success", text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein", ko: "성공을 위해 노력하지 말고, 가치 있는 사람이 되기 위해 노력하라." },

  // ============================================================
  // 💪 CHALLENGE & EFFORT (노력 & 도전) — 50개
  // ============================================================
  { id: 51, category: "challenge", text: "The only way to do great work is to love what you do.", author: "Steve Jobs", ko: "위대한 일을 하는 유일한 방법은 자신이 하는 일을 사랑하는 것이다." },
  { id: 52, category: "challenge", text: "What doesn't kill me makes me stronger.", author: "Friedrich Nietzsche", ko: "나를 죽이지 못하는 것은 나를 더 강하게 만든다." },
  { id: 53, category: "challenge", text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis", ko: "고난은 종종 평범한 사람을 비범한 운명을 위해 준비시킨다." },
  { id: 54, category: "challenge", text: "The pain you feel today will be the strength you feel tomorrow.", author: "Anonymous", ko: "오늘 느끼는 고통이 내일의 힘이 된다." },
  { id: 55, category: "challenge", text: "Do or do not. There is no try.", author: "Yoda", ko: "하거나 하지 않거나. 시도란 없다." },
  { id: 56, category: "challenge", text: "If you're going through hell, keep going.", author: "Winston Churchill", ko: "지옥을 지나고 있다면, 계속 나아가라." },
  { id: 57, category: "challenge", text: "Courage is not the absence of fear, but the triumph over it.", author: "Nelson Mandela", ko: "용기는 두려움의 부재가 아니라, 두려움을 극복하는 것이다." },
  { id: 58, category: "challenge", text: "I've failed over and over again in my life. And that is why I succeed.", author: "Michael Jordan", ko: "나는 인생에서 거듭 실패했다. 그래서 성공했다." },
  { id: 59, category: "challenge", text: "The expert in anything was once a beginner.", author: "Helen Hayes", ko: "모든 분야의 전문가도 한때는 초보자였다." },
  { id: 60, category: "challenge", text: "We may encounter many defeats but we must not be defeated.", author: "Maya Angelou", ko: "우리는 많은 패배를 겪을 수 있지만, 패배당해서는 안 된다." },
  { id: 61, category: "challenge", text: "Perseverance is not a long race; it is many short races one after the other.", author: "Walter Elliot", ko: "인내는 긴 경주가 아니다. 짧은 경주들을 하나씩 완주하는 것이다." },
  { id: 62, category: "challenge", text: "Just when the caterpillar thought the world was ending, he turned into a butterfly.", author: "Proverb", ko: "애벌레가 세상이 끝났다고 생각할 때, 그는 나비가 되었다." },
  { id: 63, category: "challenge", text: "Fall seven times and stand up eight.", author: "Japanese Proverb", ko: "일곱 번 넘어져도 여덟 번 일어나라." },
  { id: 64, category: "challenge", text: "Energy and persistence conquer all things.", author: "Benjamin Franklin", ko: "에너지와 인내는 모든 것을 정복한다." },
  { id: 65, category: "challenge", text: "Nothing is impossible, the word itself says I'm possible.", author: "Audrey Hepburn", ko: "'불가능'이라는 단어 자체가 '나는 가능하다'를 담고 있다." },
  { id: 66, category: "challenge", text: "No pressure, no diamonds.", author: "Thomas Carlyle", ko: "압력 없이 다이아몬드는 없다." },
  { id: 67, category: "challenge", text: "A year from now you may wish you had started today.", author: "Karen Lamb", ko: "1년 후, 오늘 시작했더라면 좋았을 거라고 생각할 것이다." },
  { id: 68, category: "challenge", text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll", ko: "인생은 10%는 무슨 일이 일어나느냐이고, 90%는 그것에 어떻게 반응하느냐다." },
  { id: 69, category: "challenge", text: "I would rather die of passion than of boredom.", author: "Vincent van Gogh", ko: "지루함으로 죽느니 열정으로 죽겠다." },
  { id: 70, category: "challenge", text: "Motivation is what gets you started. Habit is what keeps you going.", author: "Jim Ryun", ko: "동기부여가 시작하게 만들고, 습관이 계속하게 만든다." },
  { id: 71, category: "challenge", text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi", ko: "당신이 세상에서 보고 싶은 변화가 되어라." },
  { id: 72, category: "challenge", text: "Impossible is just an opinion.", author: "Paulo Coelho", ko: "불가능은 그냥 하나의 의견일 뿐이다." },
  { id: 73, category: "challenge", text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche", ko: "살아야 할 이유가 있는 사람은 어떤 상황도 견딜 수 있다." },
  { id: 74, category: "challenge", text: "The secret of success is to do the common thing uncommonly well.", author: "John D. Rockefeller Jr.", ko: "성공의 비결은 평범한 일을 비범하게 잘 하는 것이다." },
  { id: 75, category: "challenge", text: "A ship is always safe at the shore — but that is NOT what it is built for.", author: "Albert Einstein", ko: "배는 항구에 있을 때 가장 안전하다. 하지만 그게 배가 만들어진 이유는 아니다." },
  { id: 76, category: "challenge", text: "If you want something you've never had, you must be willing to do something you've never done.", author: "Thomas Jefferson", ko: "한 번도 가져본 적 없는 것을 원한다면, 한 번도 해본 적 없는 일을 해야 한다." },
  { id: 77, category: "challenge", text: "You don't need to see the whole staircase, just take the first step.", author: "Martin Luther King Jr.", ko: "계단 전체를 볼 필요 없다. 그냥 첫 발을 내딛어라." },
  { id: 78, category: "challenge", text: "We generate fears while we sit. We overcome them by action.", author: "Dr. Henry Link", ko: "가만히 앉아 있으면 두려움이 생긴다. 행동으로 두려움을 극복한다." },
  { id: 79, category: "challenge", text: "Life is not about waiting for the storm to pass but about learning to dance in the rain.", author: "Vivian Greene", ko: "인생은 폭풍이 지나기를 기다리는 것이 아니라, 빗속에서 춤추는 법을 배우는 것이다." },
  { id: 80, category: "challenge", text: "Stop being afraid of what could go wrong, and start being excited about what could go right.", author: "Tony Robbins", ko: "잘못될 것을 두려워하는 것을 멈추고, 잘 될 것에 흥분하기 시작하라." },
  { id: 81, category: "challenge", text: "When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt", ko: "밧줄 끝에 닿았을 때, 매듭을 묶고 버텨라." },
  { id: 82, category: "challenge", text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson", ko: "길이 있는 곳으로 가지 말고, 길이 없는 곳으로 가서 흔적을 남겨라." },
  { id: 83, category: "challenge", text: "You will face many defeats in life, but never let yourself be defeated.", author: "Maya Angelou", ko: "인생에서 많은 패배를 맞이하겠지만, 절대 스스로 패배하지 마라." },
  { id: 84, category: "challenge", text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela", ko: "인생의 가장 큰 영광은 한 번도 넘어지지 않는 것이 아니라, 넘어질 때마다 일어서는 것이다." },
  { id: 85, category: "challenge", text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln", ko: "결국 중요한 것은 살아온 연수가 아니라, 그 안에 얼마나 삶이 있었느냐다." },
  { id: 86, category: "challenge", text: "The beautiful thing about learning is that no one can take it away from you.", author: "B.B. King", ko: "배움의 아름다운 점은 아무도 그것을 빼앗아 갈 수 없다는 것이다." },
  { id: 87, category: "challenge", text: "Action is the foundational key to all success.", author: "Pablo Picasso", ko: "행동은 모든 성공의 근본적인 열쇠다." },
  { id: 88, category: "challenge", text: "If you're not willing to risk the usual, you'll have to settle for the ordinary.", author: "Jim Rohn", ko: "평범한 것을 감수할 의지가 없다면, 그냥 평범함에 만족해야 한다." },
  { id: 89, category: "challenge", text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson", ko: "당신이 될 운명인 유일한 사람은, 당신이 되기로 결정한 사람이다." },
  { id: 90, category: "challenge", text: "If you genuinely want something, don't wait for it — teach yourself to be impatient.", author: "Gurbaksh Chahal", ko: "진심으로 원한다면 기다리지 마라. 조급해지도록 스스로를 훈련시켜라." },
  { id: 91, category: "challenge", text: "The real test is not whether you avoid failure, but whether you let it harden or shame you into inaction, or whether you learn from it.", author: "Barack Obama", ko: "진짜 테스트는 실패를 피하느냐가 아니다. 실패가 당신을 굳어지게 하느냐, 아니면 배우게 하느냐다." },
  { id: 92, category: "challenge", text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas A. Edison", ko: "나는 실패하지 않았다. 다만 효과 없는 방법 10,000가지를 발견했을 뿐이다." },
  { id: 93, category: "challenge", text: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas A. Edison", ko: "인생의 많은 실패자들은 포기했을 때 성공이 얼마나 가까웠는지 몰랐던 사람들이다." },
  { id: 94, category: "challenge", text: "Even if you're on the right track, you'll get run over if you just sit there.", author: "Will Rogers", ko: "올바른 길 위에 있더라도, 그냥 앉아만 있으면 치인다." },
  { id: 95, category: "challenge", text: "The only impossible journey is the one you never begin.", author: "Tony Robbins", ko: "불가능한 여행은 단 하나, 시작조차 하지 않는 여행이다." },
  { id: 96, category: "challenge", text: "Believe and act as if it were impossible to fail.", author: "Charles Kettering", ko: "실패가 불가능한 것처럼 믿고 행동하라." },
  { id: 97, category: "challenge", text: "One way to keep momentum going is to have constantly greater goals.", author: "Michael Korda", ko: "추진력을 유지하는 한 가지 방법은 끊임없이 더 큰 목표를 갖는 것이다." },
  { id: 98, category: "challenge", text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar", ko: "목표를 달성함으로써 얻는 것보다, 달성하는 과정에서 어떤 사람이 되느냐가 더 중요하다." },
  { id: 99, category: "challenge", text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa", ko: "가는 곳마다 사랑을 나누어라. 당신을 만난 사람이 더 행복해져서 떠나도록 하라." },
  { id: 100, category: "challenge", text: "You must do the things you think you cannot do.", author: "Eleanor Roosevelt", ko: "할 수 없다고 생각하는 일을 해야만 한다." },

  // ============================================================
  // 🧠 WISDOM & GROWTH (지혜 & 성장) — 50개
  // ============================================================
  { id: 101, category: "wisdom", text: "An unexamined life is not worth living.", author: "Socrates", ko: "성찰하지 않는 삶은 살 가치가 없다." },
  { id: 102, category: "wisdom", text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle", ko: "자기 자신을 아는 것이 모든 지혜의 시작이다." },
  { id: 103, category: "wisdom", text: "The more that you read, the more things you will know.", author: "Dr. Seuss", ko: "읽으면 읽을수록 더 많이 알게 된다." },
  { id: 104, category: "wisdom", text: "Yesterday is history, tomorrow is a mystery, today is a gift — that's why they call it the present.", author: "Bill Keane", ko: "어제는 역사고, 내일은 미스터리고, 오늘은 선물이다. 그래서 현재를 'present'라 부른다." },
  { id: 105, category: "wisdom", text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", author: "Benjamin Franklin", ko: "말해주면 잊는다. 가르쳐주면 기억한다. 참여시키면 배운다." },
  { id: 106, category: "wisdom", text: "Change your thoughts and you change your world.", author: "Norman Vincent Peale", ko: "생각을 바꾸면 세상이 바뀐다." },
  { id: 107, category: "wisdom", text: "It is never too late to be what you might have been.", author: "George Eliot", ko: "당신이 될 수 있었던 사람이 되기에 늦은 때는 없다." },
  { id: 108, category: "wisdom", text: "To live a creative life, we must lose our fear of being wrong.", author: "Joseph Chilton Pearce", ko: "창의적인 삶을 살기 위해서는 틀리는 것에 대한 두려움을 버려야 한다." },
  { id: 109, category: "wisdom", text: "You can never cross the ocean until you have the courage to lose sight of the shore.", author: "Christopher Columbus", ko: "해안선을 놓아버릴 용기가 없다면 바다를 건널 수 없다." },
  { id: 110, category: "wisdom", text: "People who are crazy enough to think they can change the world are the ones who do.", author: "Rob Siltanen", ko: "세상을 바꿀 수 있다고 생각할 만큼 미친 사람들이 실제로 바꾼다." },
  { id: 111, category: "wisdom", text: "Darkness cannot drive out darkness: only light can do that.", author: "Martin Luther King Jr.", ko: "어둠은 어둠을 몰아낼 수 없다. 오직 빛만이 할 수 있다." },
  { id: 112, category: "wisdom", text: "It's not what you look at that matters, it's what you see.", author: "Henry David Thoreau", ko: "무엇을 보느냐가 중요한 게 아니라, 무엇이 보이느냐가 중요하다." },
  { id: 113, category: "wisdom", text: "The mind is everything. What you think you become.", author: "Buddha", ko: "마음이 전부다. 생각하는 것이 당신이 된다." },
  { id: 114, category: "wisdom", text: "Two roads diverged in a wood, and I took the one less traveled by, and that has made all the difference.", author: "Robert Frost", ko: "숲에서 두 갈래 길이 갈라졌고, 나는 사람들이 덜 다닌 길을 택했다. 그것이 모든 것을 바꿔놓았다." },
  { id: 115, category: "wisdom", text: "Not all those who wander are lost.", author: "J.R.R. Tolkien", ko: "방랑하는 모든 이가 길을 잃은 것은 아니다." },
  { id: 116, category: "wisdom", text: "No act of kindness, no matter how small, is ever wasted.", author: "Aesop", ko: "아무리 작은 친절도 결코 헛되이 낭비되지 않는다." },
  { id: 117, category: "wisdom", text: "Nothing in the world can take the place of persistence.", author: "Calvin Coolidge", ko: "세상의 어떤 것도 인내를 대신할 수 없다." },
  { id: 118, category: "wisdom", text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington", ko: "자신을 높이고 싶다면, 다른 누군가를 먼저 높여라." },
  { id: 119, category: "wisdom", text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", author: "Maya Angelou", ko: "사람들은 당신이 한 말도, 한 행동도 잊지만, 당신이 느끼게 해준 감정은 절대 잊지 않는다." },
  { id: 120, category: "wisdom", text: "Keep your face always toward the sunshine — and shadows will fall behind you.", author: "Walt Whitman", ko: "항상 햇빛을 향해 얼굴을 돌려라. 그림자는 등 뒤로 떨어진다." },
  { id: 121, category: "wisdom", text: "Attitude is a little thing that makes a big difference.", author: "Winston Churchill", ko: "태도는 작은 것이지만 큰 차이를 만든다." },
  { id: 122, category: "wisdom", text: "We must accept finite disappointment, but never lose infinite hope.", author: "Martin Luther King Jr.", ko: "유한한 실망은 받아들여야 하지만, 무한한 희망은 잃어서는 안 된다." },
  { id: 123, category: "wisdom", text: "Nobody can make you feel inferior without your consent.", author: "Eleanor Roosevelt", ko: "당신의 동의 없이는 누구도 당신을 열등하게 만들 수 없다." },
  { id: 124, category: "wisdom", text: "To handle yourself, use your head; to handle others, use your heart.", author: "Eleanor Roosevelt", ko: "자신을 다룰 때는 머리를, 남을 다룰 때는 가슴을 써라." },
  { id: 125, category: "wisdom", text: "Too many of us are not living our dreams because we are living our fears.", author: "Les Brown", ko: "너무 많은 사람들이 꿈을 살지 않고 두려움을 살고 있다." },
  { id: 126, category: "wisdom", text: "There is nothing permanent except change.", author: "Heraclitus", ko: "변화 외에 영원한 것은 없다." },
  { id: 127, category: "wisdom", text: "All our dreams can come true, if we have the courage to pursue them.", author: "Walt Disney", ko: "추구할 용기만 있다면 우리의 꿈은 모두 이루어질 수 있다." },
  { id: 128, category: "wisdom", text: "In this life we cannot do great things. We can only do small things with great love.", author: "Mother Teresa", ko: "이 삶에서 우리는 위대한 일을 할 수 없다. 작은 일을 위대한 사랑으로 할 수 있을 뿐이다." },
  { id: 129, category: "wisdom", text: "How wonderful it is that nobody need wait a single moment before starting to improve the world.", author: "Anne Frank", ko: "세상을 개선하기 위해 단 한 순간도 기다릴 필요가 없다니, 얼마나 멋진 일인가." },
  { id: 130, category: "wisdom", text: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.", author: "Dr. Seuss", ko: "머릿속에 두뇌가 있고, 신발 안에 발이 있다. 당신이 원하는 방향 어디로든 나아갈 수 있다." },
  { id: 131, category: "wisdom", text: "We know what we are, but know not what we may be.", author: "William Shakespeare", ko: "우리는 우리가 무엇인지는 알지만, 우리가 무엇이 될 수 있는지는 모른다." },
  { id: 132, category: "wisdom", text: "How we spend our days is, of course, how we spend our lives.", author: "Annie Dillard", ko: "우리가 하루를 보내는 방법이 곧 우리가 인생을 보내는 방법이다." },
  { id: 133, category: "wisdom", text: "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.", author: "Buddha", ko: "건강은 최대의 선물이요, 만족은 최고의 재산이요, 신뢰는 최선의 관계다." },
  { id: 134, category: "wisdom", text: "Learning is not attained by chance, it must be sought for with ardor and diligence.", author: "Abigail Adams", ko: "배움은 우연히 얻어지지 않는다. 열정과 근면으로 추구해야 한다." },
  { id: 135, category: "wisdom", text: "The most wasted of days is one without laughter.", author: "E.E. Cummings", ko: "가장 낭비된 하루는 웃음 없이 보낸 날이다." },
  { id: 136, category: "wisdom", text: "It takes courage to grow up and become who you really are.", author: "E.E. Cummings", ko: "자라서 진정한 자신이 되려면 용기가 필요하다." },
  { id: 137, category: "wisdom", text: "The world belongs to those who read.", author: "Rick Holland", ko: "세상은 읽는 자들의 것이다." },
  { id: 138, category: "wisdom", text: "Whatever you are, be a good one.", author: "Abraham Lincoln", ko: "무엇이 되든, 좋은 사람이 되어라." },
  { id: 139, category: "wisdom", text: "What we achieve inwardly will change outer reality.", author: "Plutarch", ko: "내면에서 이루는 것이 외부 현실을 바꾼다." },
  { id: 140, category: "wisdom", text: "Do what you feel in your heart to be right — for you'll be criticized anyway.", author: "Eleanor Roosevelt", ko: "가슴이 옳다고 느끼는 것을 하라. 어차피 비판은 받게 되어 있다." },
  { id: 141, category: "wisdom", text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis", ko: "새로운 목표를 세우거나 새로운 꿈을 꾸기에 너무 늦은 나이는 없다." },
  { id: 142, category: "wisdom", text: "Normality is a paved road: it's comfortable to walk, but no flowers grow on it.", author: "Vincent van Gogh", ko: "정상성은 포장도로다. 걷기엔 편하지만 꽃은 피지 않는다." },
  { id: 143, category: "wisdom", text: "Always remember that you are absolutely unique. Just like everyone else.", author: "Margaret Mead", ko: "당신이 완전히 독특하다는 것을 항상 기억하라. 다른 모든 사람들처럼." },
  { id: 144, category: "wisdom", text: "Remember that not getting what you want is sometimes a wonderful stroke of luck.", author: "Dalai Lama", ko: "원하는 것을 얻지 못하는 것이 때로는 놀라운 행운임을 기억하라." },
  { id: 145, category: "wisdom", text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt", ko: "인생이 예측 가능하다면, 그것은 더 이상 인생이 아니고 맛도 없을 것이다." },
  { id: 146, category: "wisdom", text: "Make each day your masterpiece.", author: "John Wooden", ko: "매일을 당신의 걸작으로 만들어라." },
  { id: 147, category: "wisdom", text: "First, have a definite, clear practical ideal; a goal, an objective.", author: "Aristotle", ko: "먼저 명확하고 실질적인 이상, 즉 목표와 목적을 가져라." },
  { id: 148, category: "wisdom", text: "Once you choose hope, anything's possible.", author: "Christopher Reeve", ko: "희망을 선택하는 순간, 모든 것이 가능해진다." },
  { id: 149, category: "wisdom", text: "Keep your face to the sunshine and you cannot see a shadow.", author: "Helen Keller", ko: "얼굴을 햇빛으로 향하면 그림자는 보이지 않는다." },
  { id: 150, category: "wisdom", text: "So many of our dreams at first seem impossible, then improbable, and then, when we summon the will, they soon become inevitable.", author: "Christopher Reeve", ko: "우리의 꿈은 처음에는 불가능해 보이고, 그 다음엔 있을 법하지 않아 보이다가, 결국 의지를 모으면 필연적이 된다." },

  // ============================================================
  // 🌟 HAPPINESS & MINDSET (행복 & 마인드셋) — 50개
  // ============================================================
  { id: 151, category: "happiness", text: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama", ko: "행복은 기성품이 아니다. 당신의 행동에서 비롯된다." },
  { id: 152, category: "happiness", text: "Happiness is when what you think, what you say, and what you do are in harmony.", author: "Mahatma Gandhi", ko: "행복은 생각하는 것, 말하는 것, 행동하는 것이 조화를 이룰 때 온다." },
  { id: 153, category: "happiness", text: "The happiness of your life depends upon the quality of your thoughts.", author: "Marcus Aurelius", ko: "당신 삶의 행복은 당신 생각의 질에 달려 있다." },
  { id: 154, category: "happiness", text: "For every minute you are angry you lose sixty seconds of happiness.", author: "Ralph Waldo Emerson", ko: "화를 내는 1분마다 60초의 행복을 잃는다." },
  { id: 155, category: "happiness", text: "Count your age by friends, not years. Count your life by smiles, not tears.", author: "John Lennon", ko: "나이를 연도가 아닌 친구로 세어라. 삶을 눈물이 아닌 미소로 세어라." },
  { id: 156, category: "happiness", text: "Positive thinking will let you use the ability you have.", author: "Zig Ziglar", ko: "긍정적인 사고가 당신이 가진 능력을 사용하게 한다." },
  { id: 157, category: "happiness", text: "Once you replace negative thoughts with positive ones, you'll start having positive results.", author: "Willie Nelson", ko: "부정적인 생각을 긍정적인 생각으로 바꾸면 긍정적인 결과가 생긴다." },
  { id: 158, category: "happiness", text: "The purpose of our lives is to be happy.", author: "Dalai Lama", ko: "우리 삶의 목적은 행복해지는 것이다." },
  { id: 159, category: "happiness", text: "Life is what happens when you're busy making other plans.", author: "John Lennon", ko: "인생은 다른 계획을 세우느라 바쁠 때 일어나는 것이다." },
  { id: 160, category: "happiness", text: "Get busy living or get busy dying.", author: "Stephen King", ko: "바쁘게 살거나, 바쁘게 죽거나." },
  { id: 161, category: "happiness", text: "You only live once, but if you do it right, once is enough.", author: "Mae West", ko: "인생은 한 번뿐이지만, 제대로 산다면 한 번으로 충분하다." },
  { id: 162, category: "happiness", text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde", ko: "당신 자신이 되어라. 다른 모든 사람은 이미 누군가가 하고 있다." },
  { id: 163, category: "happiness", text: "When I was 5 years old, my mother told me that happiness was the key to life.", author: "John Lennon", ko: "다섯 살 때 어머니는 항상 행복이 삶의 열쇠라고 말씀하셨다." },
  { id: 164, category: "happiness", text: "Gratitude turns what we have into enough.", author: "Anonymous", ko: "감사함은 우리가 가진 것을 충분하게 만든다." },
  { id: 165, category: "happiness", text: "Joy is not in things; it is in us.", author: "Richard Wagner", ko: "기쁨은 사물 안에 있는 것이 아니라, 우리 안에 있다." },
  { id: 166, category: "happiness", text: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.", author: "Marcus Aurelius", ko: "행복한 삶을 위해서는 아주 적은 것만 필요하다. 그것은 당신 안에, 당신의 사고방식 안에 있다." },
  { id: 167, category: "happiness", text: "Whoever is happy will make others happy.", author: "Anne Frank", ko: "행복한 사람은 다른 사람도 행복하게 만든다." },
  { id: 168, category: "happiness", text: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.", author: "Helen Keller", ko: "세상에서 가장 아름다운 것들은 눈으로 볼 수도, 손으로 만질 수도 없다. 가슴으로 느껴야 한다." },
  { id: 169, category: "happiness", text: "Try to be a rainbow in someone's cloud.", author: "Maya Angelou", ko: "누군가의 먹구름 속 무지개가 되어보라." },
  { id: 170, category: "happiness", text: "Don't judge each day by the harvest you reap but by the seeds that you plant.", author: "Robert Louis Stevenson", ko: "하루를 수확으로 판단하지 말고, 심은 씨앗으로 판단하라." },
  { id: 171, category: "happiness", text: "I dwell in possibility.", author: "Emily Dickinson", ko: "나는 가능성 속에 산다." },
  { id: 172, category: "happiness", text: "You define your own life. Don't let other people write your script.", author: "Oprah Winfrey", ko: "당신의 삶을 정의하는 것은 당신이다. 다른 사람이 당신의 대본을 쓰도록 놔두지 마라." },
  { id: 173, category: "happiness", text: "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.", author: "Eleanor Roosevelt", ko: "두려움을 정면으로 바라보는 경험을 할 때마다 강인함, 용기, 자신감이 생긴다." },
  { id: 174, category: "happiness", text: "Every moment is a fresh beginning.", author: "T.S. Eliot", ko: "모든 순간은 새로운 시작이다." },
  { id: 175, category: "happiness", text: "Do not complain about growing old. It is a privilege denied to many.", author: "Mark Twain", ko: "나이 드는 것에 불평하지 마라. 그것은 많은 이들에게 거부된 특권이다." },
  { id: 176, category: "happiness", text: "Turn your wounds into wisdom.", author: "Oprah Winfrey", ko: "상처를 지혜로 바꾸어라." },
  { id: 177, category: "happiness", text: "The most courageous act is still to think for yourself. Aloud.", author: "Coco Chanel", ko: "가장 용감한 행동은 여전히 스스로 생각하는 것이다. 소리 내어." },
  { id: 178, category: "happiness", text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi", ko: "세상에서 보고 싶은 변화 그 자체가 되어라." },
  { id: 179, category: "happiness", text: "Keep smiling, because life is a beautiful thing and there's so much to smile about.", author: "Marilyn Monroe", ko: "계속 웃어라. 삶은 아름다운 것이고, 웃을 이유가 가득하다." },
  { id: 180, category: "happiness", text: "In order to be irreplaceable, one must always be different.", author: "Coco Chanel", ko: "대체 불가능해지려면 항상 달라야 한다." },
  { id: 181, category: "happiness", text: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.", author: "Jimmy Dean", ko: "바람의 방향은 바꿀 수 없지만, 목적지에 항상 닿도록 돛을 조정할 수 있다." },
  { id: 182, category: "happiness", text: "If you look at what you have in life, you'll always have more.", author: "Oprah Winfrey", ko: "가진 것을 바라보면, 항상 더 많이 가지게 된다." },
  { id: 183, category: "happiness", text: "Reflect upon your present blessings, of which every man has plenty.", author: "Charles Dickens", ko: "모두에게 풍성한 현재의 축복을 돌아봐라." },
  { id: 184, category: "happiness", text: "Every day may not be good, but there's something good in every day.", author: "Alice Morse Earle", ko: "매일이 좋지는 않지만, 매일 안에는 좋은 것이 있다." },
  { id: 185, category: "happiness", text: "May you live all the days of your life.", author: "Jonathan Swift", ko: "당신의 모든 날들을 살아가길 바란다." },
  { id: 186, category: "happiness", text: "I believe that if one always looked at the skies, one would end up with wings.", author: "Gustave Flaubert", ko: "언제나 하늘을 바라본다면 결국 날개가 생길 것이라고 믿는다." },
  { id: 187, category: "happiness", text: "Nothing is impossible. The word itself says 'I'm possible!'", author: "Audrey Hepburn", ko: "'불가능'이라는 단어 자체가 '나는 가능하다'라고 말하고 있다!" },
  { id: 188, category: "happiness", text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein", ko: "무한한 것은 두 가지다: 우주와 인간의 어리석음. 우주는 확실하지 않지만." },
  { id: 189, category: "happiness", text: "The most wasted of all days is one without laughter.", author: "E.E. Cummings", ko: "모든 날 중 가장 낭비된 날은 웃음 없이 보낸 날이다." },
  { id: 190, category: "happiness", text: "You are enough, just as you are.", author: "Meghan Markle", ko: "지금의 당신 그대로 충분하다." },
  { id: 191, category: "happiness", text: "Life is short, and it's up to you to make it sweet.", author: "Sarah Louise Delany", ko: "인생은 짧다. 달콤하게 만드는 것은 당신에게 달렸다." },
  { id: 192, category: "happiness", text: "With the right kind of coaching and determination you can accomplish anything.", author: "Reese Witherspoon", ko: "올바른 코칭과 결단력으로 무엇이든 이룰 수 있다." },
  { id: 193, category: "happiness", text: "Smile in the mirror. Do that every morning and you'll start to see a big difference in your life.", author: "Yoko Ono", ko: "거울을 보며 웃어라. 매일 아침 그렇게 하면 삶에 큰 변화가 생긴다." },
  { id: 194, category: "happiness", text: "The true secret of happiness lies in taking a genuine interest in all the details of daily life.", author: "William Morris", ko: "진정한 행복의 비밀은 일상의 모든 세부사항에 진심으로 관심을 갖는 것이다." },
  { id: 195, category: "happiness", text: "Happiness often sneaks in through a door you didn't know you left open.", author: "John Barrymore", ko: "행복은 당신이 열어두었는지도 몰랐던 문으로 몰래 들어온다." },
  { id: 196, category: "happiness", text: "The present moment is the only moment available to us, and it is the door to all moments.", author: "Thich Nhat Hanh", ko: "현재 순간이 우리에게 주어진 유일한 순간이며, 모든 순간으로 향하는 문이다." },
  { id: 197, category: "happiness", text: "Thousands of candles can be lighted from a single candle. Happiness never decreases by being shared.", author: "Buddha", ko: "수천 개의 촛불이 하나의 촛불로 밝혀질 수 있다. 행복은 나눌수록 줄어들지 않는다." },
  { id: 198, category: "happiness", text: "The most important thing is to enjoy your life — to be happy — it's all that matters.", author: "Audrey Hepburn", ko: "가장 중요한 것은 삶을 즐기는 것, 행복해지는 것이다. 그것이 전부다." },
  { id: 199, category: "happiness", text: "I have chosen to be happy because it is good for my health.", author: "Voltaire", ko: "나는 행복하기로 선택했다. 건강에 좋기 때문이다." },
  { id: 200, category: "happiness", text: "The simple act of paying attention can take you a long way.", author: "Keanu Reeves", ko: "주의를 기울이는 단순한 행동이 당신을 멀리 데려다 줄 수 있다." },

];

// ============================================================
// 🔧 유틸리티 함수
// ============================================================

// 랜덤 명언 1개
function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// 카테고리별 명언
function getQuotesByCategory(category) {
  return quotes.filter(q => q.category === category);
}

// 랜덤 + 중복 방지 (localStorage 활용)
function getRandomQuoteNoDuplicate() {
  const seen = JSON.parse(localStorage.getItem("seenQuotes") || "[]");
  const unseen = quotes.filter(q => !seen.includes(q.id));
  const pool = unseen.length > 0 ? unseen : quotes; // 다 봤으면 리셋
  const quote = pool[Math.floor(Math.random() * pool.length)];
  const updatedSeen = unseen.length > 0 ? [...seen, quote.id] : [quote.id];
  localStorage.setItem("seenQuotes", JSON.stringify(updatedSeen));
  return quote;
}

// 오늘의 명언 (날짜 기반 고정)
function getTodayQuote() {
  const today = new Date();
  const index = (today.getFullYear() * 365 + today.getMonth() * 31 + today.getDate()) % quotes.length;
  return quotes[index];
}

// 카테고리 목록
const categories = [
  { id: "success",   label: "성공 & 목표",    emoji: "🔥" },
  { id: "challenge", label: "노력 & 도전",    emoji: "💪" },
  { id: "wisdom",    label: "지혜 & 성장",    emoji: "🧠" },
  { id: "happiness", label: "행복 & 마인드셋", emoji: "🌟" },
];

// 전체 내보내기
if (typeof module !== "undefined") {
  module.exports = { quotes, getRandomQuote, getQuotesByCategory, getRandomQuoteNoDuplicate, getTodayQuote, categories };
}
