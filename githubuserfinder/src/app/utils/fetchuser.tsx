 // Function for making a call to the github api and retrieving a user based on the query
 export async function searchForUser(query : string){
    let user = undefined;
    if(query != ''){
      try {
        let url : string = `https://api.github.com/users/${query}`;
      
        const response = await fetch(url);
        const responseUser = await response.json();
        console.log(responseUser);
        if(responseUser.hasOwnProperty('id')){
          user = responseUser;
        }
        
      } catch (error) {
        console.log(error)
      }
    }
    return user;
  }