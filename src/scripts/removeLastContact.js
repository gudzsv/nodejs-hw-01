import { readDataFromFile, writeDataToFile } from '../utils/fileUtils.js';

export const removeLastContact = async () => {
  try {
    let contacts = await readDataFromFile();
    if (!contacts.length) return;
    contacts.pop();
    await writeDataToFile(contacts);
    console.log('Last contact removed and file updated successfully');
  } catch (error) {
    console.error('Error during the removeLastContact process:', error);
  }
};

removeLastContact();
