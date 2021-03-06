window.onload = function () {
    new WOW().init();

    const goback = document.querySelector('#block-gobackblock .button')
    if (goback)
        goback.innerHTML = 'Retour'

    const goback2 = document.querySelector('#block-gobackblock-2 .button')
    if (goback2)
        goback2.innerHTML = 'Retour vers le sommaire'

    // let searchbar = document.getElementById('views-exposed-form-general-search-page-1');
    let searchbar = document.getElementById('views-exposed-form-general-search-default');
    // let searchbar = document.querySelector('.searchbar');
    let nav = document.querySelector('.topnav');

    if (searchbar !== null) {
        searchbar.innerHTML = '';
        searchbar.style.opacity = '0'
        searchbar.setAttribute('class', 'searchbar');

        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('class', 'search_input');
        input.setAttribute('placeholder', 'Rechercher...');
        input.setAttribute('aria-label', 'Rechercher sur le site');
        input.setAttribute('name', 'search_api_fulltext')


        let button = document.createElement('button');
        button.setAttribute('class', 'search_icon');
        button.setAttribute('type', 'submit');
        button.setAttribute('id', 'search-button');
        button.setAttribute('aria-label', 'Bouton Rechercher');



        let icon = document.createElement('i');
        icon.setAttribute('class', 'fa fa-search');
        button.appendChild(icon);
        searchbar.appendChild(input);
        searchbar.appendChild(button);

        // let li = document.createElement('div');
        // li.setAttribute('class', 'centered dropbtn');
        // li.appendChild(searchbar);
        // nav.appendChild(li);
        searchbar.style.display = 'inline-block';
        searchbar.style.opacity = '1'
    }

    let rows = document.querySelectorAll('.line-zig-zag');

    i = 0;
    rows.forEach(row => {
        rowContent = row.querySelectorAll('.blog-zig-zag');
        if (rowContent.length > 0) {
            if (this.isEven(i)) {
                j = 0;
                rowContent.forEach(element => {
                    if (this.isEven(j)) {
                        element.style.float = 'left';
                    } else {
                        element.style.float = 'right';
                    }
                    j += 1;
                });
            } else {
                j = 0;
                rowContent.forEach(element => {
                    if (this.isEven(j)) {
                        element.style.float = 'right';
                    } else {
                        element.style.float = 'left';
                    }
                    j += 1;
                });
            }
            i += 1;

        }
    });

    let bloc_abonnement = document.querySelector('#block-abonnezvous');
    if (bloc_abonnement != null) {
        let content = document.querySelector('.bottom-space');
        content.appendChild(bloc_abonnement);
        let blocs = document.querySelectorAll('#block-abonnezvous');
        if (blocs.length > 1) {
            for (let i = 1; i < blocs.length; i++) {
                const element = blocs[i];
                element.parentNode.removeChild(element);

            }
        }

    }

    var dropdown = document.querySelectorAll('.dropdown');
    dropdown.forEach(element => {
        let button = element.querySelector('.dropbtn')
        let menu = element.querySelector('.dropdown-content')
        // button.addEventListener("mouseout", function (event) {
        //     this.setAttribute('aria-expanded', false);
        //     menu.hidden = true;
        //     console.log('out')
        // })
        // button.addEventListener("mouseenter", function (event) {
        //     this.setAttribute('aria-expanded', true);
        //     menu.hidden = false;
        //     console.log('enter')
        // });
        // menu.addEventListener("mouseout", function (event) {
        //     this.setAttribute('aria-expanded', false);
        //     menu.hidden = true;
        //     console.log('out')
        // })
        // menu.addEventListener("mouseenter", function (event) {
        //     this.setAttribute('aria-expanded', true);
        //     menu.hidden = false;
        //     console.log('enter')
        // });

        button.addEventListener('click', function () {
            let expanded = this.getAttribute('aria-expanded') === 'true' || false;
            this.setAttribute('aria-expanded', !expanded);
            let style = menu.style.display
            if (!expanded) {
                menu.style.display = "block"
                button.style.backgroundColor = "white"
            }
            else {
                button.style.backgroundColor = "transparent"
                menu.style.display = "none";
            }
            console.log(style)
            // menu.hidden = !menu.hidden;
        });
    });
    const files = document.querySelectorAll('.media--type-file')
    files.forEach(file => {
        const links = file.querySelectorAll('a')
        links.forEach(link => {
            link.setAttribute('target','_blank')
        });
    });


}

function isEven(n) {
    return n % 2 == 0;
}

function isOdd(n) {
    return Math.abs(n % 2) == 1;
}

function showHamburgerMenu() {
    var x = document.getElementById("menu_principal");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

String.prototype.isEmpty = function () {
    return (this.length === 0 || !this.trim());
};

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}

