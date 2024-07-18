import { createFakeContact } from '../utils/createFakeContact.js';
import { readDataFromFile, writeDataToFile } from '../utils/fileUtils.js';

const generateContacts = (number) => {
  return Array.from({ length: number }, createFakeContact);
};

(async (number) => {
  try {
    let contacts = await readDataFromFile();
    const newContacts = generateContacts(number);
    contacts = contacts.concat(newContacts);
    await writeDataToFile(contacts);
  } catch (error) {
    console.error(
      'An error occurred during the generateContacts process:',
      error,
    );
  }
})(5);
