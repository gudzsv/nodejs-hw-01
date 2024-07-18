import { removeAllDataInFile } from '../utils/fileUtils.js';

export const removeAllContacts = async () => {
  try {
    await removeAllDataInFile();
  } catch (error) {
    console.error(
      'An error occurred during the removeAllContacts process:',
      error,
    );
  }
};

removeAllContacts();
