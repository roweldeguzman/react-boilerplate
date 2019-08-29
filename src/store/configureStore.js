import configDev from '../config/store.dev';
import configProd from '../config/store.prod';

export default process.env.NODE_ENV === "production" ? configProd() : configDev();
