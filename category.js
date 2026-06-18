const sections = document.querySelectorAll('.brand-section, .visual-section, .digital-section'); 

const categoryItems = {
    'brand-section': document.querySelector('.category-list .category-item:nth-child(1)'),
    'visual-section': document.querySelector('.category-list .category-item:nth-child(2)'),
    'digital-section': document.querySelector('.category-list .category-item:nth-child(3)')
};



const observerOptions = {
    root: null,
  
    rootMargin: '0px 0px -100% 0px', 
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            
            Object.values(categoryItems).forEach(item => {
                if (item) {
                    const link = item.querySelector('a');
                    if (link) link.classList.remove('is-active');
                }
            });
            
            if (categoryItems[sectionId]) {
                const activeLink = categoryItems[sectionId].querySelector('a');
                if (activeLink) activeLink.classList.add('is-active');
            }
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));
