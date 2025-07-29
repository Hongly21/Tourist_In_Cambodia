

//first container-menu
function Pop_content(pop_content) {
    var container = document.querySelector(".box-content");
    if (container) {
        var obj = " ";
        for (var item in pop_content) {
            obj += `

            <div class="box" data-aos="fade-up" data-aos-duration="1000">

                    <a style="text-decoration: none;" href="information.html">
                        <div class="image">
                            <img src="${pop_content[item].img}" alt="">
                        </div>
                    </a>
                    <a style="text-decoration: none;" href="information.html">
                        <div class="ds">
                            <div class="rating">
                                <span class="rating-number">${pop_content[item].rating_number}</span>
                                <span class="rating-stars">
                                    <span class="star filled"></span>
                                    <span class="star filled"></span>
                                    <span class="star filled"></span>
                                    <span class="star filled"></span>
                                    <span class="star outline"></span>
                                </span>
                                <span class="rating-reviews">${pop_content[item].rating_reviews}</span>
                            </div>

                            <p>${pop_content[item].text}</p>
                            <hr>
                                <p> <i style="font-size: 10px;
                                    margin-left: 5px; margin-right: 10px;"
                                    class="fa-solid fa-calendar-days"></i>
                                    ${pop_content[item].ds_time}</p>
                                <p> <i style="font-size: 10px;
                                    margin-left: 5px; margin-right: 10px;" class="fa-solid fa-location-dot" ></i>
                                    ${pop_content[item].ds_location}</p>
                        </div>
                    </a>
</div>
          
            `;
        }
        container.innerHTML = obj;
    }
}


//slider container
function slider(slider_box) {
    var container = document.querySelector(".slider");
    if (container) {
        var obj = " ";
        for (var item in slider_box) {
            obj += `
                    <div class="box">
                     <a href="information.html" style="text-decoration: none;">
                            <div class="image">
                                <img src="${slider_box[item].img}" alt="">
                            </div>
                        </a>
                         <a href="information.html" style="text-decoration: none;">
                            <div class="ds">
                                <div class="rating">
                                    <span class="rating-number">${slider_box[item].rating_number}</span>
                                    <span class="rating-stars">
                                        <span class="star filled"></span>
                                        <span class="star filled"></span>
                                        <span class="star filled"></span>
                                        <span class="star filled"></span>
                                        <span class="star outline"></span>
                                    </span>
                                    <span class="rating-reviews">${slider_box[item].rating_reviews}</span>
                                </div>

                          
                                    <p>${slider_box[item].text}</p>
                       
                                <hr>
                                <p> <i style="font-size: 10px;
                                margin-left: 5px; margin-right: 10px;"
                                class="fa-solid fa-calendar-days"></i>
                                ${pop_content[item].ds_time}</p>
                                <p> <i style="font-size: 10px;
                                margin-left: 5px; margin-right: 10px;" class="fa-solid fa-location-dot" ></i>
                                ${pop_content[item].ds_location}</p>
                            </div>
                        </a>
                        </div>
 
            `;
        }
        container.innerHTML = obj;
    }
}


//advanture-page
function Advanture(menu_box) {
    var container = document.querySelector(".container-content");
    if (container) {
        var obj = " ";
        for (var item in menu_box) {
            obj += `
            <a href="information.html" style="text-decoration: none; color: black;">
    <div class="box" data-aos="fade-up" data-aos-duration="1000">
        <div class="image">
            <img src="${menu_box[item].img}" alt="">
        </div>
        <div class="ds">
            <div class="rating">
                <span class="rating-number">${menu_box[item].rating_number}</span>
                <span class="rating-stars">
                    <span class="star filled"></span>
                    <span class="star filled"></span>
                    <span class="star filled"></span>
                    <span class="star filled"></span>
                    <span class="star outline"></span>
                </span>
                <span class="rating-reviews">${menu_box[item].rating_reviews}</span>
            </div>


            <p style="margin-left: 10px;">${menu_box[item].text}</p>
            <hr>
                <p> <i style="font-size: 10px;
                                margin-left: 5px; margin-right: 10px;"
                    class="fa-solid fa-calendar-days"></i>
                    ${menu_box[item].ds_time}</p>
                <p> <i style="font-size: 10px;
                                margin-left: 5px; margin-right: 10px;" class="fa-solid fa-location-dot" ></i>
                    ${menu_box[item].ds_location}</p>
        </div>
    </div>
</a>
`;

        }
        container.innerHTML = obj;
    }

}




//beach holiday

function Beachholiday(beach_box) {
    var container = document.querySelector(".container-content");
    if (container) {
        var obj = " ";
        for (var item in beach_box) {
            obj += `
            <a href="information.html" style="text-decoration: none; color: black;">
    <div class="box" data-aos="fade-up" data-aos-duration="1000">
        <div class="image">
            <img src="${beach_box[item].img}" alt="">
        </div>
        <div class="ds">
            <div class="rating">
                <span class="rating-number">${beach_box[item].rating_number}</span>
                <span class="rating-stars">
                    <span class="star filled"></span>
                    <span class="star filled"></span>
                    <span class="star filled"></span>
                    <span class="star filled"></span>
                    <span class="star outline"></span>
                </span>
                <span class="rating-reviews">${beach_box[item].rating_reviews}</span>
            </div>


            <p style="margin-left: 10px;">${beach_box[item].text}</p>
            <hr>
                <p> <i style="font-size: 10px;
                                margin-left: 5px; margin-right: 10px;"
                    class="fa-solid fa-calendar-days"></i>
                    ${beach_box[item].ds_time}</p>
                <p> <i style="font-size: 10px;
                                margin-left: 5px; margin-right: 10px;" class="fa-solid fa-location-dot" ></i>
                    ${beach_box[item].ds_location}</p>
        </div>
    </div>
</a>
`;

        }
        container.innerHTML = obj;
    }

}


///culture life
function Culture(culture_life) {
    var container = document.querySelector(".container-content");
    if (container) {
        var obj = " ";
        for (var item in culture_life) {
            obj += `
            <a href="information.html" style="text-decoration: none; color: black;">
    <div class="box" data-aos="fade-up" data-aos-duration="1000">
        <div class="image">
            <img src="${culture_life[item].img}" alt="">
        </div>
        <div class="ds">
            <div class="rating">
                <span class="rating-number">${culture_life[item].rating_number}</span>
                <span class="rating-stars">
                    <span class="star filled"></span>
                    <span class="star filled"></span>
                    <span class="star filled"></span>
                    <span class="star filled"></span>
                    <span class="star outline"></span>
                </span>
                <span class="rating-reviews">${culture_life[item].rating_reviews}</span>
            </div>


            <p style="margin-left: 10px;">${culture_life[item].text}</p>
            <hr>
                <p> <i style="font-size: 10px;
                                margin-left: 5px; margin-right: 10px;"
                    class="fa-solid fa-calendar-days"></i>
                    ${culture_life[item].ds_time}</p>
                <p> <i style="font-size: 10px;
                                margin-left: 5px; margin-right: 10px;" class="fa-solid fa-location-dot" ></i>
                    ${culture_life[item].ds_location}</p>
        </div>
    </div>
</a>
`;

        }
        container.innerHTML = obj;
    }

}



//luxury tour

function Luxury(luxury_box) {
    var container = document.querySelector(".container-content");
    if (container) {
        var obj = " ";
        for (var item in luxury_box) {
            obj += `
            <a href="information.html" style="text-decoration: none; color: black;">
    <div class="box" data-aos="fade-up" data-aos-duration="1000">
        <div class="image">
            <img src="${luxury_box[item].img}" alt="">
        </div>
        <div class="ds">
            <div class="rating">
                <span class="rating-number">${luxury_box[item].rating_number}</span>
                <span class="rating-stars">
                    <span class="star filled"></span>
                    <span class="star filled"></span>
                    <span class="star filled"></span>
                    <span class="star filled"></span>
                    <span class="star outline"></span>
                </span>
                <span class="rating-reviews">${luxury_box[item].rating_reviews}</span>
            </div>


            <p style="margin-left: 10px;">${luxury_box[item].text}</p>
            <hr>
                <p> <i style="font-size: 10px;
                                margin-left: 5px; margin-right: 10px;"
                    class="fa-solid fa-calendar-days"></i>
                    ${luxury_box[item].ds_time}</p>
                <p> <i style="font-size: 10px;
                                margin-left: 5px; margin-right: 10px;" class="fa-solid fa-location-dot" ></i>
                    ${luxury_box[item].ds_location}</p>
        </div>
    </div>
</a>
`;

        }
        container.innerHTML = obj;
    }

}


//family tour

function family(family_box) {
    var container = document.querySelector(".container-content");
    if (container) {
        var obj = " ";
        for (var item in family_box) {
            obj += `
            <a href="information.html" style="text-decoration: none; color: black;">
    <div class="box" data-aos="fade-up" data-aos-duration="1000">
        <div class="image">
            <img src="${family_box[item].img}" alt="">
        </div>
        <div class="ds">
            <div class="rating">
                <span class="rating-number">${family_box[item].rating_number}</span>
                <span class="rating-stars">
                    <span class="star filled"></span>
                    <span class="star filled"></span>
                    <span class="star filled"></span>
                    <span class="star filled"></span>
                    <span class="star outline"></span>
                </span>
                <span class="rating-reviews">${family_box[item].rating_reviews}</span>
            </div>


            <p style="margin-left: 10px;">${family_box[item].text}</p>
            <hr>
                <p> <i style="font-size: 10px;
                                margin-left: 5px; margin-right: 10px;"
                    class="fa-solid fa-calendar-days"></i>
                    ${family_box[item].ds_time}</p>
                <p> <i style="font-size: 10px;
                                margin-left: 5px; margin-right: 10px;" class="fa-solid fa-location-dot" ></i>
                    ${family_box[item].ds_location}</p>
        </div>
    </div>
</a>
`;

        }
        container.innerHTML = obj;
    }

}



$(document).ready(function () {
    $(".fa-bars").click(function () {
        $(".sub-menu1").slideToggle(500);
    })
})