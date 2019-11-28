<<<<<<< HEAD
<<<<<<< HEAD
'use strict'

=======
>>>>>>> adding signin via google mail
=======
'use strict'

>>>>>>> update writing style
module.exports = () => {
  const length = 8
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let password = "";

  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  return password;

}
