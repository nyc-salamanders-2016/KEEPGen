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
        title: this.refs.title.value,
        summary: this.refs.summary.value
      }
    })
    .done(function(response) {
      debugger
      this.refs.title.value = ""
      this.refs.summary.value = ""
      this.props.onUpdate(response.pitch)
      })
    }.bind(this))
  }

  // updatePitches(pitch) {
  //  this.setState({
  //    pitches: this.state.pitches.concat([pitch])
  //  })
  // }

  // <PitchMaker onUpdate={this.updatePitches} />


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
