import React from 'react';

const Blog = () => {
    return (
        <div>
            <div> <div> </div> <h1  className="text-3xl">Difference between Javascript vs Node JS?</h1> <br/>  <p> JavaScript is a programming language and Node.js is an interpreter or running environment for JavaScript</p> <li>Javascript is mainly used for client side.Node JS is used for non blocking operation of any operating system. </li> <li> JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome).Node JS only run in a V8 engine which mainly used by google chrome</li>  <li>	Javascript can only be run in the browsers.We can run Javascript outside the browser with the help of NodeJS.</li>  <li>	Javascript is used in frontend development.Nodejs is used in server-side development.</li>     <div> <h1  className="text-3xl">When should you use nodejs and when should you use mongodb?</h1> <br/>  <p>Node js is a javascript runtime environment.MongoDB is NOSQL database. </p> <li>Node JS is used for non blocking operation of any operating system.MongoDB is used for database operations.</li> <li>Node js used for server side.MonogoDB is used for server side data implementation. </li>  <li>Node.js, the open source JavaScript server environment, has the ability to connect to both SQL and NoSQL databases such as MySQL and MongoDB (respectively).We can use MongoDB with the help of Node JS.	</li>  </div>      <div>  <h1  className="text-3xl">Differences between sql and nosql databases?</h1> <br/>   <li>SQL databases are relational, NoSQL databases are non-relational.</li> <li>SQL databases are vertically scalable, while NoSQL databases are horizontally  scalable. </li>  <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.	</li>   <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.	</li>    </div>   </div>
        </div>



        
    );
};

export default Blog;