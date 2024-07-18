import { createFakeContact } from '../utils/createFakeContact.js';

import { readDataFromFile, writeDataToFile } from '../utils/fileUtils.js';

const generateContacts = (number) => {
  return Array.from({ length: number }, createFakeContact);
};
export const addOneContact = async () => {
  try {
    let contacts = await readDataFromFile();
    const newContacts = generateContacts(1);
    contacts = contacts.concat(newContacts);
    await writeDataToFile(contacts);
  } catch (error) {
    console.error('An error occurred during the addOneContact process:', error);
  }
};

addOneContact();
