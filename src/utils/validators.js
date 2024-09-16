export default {
  name: (v) => /^[A-Za-zА-Яа-я]{1,}$/.test(v),
  surname: (v) => /^[A-Za-zА-Яа-я]{1,}$/.test(v),
  email: (v) =>
    /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_-])+\.([A-Za-z]{2,4})$/.test(v),
  phone: (v) => /^[+][7][\d]{10,14}$/.test(v),
};
