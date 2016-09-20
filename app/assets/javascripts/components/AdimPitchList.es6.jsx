class AdminPitchList extends React.Component {
  render() {
    <div>
      <ul>
        {this.props.data.map((pitch)=> {
          return (<AdminPitch data={pitch} />)
        })}
      </ul>
    </div>
  }
}
