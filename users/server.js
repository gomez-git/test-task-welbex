#!/usr/bin/env node

import app from './app.js';
import sequelize from './db/db.js';

const port = process.env.PORT ?? 4000;

app.listen(port, async () => {
  console.log(`Server up on http://localhost:${port}`); // eslint-disable-line no-console
  await sequelize.authenticate();
  console.log('Database connected!'); // eslint-disable-line no-console
});
