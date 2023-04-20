const modals = () => {
    
    let btnPressed;
    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {

    const trigger = document.querySelectorAll(triggerSelector),   
          modal = document.querySelector(modalSelector),  
          close = document.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal');
          

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
            if(e.target) {
                e.preventDefault();
            }

            btnPressed = true;

            if(destroy === true) {
                item.remove();
            };

            windows.forEach(item=> {
                item.style.display = 'none';
                item.classList.add('animated', 'fadeIn');
            });

            modal.style.display = 'block';
            document.body.style.overflow = '';
        }); 
    });

        close.addEventListener('click', (e) => {
            windows.forEach(item=> {
                item.style.display = 'none';
            });

                modal.style.display = 'none';
                document.body.style.overflow = '';
        });

        modal.addEventListener('click', (e)=> {
            if(e.target === modal) {
                windows.forEach(item=> {
                    item.style.display = 'none';
                });

                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }

   

      
    function showModalByTime(selector, time) {
        setTimeout(() => {
            let display;
            
            document.querySelectorAll('[data-modal]').forEach(item => {
                if(getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }
            });
             if(!display) {
                 document.querySelector(selector).style.display = 'block';
                 document.body.style.overflow = 'hidden';
             }

        }, time);
    }

    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight - 1)) {
                document.querySelector(selector).click();
            }
        });
    }
    
    
          
    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true)
    openByScroll('.fixed-gift');

    // showModalByTime('.popup-consultation', 3000);   
}

export default modals;

