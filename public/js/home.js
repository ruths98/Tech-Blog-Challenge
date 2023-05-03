const dashboardPosts = ()=>{
    if(posts){
       posts = document.getElementById('#posts')
    }
}

const profilePage = () => {
    if(loggedIn=true){
    document.location.replace('/profile');
}else{
    document.location.replace('/login')
}
}
