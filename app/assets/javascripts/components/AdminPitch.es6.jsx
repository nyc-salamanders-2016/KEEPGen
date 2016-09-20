class AdminPitch extends React.Component {
  render() {
    reutrn(
      <li>
      {this.props.data.title}
      <li>{this.props.data.summary}</li>
      </li>
    )
  }
}
