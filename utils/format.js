const formatK= (format) => {
    const reverse = format?.toString().split('').reverse().join('');
    let result = reverse.match(/\d{1,3}/g);
    result = result.join('.').split('').reverse().join('');
    return `${result}`;
  };
  
  export default formatK;