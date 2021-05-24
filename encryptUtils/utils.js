import path from 'path';
import crypto, { generateKeyPairSync } from 'crypto';
import fs, { writeFileSync } from 'fs';
const passphrase = 'mySecret';
export const decryptStringWithRsaPrivateKey = function (
  toDecrypt,
  relativeOrAbsolutePathtoPrivateKey
) {
  var absolutePath = path.resolve(relativeOrAbsolutePathtoPrivateKey);
  var privateKey = fs.readFileSync(absolutePath, 'utf8');
  var buffer = Buffer.from(toDecrypt, 'base64');
  const decrypted = crypto.privateDecrypt(
    {
      key: privateKey.toString(),
      passphrase: passphrase,
    },
    buffer
  );
  return decrypted.toString('utf8');
};

export const encryptStringWithRsaPublicKey = function (
  toEncrypt,
  relativeOrAbsolutePathToPublicKey
) {
  var absolutePath = path.resolve(relativeOrAbsolutePathToPublicKey);
  var publicKey = fs.readFileSync(absolutePath, 'utf8');
  var buffer = Buffer.from(toEncrypt);
  var encrypted = crypto.publicEncrypt(publicKey, buffer);
  return encrypted.toString('base64');
};

export const generateKeys = function () {
  const { publicKey, privateKey } = generateKeyPairSync('rsa', {
    modulusLength: 4096,
    namedCurve: 'secp256k1',
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem',
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
      cipher: 'aes-256-cbc',
      passphrase: passphrase,
    },
  });

  writeFileSync('private.pem', privateKey);
  writeFileSync('public.pem', publicKey);
};
