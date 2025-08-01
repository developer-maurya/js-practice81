const user ={
    username:"hitesh",
    loginCount:8,
    signedIn:true,
    getUserDetails:function(){
        console.log("got user details from database");
        console.log(`Username:${this.username}`);
        console.log(this);
        
    }
}
console.log(user.username);
console.log(user.getUserDetails())
console.log(this)

function User(username, loginCount, isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

   
}
const userOne1 =User("chitranjan",12,true)
const userTwo2 =User("ranjan",14,false)
console.log(userOne1)
    
    
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  
}

const userOne = new User("chitranjan", 12, true);
const userTwo = new User("ranjan", 14, false);

console.log(userOne);
