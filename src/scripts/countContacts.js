
import { readDataFromFile } from '../utils/fileUtils.js';

export const countContacts = async () => {
  try {
    const contacts = await readDataFromFile();
    return contacts.length;
  } catch (error) {
    console.error('An error occurred during the countContacts process:', error);
  }
};

console.log(await countContacts());
