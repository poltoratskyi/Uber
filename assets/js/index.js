window.addEventListener("DOMContentLoaded", () => {
  /* Check webp block */

  const supportsWebP = () => {
    const elem = document.createElement("canvas");
    if (!!(elem.getContext && elem.getContext("2d"))) {
      return elem.toDataURL("image/webp").indexOf("data:image/webp") === 0;
    }
    return false;
  };

  /* header section */

  if (supportsWebP()) {
    document.querySelector(".header").style.backgroundImage =
      "url(assets/img/bg/webp/main_bg-min.webp)";
  } else {
    document.querySelector(".header").style.backgroundImage =
      "url(assets/img/bg/main_bg-min.jpg)";
  }

  /* mobile section */

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

  /* word section */

  if (supportsWebP()) {
    document.querySelector(".word").style.backgroundImage =
      "url(assets/img/bg/webp/map-min.webp)";
  } else {
    document.querySelector(".word").style.backgroundImage =
      "url(assets/img/bg/map-min.jpg";
  }

  /* Hamburger block */

  const menu = document.querySelector(".menu");
  const menuItems = document.querySelectorAll(".menu__items");
  const hamburger = document.querySelector(".hamburger");
  const decorGrey = document.querySelector(".decor_translucent");

  /* Open/close hamburger menu */

  hamburger.addEventListener("click", () => {
    if (hamburger.classList.contains("hamburger_active")) {
      hamburger.classList.remove("hamburger_active");

      document.body.style.overflow = "auto";

      menu.classList.remove("menu_active");

      if (hamburger) {
        decorGrey.classList.remove("decor_translucent_active");
      }
    } else {
      hamburger.classList.add("hamburger_active");

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

      document.body.style.overflow = "auto";

      menu.classList.remove("menu_active");

      if (hamburger) {
        decorGrey.classList.remove("decor_translucent_active");
      }
    });
  });

  /* /////////////////////////////////////////////////////////////////////// */

  /* Mobile block */

  const mobileBlockWrappers = document.querySelectorAll(
    ".mobile-block__wrapper"
  );

  /* Switch detailed info */

  mobileBlockWrappers.forEach((i) => {
    const mobileImage = i.querySelector(".mobile-block__image");
    const mobileTitle = i.querySelector(".mobile-block__title");
    const mobileHidenTitle = i.querySelector(".mobile-block__hiden-title");

    mobileImage.addEventListener("click", () => {
      if (mobileImage) {
        mobileImage.classList.toggle("mobile-block__image_active");
      }

      if (mobileTitle) {
        mobileTitle.classList.toggle("mobile-block__title_active");
      }

      if (mobileHidenTitle) {
        mobileHidenTitle.classList.toggle("mobile-block__hiden-title_active");
      }
    });
  });

  /* /////////////////////////////////////////////////////////////////////// */

  /* Registration form block */

  const overflowHidenRegistration = document.querySelector(
    ".registration-overflow"
  );
  const buttonRegistration = document.querySelector(".button_registration");
  const buttonRegistrationForm = document.querySelector(
    ".button_registration-form"
  );
  const modalCloseRegistration = document.querySelectorAll(
    ".modal-registration__header-close"
  );
  const buttonAdvertising = document.querySelector(".button-advertising");

  /* Open modal window of registration form  -> btn */

  buttonRegistration.addEventListener("click", () => {
    overflowHidenRegistration.classList.add("registration-overflow_active");

    document.body.style.overflow = "hidden";

    buttonRegistration.classList.add("button_active");

    advertising.classList.remove("advertising_active");

    document.addEventListener("keydown", closeRegModalOnEscape);
  });

  /* Open modal window of registration form -> adv */

  buttonAdvertising.addEventListener("click", () => {
    overflowHidenRegistration.classList.add("registration-overflow_active");

    document.body.style.overflow = "hidden";

    buttonRegistration.classList.add("button_active");

    advertising.classList.remove("advertising_active");
  });

  /* Close modal window of registration form */

  modalCloseRegistration.forEach((i) => {
    i.addEventListener("click", () => {
      overflowHidenRegistration.classList.remove(
        "registration-overflow_active"
      );

      document.body.style.overflow = "auto";

      buttonRegistration.classList.remove("button_active");
    });
  });

  /* Close modal window of registration form -> keydown Escape */

  const closeRegModalOnEscape = (event) => {
    if (event.key === "Escape") {
      overflowHidenRegistration.classList.remove(
        "registration-overflow_active"
      );

      document.body.style.overflow = "auto";

      buttonRegistration.classList.remove("button_active");
    }
  };

  /* Privacy link registration form window */

  const regPrivacyLink = document.querySelectorAll(
    ".modal-registration__form-privacy-link"
  );

  regPrivacyLink.forEach((i) => {
    i.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });

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

  /* validation sumbit the form */

  regForm.addEventListener("submit", (e) => {
    /* firstname submit */

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

    /* firstname submit */

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

    /* cities submit */

    const citiesIsValid = regCities.value.trim() !== "";

    if (citiesIsValid) {
      regCitiesError.style.display = "none";
      regCities.style.border = "1px solid green";
    } else {
      regCitiesError.style.display = "block";
      regCities.style.border = "1px solid red";
    }

    /* email submit */

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
      /^\+380\(\d{2}\)-\d{3}-\d{2}-\d{2}$/.test(regPhoneNumber.value) &&
      regPhoneNumber.value.trim() !== "";

    if (phoneNumberIsValid) {
      regPhoneNumberError.style.display = "none";
      regPhoneNumber.style.border = "1px solid green";
    } else {
      regPhoneNumberError.style.display = "block";
      regPhoneNumber.style.border = "1px solid red";
    }

    /* Result Submit check */

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
      e.preventDefault();
    } else {
      e.preventDefault();
      overflowHidenRegistration.classList.remove(
        "registration-overflow_active"
      );

      document.body.style.overflow = "auto";

      advertising.style.display = "none";

      buttonRegistration.classList.remove("button_active");

      success.classList.add("success_active");

      regForm.reset();

      setTimeout(() => {
        success.classList.remove("success_active");
      }, 7000);
    }
  });

  /* ---------------------------------------------------------------------- */

  /* firstname input */

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

  /* cities input */

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
      /^\+380\(\d{2}\)-\d{3}-\d{2}-\d{2}$/.test(regPhoneNumber.value) &&
      regPhoneNumber.value.trim() !== "";

    if (isRegPhoneNumberValid) {
      regPhoneNumberError.style.display = "none";
      regPhoneNumber.style.border = "1px solid green";
    } else {
      regPhoneNumberError.style.display = "block";
      regPhoneNumber.style.border = "1px solid red";
    }

    updateRegButtonState();
  });

  /* email input */

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

  /* Result Input check */

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

  const callbackOverflowHiden = document.querySelector(".callback-overflow");
  const buttonCallback = document.querySelector(".button_callback");
  const buttonCallbackForm = document.querySelector(".button_callback-form");
  const modalCloseCallback = document.querySelectorAll(
    ".modal-callback__header-close"
  );

  /* Open modal window of callback form */

  buttonCallback.addEventListener("click", () => {
    callbackOverflowHiden.classList.add("callback-overflow_active");

    document.body.style.overflow = "hidden";

    buttonCallback.classList.add("button_active");

    document.addEventListener("keydown", closeCallbackModalOnEscape);
  });

  /* Close modal window of callback form */

  modalCloseCallback.forEach((i) => {
    i.addEventListener("click", () => {
      callbackOverflowHiden.classList.remove("callback-overflow_active");

      document.body.style.overflow = "auto";

      coupon.classList.add("coupon_active");

      buttonCallback.classList.remove("button_active");
    });
  });

  /* Close modal window of callback form -> keydown Escape */

  const closeCallbackModalOnEscape = (event) => {
    if (event.key === "Escape") {
      callbackOverflowHiden.classList.remove("callback-overflow_active");

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

  /* validation sumbit the form */

  callbackForm.addEventListener("submit", (e) => {
    /* firstname submit */

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

    /* cities submit */

    const citiesIsValid = callbackCities.value.trim() !== "";

    if (citiesIsValid) {
      callbackCitiesError.style.display = "none";
      callbackCities.style.border = "1px solid green";
    } else {
      callbackCitiesError.style.display = "block";
      callbackCities.style.border = "1px solid red";
    }

    /* coupon submit */

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
      /^\+380\(\d{2}\)-\d{3}-\d{2}-\d{2}$/.test(callbackPhoneNumber.value) &&
      callbackPhoneNumber.value.trim() !== "";

    if (phoneNumberIsValid) {
      callbackPhoneNumberError.style.display = "none";
      callbackPhoneNumber.style.border = "1px solid green";
    } else {
      callbackPhoneNumberError.style.display = "block";
      callbackPhoneNumber.style.border = "1px solid red";
    }

    /* Result Submit check */

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
      e.preventDefault();
    } else {
      e.preventDefault();
      callbackOverflowHiden.classList.remove("callback-overflow_active");

      document.body.style.overflow = "auto";

      coupon.style.display = "none";

      buttonCallback.classList.remove("button_active");

      success.classList.add("success_active");

      callbackForm.reset();

      setTimeout(() => {
        success.classList.remove("success_active");
      }, 7000);
    }
  });

  /* ---------------------------------------------------------------------- */

  /* firstname input */

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

  /* cities input */

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
      /^\+380\(\d{2}\)-\d{3}-\d{2}-\d{2}$/.test(callbackPhoneNumber.value) &&
      callbackPhoneNumber.value.trim() !== "";

    if (isCallbackPhoneNumberValid) {
      callbackPhoneNumberError.style.display = "none";
      callbackPhoneNumber.style.border = "1px solid green";
    } else {
      callbackPhoneNumberError.style.display = "block";
      callbackPhoneNumber.style.border = "1px solid red";
    }

    updateInputButtonState();
  });

  /* Result Input check */

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

  /* Close advertising block */

  const advertisingClose = document.querySelector(".advertising__close");
  const advertising = document.querySelector(".advertising");

  advertisingClose.addEventListener("click", () => {
    advertising.style.display = "none";
  });

  /* /////////////////////////////////////////////////////////////////////// */

  /* Close coupon block */

  const coupon = document.querySelector(".coupon");
  const couponClose = document.querySelector(".coupon__close");
  const couponImg = document.querySelector(".coupon__img");

  couponClose.addEventListener("click", () => {
    coupon.style.display = "none";
  });

  couponImg.addEventListener("click", () => {
    callbackOverflowHiden.classList.add("callback-overflow_active");

    document.body.style.overflow = "hidden";

    buttonCallback.classList.add("button_active");
  });

  /* /////////////////////////////////////////////////////////////////////// */

  /* Success section */

  const success = document.querySelector(".success");
  const successClose = document.querySelector(".success__close");

  successClose.addEventListener("click", () => {
    success.classList.remove("success_active");
  });

  /* /////////////////////////////////////////////////////////////////////// */

  /* Smooth scroll block*/

  const general = document.getElementById("general");
  const arrowUp = document.querySelector(".arrow-up");
  const toGeneral = document.getElementById("to-header");

  const onYourCar = document.getElementById("on-your-car");
  const onOurCar = document.getElementById("on-our-car");
  const toConditions = document.getElementById("to-conditions");

  const requireId = document.getElementById("require");
  const toRequire = document.getElementById("to-require");

  const geolocation = document.getElementById("geolocation");
  const toGeolocation = document.getElementById("to-geolocation");

  const advertisingLink = document.querySelector(".advertising__link");

  const subheaderLogoLink = document.querySelector(".subheader__logo-link");

  const smoothScroll = (element) => {
    element.scrollIntoView({ behavior: "smooth" });
  };

  subheaderLogoLink.addEventListener("click", (e) => {
    e.preventDefault();

    smoothScroll(toGeneral);
  });

  general.addEventListener("click", (e) => {
    e.preventDefault();

    smoothScroll(toGeneral);
  });

  arrowUp.addEventListener("click", (e) => {
    e.preventDefault();

    smoothScroll(toGeneral);
  });

  advertisingLink.addEventListener("click", (e) => {
    e.preventDefault();

    smoothScroll(toConditions);
  });

  onYourCar.addEventListener("click", (e) => {
    e.preventDefault();

    smoothScroll(toConditions);
  });

  onOurCar.addEventListener("click", (e) => {
    e.preventDefault();

    smoothScroll(toConditions);
  });

  requireId.addEventListener("click", (e) => {
    e.preventDefault();

    smoothScroll(toRequire);
  });

  geolocation.addEventListener("click", (e) => {
    e.preventDefault();

    smoothScroll(toGeolocation);
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

    /* ---------------------------------------------------------------------- */

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

  /* leaflet section */

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

  /* Initializing plugins */

  /* Map */

  let map = L.map("map", {
    scrollWheelZoom: false,
    touchZoom: true,
  }).setView([50.4501, 30.5234], 13);

  map.on("click", () => {
    map.zoomIn();
  });

  map.on("contextmenu", () => {
    map.zoomOut();
  });

  map.zoomControl.setPosition("topright");

  let marker1 = L.marker([50.4501, 30.5234]).addTo(map);
  let marker2 = L.marker([50.4567, 30.5198]).addTo(map);
  let marker3 = L.marker([50.4592, 30.5269]).addTo(map);
  let marker4 = L.marker([50.4443, 30.5261]).addTo(map);

  marker1
    .bindPopup(
      "<b>Главный официальный филиал Uber в Киеве</b><br>Адрес: ул. Хрещатик, 1, Киев, 01001<br>Время работы: Пн-Вс, 24/7"
    )
    .openPopup();
  marker2
    .bindPopup(
      "<b>Офис UberEats в Киеве</b><br>Адрес: бул. Леси Украинки, 10, Киев, 01034<br>Время работы: Пн-Пт: 10:00 - 22:00, Сб-Вс: 12:00 - 20:00"
    )
    .openPopup();
  marker3
    .bindPopup(
      "<b>Центр поддержки Uber для водителей</b><br>Адрес: ул. Велика Васильківська, 45, Киев, 02000<br>Время работы: Пн-Пт: 09:00 - 18:00"
    )
    .openPopup();
  marker4
    .bindPopup(
      "<b>Офис Uber Green в Киеве</b><br>Адрес: просп. Голосеевский, 50, Киев, 03034<br>Время работы: Пн-Пт: 09:00 - 17:00, Сб-Вс: выходной"
    )
    .openPopup();

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  /* Animate css */

  new WOW().init();
});
