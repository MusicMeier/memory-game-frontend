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

<h2>Technologies</h2>

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

<h2>Instructions</h2>
<ol>
 <li>Sign up!</li>
 <li>Or if you prefer to stay anonymous, hit the 'Start Game' button to begin.</li>
 <li>Once you're on the game page, click on the cards and start your journey.</li>
 <li>Once you've completed the game, you may play again or simply exit.</li>
</ol>

<h2>Code Example</h2>

<h4>useEffect basted on the state of matched:</h4>

```  
useEffect( () => {
  if( matched.includes(note) ){
    setTimeout(() => {
      setIsMatched( true )
        if(matched.length === notes.length) {
          setIsShowing(!isShowing)
        }
    }, 1000)
  }
}, [ matched ])
```

<h4>onClick with flipping logic:</h4>

```
const onCardClick = () => {
  if(stack.length === 0){
    setFlipped(!flipped)
    setStack([note])
  } else if (stack.length < 2) {
    setFlipped(!flipped)
    setStack([...stack, note])
      if (stack[0].name === note.name) {
        setMatched([...matched, stack[0], note])
        setTimeout(() => {
          setStack([])
        }, 1000)
      } else {
        setTimeout(() => {
          setStack([])
        }, 1000)
      }
    } 
  }
  ```
  
<h2>App Preview</h2>
<img src="https://i.imgur.com/EwECzcR.png" border="0" width="300" height="auto"/><br>
<img src="https://i.imgur.com/ccjV6bw.png" border="0" width="300" height="auto"/><br>
<img src="https://i.imgur.com/IE5TRht.png" border="0" width="300" height="auto"/><br>

<h2>Status</h2>

We're looking forward to rolling-out the following features:
<li>Create a user login workflow.</li>
<li>Levels: beginner, intermediate, and advanced</li>
<li>Options to practice musical terminology</li>

 <h2>Contact</h2>
<a href="https://www.linkedin.com/in/musicmeier/"><img src="https://user-images.githubusercontent.com/68958970/97038321-a07f9600-1538-11eb-90f4-baa2d81a0664.png" alt="Music Meier" style="width:10px;height:10px;"></a>Music Meier :musical_score:<br>
