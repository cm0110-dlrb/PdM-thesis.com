const dbx = new Dropbox({ accessToken: 'sl.BrbYA1SSi5L05DzYqG9KcvYdrVq80lcdde3JieWfzQpC4K4YRhCaIu5HzwoWaeCdenOor8tdVhqugdRzldg2ir7dZiVBQbUB2R4QW5w3lVXpBdkbYZDLD8LeCha8O_LbsLTis91x1lN4bzpvTYgc' });
dbx.usersGetCurrentAccount()
 .then(response => {
    console.log(response);
 })
 .catch(error => {
    console.error(error);
 });