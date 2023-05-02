const newPost = async(event) => {
    event.preventDefault();

    const postTitle = document.querySelector('#postTitle').value;
    const postContent = document.querySelector('#postContent').value;

    if( postTitle && postContent){
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({title, content}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/home');
        }else{
            alert('Error! Post not created!')
        }
    } 
};

const editPost = async(event) => {
    event.preventDefault();

    const postTitle = document.querySelector('#postTitle').value;
    const postContent = document.querySelector('#postContent').value;

    if( postTitle && postContent){
        const response = await fetch('/api/posts/:id', {
            method: 'POST',
            body: JSON.stringify({title, content}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/home');
        }else{
            alert(`Oops! We couldn't edit this post!`)
        }
    } 
};

const dltPost = async(event) => {
    event.preventDefault();
//add a popup to verify deletion?
    if(this.posts.id){
        const response = await fetch('/api/posts/:id', {
            method: 'DELETE'
        });

        if (response.ok) {
            document.location.replace('/home');
        }else{
            alert(`Well this is awkward...Post not deleted!`)
        }
    } 
};

document.querySelector('#newPost').addEventListener('submit', newPost);

document.querySelector('#editPost').addEventListener('submit', editPost);

document.querySelector('#dltPost').addEventListener('submit', dltPost);//we need to make sure this is only available for the OP