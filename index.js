document.addEventListener("DOMContentLoaded", () => {
    const hamburguer = document.getElementById("hamburguer");
    const hamburguerlines = document.querySelectorAll("#hamburguer span");
    const menu = document.getElementById("menu");
    const menuBackdrop = document.getElementById("menuBackdrop");
    
    let menuBackdropState = false;

    hamburguer.addEventListener("click", () => {
        toggleHamburguer();
        toggleMenuBackdrop();
        hideAllSubMenus(); // Esconde todos os submenus ao clicar no hamburguer
    });
    
    menuBackdrop.addEventListener("click", () => {
        toggleHamburguer();
        toggleMenuBackdrop();
        hideAllSubMenus(); // Esconde todos os submenus ao clicar no backdrop
    });
    
    function toggleHamburguer() {
        hamburguerlines.forEach(span => {
            span.classList.toggle("selected");
        });
        
        // Alterna entre mostrar e esconder o menu
        menu.classList.toggle("showMenu");
        menu.classList.toggle("showSearch");
    }
    
    function toggleMenuBackdrop() {
        menuBackdropState = !menuBackdropState; // Inverte o estado
        menuBackdrop.classList.toggle("showBackdrop", menuBackdropState);
    }

    const subMenuBtns = document.querySelectorAll("#menu ul li");
    const subMenus = document.querySelectorAll(".subMenu");

    subMenuBtns.forEach((btn, index) => {
        btn.addEventListener("click", (event) => {
            
            // Verifica o submenu atual
            const currentSubMenu = subMenus[index];
            
            // Se o submenu clicado já estiver visível, esconde
            if (currentSubMenu.classList.contains("showSubMenu")) {
                currentSubMenu.classList.remove("showSubMenu");
            } else {
                // Esconde todos os submenus
                hideAllSubMenus();
                // Mostra o submenu correspondente
                currentSubMenu.classList.add("showSubMenu");
            }
            subMenuBtns.forEach((btn) => {
                btn.classList.remove("subMenuBtnClicked")
            })
            if(subMenus[index].classList.contains("showSubMenu")){
                btn.classList.add("subMenuBtnClicked")
            }

        });
    });

    function hideAllSubMenus() {
        subMenus.forEach(subMenu => {
            subMenu.classList.remove("showSubMenu");
        });
        subMenuBtns.forEach(Btn => {
            Btn.classList.remove("subMenuBtnClicked");
        });
    }
});
