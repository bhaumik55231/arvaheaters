window.onload = () => {
    main();
};

window.onscroll = () => {
    schrollFunction();
}

const main = () => {
    if('serviceWorker' in navigator){
        try {
            navigator.serviceWorker.register('./serviceWorker.js');
        }
        catch (error) {
            console.log(error);
        }
    }
    const navItem = document.getElementsByClassName('nav-item');
    Array.from(navItem).forEach(element => {
        element.addEventListener('click', () => {
            removeActiveClass('nav-item', 'active');
            element.classList.add('active');
        });
    });

    const slider = document.getElementById('silder');
    const grid = document.getElementById('grid');
    slider.addEventListener('click', () => {
        slider.childNodes[0].classList.add('active');
        grid.childNodes[0].classList.remove('active');
        document.getElementById('productContent').innerHTML = productSlider();
    });
    grid.addEventListener('click', () => {
        grid.childNodes[0].classList.add('active');
        slider.childNodes[0].classList.remove('active');
        document.getElementById('productContent').innerHTML = productGrid();
    });
    slider.dispatchEvent(new Event('click'));
    addEventEmail();
    addEventSubmit();
};

const addEventEmail = () => {
    const element = document.getElementsByClassName('fa-envelope-square')[0];
    element.addEventListener('click', () => {
        const form = document.getElementById('sendEmail');
        form.hidden = false;
        element.hidden = true;
    })
}

const addEventSubmit = () => {
    const form = document.getElementById('sendEmail');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        let requestObj = {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email})
        };
        fetch(`https://us-central1-bhaumikpersonalproject.cloudfunctions.net/catalogue`, requestObj);
        // fetch(`http://localhost:8010/nih-nci-dceg-episphere-dev/us-central1/sendEmail`, requestObj);
        const element = document.getElementsByClassName('fa-envelope-square')[0];
        document.getElementById('email').value = '';
        form.hidden = true;
        element.hidden = false;
    });
}

const removeActiveClass = (className, activeClass) => {
    let fileIconElement = document.getElementsByClassName(className);
    Array.from(fileIconElement).forEach(elm => {
        elm.classList.remove(activeClass);
    });
};

const productSlider = () => {
    return `
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="10"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="11"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="12"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="13"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="14"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="15"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="16"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="17"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="18"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="19"></li>
            </ol>

            <div class="carousel-inner">

                <div class="carousel-item active">
                    <img class="d-block w-100" src="assets/images/03.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/images/12.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/images/13.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/images/24.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/images/25.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/images/26.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/images/28.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/images/29.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/images/30.jpg" height="600px" width="100%" alt="Second slide">
                </div>


                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/images/01.jpg" height="600px" width="100%" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/images/02.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/images/11.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/images/15.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/images/16.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/images/20.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/images/05.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/images/06.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/images/09.jpg" height="600px" width="100%" alt="Second slide">
                </div>

                
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/images/18.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/images/19.jpg" height="600px" width="100%" alt="Second slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    `;
}

const productGrid = () => {
    return `
        <span class="heater-type">Ceramic Heaters</span>
        <div class="row">
            <div class="col-sm">
                <img src="assets/images/03.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
            <div class="col-sm">
                <img src="assets/images/12.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
            <div class="col-sm">
                <img src="assets/images/13.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <img src="assets/images/24.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
            <div class="col-sm">
                <img src="assets/images/25.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
            <div class="col-sm">
                <img src="assets/images/26.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <img src="assets/images/28.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
            <div class="col-sm">
                <img src="assets/images/29.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
            <div class="col-sm">
                <img src="assets/images/30.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
        </div>

        <span class="heater-type">Mica Band Heaters</span>
        <div class="row">
            <div class="col-sm">
                <img src="assets/images/01.jpg" class="image-border" height="200px" width="100%" alt="First grid"></br>
            </div>
            <div class="col-sm">
                <img src="assets/images/02.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
            <div class="col-sm">
                <img src="assets/images/11.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <img src="assets/images/15.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
            <div class="col-sm">
                <img src="assets/images/16.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
            <div class="col-sm">
                <img src="assets/images/20.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
        </div>

        <span class="heater-type">Tubular Heaters</span>
        <div class="row">
            <div class="col-sm">
                <img src="assets/images/05.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
            <div class="col-sm">
                <img src="assets/images/06.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
            <div class="col-sm">
                <img src="assets/images/09.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
        </div>

        <span class="heater-type">Cartridge Heaters</span>
        <div class="row">
            <div class="col-sm">
                <img src="assets/images/18.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
            <div class="col-sm">
                <img src="assets/images/19.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
            <div class="col-sm">
                
            </div>
        </div>
    `;
}

const schrollFunction = () => {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.getElementById("arrowUp").style.display = "block";
    } else {
    document.getElementById("arrowUp").style.display = "none";
    }
}