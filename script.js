// தேர்வு தயார்ப்பு வலைத்தளத்தின் ஜாவாஸ்கிரிப்ட் கோப்பு

// டார்க் மோட் டோக்கிள் செயல்பாடு
function toggleDarkMode() {
    const body = document.body;
    const toggleBtn = document.querySelector('.dark-mode-toggle');

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
        toggleBtn.setAttribute('title', 'டார்க் மோட்');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
        toggleBtn.setAttribute('title', 'லைட் மோட்');
    }
}

// ஏற்றப்படும்போது டார்க் மோட் அமைப்பை ஏற்றுதல்
function loadDarkModePreference() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
        document.body.classList.add('dark-mode');
    }
}

// Quick question அனுப்புதல்
function askQuickQuestion(question) {
    const chatMessages = document.getElementById('chat-messages');
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.innerHTML = `
        <div class="message-content">
            <strong>நீங்கள்:</strong> ${question}
        </div>
    `;
    chatMessages.appendChild(userMessage);

    // AI பதிலை சிமுலேட் செய்தல் (இங்கே உண்மையான API ஒருங்கிணைப்பு)
    const aiResponse = getAIResponse(question);
    setTimeout(() => {
        const aiMessage = document.createElement('div');
        aiMessage.className = 'message bot-message';
        aiMessage.innerHTML = `
            <div class="message-content">
                <strong>AI உதவியாளர்:</strong> ${aiResponse}
            </div>
        `;
        chatMessages.appendChild(aiMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
}

// AI பதில்களை பெறுதல் (சிமுலேட் செய்யப்பட்ட)
function getAIResponse(question) {
    const responses = {
        "TNPSC குரூப் 1 தேர்வின் பாடங்கள் என்ன?": "TNPSC குரூப் 1 தேர்வில் பொது அறிவு மற்றும் மன அறிவு, தமிழ் வழுவியல் மற்றும் இலக்கியம், கணிதம் மற்றும் தருக்கவியல், இந்திய வரலாறு மற்றும் அரசியல் போன்ற பாடங்கள் அடங்கும். சில பங்களிப்போல் செய்ய சிஸ்டம் செய்யப்படுகிறது.",
        "IBPS PO தேர்வில் எத்தனை பிரிவுகள் இருக்கும்?": "IBPS PO தேர்வில் பொதுவான பாடங்கள் (Reasoning & Computer Aptitude), ஆங்கிலம், கணிதம் (Quantitative Aptitude), பொது அறிவு (General Awareness) மற்றும் தேர்ந்தெடுக்கப்பட்ட ஆய்வுத்தாள் (Professional Knowledge) என 5 பிரிவுகள் இருக்கும்.",
        "வங்கி தேர்வுக்கு எப்படி தயார்படுவது?": "வங்கி தேர்வுக்கு தயார்ப்பது சொல்லது: அன்றாடம் செய்திகளை படித்தல், பழைய தேர்வுகளை தீர்த்தல், வளைய தொடங்குதல், முழுமையான கணினி அறிவு கொள்ளல். நீங்கள் தேர்வு எடுத்தால் அதைப் பற்றிய குறிப்பிட்ட வழிகாட்டலை அளிக்கிறேன்!"
    };

    return responses[question] || "மன்னிக்கவும், உங்கள் கேள்விக்கு உடனான பதிலளிக்க அது உங்கள் கேள்வியில் தொடர்புடையது. என் சிஸ்டம் Hugging Face API ஐ பயன்படுத்துகிறது, அதனால் சில கேள்விகளுக்கு பதிலளிக்க இயலாமல் இருக்கலாம். மறுபடியும் முயற்சிக்கவும்.";
}

// செய்தி அனுப்புதல்
function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();

    if (message === '') return;

    askQuickQuestion(message);
    userInput.value = '';
}

// Enter key அழுத்தம்
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// தினசரி செய்திகளை ஏற்றுதல்
async function loadDailyNews() {
    const newsContainer = document.getElementById('daily-news');
    newsContainer.innerHTML = '<div class="loading">செய்திகள் ஏற்றப்படுகின்றன...</div>';

    try {
        // இங்கே நிஜ செய்தி API ஐ ஒருங்கிணைக்கலாம்
        // தற்போதைக்கு மாதிரி தரவு
        const news = [
            {
                title: "நீதிமன்றம் தமிழ்நாடு அரசு சார்பு மறுக்கிறது",
                date: getTodayDate(),
                summary: "உயர் நீதிமன்றம் தமிழ்நாடு அரசின் மனுத் திட்டத்தை ஆதரிக்கிறது."
            },
            {
                title: "தேர்வு தயார்ப்பு புதிய நிலையான திட்டம் அறிமுகம்",
                date: getTodayDate(),
                summary: "கல்வி துறை TNPSC தேர்வுக்கான புதிய படிப்பு திட்டத்தை அறிமுகப்படுத்தியுள்ளது."
            },
            {
                title: "வங்கி தேர்வு தேதிகள் அறிவிக்கப்பட்டன",
                date: getTodayDate(),
                summary: "IBPS தேர்வுகளின் அட்டவணை வெளியிடப்பட்டது."
            }
        ];

        let newsHTML = '';
        news.forEach(item => {
            newsHTML += `
                <div class="news-item">
                    <h4>${item.title}</h4>
                    <p class="news-date">${item.date}</p>
                    <p>${item.summary}</p>
                </div>
            `;
        });

        newsContainer.innerHTML = newsHTML;
    } catch (error) {
        newsContainer.innerHTML = '<div class="error">செய்திகளை ஏற்ற இயலவில்லை. மீண்டும் முயற்சிக்கவும்.</div>';
        console.error('செய்தி ஏற்றத்தில் பிழை:', error);
    }
}

// துப்புரவு செய்திகளை ஏற்றுதல்
async function loadCurrentAffairs() {
    const affairsContainer = document.getElementById('current-affairs');
    affairsContainer.innerHTML = '<div class="loading">துப்புரவு செய்திகள் ஏற்றப்படுகின்றன...</div>';

    try {
        // துப்புரவு செய்திகளின் மாதிரி தரவு
        const affairs = [
            {
                title: "புதிய நிதி நேத்தம் அறிமுகம்",
                category: "நிதி",
                summary: "மத்திய அரசு புதிய வருமான வரித்திட்டத்தை அறிமுகப்படுத்தியுள்ளது."
            },
            {
                title: "சுற்றுச்சூழல் திட்டங்கள் விரிவு",
                category: "சுற்றுச்சூழல்",
                summary: "தமிழ்நாடு அரசு கங்கை சுத்திகரிப்பு திட்டத்தை தொடங்கியுள்ளது."
            },
            {
                title: "கல்வி சீர்திருத்தங்கள்",
                category: "கல்வி",
                summary: "புதிய கல்வி கொள்கையின் கீழ் மாற்றங்கள் செய்யப்பட்டுள்ளன."
            }
        ];

        let affairsHTML = '';
        affairs.forEach(item => {
            affairsHTML += `
                <div class="news-item">
                    <span class="category">${item.category}</span>
                    <h4>${item.title}</h4>
                    <p>${item.summary}</p>
                </div>
            `;
        });

        affairsContainer.innerHTML = affairsHTML;
    } catch (error) {
        affairsContainer.innerHTML = '<div class="error">துப்புரவு செய்திகளை ஏற்ற இயலவில்லை.</div>';
        console.error('துப்புரவு செய்திகள் ஏற்றத்தில் பிழை:', error);
    }
}

// தமிழ்நாடு செய்திகளை ஏற்றுதல்
async function loadTamilNaduNews() {
    const tnNewsContainer = document.getElementById('tn-daily-updates');
    tnNewsContainer.innerHTML = '<div class="loading">தமிழ்நாடு செய்திகள் ஏற்றப்படுகின்றன...</div>';

    try {
        // தமிழ்நாடு செய்திகளின் மாதிரி தரவு
        const tnNews = [
            {
                title: "சென்னை மழை: அவசரநிலை அறிவிப்பு",
                location: "சென்னை",
                summary: "மிகுந்த மழையின்போது அவசரநிலை திட்டங்கள் செயல்படுத்தப்பட்டன."
            },
            {
                title: "தொழில்முறை பயிற்சி திட்டம் தொடக்கம்",
                location: "தமிழ்நாடு முழுவதும்",
                summary: "தமிழ்நாடு அரசு புதிய தொழில்முறை பயிற்சி திட்டத்தை தொடங்கியுள்ளது."
            },
            {
                title: "விவசாயிகளுக்கு ஊதிய உயர்வு",
                location: "தமிழ்நாடு",
                summary: "விவசாயிகளின் வாழ்க்கைத்தரத்தை மேம்படுத்துவதற்கான திட்டங்கள் அறிவிக்கப்பட்டன."
            }
        ];

        let tnNewsHTML = '';
        tnNews.forEach(item => {
            tnNewsHTML += `
                <div class="news-item tn-news-item">
                    <span class="location">${item.location}</span>
                    <h4>${item.title}</h4>
                    <p>${item.summary}</p>
                </div>
            `;
        });

        tnNewsContainer.innerHTML = tnNewsHTML;
    } catch (error) {
        tnNewsContainer.innerHTML = '<div class="error">தமிழ்நாடு செய்திகளை ஏற்ற இயலவில்லை.</div>';
        console.error('தமிழ்நாடு செய்திகள் ஏற்றத்தில் பிழை:', error);
    }
}

// தமிழ்நாடு பிறந்த நாள்கள் மற்றும் நிகழ்வுகளை ஏற்றுதல்
async function loadTNBirthdays() {
    const tnEventsContainer = document.getElementById('tn-events');
    tnEventsContainer.innerHTML = '<div class="loading">நிகழ்வுகள் மற்றும் பிறந்தநாள்கள் ஏற்றப்படுகின்றன...</div>';

    try {
        // முக்கிய நிகழ்வுகளின் மாதிரி தரவு
        const events = [
            {
                date: getTodayDate(),
                event: "தமிழ்நாடு தினம் - சாதி ஒழிப்புச் சத்தியாகிரகம் நினைவுநாள்"
            },
            {
                date: getTomorrowDate(),
                event: "மழைக்கால அபரிக்கை திட்டம் தொடக்கம்"
            },
            {
                date: getWeekFromNow(),
                event: "TNPSC தேர்வு நேர்காணல் தேதி அறிவிப்பு"
            }
        ];

        let eventsHTML = '';
        events.forEach(item => {
            eventsHTML += `
                <div class="event-item">
                    <div class="event-date">${item.date}</div>
                    <div class="event-description">${item.event}</div>
                </div>
            `;
        });

        tnEventsContainer.innerHTML = eventsHTML;
    } catch (error) {
        tnEventsContainer.innerHTML = '<div class="error">நிகழ்வுகளை ஏற்ற இயலவில்லை.</div>';
        console.error('நிகழ்வுகள் ஏற்றத்தில் பிழை:', error);
    }
}

// செய்தித்தாள்கள் செயல்பாடுகள்

// தினமணி செய்திகளை ஏற்றுதல்
async function loadDinamaniNews() {
    toggleNewsVisibility('dinamani-content', 'தினமணி செய்திகள் ஏற்றப்படுகின்றன...');
    const contentDiv = document.getElementById('dinamani-content');

    try {
        // தினமணியின் மாதிரி செய்தித்தலைப்புகள்
        const headlines = [
            "தமிழ்நாடு பட்ஜெட் கலந்துரையாடல் தொடக்கம்",
            "சென்னை நகராட்சி தேர்தல் பரபரப்பு",
            "தமிழ் நாட்டின் வணிக மையம் என்று சென்னை உருவாகுமா?",
            "விவசாயிகளின் போராட்டம்: தமிழ்நாடு அரசு நிலைப்பாடு"
        ];

        let contentHTML = '<h4>இன்றைய முக்கிய செய்திகள்</h4><ul>';
        headlines.forEach(headline => {
            contentHTML += `<li>${headline}</li>`;
        });
        contentHTML += '</ul>';

        contentDiv.innerHTML = contentHTML;
    } catch (error) {
        contentDiv.innerHTML = '<div class="error">தினமணி செய்திகளை ஏற்ற இயலவில்லை.</div>';
    }
}

// இந்து தமிழ் செய்திகளை ஏற்றுதல்
async function loadHinduNews() {
    toggleNewsVisibility('hindu-content', 'இந்து தமிழ் செய்திகள் ஏற்றப்படுகின்றன...');
    const contentDiv = document.getElementById('hindu-content');

    try {
        const headlines = [
            "கேரளாவில் அரசியல் நெருக்கடி தொடர்கிறது",
            "மத்திய அரசின் நிதி ஒதுக்கீடு பற்றிய கலந்துரையாடல்",
            "தென்னிந்திய வணிக ஒப்பந்தங்கள் கையெழுத்திடல்",
            "இளைஞர்களின் வேலைவாய்ப்பு திட்டங்கள்"
        ];

        let contentHTML = '<h4>இன்றைய செய்திகள்</h4><ul>';
        headlines.forEach(headline => {
            contentHTML += `<li>${headline}</li>`;
        });
        contentHTML += '</ul>';

        contentDiv.innerHTML = contentHTML;
    } catch (error) {
        contentDiv.innerHTML = '<div class="error">இந்து செய்திகளை ஏற்ற இயலவில்லை.</div>';
    }
}

// தீனகரன் செய்திகளை ஏற்றுதல்
async function loadDinakaranNews() {
    toggleNewsVisibility('dinakaran-content', 'தீனகரன் செய்திகள் ஏற்றப்படுகின்றன...');
    const contentDiv = document.getElementById('dinakaran-content');

    try {
        const headlines = [
            "தமிழ்நாடு சட்டப் பேரவை கூட்டம் உற்சாகம்",
            "பள்ளிக் கல்வி முறை மாற்றங்கள் அறிவிப்பு",
            "கலை விழாக்கள் மற்றும் கலாச்சார நிகழ்ச்சிகள்",
            "இளைஞர் தொழில் திட்டங்கள் விரிவாக்கம்"
        ];

        let contentHTML = '<h4>இன்றைய செய்திகள்</h4><ul>';
        headlines.forEach(headline => {
            contentHTML += `<li>${headline}</li>`;
        });
        contentHTML += '</ul>';

        contentDiv.innerHTML = contentHTML;
    } catch (error) {
        contentDiv.innerHTML = '<div class="error">தீனகரன் செய்திகளை ஏற்ற இயலவில்லை.</div>';
    }
}

// மக்கள் குரல் செய்திகளை ஏற்றுதல்
async function loadMakkalKuralNews() {
    toggleNewsVisibility('makkalkural-content', 'மக்கள் குரல் செய்திகள் ஏற்றப்படுகின்றன...');
    const contentDiv = document.getElementById('makkalkural-content');

    try {
        const headlines = [
            "தமிழ்நாடு தேர்வு தயார்ப்பு மையங்கள் திறப்பு",
            "கிராம ஊராட்சிகளில் புதிய திட்டங்கள்",
            "வரலாறு மற்றும் கலாச்சார திட்டங்கள்",
            "பெண்களின் அதிகாரமயமாக்கல் நிகழ்ச்சிகள்"
        ];

        let contentHTML = '<h4>இன்றைய செய்திகள்</h4><ul>';
        headlines.forEach(headline => {
            contentHTML += `<li>${headline}</li>`;
        });
        contentHTML += '</ul>';

        contentDiv.innerHTML = contentHTML;
    } catch (error) {
        contentDiv.innerHTML = '<div class="error">மக்கள் குரல் செய்திகளை ஏற்ற இயலவில்லை.</div>';
    }
}

// செய்தி உள்ளடக்கத்தை முடக்க/இயக்குதல்
function toggleNewsVisibility(divId, loadingText) {
    const contentDiv = document.getElementById(divId);
    if (contentDiv.classList.contains('hidden')) {
        contentDiv.classList.remove('hidden');
        contentDiv.innerHTML = `<div class="loading">${loadingText}</div>`;
    } else {
        contentDiv.classList.add('hidden');
    }
}

// உதவி செயல்பாடுகள்

// இன்றைய தேதியைப் பெறுதல்
function getTodayDate() {
    const today = new Date();
    return today.toLocaleDateString('ta-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// நாளைக்கு தேதி
function getTomorrowDate() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toLocaleDateString('ta-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// ஒரு வாரம் கழித்து தேதி
function getWeekFromNow() {
    const weekFromNow = new Date();
    weekFromNow.setDate(weekFromNow.getDate() + 7);
    return weekFromNow.toLocaleDateString('ta-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// பக்கம் ஏற்றப்படும்போது செய்திகளை தானாக ஏற்றுதல் மற்றும் வேறு செயல்பாடுகள்
document.addEventListener('DOMContentLoaded', function() {
    // டார்க் மோட் விருப்பங்களை ஏற்றுதல்
    loadDarkModePreference();

    // தேர்வு தயார்ப்பு உள்ளடக்கத்தை சேர்த்தல்
    addExamPreparationContent();

    // அனிமேஷன் கிளாஸ்களை சேர்த்தல்
    addFadeInAnimation();
});

// பக்கம் ஸ்க்ரால்லு செய்யப்படும்போது அனிமேஷான் சேர்த்தல்
function addFadeInAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .exam-card, .news-card, .tn-news-card, .newspaper-card').forEach(el => {
        observer.observe(el);
    });
}

// ஹீரோ பார்டிக்கள் அனிமேஷன் சேர்த்தல்
function initHeroParticles() {
    const particlesContainer = document.getElementById('hero-particles');
    if (!particlesContainer) return;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 3 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particlesContainer.appendChild(particle);
    }
}
// ஹீரோ பார்டிக்கள் அனிமேஷன் சேர்த்தல் நிஜமாக்கு
setTimeout(initHeroParticles, 1000);

// பாடநூல்கள் செயல்பாடுகள்

// படிப்பு நோட்ஸ் ஏற்றுதல்
function loadStudyNotes(subject) {
    // இங்கே மாட்டல்டிடி பிரவுஸர் ஸ்டோ ரஜ மூடாக்கும்
    const notes = {
        history: {
            title: "இந்திய வரலாறு மற்றும் அரசியல்",
            content: `
                <h3>இந்திய வரலாறு - முக்கிய பிரிவுகள்</h3>
                <h4>பழைய கற்கைக்காலம் (அசோகர் காலம்)</h4>
                <ul>
                    <li>மௌரிய சாம்ராஜ்யம் - அசோகர்</li>
                    <li>புத்த மத காலம்</li>
                    <li>கல் மற்றும் செப்பு எழுத்துக்கள்</li>
                </ul>
                <h4>பழைய பழமையான வரலாறு</h4>
                <ul>
                    <li>குப்தர் சாம்ராஜ்யம்</li>
                    <li>தங்க காலம்</li>
                    <li>கலாச்சார மேம்பாடு</li>
                </ul>
                <h4>வழிங்கு காலம்</h4>
                <ul>
                    <li>தெலுங்கு சாம்ராஜ்யங்கள்</li>
                    <li>முகலாயர் ஆட்சி</li>
                    <li>மராட்டியர் போர்</li>
                </ul>
            `
        },
        gk: {
            title: "பொது அறிவு மற்றும் மன அறிவு",
            content: `
                <h3>தற்போதைய நிகழ்வுகள்</h3>
                <h4>தமிழ்நாடு பட்ஜெட் 2024-25</h4>
                <ul>
                    <li>மொத்த வருமானம்: ₹2.2 லட்சம் கோடி</li>
                    <li>விவசாய மானியம்: ₹5000 கோடி</li>
                    <li>கல்வி ஒதுக்கீடு: ₹25,000 கோடி</li>
                </ul>
                <h4>இந்திய அரசியல்</h4>
                <ul>
                    <li>பிரதமர்: நரேந்திர மோடி</li>
                    <li>முதலமைச்சர் (தமிழ்நாடு): மு.க. ஸ்டாலின்</li>
                    <li>கவர்னர்: ஆர்.என். ரவி</li>
                </ul>
                <h4>உலக நிகழ்வுகள்</h4>
                <ul>
                    <li>ரஷ்யா-யுக்ரைன் போர் (2022-தொடர்கிறது)</li>
                    <li>இஸ்ரேல்-ஹமாஸ் மோதல்</li>
                    <li>ஜி20 உச்சி: பிரேமினார், தென்கொரியா</li>
                </ul>
            `
        },
        math: {
            title: "கணிதம் மற்றும் தருக்கவியல்",
            content: `
                <h3>கணித ஆர்டித்தது பிரச்சனைகள்</h3>
                <h4>சராசரி கணக்கிடல்</h4>
                <p>ஒரு மனிதன் ஒரு நாளில் 25 கி.மீ சென்று 30 கி.மீ திரும்பிச் செல்கிறான். அவனின் சராசரி விரைவு என்ன?</p>
                <p><strong>விடை:</strong> முன் பின் விரைவுகளை பெருக்கி இரண்டாக பிரித்தல்</p>
                <p>உதாரணம்: (25 × 30) ÷ (25 + 30) = 750 ÷ 55 ≈ 13.6 கி.மீ</p>

                <h4>வட்டி கணக்கிடல்</h4>
                <div class="formula">
                    சிம்பிள் இன்ட்ரெஸ்ட் = (P × R × T) ÷ 100<br>
                    கம்பவுண்ட் இன்ட்ரெஸ்ட் = P(1 + r/100)^n
                </div>

                <h4>தருக்கவியல் - பிரச்சனைகள்</h4>
                <h5>பிளஸ் மைனஸ் தருக்கவியல்</h5>
                <p>வழக்கமான தருக்கவியல் பாதைகள்: எப்பொழுதும் ஆரம்பிக்காது, ஒரு முறை மட்டுமே மீண்டும் சந்தித்தல் போன்றவை.</p>
            `
        }
    };

    showModal(notes[subject].content, notes[subject].title);
}

// முற்றிக்கு தேர்வு தொடங்குதல்
function startMockTest(testType) {
    const tests = {
        tnpsc: {
            title: "TNPSC குரூப் 1 முற்றிக்கு தேர்வு",
            questions: [
                {
                    question: "தமிழ்நாட்டின் தலைநகரம் எது?",
                    options: ["மதராஸ்", "சென்னை", "மைசூர்", "பங்களூரு"],
                    correct: 1
                },
                {
                    question: "மக்கள் கணக்கெடுப்பு எத்தனை ஆண்டுக்கு ஒருமுறை?",
                    options: ["5 ஆண்டு", "10 ஆண்டு", "15 ஆண்டு", "20 ஆண்டு"],
                    correct: 1
                },
                {
                    question: "அசோகர் காலத்தில் எழுதப்பட்ட புத்த எழுத்து எது?",
                    options: ["கல் எழுத்து", "செப்பு எழுத்து", "பொன் எழுத்து", "வெள்ளி எழுத்து"],
                    options: ["கல் எழுத்து", "செப்பு எழுத்து", "பொன் எழுத்து", "வெள்ளி எழுத்து"],
                    correct: 0
                }
            ]
        },
        banking: {
            title: "IBPS PO முற்றிக்கு தேர்வு",
            questions: [
                {
                    question: "RBI என்றால் என்ன?",
                    options: ["Reserve Bank of India", "Royal Bank of India", "Regional Bank of India", "Rural Bank of India"],
                    correct: 0
                },
                {
                    question: "பாங்கிங் டெர்மினாலஜி - CRR என்றால் என்ன?",
                    options: ["Cash Reserve Ratio", "Capital Reserve Ratio", "Credit Reserve Ratio", "Current Reserve Ratio"],
                    correct: 0
                }
            ]
        }
    };

    const test = tests[testType];
    let testHTML = `<h3>${test.title}</h3><form id="mock-test-form">`;

    test.questions.forEach((q, index) => {
        testHTML += `
            <div class="test-question">
                <p><strong>கேள்வி ${index + 1}:</strong> ${q.question}</p>
                <div class="test-options">
                    ${q.options.map((option, optIndex) =>
                        `<div class="test-option" data-question="${index}" data-answer="${optIndex}">${option}</div>`
                    ).join('')}
                </div>
            </div>
        `;
    });

    testHTML += '<button type="submit" class="test-submit-btn">விடயத்தை சமர்ப்பிக்கு</button></form>';
    showModal(testHTML, test.title);

    // ஃபார்ம் சமர்ப்பித்தல் கையாளுதல்
    document.getElementById('mock-test-form').addEventListener('submit', function(e) {
        e.preventDefault();
        evaluateTest(test.questions);
    });
}

// தேர்வு மதிப்பீடு செய்தல்
function evaluateTest(questions) {
    const selectedAnswers = document.querySelectorAll('.test-option.selected');
    let correct = 0;

    selectedAnswers.forEach(option => {
        const questionIndex = parseInt(option.dataset.question);
        const answerIndex = parseInt(option.dataset.answer);
        if (answerIndex === questions[questionIndex].correct) {
            correct++;
        }
    });

    const score = (correct / questions.length) * 100;
    showResults(score, questions.length);
}

// தேர்வு முடிவுகள் காட்டுதல்
function showResults(score, total) {
    const resultsHTML = `
        <div class="test-results">
            <h3>தேர்வு முடிவுகள்</h3>
            <div class="score-display">
                <div class="score">${Math.round(score)}%</div>
                <p>${Math.round(score)/100 * total}/${total} கேள்விகளுக்கு சரியாக விடயம்</p>
            </div>
            <div class="performance-feedback">
                ${score >= 80 ? 'சிறப்பாக செய்துள்ளீர்கள்! 🎉' :
                  score >= 60 ? 'நலமாக செய்துள்ளீர்கள்! 👍' :
                  'மேலும் பயிற்சி தேவை! 📚'}
            </div>
            <button onclick="initiateRetake()" class="test-btn">மீண்டும் தேர்வு</button>
        </div>
    `;
    showModal(resultsHTML, 'தேர்வு முடிவுகள்');
}

// ஆன்ஸ்வர் கீ ஏற்றுதல்
function loadAnswerKey(testType) {
    const answers = {
        'tnpsc-2024': {
            title: 'TNPSC குரூப் 1 தேர்வு - 2024',
            content: `
                <h4>குரூப் 1 தேர்வு விடயங்கள்</h4>
                <table class="answer-table">
                    <tr><th>கேள்வி எண்</th><th>சரியான விடை</th><th>விளக்கம்</th></tr>
                    <tr><td>1</td><td>A</td><td>தமிழ்நாட்டின் தலைநகரம் சென்னை</td></tr>
                    <tr><td>2</td><td>B</td><td>மக்கள் கணக்கெடுப்பு 10 ஆண்டுக்கு ஒருமுறை</td></tr>
                    <tr><td>3</td><td>A</td><td>அசோகர் கல் எழுத்துக்கள் செய்தார்</td></tr>
                </table>
            `
        },
        'ibps-po-2024': {
            title: 'IBPS PO தேர்வு - 2024',
            content: `
                <h4>பைனல் தேர்வு விடயங்கள்</h4>
                <table class="answer-table">
                    <tr><th>கேள்வி எண்</th><th>சரியான விடை</th><th>விளக்கம்</th></tr>
                    <tr><td>1</td><td>C</td><td>RBI ரிஸர்வ் பாங்க் ஆஃப் இந்தியா</td></tr>
                    <tr><td>2</td><td>A</td><td>CRR - கேஷ் ரிஸர்வ் ரேஷியோ</td></tr>
                </table>
            `
        }
    };

    showModal(answers[testType].content, answers[testType].title);
}

// ஆனிமேட் மாட்டல் காட்டுதல்
function showModal(content, title) {
    const modal = document.createElement('div');
    modal.className = 'test-modal active';
    modal.innerHTML = `
        <div class="test-modal-content">
            <button class="test-modal-close" onclick="this.closest('.test-modal').remove()">×</button>
            <h3>${title}</h3>
            <div class="modal-body">${content}</div>
        </div>
    `;
    document.body.appendChild(modal);

    // மாட்டல்டிர ஸ்க்ரிப்ட் ஏற்றுதல்
    setTimeout(() => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }, 100);
}

/* மாட்டல் சிஸ்டம் */

// நோட்டிஃபிகேஷன் காட்டுதல்
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// தேர்வு தயார்ப்பு உள்ளடக்கத்தை சேர்த்தல்
function addExamPreparationContent() {
    // TNPSC தேர்வு உள்ளடக்கம்
    document.getElementById('group1-content').innerHTML = `
        <h4>குரூப் 1 தேர்வு தயார்ப்பு</h4>
        <ul>
            <li>பொது அறிவு மற்றும் மன அறிவு தேர்வு</li>
            <li>தமிழ் வழுவியல் மற்றும் இலக்கியம்</li>
            <li>கணிதம் மற்றும் தருக்கவியல்</li>
            <li>இந்திய வரலாறு மற்றும் அரசியல்</li>
        </ul>
    `;

    document.getElementById('group2-content').innerHTML = `
        <h4>குரூப் 2 தேர்வு தயார்ப்பு</h4>
        <ul>
            <li>பொது துறை தேர்வு</li>
            <li>கணித்தல் திறன்கள்</li>
            <li>பொது அறிவு பாடங்கள்</li>
            <li>தமிழ் மொழித் தேர்வு</li>
        </ul>
    `;

    document.getElementById('tn-content').innerHTML = `
        <h4>தமிழ் நிறுவன தேர்வு</h4>
        <ul>
            <li>தமிழ் இலக்கிய வரலாறு</li>
            <li>சொல்லாராய்ச்சி மற்றும் அர்த்தவியல்</li>
            <li>தமிழ் எழுத்துக்கள்</li>
            <li>அறிவியல் தமிழ்</li>
        </ul>
    `;

    // வங்கி தேர்வு உள்ளடக்கம்
    document.getElementById('ibps-po-content').innerHTML = `
        <h4>IBPS PO தேர்வு தயார்ப்பு</h4>
        <ul>
            <li>எண்கணிதம் மற்றும் தருக்க வியல்</li>
            <li>பொது வளர்ச்சி மற்றும் நிதி அறிவு</li>
            <li>கணினி அறிவு</li>
            <li>ஆங்கிலம் மற்றும் தமிழ்</li>
        </ul>
    `;

    document.getElementById('ibps-clerk-content').innerHTML = `
        <h4>IBPS Clerk தேர்வு தயார்ப்பு</h4>
        <ul>
            <li>எண் சம்பந்தப்பட்ட பாடங்கள்</li>
            <li>பொது அறிவு</li>
            <li>கணினி சார்ந்த பாடங்கள்</li>
            <li>நியாயமான தருக்கமான பாடங்கள்</li>
        </ul>
    `;

    document.getElementById('sbi-po-content').innerHTML = `
        <h4>SBI PO தேர்வு தயார்ப்பு</h4>
        <ul>
            <li>கணித திறன்கள்</li>
            <li>பொது அறிவு</li>
            <li>தருக்க ஆராய்ச்சி</li>
            <li>பங்குத்துறை அறிவு</li>
        </ul>
    `;
}