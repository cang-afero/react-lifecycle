export default function getUsers() {
  return fetch(`${'https://reqres.in/api/users/2'}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log('error', error);
    });
}
