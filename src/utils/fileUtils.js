import { PATH_DB, UNICODE } from '../constants/contacts.js';
import fs from 'fs/promises';

export const readDataFromFile = async () => {
  try {
    const data = await fs.readFile(PATH_DB, UNICODE);
    return data.length > 0 ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error during the contact file read:', error);
    return [];
  }
};

export const writeDataToFile = async (contacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), UNICODE);
    console.log('Contacts added/updated successfully');
  } catch (error) {
    console.error('Error during the contact addition process:', error);
  }
};

export const removeAllDataInFile = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), UNICODE);
    console.log('Contacts remove successfully');
  } catch (error) {
    console.error('Error during the contact removing process:', error);
  }
};
