const navLinks = document.querySelectorAll(".conic");
// const tabsItems = document.querySelectorAll(".section");

navLinks.forEach(onTabClick);


function onTabClick(li) {
    li.addEventListener("click", function () { 
        let currentBtn = li;
        let tabId = currentBtn.getAttribute("href");
        // let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
            navLinks.forEach(function (li) {
                li.classList.remove('active');
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