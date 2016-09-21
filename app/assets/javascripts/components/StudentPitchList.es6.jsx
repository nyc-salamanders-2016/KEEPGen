class StudentPitchList extends React.Component {
  render() {
    return(
      <div>
        <h2>Vote On Pitches</h2>
          {this.props.data.map((pitch, index)=> {
            return (<StudentPitch key={index} data={pitch} />)
          })
        }
        {/* <button type='submit' value=''></button>
        </form> */}
      </div>
    )
  }
}
