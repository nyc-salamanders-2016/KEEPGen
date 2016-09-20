class AdminPitchList extends React.Component {
  render() {

    return(
      <div>
        <h2>Student Pitches</h2>
        <ul>
          {this.props.data.map((pitch)=> {
            return (<AdminPitch data={pitch} />)
          })
        }
        </ul>
      </div>
    )
  }
}
