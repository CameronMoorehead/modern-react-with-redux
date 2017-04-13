import React, { Component } from 'react'

export default class PostsNew extends Component {
  constructor(props) {
    super(props)

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleCategoriesChange = this.handleCategoriesChange.bind(this)
    this.handleContentChange = this.handleContentChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)

    this.state = {
      title: "",
      categories: "",
      content: ""
    }
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value })
  }
  handleCategoriesChange(e) {
    this.setState({ categories: e.target.value })
  }
  handleContentChange(e) {
    this.setState({ content: e.target.value })
  }

  handleFormSubmit(e) {
    e.preventDefault()
    console.log({
      title: this.state.title,
      categories: this.state.categories,
      content: this.state.content
    })
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          Title:<br />
          <input type="text" onChange={(e) => this.handleTitleChange(e)}/>
        </div>
        <div>
          Categories:<br />
          <input type="text" onChange={(e) => this.handleCategoriesChange(e)}/>
        </div>
        <div>
          Contents:<br />
          <input type="text" onChange={(e) => this.handleContentChange(e)}/>
        </div>
        <br />
        <span>
          <button className="btn btn-secondary">
            Save
          </button>
        </span>
        <span>
          <button onClick={location.reload} className="btn btn-secondary">
            Cancel
          </button>
        </span>
      </form>
    )
  }
}
