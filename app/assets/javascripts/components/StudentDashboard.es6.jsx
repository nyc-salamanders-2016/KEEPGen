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
  }

<<<<<<< e810bdfa26be754dae86edb6ceb03f092bdd41db
  updatePitches(pitch) {
   this.setState({
     pitches: [pitch].concat(this.state.pitches)
   })
=======
  increaseCounter(){

    var plusOne = this.state.counter + 1
    this.setState({counter: plusOne })
>>>>>>> enable student voting
  }

  render() {
    return(
      <div>
        <button onClick={this.showAllPitches}>Show All Pitces</button>
<<<<<<< e810bdfa26be754dae86edb6ceb03f092bdd41db
        { this.state.showPitches ? <StudentPitchList pitches={this.state.pitches} /> : null }
        <PitchMaker onUpdate={this.updatePitches} />
=======
        { this.state.showPitches && this.state.counter < 7 ? <StudentPitchList data={this.state.pitches} updateCounter={this.increaseCounter}/> : null }
>>>>>>> enable student voting
      </div>
    )
  }
}
