/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {
    // iterate over array of objects that has a key of username
      return usersArray.find(function(val){
        // return the obcject that contains username input
        return val.username === username;
      })
  }
  
  /*
  Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 
  
  const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
  
  removeUser(users, 'akagen') // {username: 'akagen'}
  removeUser(users, 'akagen') // undefined
  */
  
  
  function removeUser(usersArray, username) {
    // iterate over the usersArray to search for matching username using findIndex method, get the index position
    let index = usersArray.findIndex(function (user){
      return user.username === username;
    }); 
    
    // if there is no match, return undefined
    if(index === -1) return;
  
    // remove the object with matching username using splice method and return the object - obj should be removeed from users
    return usersArray.splice(index, 1)[0];
  }