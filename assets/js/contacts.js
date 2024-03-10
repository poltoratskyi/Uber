window.addEventListener("DOMContentLoaded", () => {
  /* Initializing plugins */

  /* Map */
  let map = L.map("map", {
    scrollWheelZoom: false,
    touchZoom: true,
  }).setView([50.4501, 30.5234], 14);

  map.on("click", () => {
    map.zoomIn();
  });

  map.on("contextmenu", () => {
    map.zoomOut();
  });

  map.zoomControl.setPosition("topright");

  let marker1 = L.marker([50.4567, 30.5198]).addTo(map);
  let marker2 = L.marker([50.4501, 30.5234]).addTo(map);

  marker1
    .bindPopup(
      "<b>Главный офис Uber в Киеве</b><br>Адрес: ул. Хрещатик, 1, Киев, 01001<br>Время работы: Пн-Вс, 24/7"
    )
    .openPopup();

  marker2.bindPopup(
    "<b>Филиал UberEats в Киеве</b><br>Адрес: бул. Леси Украинки, 10, Киев, 01034<br>Время работы: Пн-Пт: 10:00 - 22:00, Сб-Вс: 12:00 - 20:00"
  );

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  /* Animate css */

  new WOW().init();

  /* /////////////////////////////////////////////////////////////////////// */

  /* Preloader block -> local Storage */

  const preloader = document.querySelector(".preloader");

  document.body.onload = () => {
    /* langChoice block local Storage */
    const langChoiceVisited = localStorage.getItem("langChoiceVisited");

    if (!preloader.classList.contains("preloader_active")) {
      preloader.classList.add("preloader_active");

      document.body.style.overflow = "hidden";
    }

    /* Validation langChoice block -> local Storage  */
    if (langChoiceVisited === "true") {
      langOverlay.style.display = "none";
      document.body.style.overflow = "auto";
    }
  };

  /* Choice-languages */
  const langOverlay = document.querySelector(".lang-overlay");
  const choiceLangLinks = document.querySelectorAll(
    ".languages-content__menu-item"
  );

  choiceLangLinks.forEach((i) => {
    i.addEventListener("click", () => {
      /* langChoice block -> local Storage  */
      localStorage.setItem("langChoiceVisited", true);

      langOverlay.classList.add("lang-overlay_active");
      document.body.style.overflow = "auto";
    });
  });

  /* /////////////////////////////////////////////////////////////////////// */

  /* Check webp block */

  const supportsWebP = () => {
    const elem = document.createElement("canvas");
    if (!!(elem.getContext && elem.getContext("2d"))) {
      return elem.toDataURL("image/webp").indexOf("data:image/webp") === 0;
    }
    return false;
  };

  /* Header section */
  if (supportsWebP()) {
    document.querySelector(".header").style.backgroundImage =
      "url(../../assets/img/bg/webp/contacts-min.webp)";
  } else {
    document.querySelector(".header").style.backgroundImage =
      "url(../../assets/img/bg/contacts-min.png)";
  }

  document.querySelector(".header").style.backgroundPosition = "center";

  /* Word section */
  if (supportsWebP()) {
    document.querySelector(".word").style.backgroundImage =
      "url(../../assets/img/bg/webp/map-min.webp)";
  } else {
    document.querySelector(".word").style.backgroundImage =
      "url(../../assets/img/bg/map-min.jpg";
  }

  /* /////////////////////////////////////////////////////////////////////// */

  /* Hamburger block */

  const menu = document.querySelector(".menu");
  const menuItems = document.querySelectorAll(".menu__items");
  const hamburger = document.querySelector(".hamburger");
  const decorGrey = document.querySelector(".decor_translucent");

  /* Open -> close hamburger menu */
  hamburger.addEventListener("click", () => {
    if (hamburger.classList.contains("hamburger_active")) {
      hamburger.classList.remove("hamburger_active");

      cbOverlay.classList.remove("reg-overlay_active");

      document.body.style.overflow = "auto";

      menu.classList.remove("menu_active");

      if (hamburger) {
        decorGrey.classList.remove("decor_translucent_active");
      }
    } else {
      hamburger.classList.add("hamburger_active");

      cbOverlay.classList.add("reg-overlay_active");

      document.body.style.overflow = "hidden";

      menu.classList.add("menu_active");

      if (hamburger) {
        decorGrey.classList.add("decor_translucent_active");
      }
    }
  });

  /* Close hamburger menu when clicking on the button */
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
      hamburger.classList.remove("hamburger_active");

      cbOverlay.classList.remove("reg-overlay_active");

      document.body.style.overflow = "auto";

      menu.classList.remove("menu_active");

      if (hamburger) {
        decorGrey.classList.remove("decor_translucent_active");
      }
    });
  });

  /* /////////////////////////////////////////////////////////////////////// */

  /* Callback form block*/

  const callback = document.querySelector(".callback");
  const buttonCallback = document.querySelector(".button_callback");
  const buttonCallbackForm = document.querySelector(".button_callback-form");
  const modalCloseCallback = document.querySelectorAll(
    ".modal-callback__header-close"
  );
  const cbOverlay = document.querySelector(".cb-overlay");

  /* Open modal window of callback form -> btn */
  buttonCallback.addEventListener("click", () => {
    cbOverlay.classList.add("cb-overlay_active");

    hamburger.style.visibility = "hidden";

    callback.classList.add("callback_active");

    document.body.style.overflow = "hidden";

    buttonCallback.classList.add("button_active");

    document.addEventListener("keydown", closeCallbackModalOnEscape);
  });

  /* Open modal window of callback form -> coupon */
  const couponImg = document.querySelector(".coupon__img");

  couponImg.addEventListener("click", () => {
    cbOverlay.classList.add("cb-overlay_active");

    hamburger.style.visibility = "hidden";

    callback.classList.add("callback_active");

    document.body.style.overflow = "hidden";

    buttonCallback.classList.add("button_active");
  });

  /* Close modal window of callback form */
  modalCloseCallback.forEach((i) => {
    i.addEventListener("click", () => {
      cbOverlay.classList.remove("cb-overlay_active");

      hamburger.style.visibility = "visible";

      callback.classList.remove("callback_active");

      document.body.style.overflow = "auto";

      coupon.classList.add("coupon_active");

      buttonCallback.classList.remove("button_active");
    });
  });

  /* Close modal window of callback form -> keydown Escape */
  const closeCallbackModalOnEscape = (event) => {
    if (event.key === "Escape") {
      cbOverlay.classList.remove("cb-overlay_active");

      hamburger.style.visibility = "visible";

      callback.classList.remove("callback_active");

      document.body.style.overflow = "auto";

      buttonCallback.classList.remove("button_active");

      coupon.classList.add("coupon_active");
    }
  };

  /* Privacy link callback form window */
  const callbackPrivacyLink = document.querySelectorAll(
    ".modal-callback__form-privacy-link"
  );

  callbackPrivacyLink.forEach((i) => {
    i.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });

  /* Callback validation and sumbit the form window */
  const callbackForm = document.querySelector(".modal-callback__form");

  const callbackFirstName = document.getElementById("firstName-callback");
  const callbackFirstNameError = document.querySelector(
    ".modal-callback__form-error_firstName"
  );

  const callbackLastName = document.getElementById("lastName-callback");
  const callbackLastNameError = document.querySelector(
    ".modal-callback__form-error_lastName"
  );

  const callbackCities = document.getElementById("cities-callback");
  const callbackCitiesError = document.querySelector(
    ".modal-callback__form-error_cities"
  );

  const callbackСouponCode = document.getElementById("couponCode-callback");
  const callbackCouponCodeError = document.querySelector(
    ".modal-callback__form-error_couponCode"
  );

  const callbackPhoneNumber = document.getElementById("phoneNumber-callback");
  const callbackPhoneNumberError = document.querySelector(
    ".modal-callback__form-error_phoneNumber"
  );

  /* Imask */
  const CallbackMaskOptions = {
    mask: "+{38\\0}(00)-000-00-00",
  };

  const callBackMasks = IMask(callbackPhoneNumber, CallbackMaskOptions);

  /* Validation sumbit the form */
  callbackForm.addEventListener("submit", (e) => {
    /* firstName submit */
    const firstNameIsValid =
      /^[а-яА-Я]{2,}$/.test(callbackFirstName.value) &&
      callbackFirstName.value.trim() !== "";

    if (firstNameIsValid) {
      callbackFirstNameError.style.display = "none";
      callbackFirstName.style.border = "1px solid green";
    } else {
      callbackFirstNameError.style.display = "block";
      callbackFirstName.style.border = "1px solid red";
    }

    /* lastName submit */
    const lastNameIsValid =
      /^[а-яА-Я]{3,}$/.test(callbackLastName.value) &&
      callbackLastName.value.trim() !== "";

    if (lastNameIsValid) {
      callbackLastNameError.style.display = "none";
      callbackLastName.style.border = "1px solid green";
    } else {
      callbackLastNameError.style.display = "block";
      callbackLastName.style.border = "1px solid red";
    }

    /* Cities submit */
    const citiesIsValid = callbackCities.value.trim() !== "";

    if (citiesIsValid) {
      callbackCitiesError.style.display = "none";
      callbackCities.style.border = "1px solid green";
    } else {
      callbackCitiesError.style.display = "block";
      callbackCities.style.border = "1px solid red";
    }

    /* Coupon submit */
    const couponIsValid =
      callbackСouponCode.value === "uber2024" ||
      callbackСouponCode.value.trim() === "";

    if (couponIsValid) {
      callbackCouponCodeError.style.display = "none";
      callbackСouponCode.style.border = "1px solid green";
    } else {
      callbackCouponCodeError.style.display = "block";
      callbackСouponCode.style.border = "1px solid red";
    }

    /* phoneNumber submit */
    const phoneNumberIsValid =
      /^\+380\((50|66|95|99|63|67|68|96|97|98|39|73|93)\)-\d{3}-\d{2}-\d{2}$/.test(
        callbackPhoneNumber.value
      ) && callbackPhoneNumber.value.trim() !== "";

    if (phoneNumberIsValid) {
      callbackPhoneNumberError.style.display = "none";
      callbackPhoneNumber.style.border = "1px solid green";
    } else {
      callbackPhoneNumberError.style.display = "block";
      callbackPhoneNumber.style.border = "1px solid red";
    }

    /* Result submit check */
    const resultValidation = [
      firstNameIsValid,
      lastNameIsValid,
      citiesIsValid,
      couponIsValid,
      phoneNumberIsValid,
    ];

    const isAllValid = resultValidation.every((i) => i);

    /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

    if (isAllValid === false) {
      hamburger.style.visibility = "hidden";

      e.preventDefault();
    } else {
      e.preventDefault();

      callback.classList.remove("callback_active");

      hamburger.style.visibility = "visible";

      cbOverlay.classList.remove("cb-overlay_active");

      document.body.style.overflow = "auto";

      coupon.style.display = "none";

      localStorage.setItem("couponClosed", true);

      buttonCallback.classList.remove("button_active");

      success.classList.add("success_active");

      callbackForm.reset();

      setTimeout(() => {
        success.classList.remove("success_active");
      }, 7000);
    }
  });

  /* ---------------------------------------------------------------------- */

  /* firstName input */
  let isCallbackFirstNameValid = false;

  callbackFirstName.addEventListener("input", () => {
    isCallbackFirstNameValid =
      /^[а-яА-Я]{2,}$/.test(callbackFirstName.value) &&
      callbackFirstName.value.trim() !== "";

    if (isCallbackFirstNameValid) {
      callbackFirstNameError.style.display = "none";
      callbackFirstName.style.border = "1px solid green";
    } else {
      callbackFirstNameError.style.display = "block";
      callbackFirstName.style.border = "1px solid red";
    }

    updateInputButtonState();
  });

  /* lastName input */
  let isCallbackLastNameValid = false;

  callbackLastName.addEventListener("input", () => {
    isCallbackLastNameValid =
      /^[а-яА-Я]{3,}$/.test(callbackLastName.value) &&
      callbackLastName.value.trim() !== "";

    if (isCallbackLastNameValid) {
      callbackLastNameError.style.display = "none";
      callbackLastName.style.border = "1px solid green";
    } else {
      callbackLastNameError.style.display = "block";
      callbackLastName.style.border = "1px solid red";
    }

    updateInputButtonState();
  });

  /* Cities input */
  let isCallbackCitiesValid = false;

  callbackCities.addEventListener("input", () => {
    isCallbackCitiesValid = callbackCities.value.trim() !== "";

    if (isCallbackCitiesValid) {
      callbackCitiesError.style.display = "none";
      callbackCities.style.border = "1px solid green";
    } else {
      callbackCitiesError.style.display = "block";
      callbackCities.style.border = "1px solid red";
    }

    updateInputButtonState();
  });

  /* phoneNumber input */
  let isCallbackPhoneNumberValid = false;

  callbackPhoneNumber.addEventListener("input", () => {
    isCallbackPhoneNumberValid =
      /^\+380\((50|66|95|99|63|67|68|96|97|98|39|73|93)\)-\d{3}-\d{2}-\d{2}$/.test(
        callbackPhoneNumber.value
      ) && callbackPhoneNumber.value.trim() !== "";

    if (isCallbackPhoneNumberValid) {
      callbackPhoneNumberError.style.display = "none";
      callbackPhoneNumber.style.border = "1px solid green";
    } else {
      callbackPhoneNumberError.style.display = "block";
      callbackPhoneNumber.style.border = "1px solid red";
    }

    updateInputButtonState();
  });

  /* Result input check */
  const updateInputButtonState = () => {
    const resultCallbackInputValid =
      isCallbackFirstNameValid &&
      isCallbackLastNameValid &&
      isCallbackCitiesValid &&
      isCallbackPhoneNumberValid;

    if (resultCallbackInputValid) {
      buttonCallbackForm.classList.remove("button_active");
    } else {
      buttonCallbackForm.classList.add("button_active");
    }
  };

  updateInputButtonState();

  /* /////////////////////////////////////////////////////////////////////// */

  /* Coupon block */

  const couponClose = document.querySelector(".coupon__close");
  const coupon = document.querySelector(".coupon");

  /* Coupon block local Storage */
  const couponClosed = localStorage.getItem("couponClosed");

  couponClose.addEventListener("click", () => {
    /* Coupon block -> local Storage  */
    localStorage.setItem("couponClosed", true);

    coupon.style.display = "none";
  });

  /* Validation adv block -> local Storage  */

  if (couponClosed === "true") {
    coupon.style.display = "none";
  }

  /* /////////////////////////////////////////////////////////////////////// */

  /* Success section */

  const success = document.querySelector(".success");
  const successClose = document.querySelector(".success__close");

  successClose.addEventListener("click", () => {
    success.classList.remove("success_active");
  });

  /* /////////////////////////////////////////////////////////////////////// */

  /* Smooth hiding block */

  const decor = document.querySelector(".decor");

  document.onscroll = () => {
    let scroll = window.scrollY;

    /* Decor */
    if (scroll > decor.offsetTop) {
      decorGrey.style.top = "0px";
    } else {
      decorGrey.style.top = "";
    }
  };

  /* /////////////////////////////////////////////////////////////////////// */

  /* Smooth scroll links block */

  /* contactsMainPageLink */
  const contactsMainPageLink = document.getElementById("contacts");

  /* contactsMainPageHeader link */
  const contactsMainPageHeader = document.getElementById("contacts-header");
  /* Links -> contactsMainPageHeader */
  const contactsMainPageHeaderLogo = document.querySelector(
    ".subheader__logo-link"
  );

  /* contactsMainPageGeolocation link */
  const contactsMainPageGeolocation = document.getElementById(
    "contacts-geolocation"
  );

  /* Links -> contactsMainPageGeolocation */
  const contactsMainPageGeolocationLink = document.getElementById(
    "contacts-geolocation-link"
  );

  const contactsMainPageGeolocationFooter = document.getElementById(
    "contacts-footer-geolocation"
  );

  /* smoothScroll */
  const smoothScroll = (element) => {
    element.scrollIntoView({ behavior: "smooth" });
  };

  /* contactsMainPageLink preventDefault */
  contactsMainPageLink.addEventListener("click", (e) => {
    e.preventDefault();
  });

  /* links -> contactsMainPageHeader */
  contactsMainPageHeaderLogo.addEventListener("click", (e) => {
    e.preventDefault();
    smoothScroll(contactsMainPageHeader);
  });

  /* links -> contactsMainPageLinkGeolocation */
  contactsMainPageGeolocation.addEventListener("click", (e) => {
    e.preventDefault();
    smoothScroll(contactsMainPageGeolocationLink);
  });

  contactsMainPageGeolocationFooter.addEventListener("click", (e) => {
    e.preventDefault();
    smoothScroll(contactsMainPageGeolocationLink);
  });

  /* /////////////////////////////////////////////////////////////////////// */

  /* Leaflet section */

  const openMap = document.querySelector(".word__link");
  const leaflet = document.querySelector(".word__map");

  openMap.addEventListener("click", () => {
    leaflet.classList.toggle("word__map_active");

    if (leaflet.classList.contains("word__map_active")) {
      openMap.innerHTML = "РАЗВЕРНУТЬ КАРТУ";
    } else {
      openMap.innerHTML = "СПРЯТАТЬ КАРТУ";
    }
  });

  /* /////////////////////////////////////////////////////////////////////// */

  /* preventDefault block -> links */

  /* Footer menu supports */
  const footerSupportLinks = document.querySelectorAll(
    ".footer__menu-support-link"
  );

  footerSupportLinks.forEach((links) => {
    links.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });

  /* Footer menu languages */
  const footerLanguageLinks = document.querySelectorAll(
    ".footer__menu-language-link"
  );

  footerLanguageLinks.forEach((links) => {
    links.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
});
