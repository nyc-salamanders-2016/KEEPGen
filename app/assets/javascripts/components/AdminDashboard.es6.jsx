class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addNewStudent = this.addNewStudent.bind(this)
    this.state = {
      students: []
    }
  }

  handleSubmit(event) {

  }

  addNewStudent(event) {
    event.preventDefault();

    var username = this.refs.username.value;
    var email = this.refs.email.value;

    this.setState({
      students: this.state.students.concat({username, email})
    })

    $.ajax({
      url: "/students",
      method: "POST",
      data: {
        username: this.state.students.slice(-1)[0].username,
        email: this.state.students.slice(-1)[0].email
      }
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input placeholder="DBC Cohort Name" type="text" /><br></br>
        <label for="maxPitches">Max # of Pitches per Student:</label>
        <input type="number" name="maxPitches" max="5" /><br></br>
        {
          this.state.students.map((student) =>
            <Student student={student} />
          )
        }
        <form onSubmit={this.addNewStudent}>
          <input placeholder="Student Username" ref="username" type="text" />
          <input placeholder="Student Email" ref="email" type="text" />
          <input type="submit" value="+" />
        </form>
        <input type="submit" value="Create New Cohort" />
      </form>
    )
  }
}
