class StudentPitchList extends React.Component {
  render() {
    return(
      <div>
        <h2>Vote On Pitches</h2>
        {/* <form> */}
          {this.props.pitches.map((pitch)=> {
            return (<StudentPitch data={pitch} />)
          })
        }
        {/* <button type='submit' value=''></button>
        </form> */}
      </div>
    )
  }
}
