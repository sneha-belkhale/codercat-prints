var term,
    protocol,
    socketURL,
    socket,
    pid,
    command,
    charWidth,
    charHeight;

var terminalContainer = document.getElementById('terminal-container');

function setTerminalSize () {
  var cols = parseInt(window.innerWidth / charWidth);
  var rows = parseInt(window.innerHeight / charHeight);
  var width = window.innerWidth.toString() + 'px';
  var height = window.innerHeight.toString() + 'px';
  // var cols = 100,
  //   rows =  40,
  //   width = (cols * charWidth).toString() + 'px',
  //   height = (rows * charHeight).toString() + 'px';

  terminalContainer.style.width = width;
  terminalContainer.style.height = height;

  term.resize(cols, rows);
}

createTerminal();

window.addEventListener('resize', function(event){
  setTerminalSize();
});

function createTerminal() {
  // Clean terminal
  command = "";
  while (terminalContainer.children.length) {
    terminalContainer.removeChild(terminalContainer.children[0]);
  }
  term = new Terminal({
    cursorBlink: "block",
    scrollback: 1000,
    tabStopWidth: 8
  });
  term.on('resize', function (size) {
    if (!pid) {
      return;
    }
    var cols = size.cols,
        rows = size.rows;
  });

  term.open(terminalContainer);
  term.fit();

  var initialGeometry = term.proposeGeometry(),
      cols = initialGeometry.cols,
      rows = initialGeometry.rows;

      charWidth = Math.ceil(term.element.offsetWidth / cols);
      charHeight = Math.ceil(term.element.offsetHeight / rows);
      runFakeTerminal();
}

function runFakeTerminal() {
  setTerminalSize ();

  var shellprompt = 'coder@cat:~$ ';

  term.prompt = function () {
    term.write('\r\n' + shellprompt);
  };
  term.writeln('                           /$$                                                 /$$')
  term.writeln('                          | $$                                                | $$ ')
  term.writeln('  /$$$$$$$  /$$$$$$   /$$$$$$$  /$$$$$$   /$$$$$$         /$$$$$$$  /$$$$$$  /$$$$$$ ')
  term.writeln(' /$$_____/ /$$__  $$ /$$__  $$ /$$__  $$ /$$__  $$       /$$_____/ |____  $$|_  $$_/ ')
  term.writeln('| $$      | $$  \\ $$| $$  | $$| $$$$$$$$| $$  \\__/      | $$        /$$$$$$$  | $$ ')
  term.writeln('| $$      | $$  | $$| $$  | $$| $$_____/| $$            | $$       /$$__  $$  | $$ /$$')
  term.writeln('|  $$$$$$$|  $$$$$$/|  $$$$$$$|  $$$$$$$| $$            |  $$$$$$$|  $$$$$$$  |  $$$$/')
  term.writeln(' \\_______/ \\______/  \\_______/ \\_______/|__/             \\_______/ \\_______/   \\___/\n')

  term.writeln('Welcome to the coder cat prints terminal!\n');
  term.writeln('We mix technology, fashion, and feminism to create a unique genre of products, as a platform of social awareness and building a community of the coolest coder cats.\n');
  term.writeln('We create original coder cat slogans, and print them onto tees, mugs, stickers, notebooks, etc. using redbubble for hosting and ease of production.');
  term.writeln('Use the coder cat prints terminal to:');
  term.writeln('\t-view our available slogans');
  term.writeln('\t-redirect to our redbubble site for purchase');
  term.writeln('\t-and browse around the codercat community');
  term.writeln('All while your manager thinks you are hard at work on your terminal:) \n');

  term.writeln('----------------------------------------------------------------------\n')
  term.writeln('example of how to use our pipeline\n')

  term.writeln(shellprompt+'ls')
  term.writeln('listing available codercat tees:\n');
  term.writeln('[0]\trm -rf patriarchy');
  term.writeln(shellprompt+'purchase 0');
  term.writeln('-----> and we will redirect you to where you need to go!\n')

  term.writeln('----------------------------------------------------------------------\n')
  term.writeln('You can use help command to see all coder cat commands.');
  term.writeln('');
  term.prompt();

  term.on('key', function (key, ev) {
    var printable = (
      !ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey
    );

    if (ev.keyCode == 13) {
      if (command == "ls"){
        term.writeln('');
        term.writeln('listing available codercat tees:\n');
        term.writeln('[0]\trm -rf patriarchy');
        term.writeln('[1]\tapt-get install feminism');
        term.writeln('[2]\tassert(woman == man);');
        term.writeln('[3]\tdef wakeup(self): return "flawless"');
        term.writeln('[4]\tfrom feminism import *');
        term.writeln('[5]\tnastywoman.smash(patriarchy)');
              }
      if (command == "help"){
        term.writeln('');
        term.writeln('ls\t\tlist available codercat tees');
        term.writeln('purchase [idx]\tredirect to purchase desired slogan[index]');
        term.writeln('about\t\twho/what/when/why/where is a codercat');
        term.writeln('contact\t\tcontact a codercat today');
        }

      if (command =="whois codercat" || command =="about") {
        term.writeln('');
        term.writeln('We mix technology, fashion, and feminism to create a unique genre of products, as a platform of social awareness and building a community of the coolest coder cats. all products are currently hosted on redbubble for ease of production, billing, and shipping');
        }
      if (command == "purchase 0"){
        term.writeln('');
        term.writeln('remove the patriarchy from your machine forever. theres no turning back now.');
        window.open("https://www.redbubble.com/people/kif11/works/26267725-remove-patriarchy?asc=u&grid_pos=2&p=t-shirt&rbs=9fdb5a5b-114d-4fb2-a697-60fde5aa8f46&ref=artist_shop_grid&style=womens");
      }
      if (command == "purchase 1"){
        term.writeln('');
        term.writeln('package to make your linux environment a little less user-hostile.');
        window.open("https://www.redbubble.com/people/kif11/works/26271212-apt-get-install-feminism?asc=u&grid_pos=5&p=t-shirt&rbs=9fdb5a5b-114d-4fb2-a697-60fde5aa8f46&ref=artist_shop_grid&style=womens");
      }
      if (command == "purchase 2"){
        term.writeln('');
        term.writeln('the world cannot continue otherwise!');
        window.open("https://www.redbubble.com/people/kif11/works/26239233-asset-woman-equal-man?asc=u&grid_pos=3&p=t-shirt&rbs=9fdb5a5b-114d-4fb2-a697-60fde5aa8f46&ref=artist_shop_grid&style=womens")
      }
      if (command == "purchase 3"){
        term.writeln('');
        term.writeln('my home directory wakes up flawless.');
        window.open("https://www.redbubble.com/people/kif11/works/26267648-wakeup-flawless?asc=u&grid_pos=1&p=t-shirt&rbs=9fdb5a5b-114d-4fb2-a697-60fde5aa8f46&ref=artist_shop_grid&style=womens");
      }
      if (command == "purchase 4"){
        term.writeln('');
        term.writeln('please just import the whole library.');
        window.open('https://www.redbubble.com/people/kif11/works/26267547-from-feminist-import?asc=u&grid_pos=6&p=t-shirt&rbs=9fdb5a5b-114d-4fb2-a697-60fde5aa8f46&ref=artist_shop_grid&style=womens');
      }
      if (command == "purchase 5"){
        term.writeln('');
        term.writeln('one of the many functions of a nasty woman.');
        window.open('https://www.redbubble.com/people/kif11/works/26271237-nasty-woman-smash-patriarchy?asc=u&grid_pos=4&p=t-shirt&rbs=9fdb5a5b-114d-4fb2-a697-60fde5aa8f46&ref=artist_shop_grid&style=womens')
      }
      if (command == "contact"){
        term.writeln('');
        term.writeln('Send us an email at codercat@gmail.com to place a custom slogan order! Be sure to include');
        term.writeln('\t-text for slogan');
        term.writeln('\t-desired products (tee, mug, sticker, custom');
        term.writeln('\t-your contact info');
        term.writeln('thank ya');
      }

      command = "";


      term.prompt();
      command = "";
    } else if (ev.keyCode == 8) {
     // Do not delete the prompt
      if (command.length > 0) {
        term.write('\b \b');
        command = command.substring(0,command.length-1)
      }
    } else if (printable) {
      term.write(key);
      command += key;
    }
  });

  term.on('paste', function (data, ev) {
    term.write(data);
  });
}
