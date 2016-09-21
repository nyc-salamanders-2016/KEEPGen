class StudentDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      pitches: [],
      showPitches: false
    }
    this.showAllPitches = this.showAllPitches.bind(this);
    this.updatePitches = this.updatePitches.bind(this);
  }

  componentDidMount(){
    $.ajax({
      url: '/pitches',
      method: 'GET'
    }).done((response)=>{
      this.setState({pitches: response})
    })
  }

  showAllPitches() {
    this.setState({
      showPitches: true
    });
    $.ajax({
      url: '/pitches',
      method: 'GET'
    }).done((response)=>{
      let pitches = response.pitches
      this.setState({pitches})
    })
  }

  updatePitches(pitch) {
   this.setState({
     pitches: this.state.pitches.concat([pitch])
   })
  }

  render() {
    return(
      <div>
        <button onClick={this.showAllPitches}>Show All Pitces</button>
        { this.state.showPitches ? <StudentPitchList data={this.state.pitches} /> : null }
        <PitchMaker onUpdate={this.updatePitches} />
      </div>
    )
  }
}
