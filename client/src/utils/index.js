const utils = {
  formatUppercase: (str) => {
    if (!str || typeof str !== 'string' || str.length <= 1) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
  isEmailValid: (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  },
  normalizePhone: (phone) => {
    return phone.replace(/\s/g, '').replace(/^(\+39)|^(39)/g, '');
  },
};

export default utils;
