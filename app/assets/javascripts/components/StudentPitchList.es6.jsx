class StudentPitchList extends React.Component {
  render() {
    return(
      <div>
        <h2>Vote On Pitches</h2>
        {/* <form> */}
          {this.props.data.pitches.map((pitch, i)=> {
            return (<StudentPitch key={i} data={pitch} updateCounter={this.props.updateCounter}/>)
          })
        }
        {/* <button type='submit' value=''></button>
        </form> */}
      </div>
    )
  }
}
