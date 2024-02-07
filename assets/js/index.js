window.addEventListener("DOMContentLoaded", () => {
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
      /^\d{10}$/.test(regPhoneNumber.value) &&
      regPhoneNumber.value.trim() !== "";

    if (phoneNumberIsValid) {
      regPhoneNumberError.style.display = "none";
      regPhoneNumber.style.border = "1px solid green";
    } else {
      regPhoneNumberError.style.display = "block";
      regPhoneNumber.style.border = "1px solid red";
    }

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

      setTimeout(() => {
        success.classList.remove("success_active");
      }, 7000);
    }
  });

  /* ---------------------------------------------------------------------- */

  /* firstname input */

  regFirstName.addEventListener("input", () => {
    const isValid =
      /^[а-яА-Я]{2,}$/.test(regFirstName.value) &&
      regFirstName.value.trim() !== "";

    if (isValid) {
      regFirstNameError.style.display = "none";
      regFirstName.style.border = "1px solid green";
    } else {
      regFirstNameError.style.display = "block";
      regFirstName.style.border = "1px solid red";
    }
  });

  /* lastName input */

  regLastName.addEventListener("input", () => {
    const isValid =
      /^[а-яА-Я]{3,}$/.test(regLastName.value) &&
      regLastName.value.trim() !== "";

    if (isValid) {
      regLastNameError.style.display = "none";
      regLastName.style.border = "1px solid green";
    } else {
      regLastNameError.style.display = "block";
      regLastName.style.border = "1px solid red";
    }
  });

  /* cities input */

  regCities.addEventListener("input", () => {
    const isValid = regCities.value === "";

    if (isValid) {
      regCitiesError.style.display = "block";
      regCities.style.border = "1px solid red";
    } else {
      regCitiesError.style.display = "none";
      regCities.style.border = "1px solid green";
    }

    /* phoneNumber input */

    regPhoneNumber.addEventListener("input", () => {
      const isValid =
        /^\d{10}$/.test(regPhoneNumber.value) &&
        regPhoneNumber.value.trim() !== "";

      if (isValid) {
        regPhoneNumberError.style.display = "none";
        regPhoneNumber.style.border = "1px solid green";
      } else {
        regPhoneNumberError.style.display = "block";
        regPhoneNumber.style.border = "1px solid red";
      }
    });

    /* email input */

    regEmail.addEventListener("input", () => {
      const isValid =
        /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|yandex\.ru)$/i.test(
          regEmail.value
        ) && regEmail.value.trim() !== "";

      if (isValid) {
        regEmailError.style.display = "none";
        regEmail.style.border = "1px solid green";
      } else {
        regEmailError.style.display = "block";
        regEmail.style.border = "1px solid red";
      }
    });
  });

  /* /////////////////////////////////////////////////////////////////////// */

  /* Callback form block*/

  const callbackOverflowHiden = document.querySelector(".callback-overflow");
  const buttonCallback = document.querySelector(".button_callback");
  const modalCloseCallback = document.querySelectorAll(
    ".modal-callback__header-close"
  );

  /* Open modal window of callback form */

  buttonCallback.addEventListener("click", () => {
    callbackOverflowHiden.classList.add("callback-overflow_active");

    document.body.style.overflow = "hidden";

    buttonCallback.classList.add("button_active");
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

    /* last submit */

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
      /^\d{10}$/.test(callbackPhoneNumber.value) &&
      callbackPhoneNumber.value.trim() !== "";

    if (phoneNumberIsValid) {
      callbackPhoneNumberError.style.display = "none";
      callbackPhoneNumber.style.border = "1px solid green";
    } else {
      callbackPhoneNumberError.style.display = "block";
      callbackPhoneNumber.style.border = "1px solid red";
    }

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

      setTimeout(() => {
        success.classList.remove("success_active");
      }, 7000);
    }
  });

  /* ---------------------------------------------------------------------- */

  /* firstname input */

  callbackFirstName.addEventListener("input", () => {
    const isValid =
      /^[а-яА-Я]{2,}$/.test(callbackFirstName.value) &&
      callbackFirstName.value.trim() !== "";

    if (isValid) {
      callbackFirstNameError.style.display = "none";
      callbackFirstName.style.border = "1px solid green";
    } else {
      callbackFirstNameError.style.display = "block";
      callbackFirstName.style.border = "1px solid red";
    }
  });

  /* lastName input */

  callbackLastName.addEventListener("input", () => {
    const isValid =
      /^[а-яА-Я]{3,}$/.test(callbackLastName.value) &&
      callbackLastName.value.trim() !== "";

    if (isValid) {
      callbackLastNameError.style.display = "none";
      callbackLastName.style.border = "1px solid green";
    } else {
      callbackLastNameError.style.display = "block";
      callbackLastName.style.border = "1px solid red";
    }
  });

  /* cities input */

  callbackCities.addEventListener("input", () => {
    const isValid = callbackCities.value === "";

    if (isValid) {
      callbackCitiesError.style.display = "block";
      callbackCities.style.border = "1px solid red";
    } else {
      callbackCitiesError.style.display = "none";
      callbackCities.style.border = "1px solid green";
    }
  });

  /* phoneNumber input */

  callbackPhoneNumber.addEventListener("input", () => {
    const isValid =
      /^\d{10}$/.test(callbackPhoneNumber.value) &&
      callbackPhoneNumber.value.trim() !== "";

    if (isValid) {
      callbackPhoneNumberError.style.display = "none";
      callbackPhoneNumber.style.border = "1px solid green";
    } else {
      callbackPhoneNumberError.style.display = "block";
      callbackPhoneNumber.style.border = "1px solid red";
    }
  });

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

  const require = document.getElementById("require");
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

  require.addEventListener("click", (e) => {
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

    if (scroll > decor.offsetTop) {
      decorGrey.style.top = "0px";
    } else {
      decorGrey.style.top = "";
    }

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
});
