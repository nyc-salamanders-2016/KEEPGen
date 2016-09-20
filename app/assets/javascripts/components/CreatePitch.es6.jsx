class CreatePitch extends React.Component {

  render() {
    return(
      <div id="pitch-box">
        <h2 id="pitch-box-title">Make Your Pitch</h2>
        <form id="pitch-form">
          <input type="text" ref="title" placeholder="Title..." />
          <input type="textarea" ref="summary" placeholder="Summary..." />
          <input type="submit" value="Save" />
        </form>
      </div>
    )
  };
}
