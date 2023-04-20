const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelectorAll(size),
          sizeText = sizeBlock[0].querySelectorAll('option'),  
          materialBlock = document.querySelectorAll(material),
          materialText = materialBlock[0].querySelectorAll('option'),
          optionsBlock = document.querySelectorAll(options),
          optionText = optionsBlock[0].querySelectorAll('option'),
          promocodeBlock = document.querySelectorAll(promocode),
          resultBlock = document.querySelector(result);
  
    let sum = 0;
    let products = {};
    let productPrice = {};
  
    function countCalc() {
      sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
  
      if (sizeBlock.value === '' || materialBlock.value === '') {
        resultBlock.innerHTML = 'Пожалуйста выберите размер и материал картины';
      } else if (promocodeBlock.value === 'IWANTPOPART') {
        resultBlock.textContent = Math.round(sum * 0.7);
      } else {
        resultBlock.textContent = sum;
      }
    }
  
    function bindActionToElems(elem, event, type) {
      elem.forEach((item) => {
        item.addEventListener(event, () => {
          productPrice[type] = item.value;

          createProduct(sizeText, 'size');
          createProduct(materialText, 'material');
          createProduct(optionText, 'options');

          console.log(productPrice);
          console.log(products);
        });
      });
    }
  
    bindActionToElems(sizeBlock, 'change', 'size');
    bindActionToElems(materialBlock, 'change', 'material');
    bindActionToElems(optionsBlock, 'change', 'options');
  
    function createProduct(elem, type) {
      elem.forEach((item) => {
        if (item.value == productPrice[type]) {
          products[type] = item.textContent;
        }
      });
    }
  

  
    sizeBlock[0].addEventListener('change', countCalc);
    materialBlock[0].addEventListener('change', countCalc);
    optionsBlock[0].addEventListener('change', countCalc);
    promocodeBlock[0].addEventListener('change', countCalc);
  };
  
  export default calc;
  