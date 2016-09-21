class StudentDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      pitches: [],
      showPitches: false
    }
    this.showAllPitches = this.showAllPitches.bind(this);
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

  render() {
    return(
      <div>
        <button onClick={this.showAllPitches}>Show All Pitces</button>
        { this.state.showPitches ? <StudentPitchList data={this.state.pitches} /> : null }
      </div>
    )
  }
}
