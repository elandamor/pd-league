const formatMessage = (operationType, operation, ellapsed) => {
  const headerCss = [
    'color: gray; font-weight: lighter', // title
    `color: ${operationType === 'query' ? '#02B875' : '#03A9F4'};`, // operationType
    'color: #000;', // operationName
    'color: gray; font-weight: lighter;', // time, etc
  ];

  const parts = ['%c apollo'];

  parts.push(`%c${operationType}`);
  parts.push(`%c${operation.operationName}`);
  parts.push(`%c(in ${ellapsed} ms)`);

  return [parts.join(' '), ...headerCss];
};

export default formatMessage;
