// import openDB from idb dependency
import { openDB } from 'idb';

// Create the database
const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// This method accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('putDb not implemented');

  const jateDb = await openDB('jate', 1);

  const tx = jateDb.transaction('jate', 'readwrite');

  const store = tx.objectStore('jate');

  const request = store.put({id: 1, value: content});

  const result = await request;
  console.log('🚀 - data saved to the database', result);
};

// This method gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented');

  const jateDb = await openDB('jate', 1);

  const tx = jateDb.transaction('jate', 'readonly');

  const store = tx.objectStore('jate');

  const request = store.getAllKeys();

  const result = await request;
  console.log('result.value', result.value);
  return result.value;
}

initdb();
