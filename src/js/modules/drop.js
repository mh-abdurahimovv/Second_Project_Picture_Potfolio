const drop = () => {

    // СОБЫТИЯ КОТОРЫЕ ИСПОЛЬЗУЮТСЯ ПРИ DRAG & DROP 

    // dragstart:  возникает, когда пользователь начинает перетаскивать элемент
    // drag: возникает, когда элемент перетаскивается
    // dragenter:  возникает, когда перетаскиваемый элемент входит в область целевого элемента
    // dragover:  возникает, когда перетаскиваемый элемент находится над целевым элементом
    // dragleave:  возникает, когда перетаскиваемый элемент покидает область целевого элемента
    // drop:  возникает, когда перетаскиваемый элемент отпущен над целевым элементом
    // dragend:  возникает, когда пользователь завершает операцию перетаскивания элемента
    // dragexit:  возникает, когда элемент покидает область перетаскивания, например, когда курсор перемещается за пределы окна браузера.

    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(inputs => {
            inputs.addEventListener(eventName, preventDefault, false);
        });
    });

    function preventDefault(e) {
        e.preventDefault();
        e.stopPropagation();
    };

    function highLight(item) {
        item.closest('.file_upload').style.border = '5px solid yellow';
        item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, .7)';
    };

    function unHighLight(item) {
        item.closest('.file_upload').style.border = 'none';
        if( item.closest('.calc')) {
            item.closest('.file_upload').style.backgroundColor = '#fff';
        }else {
            item.closest('.file_upload').style.backgroundColor = '#ededed';
        }
    };

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(inputs => {
            inputs.addEventListener(eventName, ()=> {
                highLight(inputs), false});
        });
    });


    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(inputs => {
            inputs.addEventListener(eventName, ()=> {
                unHighLight(inputs), false});
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e)=> {
            input.files = e.dataTransfer.files;
            console.log(input.files[0]);
            let dots;
            const arr = input.files[0].name.split('.');

            arr[0].length > 6 ? dots = "..." : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            input.previousElementSibling.textContent = name;
        });
    });


};

export default drop;