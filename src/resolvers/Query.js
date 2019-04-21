const Query = {
    users(parent, args, {db}, info) {
        if( !args.query ) {
            return db.users;
        }
        return db.users.filter((user)=>{  
            return user.name.toLowerCase().includes(args.query.toLowerCase());; 
        });
    },
    posts(parent, args, {db}, info){
        if( !args.query ) {
            return db.posts ; 
        }
        return db.posts.filter((post)=>{
            let isTitleMatch = post.title.toLowerCase().includes( args.query.toLowerCase() );
            let isBodyMatch = post.body.toLowerCase().includes( args.query.toLowerCase() );
            return isTitleMatch || isBodyMatch; 
        })
    },
    comments(parent, args, {db}, info){
       return db.comments ; 
    },
    me() {
        return {
            id: 'abc123', 
            name: 'Shreeji', 
            email: 'shreejilucifer@gmail.com'
        }
    }, 
    post() {
        return {
            id: 'abc234', 
            title: 'My First Post', 
            body: 'My Body', 
            published: true
        }
    }
};

export { Query as default } ; 