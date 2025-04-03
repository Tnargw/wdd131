// projects.mjs
const projects = [
	{
		author: 'Grant Watson',
		image: './images/hoppy-frog.webp',
		tags: ['Flutter', 'Game', 'Animated'],
		description: 'A simple animated game made in Flutter.',
		title: 'Hoppy Frog',
		github: 'https://github.com/Tnargw/flutter_game',
		details: `
		  <h3>About the Game</h3>
		  <p><strong>Hoppy Frog</strong> is a 2D side-scrolling game built in <strong>Flutter</strong> using the <code>flame</code> game engine. Inspired by classics like <em>Flappy Bird</em>, the game features a colorful frog that hops between pipes while dodging obstacles and collecting bugs.</p>
	  
		  <ul>
			<li>Tap-based jumping mechanics with gravity and velocity control</li>
			<li>Animated frogs with different sprite skins</li>
			<li>Parallax backgrounds including trees, grass, and bushes</li>
			<li>Bugs spawn as additional collectible items</li>
			<li>Pipes spawn from top and bottom with dynamic spacing</li>
		  </ul>
	  
		  <p>Each play session includes a score tracker, increasing challenge over time, and responsive tap input. The project makes use of Flutter's canvas drawing along with Flame's component system, collision detection, and event hooks.</p>
		  `
	},
	{
		author: 'Grant Watson',
		image: './images/snowfall-heatmap.webp',
		tags: ['Python', 'API', 'Weather'],
		description: 'A program that shows a heatmap of snowfall for a given area.',
		title: 'Snowfall Heatmap',
		github: 'https://github.com/Tnargw/Snowfall-DataAnalysis',
		details: `
		  <h3>How it works</h3>
		  <p>This project allows users to visualize historical snowfall in a given region. The program performs several key steps to create a dynamic, data-driven heatmap:</p>
	  
		  <ul>
			<li> Converts user-inputted locations into geographic coordinates using <code>geopy</code>.</li>
			<li>Uses the <strong>GeoNames API</strong> to identify nearby cities within a 100-mile radius.</li>
			<li>Fetches snowfall data for those locations using the <strong>Open-Meteo API</strong>.</li>
			<li>Displays the results as an interactive heatmap using <code>folium</code> and the <code>HeatMap</code> plugin.</li>
		  </ul>
	  
		  <p>The result is a color-coded map that helps visualize snowfall totals across multiple regions during a custom date range.</p>
		  <p>Try entering a location like <strong>Salt Lake City</strong> or <strong>Denver</strong> to see how snow levels compare nearby.</p>
		`
	},
	{
		author: 'Grant Watson',
		image: './images/p2p-game.webp',
		tags: ['P2P', 'Game', 'Python'],
		description: 'A simple peer to peer game made in python.',
		title: 'Peer to Peer Pong',
		github: 'https://github.com/Tnargw/p2pGame',
		details: `
		  <h3>How it works</h3>
		  <p>This game uses Python's <code>arcade</code> library for rendering, and <code>banyan</code> for peer-to-peer networking. Players control paddles at opposite ends of the screen, and the game syncs movement and ball position in real time over a shared TCP/IP backplane.</p>
	  
		  <ul>
			<li>2-player networked gameplay</li>
			<li>Real-time updates via Banyan message passing</li>
			<li>Multiplayer synchronization without a server</li>
			<li>Built with Python and Arcade</li>
		  </ul>
	  
		  <p>Each player runs their own instance, and game state is shared through a decentralized architecture. This approach avoids needing a dedicated host or central server.</p>
		`
	},
	{
		author: 'Grant Watson',
		image: './images/math-quiz.webp',
		tags: ['GUI', 'C#', 'Windows Forms'],
		description: 'A simple math quiz program.',
		title: 'Math Quiz',
		github: 'https://github.com/Tnargw/Math-Quiz',
		details: `
		  <h3>About the Project</h3>
		  <p>The Math Quiz is a Windows Forms application developed in C#. It offers users a friendly and interactive way to practice basic arithmetic in a timed setting.</p>
	  
		  <ul>
			<li>Randomly generates questions for addition, subtraction, multiplication, and division</li>
			<li>Includes a countdown timer to create time pressure</li>
			<li>Tracks user score and provides instant feedback on answers</li>
			<li>Built as a desktop app using <code>System.Windows.Forms</code> in Visual Studio</li>
		  </ul>
	  
		  <p>This project demonstrates a good understanding of event-driven programming in C#, UI layout using WinForms, and random number logic. It’s great for kids or anyone wanting to improve their mental math speed!</p>
		`
	}

]

export default projects

