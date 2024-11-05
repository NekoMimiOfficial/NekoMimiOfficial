// requires:
// ~~~~~~~~~
// UI-Interactive::notify

function getData(url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Response !200');
      }else{
        return response.json();
      }
    })
    .then(data => {
      if (!data){
        throw new Error('Non normal response data');
      }
      return data;
    })
    .catch(error => {
      notify('[!]Error getting data from API: ['+url+'] Debug: ['+error+']', 8);
    });
}
