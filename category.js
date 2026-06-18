const sections = document.querySelectorAll('#brand-section, #visual-section, #digital-section'); 

const categoryItems = document.querySelectorAll('.category-list .category-item');

const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px', // 스크롤 시 부드럽게 감지되도록 유지
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id; // 이제 id를 확실하게 가져옵니다.
            
            // 1. 모든 카테고리 아이템에서 active 제거
            categoryItems.forEach(item => item.classList.remove('active'));
            
            // 2. data-target 값이 현재 id와 일치하는 li 요소를 찾아 active 추가
            const targetMenuItem = document.querySelector(`.category-list .category-item[data-target="${sectionId}"]`);
            if (targetMenuItem) {
                targetMenuItem.classList.add('active');
            }
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));
