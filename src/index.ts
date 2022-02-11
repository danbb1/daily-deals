import config from 'config';

import app from './app';

const PORT = config.get('app.port');

app.listen(PORT, () => {
  console.log(`${config.get('app.name')} server running on port ${PORT}`);
});
