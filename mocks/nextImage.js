// mock for next/image module to stop Warning: An update to Image inside a test was not wrapped in act(...)
const nextImageMock = ({ src, alt }) => <img src={src} alt={alt}></img>;

export default nextImageMock;
