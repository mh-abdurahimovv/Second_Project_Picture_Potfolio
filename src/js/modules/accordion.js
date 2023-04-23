const accordion = (triggerSelector) => {
    const btnAccordion = document.querySelectorAll(triggerSelector);

        btnAccordion.forEach(btns=> {
            btns.addEventListener('click', function(){

                // Скрыть все элементы
               const blockAccordion = document.querySelectorAll('.accordion-block');
                   blockAccordion.forEach(block => {
                    if(block !== this.nextElementSibling) {  // если текущий элемент не является следующим соседним элементом, то выполняется следующее.
                        block.classList.remove('active-content');
                        block.style.maxHeight = '0px';
                    }
                   }); 
                      


                // Разворачиваем текущий элемент
                this.classList.add('active-style');
                this.nextElementSibling.classList.add('active-content');

                if(this.classList.contains('active-style')) {  // если заголовок аккордеона имеет класс active-style, то выполняется следующее.
                    this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';  //устанавливает высоту следующего элемента после заголовка аккордеона равной его реальной высоте плюс 80 пикселей.
            
                } else {
                    this.nextElementSibling.style.maxHeight = '0px';
                }

                
            });
        });




        //   blockAccordion = document.querySelectorAll(blockSelector);

        //   blockAccordion.forEach(items => {
        //     items.classList.add('animated', 'fadeInDown');
        //   });
          
        //   btnAccordion.forEach(elements => {
        //       elements.addEventListener('click', function() {
        //           if(!this.classList.contains('active')) {
        //             btnAccordion.forEach(elements => {
        //                 elements.classList.remove('active', 'active-style');
        //             });
        //             this.classList.add('active', 'active-style');
        //           };
                  
        //     });
        //   });

          
};

export default accordion;