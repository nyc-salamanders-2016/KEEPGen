class StudentPitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault()
    $.ajax({
      url: '/votes',
      method: 'POST',
      data: {
        pitchId: this.refs.pitch_id.value
      }
    }).done((response)=>{
      this.props.updateCounter()
    })
  }
  render() {

    return(
      <div>
        <input type="checkbox" ref="pitch_id" onClick={this.handleSubmit}value={this.props.data.id}/>{this.props.data.title}
        <p>Summary: {this.props.data.summary}</p>

      </div>
    )
  }
}
