const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try 
  {
     await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: [ 'id','comment_text','post_id','user_id' ],
          include:{
            model:User,
            attributes:['username']
          }
        }
      ],
    });
     (data =>{
      const posts = data.map(post.get({plain:true}));
      res.render('homepage', {
        posts,
        logged_in: req.session.logged_in
      });
    })
  
  }catch(err)  {
      console.log(err);
      res.status(500).json(err);
    }
});


router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
    include: [User, {
      model: Comment,
      include: [User],
    }],
    })
    if(postData){
      const posts = postData.get({plain:true})
      res.render('postID', {posts})
    } else {res.status(403).end();
    }
  }
  catch (err){
    console.log("Error ", err)
    res.json(err);
  }
})
  
    
router.get('/login',  (req,res) => {
  //redirect if already logged in
  if(req.session.logged_in) {
    res.redirect('/');
    return;
  }else{
    res.render('login')
  } 
});

router.get('/signup', (req,res) =>{
 res.render('signup');
})
   
module.exports = router;
