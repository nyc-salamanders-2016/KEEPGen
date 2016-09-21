class AdminTopPitches extends React.Component {
  render(){

    return(
      <div>
      <h2>Top Votes</h2>
        {this.props.data.map((pitch, i)=>
          {
          return (<AdminTopPitch key={i} data={pitch} />)
          })
        }
      </div>
    )
  }
}
