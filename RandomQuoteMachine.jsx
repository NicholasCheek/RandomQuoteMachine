class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      author: "",
      textColor: {
        color: ""
      },
      bgColor: {
        backgroundColor: ""
      }
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.handleClick();
  }
  handleClick(txt, aut, quote, col) {
    const quotes = [
      [
        "People who think they know everything are a great annoyance to those of us who do.",
        "Isaac Asimov"
      ],
      ["A day without sunshine is like, you know, night.", "Steve Martin"],
      [
        "Every time I see an adult on a bicycle, I no longer despair for the future of the human race.",
        "H. G. Wells"
      ],
      ["A word to the wise is infuriating.", "Hunter S. Thompson"],
      [
        "Get your facts first, then you can distort them as you please.",
        "Mark Twain"
      ],
      [
        "If you could kick the person in the pants responsible for most of your trouble, you wouldn't sit for a month.",
        "Theodore Roosevelt"
      ],
      [
        "Frisbeetarianism is the belief that when you die, your soul goes up on the roof and gets stuck.",
        "George Carlin"
      ],
      [
        "I was eating in a Chinese restaraunt downtown. There was a dish called Mother and Child Reunion. It's chicken and eggs. And I said, I gotta use that one.",
        "Paul Simon"
      ],
      [
        "Before you marry a person you should first make them use a computer with slow internet to see who they really are.", "Will Ferrell"
      ],
      [
        "Folks, I don't trust children. They're here to replace us.", "Stephen Colbert"
      ],
      [
        "There is an art, or rather a knack to flying. The knack lies in learning how to throw yourself at the ground and miss.", "Douglas Adams"
      ],
      [
        "Is a hippopotamus a hippopotamus or just a really cool opotamus?", "Mitch Hedberg"
      ],
      [
        "You are unique, just like everyone else", "Joe Bob Briggs"
      ]
    ];
    quote = quotes[Math.floor(Math.random() * quotes.length)];
    txt = quote[0];
    aut = quote[1];
    col =
      "#" +
      Math.floor(Math.random() * 0x666666)
        .toString(16)
        .padEnd(6, 0);
    if (quote[0] !== this.state.text && col !== this.state.textColor.color) {
      this.setState({
        text: txt,
        author: aut,
        textColor: {
          color: col
        },
        bgColor: {
          backgroundColor: col
        }
      });
    } else {
      this.handleClick();
    }
  }

  render() {
    return (
      <div id="container">
        <div id="main" style={this.state.bgColor}>
          <div id="quote-box" style={this.state.textColor}>
            <div id="text">{this.state.text}</div>
            <div id="author">-{this.state.author}</div>
            <div id="buttons">
              <button
                id="new-quote"
                style={this.state.bgColor}
                onClick={this.handleClick}
              >
                New Quote
              </button>
              <a
                href="twitter.com/intent/tweet"
                id="tweet-quote"
                style={this.state.bgColor}
                target="_blank"
              >
                <i class="fab fa-twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<QuoteMachine />, document.getElementById("root"));
