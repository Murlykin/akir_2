const navLinks = document.querySelectorAll(".conic");
// const tabsItems = document.querySelectorAll(".section");

navLinks.forEach(onTabClick);


function onTabClick(a) {
    a.addEventListener("click", function () { 
        let currentBtn = a;
        let tabId = currentBtn.getAttribute("href");
        // let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
            navLinks.forEach(function (a) {
                a.classList.remove('active');
            });
    
            // tabsItems.forEach(function (item) {
            //     item.classList.remove('active');
            // });
    
            currentBtn.classList.add('active');
            // currentTab.classList.add('actived');
        }
    });
}
document.querySelector('.conic').click();