class PitchView extends React.Component {

  render(){
    let data = this.props.data
    return(
      <div>
        <li>
        <h2>{data.title} by student name elisa will get this</h2>
        <p>{data.summary}</p>
        </li>
      </div>
    )
  }
}
