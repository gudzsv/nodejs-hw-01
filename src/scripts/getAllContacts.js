import { readDataFromFile } from '../utils/fileUtils.js';

export const getAllContacts = async () => {
  try {
    return await readDataFromFile();
  } catch (error) {
    console.error(
      'An error occurred during the getAllContacts process:',
      error,
    );
  }
};

console.log(await getAllContacts());
