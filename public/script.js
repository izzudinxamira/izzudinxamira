const mainFunction = () => {
  console.log("Why? Bored?....");
  const screen = window.innerHeight;
  const nav = document.getElementById("nav").getBoundingClientRect().height;
  const visibleTop = screen - nav;

  // position the dropdown
  const dropdown = document.getElementById("icon-dropdown");
  dropdown.style.top = visibleTop - 65 + "px";
  var displayDropdownIcon = () => {
    const pg2CR = document.getElementById("pg2").getBoundingClientRect();
    if (pg2CR.top > visibleTop) {
      dropdown.classList.remove("d-none");
    } else {
      dropdown.classList.add("d-none");
    }
  };

  displayDropdownIcon();
  document.addEventListener("scroll", () => {
    displayDropdownIcon();
  });
};

const scrollDown = () => {
  document
    .getElementById("pg2")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
};

// document.addEventListener('DOMContentLoaded', mainFunction);