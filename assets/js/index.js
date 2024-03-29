window.addEventListener("DOMContentLoaded", () => {
  /* Initializing plugins */

  /* Map */
  let map = L.map("map", {
    scrollWheelZoom: false,
    touchZoom: true,
  }).setView([49.0266, 31.4832], 6);

  map.on("click", () => {
    map.zoomIn();
  });

  map.on("contextmenu", () => {
    map.zoomOut();
  });

  map.zoomControl.setPosition("topright");

  let marker1 = L.marker([50.4567, 30.5198]).addTo(map);
  let marker2 = L.marker([50.4501, 30.5234]).addTo(map);
  let marker3 = L.marker([49.8397, 24.0297]).addTo(map);
  let marker4 = L.marker([48.9226, 24.7111]).addTo(map);
  let marker5 = L.marker([48.5092, 32.2623]).addTo(map);
  let marker6 = L.marker([49.8398, 24.0297]).addTo(map);
  let marker7 = L.marker([48.5126, 35.0342]).addTo(map);
  let marker8 = L.marker([49.9808, 36.2527]).addTo(map);
  let marker9 = L.marker([46.4775, 30.7326]).addTo(map);
  let marker10 = L.marker([49.556, 25.5906]).addTo(map);
  let marker11 = L.marker([50.8333, 34.4844]).addTo(map);

  marker1
    .bindPopup(
      "<b>Главный офис Uber в Киеве</b><br>Адрес: ул. Хрещатик, 1, Киев, 01001<br>Время работы: Пн-Вс, 24/7"
    )
    .openPopup();

  marker2.bindPopup(
    "<b>Филиал UberEats в Киеве</b><br>Адрес: бул. Леси Украинки, 10, Киев, 01034<br>Время работы: Пн-Пт: 10:00 - 22:00, Сб-Вс: 12:00 - 20:00"
  );

  marker3.bindPopup(
    "<b>Филиал  Uber Green в Львове</b><br>Адрес: просп. Свободы, 12, Львов, 79000<br>Время работы: Пн-Вс: 9:00 - 21:00"
  );

  marker4.bindPopup(
    "<b>Филиал Uber Freight в Ивано-Франковске</b><br>Адрес: вул. Грушевського, 7, Ивано-Франковск, 76000<br>Время работы: Пн-Пт: 9:00 - 20:00, Сб: 10:00 - 18:00"
  );

  marker5.bindPopup(
    "<b>Филиал Uber Health в Кропивницком</b><br>Адрес: вул. Київська, 17, Кропивницкий, 25006<br>Время работы: Пн-Вс: 10:00 - 19:00"
  );
  marker6.bindPopup(
    "<b>Филиал Uber в Тернополе</b><br>Адрес: вул. Чорновола, 3, Тернополь, 46001<br>Время работы: Пн-Пт: 9:00 - 18:00"
  );

  marker7.bindPopup(
    "<b>Филиал Uber for Business в Днепре</b><br>Адрес: просп. Слобожанський, 16, Днепр, 49000<br>Время работы: Пн-Вс: 10:00 - 20:00"
  );

  marker8.bindPopup(
    "<b>Филиал Uber Elevate в Харькове</b><br>Адрес: просп. Науки, 24, Харьков, 61000<br>Время работы: Пн-Пт: 9:00 - 21:00, Сб-Вс: 10:00 - 18:00"
  );

  marker9.bindPopup(
    "<b>Филиал Uber Jump в Одессе</b><br>Адрес: вул. Катерининська, 1, Одесса, 65000<br>Время работы: Пн-Вс: 10:00 - 19:00"
  );

  marker10.bindPopup(
    "<b>Филиал  Uber ATG (Advanced Technologies Group) в Хмельницком</b><br>Адрес: вул. Проскурівська, 13, Хмельницкий, 29000<br>Время работы: Пн-Пт: 9:00 - 20:00, Сб: 10:00 - 18:00"
  );

  marker11.bindPopup(
    "<b>Филиал  Uber Air в Полтаве</b><br>Адрес: вул. Шевченка, 23, Полтава, 36000<br>Время работы: Пн-Вс: 10:00 - 19:00"
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

  document.body.onload = () => {
    const preloader = document.querySelector(".preloader");

    /* Choice-languages */
    const langOverlay = document.querySelector(".lang-overlay");
    const choiceLangLinks = document.querySelectorAll(
      ".languages-content__menu-item"
    );

    choiceLangLinks.forEach((i) => {
      i.addEventListener("click", (e) => {
        /* langChoice block -> local Storage  */
        e.preventDefault();
        localStorage.setItem("langChoiceVisited", true);
        langOverlay.classList.add("lang-overlay_active");
        document.body.style.overflow = "auto";
      });
    });

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
      "url(assets/img/bg/webp/main_bg-min.webp)";
  } else {
    document.querySelector(".header").style.backgroundImage =
      "url(assets/img/bg/main_bg-min.jpg)";
  }

  /* Mobile section */
  if (supportsWebP()) {
    document.querySelector(
      ".mobile-block__decor_item-one"
    ).style.backgroundImage =
      "url(assets/img/bg/webp/mobile_screen_1-min.webp)";
  } else {
    document.querySelector(
      ".mobile-block__decor_item-one"
    ).style.backgroundImage = "url(assets/img/bg/mobile_screen_1-min.jpg)";
  }

  if (supportsWebP()) {
    document.querySelector(
      ".mobile-block__decor_item-two"
    ).style.backgroundImage =
      "url(assets/img/bg/webp/mobile_screen_2-min.webp)";
  } else {
    document.querySelector(
      ".mobile-block__decor_item-two"
    ).style.backgroundImage = "url(assets/img/bg/mobile_screen_2-min.jpg)";
  }

  if (supportsWebP()) {
    document.querySelector(
      ".mobile-block__decor_item-three"
    ).style.backgroundImage =
      "url(assets/img/bg/webp/mobile_screen_3-min.webp)";
  } else {
    document.querySelector(
      ".mobile-block__decor_item-three"
    ).style.backgroundImage = "url(assets/img/bg/mobile_screen_3-min.jpg)";
  }

  if (supportsWebP()) {
    document.querySelector(
      ".mobile-block__decor_item-four"
    ).style.backgroundImage =
      "url(assets/img/bg/webp/mobile_screen_4-min.webp)";
  } else {
    document.querySelector(
      ".mobile-block__decor_item-four"
    ).style.backgroundImage = "url(assets/img/bg/mobile_screen_4-min.jpg)";
  }

  if (supportsWebP()) {
    document.querySelector(
      ".mobile-block__decor_item-five"
    ).style.backgroundImage =
      "url(assets/img/bg/webp/mobile_screen_5-min.webp)";
  } else {
    document.querySelector(
      ".mobile-block__decor_item-five"
    ).style.backgroundImage = "url(assets/img/bg/mobile_screen_5-min.jpg)";
  }

  if (supportsWebP()) {
    document.querySelector(
      ".mobile-block__decor_item-six"
    ).style.backgroundImage =
      "url(assets/img/bg/webp/mobile_screen_6-min.webp)";
  } else {
    document.querySelector(
      ".mobile-block__decor_item-six"
    ).style.backgroundImage = "url(assets/img/bg/mobile_screen_6-min.jpg)";
  }

  /* Word section */
  if (supportsWebP()) {
    document.querySelector(".word").style.backgroundImage =
      "url(assets/img/bg/webp/map-min.webp)";
  } else {
    document.querySelector(".word").style.backgroundImage =
      "url(assets/img/bg/map-min.jpg";
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

      regOverlay.classList.remove("reg-overlay_active");

      document.body.style.overflow = "auto";

      menu.classList.remove("menu_active");

      if (hamburger) {
        decorGrey.classList.remove("decor_translucent_active");
      }
    } else {
      hamburger.classList.add("hamburger_active");

      regOverlay.classList.add("reg-overlay_active");

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

      regOverlay.classList.remove("reg-overlay_active");

      document.body.style.overflow = "auto";

      menu.classList.remove("menu_active");

      if (hamburger) {
        decorGrey.classList.remove("decor_translucent_active");
      }
    });
  });

  /* /////////////////////////////////////////////////////////////////////// */

  /* Mobile section */

  const mobileBlockWrappers = document.querySelectorAll(
    ".mobile-block__wrapper"
  );

  /* Switch detailed info */
  mobileBlockWrappers.forEach((i) => {
    const mobileImage = i.querySelector(".mobile-block__image");
    const mobileTitle = i.querySelector(".mobile-block__title");
    const mobileHiddenTitle = i.querySelector(".mobile-block__hidden-title");

    mobileImage.addEventListener("click", () => {
      if (mobileImage) {
        mobileImage.classList.toggle("mobile-block__image_active");
      }

      if (mobileTitle) {
        mobileTitle.classList.toggle("mobile-block__title_active");
      }

      if (mobileHiddenTitle) {
        mobileHiddenTitle.classList.toggle("mobile-block__hidden-title_active");
      }
    });
  });

  /* /////////////////////////////////////////////////////////////////////// */

  /* Registration form block */

  const registration = document.querySelector(".registration");
  const buttonRegistration = document.querySelector(".button_registration");
  const buttonRegistrationForm = document.querySelector(
    ".button_registration-form"
  );
  const modalCloseRegistration = document.querySelectorAll(
    ".modal-registration__header-close"
  );
  const buttonAdvertising = document.querySelector(".button-advertising");
  const regOverlay = document.querySelector(".reg-overlay");

  /* Open modal window of registration form -> btn */
  buttonRegistration.addEventListener("click", () => {
    regOverlay.classList.add("reg-overlay_active");

    hamburger.style.visibility = "hidden";

    registration.classList.add("registration_active");

    document.body.style.overflow = "hidden";

    buttonRegistration.classList.add("button_active");

    advertising.classList.remove("advertising_active");

    document.addEventListener("keydown", closeRegModalOnEscape);
  });

  /* Open modal window of registration form -> adv */
  buttonAdvertising.addEventListener("click", () => {
    regOverlay.classList.add("reg-overlay_active");

    hamburger.style.visibility = "hidden";

    registration.classList.add("registration_active");

    document.body.style.overflow = "hidden";

    buttonRegistration.classList.add("button_active");

    advertising.classList.remove("advertising_active");

    document.addEventListener("keydown", closeRegModalOnEscape);
  });

  /* Close modal window of registration form */
  modalCloseRegistration.forEach((i) => {
    i.addEventListener("click", () => {
      regOverlay.classList.remove("reg-overlay_active");

      hamburger.style.visibility = "visible";

      registration.classList.remove("registration_active");

      document.body.style.overflow = "auto";

      buttonRegistration.classList.remove("button_active");
    });
  });

  /* Close modal window of registration form -> keydown Escape */
  const closeRegModalOnEscape = (e) => {
    if (e.key === "Escape") {
      regOverlay.classList.remove("reg-overlay_active");

      hamburger.style.visibility = "visible";

      registration.classList.remove("registration_active");

      document.body.style.overflow = "auto";

      buttonRegistration.classList.remove("button_active");
    }
  };

  /* Registration validation and sumbit the form window */
  const regForm = document.querySelector(".modal-registration__form");

  const regFirstName = document.getElementById("firstName-registration");
  const regFirstNameError = document.querySelector(
    ".modal-registration__form-error_firstName"
  );

  const regLastName = document.getElementById("lastName-registration");
  const regLastNameError = document.querySelector(
    ".modal-registration__form-error_lastName"
  );

  const regCities = document.getElementById("cities-registration");
  const regCitiesError = document.querySelector(
    ".modal-registration__form-error_cities"
  );

  const regEmail = document.getElementById("email-registration");
  const regEmailError = document.querySelector(
    ".modal-registration__form-error_email"
  );

  const regPhoneNumber = document.getElementById("phoneNumber-registration");
  const regPhoneNumberError = document.querySelector(
    ".modal-registration__form-error_phoneNumber"
  );

  /* Imask */
  const regMaskOptions = {
    mask: "+{38\\0}(00)-000-00-00",
  };

  const regMasks = IMask(regPhoneNumber, regMaskOptions);

  /* Validation sumbit the form */
  regForm.addEventListener("submit", (e) => {
    /* firstName submit */
    const firstNameIsValid =
      /^[а-яА-Я]{2,}$/.test(regFirstName.value) &&
      regFirstName.value.trim() !== "";

    if (firstNameIsValid) {
      regFirstNameError.style.display = "none";
      regFirstName.style.border = "1px solid green";
    } else {
      regFirstNameError.style.display = "block";
      regFirstName.style.border = "1px solid red";
    }

    /* lastName submit */
    const lastNameIsValid =
      /^[а-яА-Я]{3,}$/.test(regLastName.value) &&
      regLastName.value.trim() !== "";

    if (lastNameIsValid) {
      regLastNameError.style.display = "none";
      regLastName.style.border = "1px solid green";
    } else {
      regLastNameError.style.display = "block";
      regLastName.style.border = "1px solid red";
    }

    /* Cities submit */
    const citiesIsValid = regCities.value.trim() !== "";

    if (citiesIsValid) {
      regCitiesError.style.display = "none";
      regCities.style.border = "1px solid green";
    } else {
      regCitiesError.style.display = "block";
      regCities.style.border = "1px solid red";
    }

    /* Email submit */
    const emailIsValid =
      /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|yandex\.ru)$/i.test(
        regEmail.value
      ) && regEmail.value.trim() !== "";

    if (emailIsValid) {
      regEmailError.style.display = "none";
      regEmail.style.border = "1px solid green";
    } else {
      regEmailError.style.display = "block";
      regEmail.style.border = "1px solid red";
    }

    /* phoneNumber submit */
    const phoneNumberIsValid =
      /^\+380\((50|66|95|99|63|67|68|96|97|98|39|73|93)\)-\d{3}-\d{2}-\d{2}$/.test(
        regPhoneNumber.value
      ) && regPhoneNumber.value.trim() !== "";

    if (phoneNumberIsValid) {
      regPhoneNumberError.style.display = "none";
      regPhoneNumber.style.border = "1px solid green";
    } else {
      regPhoneNumberError.style.display = "block";
      regPhoneNumber.style.border = "1px solid red";
    }

    /* Result submit check */
    const resultValidation = [
      firstNameIsValid,
      lastNameIsValid,
      citiesIsValid,
      emailIsValid,
      phoneNumberIsValid,
    ];

    const isAllValid = resultValidation.every((i) => i);

    /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

    if (isAllValid === false) {
      hamburger.style.visibility = "hidden";

      e.preventDefault();
    } else {
      e.preventDefault();

      registration.classList.remove("registration_active");

      hamburger.style.visibility = "visible";

      regOverlay.classList.remove("reg-overlay_active");

      document.body.style.overflow = "auto";

      advertising.style.display = "none";

      localStorage.setItem("advertisingClosed", true);

      buttonRegistration.classList.remove("button_active");

      success.classList.add("success_active");

      regForm.reset();

      setTimeout(() => {
        success.classList.remove("success_active");
      }, 7000);
    }
  });

  /* ---------------------------------------------------------------------- */

  /* firstName input */
  let isRegFirstNameValid = false;

  regFirstName.addEventListener("input", () => {
    isRegFirstNameValid =
      /^[а-яА-Я]{2,}$/.test(regFirstName.value) &&
      regFirstName.value.trim() !== "";

    if (isRegFirstNameValid) {
      regFirstNameError.style.display = "none";
      regFirstName.style.border = "1px solid green";
    } else {
      regFirstNameError.style.display = "block";
      regFirstName.style.border = "1px solid red";
    }

    updateRegButtonState();
  });

  /* lastName input */
  let isRegLastNameValid = false;

  regLastName.addEventListener("input", () => {
    isRegLastNameValid =
      /^[а-яА-Я]{3,}$/.test(regLastName.value) &&
      regLastName.value.trim() !== "";

    if (isRegLastNameValid) {
      regLastNameError.style.display = "none";
      regLastName.style.border = "1px solid green";
    } else {
      regLastNameError.style.display = "block";
      regLastName.style.border = "1px solid red";
    }

    updateRegButtonState();
  });

  /* Cities input */
  let isRegCitiesValid = false;

  regCities.addEventListener("input", () => {
    isRegCitiesValid = regCities.value.trim() !== "";

    if (isRegCitiesValid) {
      regCitiesError.style.display = "none";
      regCities.style.border = "1px solid green";
    } else {
      regCitiesError.style.display = "block";
      regCities.style.border = "1px solid red";
    }

    updateRegButtonState();
  });

  /* phoneNumber input */
  let isRegPhoneNumberValid = false;

  regPhoneNumber.addEventListener("input", () => {
    isRegPhoneNumberValid =
      /^\+380\((50|66|95|99|63|67|68|96|97|98|39|73|93)\)-\d{3}-\d{2}-\d{2}$/.test(
        regPhoneNumber.value
      ) && regPhoneNumber.value.trim() !== "";

    if (isRegPhoneNumberValid) {
      regPhoneNumberError.style.display = "none";
      regPhoneNumber.style.border = "1px solid green";
    } else {
      regPhoneNumberError.style.display = "block";
      regPhoneNumber.style.border = "1px solid red";
    }

    updateRegButtonState();
  });

  /* Email input */
  let isRegEmailValid = false;

  regEmail.addEventListener("input", () => {
    isRegEmailValid =
      /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|yandex\.ru)$/i.test(
        regEmail.value
      ) && regEmail.value.trim() !== "";

    if (isRegEmailValid) {
      regEmailError.style.display = "none";
      regEmail.style.border = "1px solid green";
    } else {
      regEmailError.style.display = "block";
      regEmail.style.border = "1px solid red";
    }

    updateRegButtonState();
  });

  /* Result input check */
  const updateRegButtonState = () => {
    const resultRegInputValid =
      isRegFirstNameValid &&
      isRegLastNameValid &&
      isRegCitiesValid &&
      isRegPhoneNumberValid &&
      isRegEmailValid;

    if (resultRegInputValid) {
      buttonRegistrationForm.classList.remove("button_active");
    } else {
      buttonRegistrationForm.classList.add("button_active");
    }
  };

  updateRegButtonState();

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
      callbackСouponCode.value === "UBER2024" ||
      callbackСouponCode.value === "uber2024" ||
      callbackСouponCode.value === "UBER 2024" ||
      callbackСouponCode.value === "uber 2024" ||
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

  /* Advertising block */

  const advertisingClose = document.querySelector(".advertising__close");
  const advertising = document.querySelector(".advertising");

  /* Adv block local Storage */
  const advertisingClosed = localStorage.getItem("advertisingClosed");

  advertisingClose.addEventListener("click", () => {
    /* Adv block -> local Storage  */
    localStorage.setItem("advertisingClosed", true);
    advertising.style.display = "none";
  });

  /* validation adv block -> local Storage  */
  if (advertisingClosed === "true") {
    advertising.style.display = "none";
  }

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

  /* Success block */

  const success = document.querySelector(".success");
  const successClose = document.querySelector(".success__close");

  successClose.addEventListener("click", () => {
    success.classList.remove("success_active");
  });

  /* /////////////////////////////////////////////////////////////////////// */

  /* Smooth scroll links block */

  /* mainHeader link */
  const mainHeader = document.getElementById("main-header");
  /* Links -> mainHeader */
  const mainHeaderLogo = document.querySelector(".subheader__logo-link");
  const mainHeaderGeneralLink = document.getElementById("general");
  const mainHeaderArrow = document.querySelector(".arrow-up");
  const mainHeaderFooter = document.getElementById("footer-up-link");

  /* mainConditions link */
  const mainConditions = document.getElementById("main-conditions");
  /* Links -> mainConditions */
  const mainConditionsOnYourCar = document.getElementById("on-your-car");
  const mainConditionsOnOurCar = document.getElementById("on-our-car");
  const advertisingLink = document.querySelector(".advertising__link");
  const mainConditionsFooter = document.getElementById(
    "footer-conditions-link"
  );

  /* mainRequire link */
  const mainRequire = document.getElementById("main-require");
  /* Links -> mainRequire */
  const mainRequireLink = document.getElementById("require");

  /* mainGeolocation link */
  const mainGeolocation = document.getElementById("main-geolocation");
  /* Links -> mainGeolocation */
  const mainGeolocationLink = document.getElementById("geolocation");
  const mainGeolocationFooter = document.getElementById(
    "footer-geolocation-link"
  );

  /* smoothScroll */
  const smoothScroll = (element) => {
    element.scrollIntoView({ behavior: "smooth" });
  };

  /* mainHeaderGeneralLink preventDefault */
  mainHeaderGeneralLink.addEventListener("click", (e) => {
    e.preventDefault();
  });

  /* links -> mainHeader */
  mainHeaderLogo.addEventListener("click", (e) => {
    e.preventDefault();
    smoothScroll(mainHeader);
  });

  mainHeaderArrow.addEventListener("click", (e) => {
    e.preventDefault();
    smoothScroll(mainHeader);
  });

  mainHeaderFooter.addEventListener("click", (e) => {
    e.preventDefault();
    smoothScroll(mainHeader);
  });

  /* links -> mainConditions */
  mainConditionsOnYourCar.addEventListener("click", (e) => {
    e.preventDefault();
    smoothScroll(mainConditions);
  });

  mainConditionsOnOurCar.addEventListener("click", (e) => {
    e.preventDefault();
    smoothScroll(mainConditions);
  });

  advertisingLink.addEventListener("click", (e) => {
    e.preventDefault();
    smoothScroll(mainConditions);
  });

  mainConditionsFooter.addEventListener("click", (e) => {
    e.preventDefault();
    smoothScroll(mainConditions);
  });

  /* links -> mainRequire */
  mainRequireLink.addEventListener("click", (e) => {
    e.preventDefault();
    smoothScroll(mainRequire);
  });

  /* links -> mainGeolocation */
  mainGeolocationLink.addEventListener("click", (e) => {
    e.preventDefault();
    smoothScroll(mainGeolocation);
  });

  mainGeolocationFooter.addEventListener("click", (e) => {
    e.preventDefault();
    smoothScroll(mainGeolocation);
  });

  /* /////////////////////////////////////////////////////////////////////// */

  /* Smooth hiding block */

  const decor = document.querySelector(".decor");
  const arrowUpVisible = document.querySelector(".arrow-up");
  const consultation = document.querySelector(".consultation");

  document.onscroll = () => {
    let scroll = window.scrollY;

    /* Decor */
    if (scroll > decor.offsetTop) {
      decorGrey.style.top = "0px";
    } else {
      decorGrey.style.top = "";
    }

    /* Utilities */
    if (scroll > 1200) {
      consultation.classList.add("consultation_active");

      arrowUpVisible.classList.add("arrow-up_active");

      advertising.classList.add("advertising_active");
    }

    if (scroll < 1000) {
      arrowUpVisible.classList.remove("arrow-up_active");
    }
  };

  /* /////////////////////////////////////////////////////////////////////// */

  /* Consultation mini-links block */

  const consultationLink = document.querySelectorAll(".consultation__link");
  const consultationButton = document.querySelector(
    ".button-open-consultation"
  );
  const consultationButtonClose = document.querySelector(
    ".button-close-consultation"
  );

  /* Open consultation mini-links  */
  consultationButton.addEventListener("click", () => {
    consultationLink.forEach((links) => {
      links.addEventListener("click", (e) => {
        e.preventDefault();
      });

      links.classList.toggle("consultation__link_active");
    });

    consultationButton.classList.toggle("button-open-consultation_active");

    consultationButtonClose.classList.toggle(
      "button-close-consultation_active"
    );
  });

  /* Close consultation mini-links  */
  consultationButtonClose.addEventListener("click", () => {
    consultationLink.forEach((links) => {
      links.classList.toggle("consultation__link_active");
    });

    consultationButton.classList.toggle("button-open-consultation_active");

    consultationButtonClose.classList.toggle(
      "button-close-consultation_active"
    );
  });

  /* /////////////////////////////////////////////////////////////////////// */

  /* Validator css  */
  const validator = document.querySelector(".css-validator-link");

  validator.addEventListener("click", (e) => {
    e.preventDefault();
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

  /* Privacy link registration form window */
  const regPrivacyLink = document.querySelectorAll(
    ".modal-registration__form-privacy-link"
  );

  regPrivacyLink.forEach((i) => {
    i.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });

  /* Footer supports */
  const footerSupportLinks = document.querySelectorAll(
    ".footer__menu-support-link"
  );

  footerSupportLinks.forEach((links) => {
    links.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });

  /* Footer languages */
  const footerLanguageLinks = document.querySelectorAll(
    ".footer__menu-language-link"
  );

  footerLanguageLinks.forEach((links) => {
    links.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
});
