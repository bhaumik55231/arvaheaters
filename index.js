window.onload = () => {
    main();
};

window.onscroll = () => {
    schrollFunction();
}

const main = () => {
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
};

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
                    <img class="d-block w-100" src="assets/01.jpg" height="600px" width="100%" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/02.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/11.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/15.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/16.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/20.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/03.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/12.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/13.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/24.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/25.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/26.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/28.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/29.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/30.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/05.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/06.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/09.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/18.jpg" height="600px" width="100%" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/19.jpg" height="600px" width="100%" alt="Second slide">
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
        <span class="heater-type">Mica Band Heaters</span>
        <div class="row">
            <div class="col-sm">
                <img src="assets/01.jpg" class="image-border" height="200px" width="100%" alt="First grid"></br>
            </div>
            <div class="col-sm">
                <img src="assets/02.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
            <div class="col-sm">
                <img src="assets/11.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <img src="assets/15.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
            <div class="col-sm">
                <img src="assets/16.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
            <div class="col-sm">
                <img src="assets/20.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
        </div>

        <span class="heater-type">Ceramic Heaters</span>
        <div class="row">
            <div class="col-sm">
                <img src="assets/03.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
            <div class="col-sm">
                <img src="assets/12.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
            <div class="col-sm">
                <img src="assets/13.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <img src="assets/24.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
            <div class="col-sm">
                <img src="assets/25.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
            <div class="col-sm">
                <img src="assets/26.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <img src="assets/28.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
            <div class="col-sm">
                <img src="assets/29.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
            <div class="col-sm">
                <img src="assets/30.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
        </div>

        <span class="heater-type">Tubular Heaters</span>
        <div class="row">
            <div class="col-sm">
                <img src="assets/05.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
            <div class="col-sm">
                <img src="assets/06.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
            <div class="col-sm">
                <img src="assets/09.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
        </div>

        <span class="heater-type">Cartridge Heaters</span>
        <div class="row">
            <div class="col-sm">
                <img src="assets/18.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
            <div class="col-sm">
                <img src="assets/19.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
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