const sections = document.querySelectorAll('.brand-section, .visual-section, .digital-section'); 

const categoryItems = {
    'brand-section': document.querySelector('.category-list .category-item:nth-child(1)'),
    'visual-section': document.querySelector('.category-list .category-item:nth-child(2)'),
    'digital-section': document.querySelector('.category-list .category-item:nth-child(3)')
};

const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px', // 스크롤 시 부드럽게 감지되도록 유지
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionKey = entry.target.id || entry.target.classList[0];
            
            // 1. 모든 li 요소에서 'active' 클래스 제거
            Object.values(categoryItems).forEach(item => {
                if (item) item.classList.remove('active');
            });
            
            // 2. 현재 활성화된 섹션의 li 요소에 'active' 클래스 추가
            if (categoryItems[sectionKey]) {
                categoryItems[sectionKey].classList.add('active');
            }
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));
