const users = [
    {id: '1', name: 'Shreeji', email: 'shreeji@example.com', age: 21},
    {id: '2', name: 'Payal', email: 'payal@example.com'},
    {id: '3', name: 'Sparky', email: 'sparky@example.com', age: 3}
]; 

const posts = [
    {id: '1', title: "GraphQL", body: "GraphQL Basic Course", published: true, author: '1'},
    {id: '2', title: "GraphQL Advance", body: "GraphQL Advance Course", published: false, author: '2'}
];

const comments = [
    {id: '1', text: "First Comment", author: '1', post: '1'},
    {id: '2', text: "Second Comment", author: '2', post: '2' }, 
    {id: '3', text: "Third Comment", author: '3', post: '1' }, 
    {id: '4', text: "Fourth Comment", author: '1', post: '2' }
];

const db = {
    users, 
    posts, 
    comments
}

export {db as default}; 