class AdminTopPitch extends React.Component {

  render() {

    return(
      <div>
        <li><h4>{this.props.data.title}</h4>
        <p>Summary: {this.props.data.summary}</p></li>
      </div>
    )
  }
}
