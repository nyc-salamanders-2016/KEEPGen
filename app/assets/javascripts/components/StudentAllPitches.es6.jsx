class StudentAllPitches extend React.Component {
  constructor() {
    super();
    this.state ={
      pitches: []
    }
  }

  componentDidMount() {
		$.ajax({
			method: 'get',
			url: '/pitches'
		}).done((response) =>  {
			this.setState({
				pitches: response
			})}
		}

//    renderNewPitches(newPitch) {
//      this.setState({
//        pitches: [newPitch].concat(this.state.pitches)
//      })

  render() {
    return (
      <div>
      <h2>All Student Pitches</h2>
      <ul>
		    {
			     this.props.pitches.map((pitch, index) => {
				   return (<PitchView key={index} data={pitch} />)
			      })
		    }
		</ul>

      </div>
    )
  }

}
