const dashboardPosts = ()=>{
    if(posts){
       posts = document.getElementById('#posts')
    }
}

const homePage = () => {
    document.location.replace('/home');
}

const profilePage = () => {
    if(loggedIn=true){
    document.location.replace('/profile');
}else{
    document.location.replace('/login')
}
}

const loginPage = () => {
    document.location.replace('/login');
}

document.querySelector('.homeBtn').addEventListener('click',homePage );
document.querySelector('.loginBtn').addEventListener('click',homePage );
document.querySelector('.profileBtn').addEventListener('click',homePage );
