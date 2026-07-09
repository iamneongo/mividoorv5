document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        // Add answer div dynamically for demo
        const answer = document.createElement('div');
        answer.classList.add('faq-answer');
        answer.style.display = 'none';
        answer.style.padding = '0 20px 20px';
        answer.style.color = 'var(--text-muted)';
        answer.innerHTML = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>';
        item.appendChild(answer);
        
        question.addEventListener('click', () => {
            const icon = question.querySelector('i');
            const isOpen = answer.style.display === 'block';
            
            // Close all
            faqItems.forEach(otherItem => {
                const otherAnswer = otherItem.querySelector('.faq-answer');
                const otherIcon = otherItem.querySelector('i');
                if(otherAnswer) otherAnswer.style.display = 'none';
                if(otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                otherItem.style.borderBottom = 'none';
            });
            
            // Open clicked
            if (!isOpen) {
                answer.style.display = 'block';
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
            if (nav.style.display === 'block') {
                nav.style.position = 'absolute';
                nav.style.top = '100%';
                nav.style.left = '0';
                nav.style.width = '100%';
                nav.style.backgroundColor = 'white';
                nav.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
                
                const ul = nav.querySelector('ul');
                ul.style.flexDirection = 'column';
                ul.style.gap = '0';
                
                const lis = ul.querySelectorAll('li');
                lis.forEach(li => {
                    li.style.padding = '15px 20px';
                    li.style.borderBottom = '1px solid #eee';
                });
            } else {
                nav.style.position = '';
                nav.style.top = '';
                nav.style.left = '';
                nav.style.width = '';
                nav.style.backgroundColor = '';
                nav.style.boxShadow = '';
                
                const ul = nav.querySelector('ul');
                ul.style.flexDirection = '';
                ul.style.gap = '';
                
                const lis = ul.querySelectorAll('li');
                lis.forEach(li => {
                    li.style.padding = '';
                    li.style.borderBottom = '';
                });
            }
        });
    }

    // Reset nav style on resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            nav.style.display = 'block';
            nav.style.position = '';
            const ul = nav.querySelector('ul');
            ul.style.flexDirection = 'row';
        } else {
            nav.style.display = 'none';
        }
    });
});
