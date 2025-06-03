// إضافة القائمة الرئيسية
document.addEventListener('DOMContentLoaded', function() {
    // إنشاء القائمة الرئيسية
    createNavigation();
    
    // إضافة زر العودة للأعلى
    createBackToTopButton();
    
    // تفعيل تأثيرات التمرير
    initScrollEffects();
    
    // إنشاء الجدول الزمني للغزوات
    createBattlesTimeline();
    
    // إضافة الخريطة التفاعلية للغزوات
    initBattlesMap();
    
    // تفعيل البطاقات التفاعلية للصفات
    initTraitCards();
});

// إنشاء القائمة الرئيسية
function createNavigation() {
    const sections = [
        { id: 'personal-info', title: 'المعلومات الشخصية' },
        { id: 'lineage-family', title: 'النسب والعائلة' },
        { id: 'childhood', title: 'النشأة والطفولة' },
        { id: 'youth', title: 'الشباب' },
        { id: 'prophethood-makkah', title: 'البعثة في مكة' },
        { id: 'hijrah-madinah', title: 'الهجرة والمدينة' },
        { id: 'battles', title: 'الغزوات' },
        { id: 'achievements-traits', title: 'الإنجازات والصفات' },
        { id: 'farewell-pilgrimage-death', title: 'حجة الوداع والوفاة' },
        { id: 'legacy-impact', title: 'الإرث والتأثير' }
    ];
    
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    
    sections.forEach(section => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${section.id}`;
        a.textContent = section.title;
        a.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(`#${section.id}`).scrollIntoView({ behavior: 'smooth' });
        });
        li.appendChild(a);
        ul.appendChild(li);
    });
    
    nav.appendChild(ul);
    document.querySelector('header').insertAdjacentElement('afterend', nav);
}

// إنشاء زر العودة للأعلى
function createBackToTopButton() {
    const button = document.createElement('a');
    button.className = 'back-to-top';
    button.innerHTML = '&#8593;';
    button.href = '#';
    button.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.body.appendChild(button);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });
}

// تفعيل تأثيرات التمرير
function initScrollEffects() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// إنشاء الجدول الزمني للغزوات
function createBattlesTimeline() {
    const battles = [
        { name: 'غزوة بدر الكبرى', date: '2 هـ', description: 'أول انتصار كبير للمسلمين على قريش' },
        { name: 'غزوة أحد', date: '3 هـ', description: 'تعلم المسلمون دروساً مهمة من هذه الغزوة' },
        { name: 'غزوة الخندق', date: '5 هـ', description: 'استراتيجية دفاعية فريدة بحفر الخندق حول المدينة' },
        { name: 'صلح الحديبية', date: '6 هـ', description: 'معاهدة سلام مهمة مهدت لفتح مكة' },
        { name: 'غزوة خيبر', date: '7 هـ', description: 'فتح حصون اليهود في خيبر' },
        { name: 'فتح مكة', date: '8 هـ', description: 'دخول مكة بدون قتال والعفو العام' },
        { name: 'غزوة حنين', date: '8 هـ', description: 'انتصار بعد هزيمة أولية' },
        { name: 'غزوة تبوك', date: '9 هـ', description: 'آخر غزوات النبي صلى الله عليه وسلم' }
    ];
    
    const timelineContainer = document.createElement('div');
    timelineContainer.className = 'timeline';
    
    battles.forEach((battle, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        const timelineDate = document.createElement('div');
        timelineDate.className = 'timeline-date';
        timelineDate.textContent = battle.date;
        
        const timelineContent = document.createElement('div');
        timelineContent.className = 'timeline-content';
        
        const battleTitle = document.createElement('h3');
        battleTitle.textContent = battle.name;
        
        const battleDesc = document.createElement('p');
        battleDesc.textContent = battle.description;
        
        timelineContent.appendChild(battleTitle);
        timelineContent.appendChild(battleDesc);
        
        timelineItem.appendChild(timelineDate);
        timelineItem.appendChild(timelineContent);
        
        timelineContainer.appendChild(timelineItem);
    });
    
    document.getElementById('battles-interactive').appendChild(timelineContainer);
}

// إضافة الخريطة التفاعلية للغزوات
function initBattlesMap() {
    // إنشاء حاوية الخريطة
    const mapContainer = document.createElement('div');
    mapContainer.id = 'map-container';
    
    // إضافة نص بديل حتى يتم تنفيذ الخريطة التفاعلية
    const mapPlaceholder = document.createElement('div');
    mapPlaceholder.style.height = '100%';
    mapPlaceholder.style.display = 'flex';
    mapPlaceholder.style.justifyContent = 'center';
    mapPlaceholder.style.alignItems = 'center';
    mapPlaceholder.style.backgroundColor = '#f0f0f0';
    mapPlaceholder.style.borderRadius = '8px';
    mapPlaceholder.innerHTML = '<p style="font-size: 1.2rem; color: #666;">خريطة تفاعلية لمواقع الغزوات</p>';
    
    mapContainer.appendChild(mapPlaceholder);
    document.getElementById('battles-interactive').appendChild(mapContainer);
}

// تفعيل البطاقات التفاعلية للصفات
function initTraitCards() {
    const traits = [
        { title: 'الصدق والأمانة', description: 'عُرف النبي صلى الله عليه وسلم بالصادق الأمين قبل البعثة وبعدها' },
        { title: 'الشجاعة', description: 'كان أشجع الناس في مواجهة المخاطر والصعاب' },
        { title: 'الرحمة', description: 'كان رحيماً بالمؤمنين وبالضعفاء وحتى بأعدائه' },
        { title: 'التواضع', description: 'عاش متواضعاً رغم مكانته العظيمة' },
        { title: 'الحكمة', description: 'اتخذ قرارات حكيمة في أصعب المواقف' },
        { title: 'العدل', description: 'أقام العدل بين الناس دون تمييز' }
    ];
    
    const traitsGrid = document.createElement('div');
    traitsGrid.className = 'traits-grid';
    
    traits.forEach(trait => {
        const traitCard = document.createElement('div');
        traitCard.className = 'trait-card';
        
        const traitTitle = document.createElement('h3');
        traitTitle.textContent = trait.title;
        
        const traitDesc = document.createElement('p');
        traitDesc.textContent = trait.description;
        
        traitCard.appendChild(traitTitle);
        traitCard.appendChild(traitDesc);
        
        traitsGrid.appendChild(traitCard);
    });
    
    document.getElementById('achievements-traits').appendChild(traitsGrid);
}
