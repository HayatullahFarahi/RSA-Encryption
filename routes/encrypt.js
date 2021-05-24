import express from 'express';
import path from 'path';
import fs from 'fs';
import crypto, { generateKeyPairSync } from 'crypto';
import { writeFileSync } from 'fs';
const passphrase = 'mySecret';

import {
  encryptStringWithRsaPublicKey,
  decryptStringWithRsaPrivateKey,
  generateKeys,
} from '../encryptUtils/utils.js';

const router = express.Router();

router.get('/data', (req, res) => {
  const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
  });

  console.log(`${publicKey.asymmetricKeySize}`.green.bold);
  // console.log(`${privateKey.type}`.red.bold);

  // const data = req.params.data;
  const data = {
    name: 'Hayatullah',
    lastName: 'Farahi',
  };

  const dataString = JSON.stringify(data);

  const encryptedData = crypto.publicEncrypt(
    {
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: 'sha512',
    },
    // We convert the data string to a buffer using `Buffer.from`
    Buffer.from(dataString)
  );

  const decryptedData = crypto.privateDecrypt(
    {
      key: privateKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: 'sha512',
    },
    encryptedData
  );

  // Create some sample data that we want to sign
  const verifiableData = 'this need to be verified';

  const signature = crypto.sign('sha512', Buffer.from(verifiableData), {
    key: privateKey,
    padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
  });

  console.log('signature:', signature.toString('base64'));

  res.send({
    data,
    // encryptedData,
    encryptedDataString: encryptedData.toString('base64'),
    decryptedData: JSON.parse(decryptedData.toString()),
    signature: signature.toString('base64'),
  });
});

router.get('/new', (req, res) => {
  if (!fs.existsSync('public.pem') && !fs.existsSync('private.pem')) {
    generateKeys();
  } else console.log('keys exists'.green.inverse);

  const data = {
    name: 'Hayatullah',
    lastName: 'Farahi',
  };

  let encryptedData = encryptStringWithRsaPublicKey(
    JSON.stringify(data),
    'public.pem'
  );
  let decryptedData = decryptStringWithRsaPrivateKey(
    encryptedData,
    'private.pem'
  );
  res.send({
    data,
    encryptedData,
    decryptedData: JSON.parse(decryptedData),
  });
});

export default router;
