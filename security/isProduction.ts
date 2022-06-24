/**
 * False if Node env is not production. True if Node env is production
 */
const isProd = process.env.NODE_ENV === 'production';

export default isProd;
