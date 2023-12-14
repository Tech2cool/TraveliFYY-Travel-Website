// console.log(document.querySelector('body'))
const imgSlider = document.querySelectorAll(".img-slide");
let SlideCounter = 1;

setInterval(() => {
    if (SlideCounter < imgSlider.length) {
        imgSlider.forEach((slide) => {
            slide.style.transform = `translateX(-${SlideCounter * 100}%)`
            slide.style.transition = "1s";
        })
        SlideCounter++;
        // console.log("if")
    }
    else {
        imgSlider.forEach((slide) => {
            slide.style.transition = "0s";
            slide.style.transform = `translateX(${0 * 100}%)`
        })
        SlideCounter = 1;
        // SlideCounter++;

        // console.log("else")
    }
}, 5000);


const signupBtns = document.querySelectorAll('#signup-btn');
const loginBtns = document.querySelectorAll('#login-btn');
const section6 = document.querySelector('.section-6');
const signupContainer = document.querySelectorAll('.signup');
const loginContainer = document.querySelectorAll('.login');
const dropdownMenu = document.querySelector('.dropdown-menu');


signupBtns.forEach((signupBtn)=>{
    signupBtn.addEventListener('click', () => {
        if (!section6.classList.contains("active")) {
            section6.classList.add('active');
        }
        signupContainer.forEach((signup) => {
            signup.classList.toggle('active');
        })
        loginContainer.forEach((login) => {
            if (login.classList.contains('active')) {
                login.classList.remove('active');
            }
        })
    })
    
})

loginBtns.forEach((loginBtn)=>{
    loginBtn.addEventListener('click', () => {
        if (!section6.classList.contains("active")) {
            section6.classList.add('active');
        }
        loginContainer.forEach((login) => {
            login.classList.toggle('active');
        })
    
        signupContainer.forEach((signup) => {
            if (signup.classList.contains('active')) {
                signup.classList.remove('active');
            }
        })
    
    })
    
})
document.addEventListener('click', (event) => {

    if(section6.classList.contains("active")) {
        if (!event.target.classList.contains('sec6')) {

            section6.classList.remove('active');
            signupContainer.forEach((signup) => {
                if (signup.classList.contains('active')) {
                    signup.classList.remove('active');
                }
            })
            loginContainer.forEach((login) => {
                if (login.classList.contains('active')) {
                    login.classList.remove('active');
                }
            })
        }
    }
    if(dropdownMenu.classList.contains("active")){
        if (!event.target.classList.contains('drop-down')) {
            dropdownMenu.classList.remove('active');
        }
    }
})
// card button handler
const cards = document.querySelectorAll('.card');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
let count = 1;
let minNext = 250;

//card changing to next script
nextBtn.addEventListener('click', () => {
    if (count < cards.length) {
        count > cards.length ? count = 0 : count++
        cards.forEach((card) => {
            card.style.transform = `translateX(-${count * 250}px)`;
        })
        console.log(count);
    }
})

//card changing to previous script
prevBtn.addEventListener('click', () => {
    if (count * 250 > minNext - count) {

        count = (count <= 0) ? cards.length - 1 : count - 1;

        cards.forEach((card) => {
            card.style.transform = `translateX(-${count * 250}px)`;
        });

        console.log(count);
    }
});

//FAQ Question show/hide script
const faqBtns = document.querySelectorAll('.faq-btn');

faqBtns.forEach((faqBtn) => {
    faqBtn.addEventListener('click', () => {
        const faq = faqBtn.closest('.faq-container').querySelector('.faq-content');
        faq.classList.toggle('active');

        if (faq.classList.contains("small-list")) {
            faq.style.height = (faq.style.height === "80px") ? "0px" : "80px";
        }
        if (faq.classList.contains("medium-list")) {
            faq.style.height = (faq.style.height === "150px") ? "0px" : "150px";
        }
        if (faq.classList.contains("large-list")) {
            faq.style.height = (faq.style.height === "220px") ? "0px" : "220px";
        }
    });
});

// Scroll to top button script
const goTopBtn = document.getElementById('goTopBtn');
goTopBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 800) {
        goTopBtn.style.visibility = 'visible';
    } else {
        goTopBtn.style.visibility = 'hidden';
    }
    console.log(window.scrollY);
});

const surveyImages = document.querySelectorAll('.survey-img');
let sImgCount = 1;
setInterval(() => {
    if (sImgCount < surveyImages.length) {
        surveyImages.forEach((surveyImage) => {
            surveyImage.style.transition = `1s`;
            surveyImage.style.transform = `translateX(-${sImgCount * 100}%)`;
        })
        sImgCount++;
    } else {
        surveyImages.forEach((surveyImage) => {
            surveyImage.style.transition = `0s`;
            surveyImage.style.transform = `translateX(0%)`;
        })
        sImgCount = 1;
    }
}, 5000);

const barBtn = document.getElementById('bar-btn');

barBtn.addEventListener('click',()=>{
    document.querySelector('.dropdown-menu').classList.toggle('active');
})


const planBtns= document.querySelectorAll('#plan-btn');
const surveyForm= document.querySelector('.survey-form');
const surveySlide= document.querySelector('.img-only');
planBtns.forEach((planBtn)=>{
    planBtn.addEventListener('click', ()=>{
    
        surveyForm.style.display = "flex";
        surveySlide.style.display = "none";
    })    
})

const surveySubmit = document.getElementById('survey-submit');
const thanksModal= document.querySelector('.thanks-modal');
const modalCloseBtn= document.querySelector('.modal-close-btn');

surveySubmit.addEventListener('click',()=>{
    surveySlide.style.display = "flex";
    surveyForm.style.display = "none";
    thanksModal.classList.add('active');
    surveySlide.scrollIntoView({behavior:'smooth'});
})
modalCloseBtn.addEventListener('click',()=>{
    thanksModal.classList.remove('active');
})