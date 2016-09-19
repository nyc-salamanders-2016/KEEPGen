class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {

  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input placeholder="DBC Cohort Name" type="text" /><br></br>

        <label for="maxPitches">Max # of Pitches per Student:</label>
        <input type="number" name="maxPitches" max="5" /><br></br>

        <label for="roundVotes">How many pitches can a student vote for in both of the rounds?</label><br></br>
        <input type="number" name="roundVotes" /><br></br>

        <input type="submit" value="Create New Cohort" />
      </form>
    )
  }
}
