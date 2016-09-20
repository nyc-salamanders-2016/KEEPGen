class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitted: false,
      pitches: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.messageAfterSubmit = this.messageAfterSubmit.bind(this)
  }

  componentDidMount(){
    $.ajax({
      url: '/pitches'
      method: 'GET'
    }).done((resonse)=>{
      this.setState({pitches: response})
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    $.ajax({
      url: '/cohorts',
      method: 'POST',
      data: { cohort: {
        name: this.refs.name.value,
        year: this.refs.year.value,
        maxPitches: this.refs.maxPitches.value,
        maxVotes: this.refs.votes.value
        }
      }
    })
    .done((response)=>{
      this.refs.name.value = ""
      this.refs.year.value = ""
      this.refs.maxPitches.value = ""
      this.refs.votes.value = ""
      this.setState({
        formSubmitted: true
      })
    })
  }

  messageAfterSubmit() {
    if(this.state.formSubmitted){
      return( <p>You have created a new Cohort.</p>)
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label >DBC cohort Name:</label><br/>
            <input type="text" ref="name"/>
          </p>
          <p>
            <label >DBC cohort Year:</label><br/>
            <input type="text" ref="year"/>
          </p>
          <p>
            <label >Max # of Pitches per Student:</label><br/>
            <input type="number" name="maxPitches" max="5" ref="maxPitches"/>
          </p>
          <p>
            <label >How many pitches can a student vote for?</label><br/>
            <input type="number" name="roundVotes" ref="votes"/>
          </p>
          <input type="submit" value="Create New Cohort" />
        </form>
        {this.messageAfterSubmit()}
        <AdminPitchList data={this.state.pitches} />
      </div>
    )
  }
}
