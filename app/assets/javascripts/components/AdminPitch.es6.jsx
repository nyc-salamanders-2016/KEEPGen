class AdminPitch extends React.Component {
  render() {
    
    return(
      <div>
        <li>{this.props.data.title}</li>
        <p>{this.props.data.summary}</p>

      </div>
    )
  }
}
