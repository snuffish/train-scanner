//* Load environment configurations
const initEnv = require('dotenv').config({ path: `.env` });
if (initEnv.error)
    throw initEnv.error;
