class PitchMaker extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    $.ajax({
      url: '/pitches',
      method: 'post',
      data: {
        pitch: {
          title: this.refs.title.value,
          summary: this.refs.summary.value
        }
      }
    })
    .done(function(response) {
      this.props.onUpdate(response.pitch)
    }.bind(this))
  }

  render() {
    return(
      <div id="pitch-box">
        <h2 id="pitch-box-title">Make Your Pitch!</h2>
        <form id="pitch-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="title" placeholder="Title..." />
          <input type="text" ref="summary" placeholder="Summary..." />
          <input type="submit" value="Pitch"/>
        </form>
      </div>

    )
  }
}
