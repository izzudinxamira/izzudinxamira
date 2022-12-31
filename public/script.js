const mainFunction = () => {
    console.log("Why? Bored?....");
    const screen = window.innerHeight;
    const nav = document.getElementById("nav").getBoundingClientRect().height;
    const visibleTop = screen - nav;

    // position the dropdown
    const dropdown = document.getElementById("icon-dropdown");
    dropdown.style.top = visibleTop - 65 + "px";
    var displayDropdownIcon = () => {
        const undanganCR = document
            .getElementById("undangan")
            .getBoundingClientRect();
        if (undanganCR.top > visibleTop) {
            dropdown.classList.remove("d-none");
        } else {
            dropdown.classList.add("d-none");
        }
    };

    var updateHash = () => {
        const currentScrollY = window.scrollY;
        const mainCRHeight = Math.floor(
            document.getElementById("main").getBoundingClientRect().height
        );
        const undanganCRHeight = Math.floor(
            document.getElementById("undangan").getBoundingClientRect().height
        );
        const pg3CRHeight = Math.floor(
            document.getElementById("info").getBoundingClientRect().height
        );
        const pg4CRHeight = Math.floor(
            document.getElementById("hubungi").getBoundingClientRect().height
        );

        const undanganEnd = mainCRHeight + undanganCRHeight;
        const pg3End = undanganEnd + pg3CRHeight;
        const pg4End = pg3End + pg4CRHeight;

        if (currentScrollY < mainCRHeight) {
            history.pushState(null, null, "#main");
        } else if (currentScrollY < undanganEnd) {
            history.pushState(null, null, "#undangan");
        } else if (currentScrollY < pg3End) {
            history.pushState(null, null, "#info");
        } else if (currentScrollY < pg4End) {
            history.pushState(null, null, "#hubungi");
        } else {
            history.pushState(null, null, "#doa");
        }
    };

    displayDropdownIcon();
    document.addEventListener("scroll", () => {
        displayDropdownIcon();
        updateHash();
    });
};

const scrollDown = () => {
    document.getElementById("undangan").scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
};
