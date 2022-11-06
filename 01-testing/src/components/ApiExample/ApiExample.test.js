import { getAlbums } from './ApiExample';
import axios from 'axios';
jest.mock('axios');

// Ejemplo de control de datos en API request:
// Test 1:
test('Compruebo que se procesen los datos retornados por API', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        userId: 1,
        id: 1,
        title: 'My First Album'
      },
      {
        userId: 1,
        id: 2,
        title: 'Album: The Sequel'
      }
    ]
  });
  const fakeHook = (foo) => { console.log(foo) }
  const status = await getAlbums(fakeHook);
  expect(status).toBe(true)
});