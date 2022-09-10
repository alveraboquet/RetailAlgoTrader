const splitTextProp = (textProp: string) => {
  const splitText = textProp.split('\n').map((str) => <p key={str}>{str}</p>);
  return splitText;
};

export default splitTextProp;
