// தேர்வு தயார்ப்பு வலைத்தளத்தின் ஜாவாஸ்கிரிப்ட் கோப்பு

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

// பக்கம் ஏற்றப்படும்போது செய்திகளை தானாக ஏற்றுதல்
document.addEventListener('DOMContentLoaded', function() {
    // தேர்வு தயார்ப்பு உள்ளடக்கத்தை சேர்த்தல்
    addExamPreparationContent();
});

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