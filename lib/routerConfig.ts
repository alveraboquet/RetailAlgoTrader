/**
 *
 * @returns https://retailalgotrader if in production env. Localhost if in dev env
 */
const routerConfig = () => {
  return process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_API_URL
    : 'http://localhost:3000';
};

export default routerConfig;
