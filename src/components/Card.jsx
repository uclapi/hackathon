class Card extends React.Component {
  render(){
    const { content } = this.props
    const {
      title = 'Card Title',
      description = 'Card Description',
      links = [],
      status = null,
    } = content
    return (
      <div className="card">
        <div className="card-content">
          <span className="card-title">{title}</span>
          <p>{description}</p>
          { status && <div className="chip status">{status}</div> }
        </div>
        <div className="card-action">
          {
            links && links.map(({ url = '#', text = 'Link Text' }) => (
              <a href={url} key={url}>{text}</a>
            ))
          }
        </div>
      </div>
    )
  }
}