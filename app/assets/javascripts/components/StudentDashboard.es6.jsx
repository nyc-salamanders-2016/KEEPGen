class StudentDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      pitches: []
    }
  }

  componentDidMount(){
    $.ajax({
      url: '/pitches',
      method: 'GET'
    }).done((response)=>{
    
      this.setState({pitches: response.pitches})
    })
  }


  render() {
    return(
    <div>
        <StudentPitchList data={this.state.pitches} />
    </div>
  )
  }
}
