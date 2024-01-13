const connectToDatabase = require('../../src/database/index');

describe('Database Connection', () => {
  it('should connect to the database and migrate models', async () => {
    await expect(connectToDatabase()).resolves.toBeUndefined();
  });

  
});