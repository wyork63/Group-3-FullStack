module.exports = {
    format_date: date => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
        date
      ).getFullYear()}`;
    },
    format_post: text => {
      if (text.length > 250){
        return text.substring(0,250) + '...';
      }  
      return text;
    },
    format_plural: (word, amount) => {
      if (amount == 0) {
        return `No Comments`;
      }
      else if (amount !== 1) {
        return `${amount}` + ` ` +  `${word}s`;
      } else {
        return `${amount}` + ` ` +  `${word}`;
      }
    }
  };
  

