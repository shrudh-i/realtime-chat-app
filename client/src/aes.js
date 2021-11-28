var aes256 = require("aes256");
//the secret key used for encrypting and decrypting messages
var secret_key = "uI2ooxtwHeI6q69PS98fx9SWVGbpQohO";
//returns the encrypted text
export const to_Encrypt = (text) => {
  var encrypted = aes256.encrypt(secret_key, text);
  return encrypted;
};
//welcome message is not decrypted
export const to_Decrypt = (cipher, userId) => {
  if (cipher === "Welcome") {
    return cipher;
  }

  if (cipher === userId) {
    return cipher;
  }
  //decrypted message is returned
  var decrypted = aes256.decrypt(secret_key, cipher);
  return decrypted;
};