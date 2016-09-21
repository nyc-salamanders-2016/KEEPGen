class StudentDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      pitches: [],
      showPitches: false,
      counter: 0
    }
    this.showAllPitches = this.showAllPitches.bind(this);
    this.updatePitches = this.updatePitches.bind(this);
    this.increaseCounter = this.increaseCounter.bind(this);
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

  increaseCounter() {
    var plusOne = this.state.counter + 1
    this.setState({counter: plusOne })
  }

  render() {
    return(
      <div>
        <button onClick={this.showAllPitches}>Show All Pitces</button>
        <PitchMaker onUpdate={this.updatePitches} />
        { this.state.showPitches && this.state.counter < 7 ? <StudentPitchList data={this.state.pitches} updateCounter={this.increaseCounter}/> : null }
      </div>
    )
  }
}
