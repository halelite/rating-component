(function() {

    const rateBtns = document.getElementsByClassName('btn');
    const submitBtn = document.querySelector('button');
    const rateNum = document.querySelector('.rateResult p span');
    let thankDiv = document.getElementsByClassName('thankU-section');

    for(let i = 0; i < rateBtns.length; i++) {

        rateBtns[i].addEventListener('click', function () {

            for(let i = 0; i < rateBtns.length; i++) {
                rateBtns[i].classList.remove('active');
            }

            rateBtns[i].classList.add('active');
            rateNum.innerHTML = i + 1;
            
        });

    };


    submitBtn.addEventListener("click", () => {

        if(rateNum.innerHTML != "") {
            for(let i = 0; i < thankDiv.length; i++) {
            thankDiv[i].style.display = 'block';
        }
        }
        
    });


}) ();