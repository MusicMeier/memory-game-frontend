# memory-game-frontend
<h1>Note-Set-Match</h1>
An app to help exercise your memory and become familiar with reading notes on a staff.
<br></br>
<h2>General Info</h2>
<p>
Note-Set-Match is a innovative single-page web-based application that helps users exercise their memory through matching music notes. Additionally, Note-Set-Match allows users a chance to practice recognizing and becoming familiar with reading music notes on a staff. This game is for all ages! The more we exercise our brain, the better chance we will have for a long active memory. With musicians and music lovers in mind, the app was created with music notes, but it could also be a way to teach yourself how to ready notes through the aide of a fun game.<br>
<br>:notes:</br>
</p>

<h2>Inspiration</h2>

<p>
Throughout my teaching career, I have created many games for my piano students. One of their favorites is a game much like this one. We take the notes they are starting to learn and create a matching game. Hopefully, this will be part of a larger app one day that incorperates many more music games that will help student learn to read notes and practice rhythms in a fun and educational way.
</p>

<h2>Intro Video</h2>

<ul>
 <li>Node: version 2.6.5</li>
 <li>body-parser: 1.19.0</li>
 <li>Postgres: version 8.5.1</li>
 <li>cors: 2.8.5</li>
 <li>bcrypt: 5.0.0</li>
 <li>jsonwebtoken: 8.5.1</li>
 <li>JavaScript: version 1.1.1</li>
 <li>JSON: version 2.3</li>
 <li>body-parser: 1.19.0</li>
 <li>express: 4.17.1</li>
 <li>objection: 2.2.3</li>
 <li>nodemon: 2.0.6</li>
 <li>knex: 0.21.12</li>
</ul>

<h2>Setup</h2>
To run this project, create a folder on your local environment where you can clone the "memory-game-frontend" and "memory-game-backend" GitHub repositories. Open both in your code editor.<br><br>
From your backend folder perform the following commands:<br>
<li>Use the command to start your NPM: <code>npm init</code></li>
<li>In your terminal, install express: <code>npm install express</code></li>
<li>You don't want to send your node-modules to github, in terminal: <code>touch .gitignore</code></li>
<li>require express in your index.js folder</li><br>
<li>Use terminal to install knex: <code>npm i knex</code></li><br>
<li>go to knexfile and delete all but development seciton. </li><br>
<li>Use terminal to install Postgres: <code>npm install postgres</code></li><br>
<li>go to knexfile and change client to 'pg', change filename to: <code>'postgres:///db_table_name'</code></li><br>
<li>use knex to migrate: <code>npx knex migrate:make filename-table</code></li><br>
<li>Use knex to migrate the tables you just made: <code>npx knex migrate:latest</code></li><br>
<li>Make your seeds using: <code>npx seed:make</code></li><br>
<li>Plant your seeds using: <code>npx knex seed:run</code></li><br>
<li>Use terminal to install cors: <code>npm install cors</code></li><br>
<li>last but not least install objection: <code>npm install objection</code></li><br>

From your frontend folder perform the following command: <code>npm install</code><br><br>
Then you should: <code>npm start</code><br><br>
You are now ready to start using the first iteration of Note-Set-Match!<br>

<i>*Please note that some features are still a work in progress.</i>
