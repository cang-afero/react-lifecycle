export default function getEmployees() {
  return fetch(`${'https://reqres.in/api/users?page=2'}`)
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
