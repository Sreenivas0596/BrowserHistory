import './index.css'

const BrowserHistory = props => {
  const {finalHistoryList, deleteUser} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = finalHistoryList

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="list-container">
      <p className="heading"> {timeAccessed}</p>

      <img src={logoUrl} alt="domain logo" className="heading" />
      <p className="heading"> {title}</p>
      <p className="heading"> {domainUrl}</p>
      <div className="delete-icon">
        <button
          type="button"
          className="delete-icon"
          onClick={onDelete}
          testId="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistory
