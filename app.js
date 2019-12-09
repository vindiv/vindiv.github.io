var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
  autoStart: true,
  cursor: '█',
  strings: ['My name is Vincenzo, and I am a programmer and a graphic designer.']
});

typewriter
  .deleteAll(1)
  .pauseFor(50)
  .deleteAll(1)
  .typeString('I work for <strong><a href="https://www.artproject.it">ArtProject Web Agency</a></strong> as frontend and backend dev.')
  .pauseFor(300)
  .deleteAll(1)
  .typeString('I write code in PHP and Javascript. I use the PHP framework named Kohana')
  .pauseFor(300)
  .deleteAll(1)
  .typeString('I don\'t have a personal portfolio, I\'m not in search for new agency')
  .pauseFor(300)
  .deleteAll(1)
  .typeString('Find me online:<br />')
  .pauseFor(300)
  .typeString('<br><a href="www.artproject.it">The Agency I work for</a> <br />')
  .typeString('<a href="https://www.instagram.com/vindiv82/"><img style="margin-bottom:0px" src="https://img.icons8.com/metro/14/00AA00/instagram-new.png"></i> My Instagram</a> <br />')
  
