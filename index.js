window.onload = () => {
    main();
};

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
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="./assets/mica_band.jpg" height="550px" width="100%" alt="First slide">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Mica Band Heater Cover Type</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="./assets/2.jpg" height="550px" width="100%" alt="Second slide">
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
        <div class="row">
            <div class="col-sm">
                <img src="./assets/mica_band.jpg" class="image-border" height="200px" width="100%" alt="First grid"></br>
                Mica Band Heater Cover Type
            </div>
            <div class="col-sm">
                <img src="./assets/2.jpg" class="image-border" height="200px" width="100%" alt="Second grid"></br>
            </div>
            <div class="col-sm"></div>
        </div>
    `;
}