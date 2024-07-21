import "../scss/style.scss";
const windowInnerWidth = window.innerWidth;
const menuBtn = document.querySelector(".header__menu-btn");
const closeBtn = document.querySelector(".aside__close");
const menu = document.querySelector(".aside");
const showAll = document.querySelectorAll(".show-all");
const modals = document.querySelectorAll(".modal");
const modalsBtnsMessage = document.querySelectorAll(".roundBtn--message");
const modalsBtnsCall = document.querySelectorAll(".roundBtn--phone");

menu.addEventListener("click", (e) => {
    if (e.target == menu) {
      menu.classList.toggle("aside--open");
    }
  });

modals.forEach((modal) => {
  const modalClose = modal.querySelector(".modal__close");

  modalClose.addEventListener("click", () => {
    modal.classList.toggle("modal--open");
  });

  modal.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.classList.toggle("modal--open");
    }
  });
});

modalsBtnsMessage.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (menu.classList.contains("aside--open")) {
      menu.classList.remove("aside--open");

      setTimeout(() => {
        document.querySelector('.modal--message').classList.toggle("modal--open");
      }, 100);
    }

    else {
        document.querySelector('.modal--message').classList.toggle("modal--open");
    }
  });
});


modalsBtnsCall.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (menu.classList.contains("aside--open")) {
        menu.classList.remove("aside--open");
  
        setTimeout(() => {
          document.querySelector('.modal--call').classList.toggle("modal--open");
        }, 100);
      }
  
      else {
          document.querySelector('.modal--call').classList.toggle("modal--open");
      }
    });
  });

showAll.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("promo__text-btn")) {
      button.parentElement.classList.toggle("promo__text--open");

      if (button.parentElement.classList.contains("promo__text--open")) {
        button.textContent = "Скрыть";
      } else {
        button.textContent = "Читать далее";
      }
    }

    else {
        button.parentElement.classList.toggle("open");
        button.classList.toggle("show-all--open");

        if (button.parentElement.classList.contains("open")) {
            button.textContent = "Скрыть";
          } else {
            button.textContent = "Показать все";
          }
    }
  });
});

if (windowInnerWidth < 1440) {
  menuBtn.addEventListener("click", () => {
    menu.classList.add("aside--open");
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("aside--open");
  });
}

if (windowInnerWidth < 768) {
  new Swiper(".brandsSwiper", {
    slidesPerView: 1.2,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  new Swiper(".technicsSwiper", {
    slidesPerView: 1.2,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  new Swiper(".priceSwiper", {
    slidesPerView: 1.2,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
