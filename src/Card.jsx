import './Card.css'
const Card = (props) => {
  return (
    <div className="card">
      <div className="header">
        <p className='light-content'>{props.user.head}</p>
        <h1>${props.user.price}/Month</h1>
        <hr className='hr-divider' />
      </div>

      <div className="body">
        <div className='content'>
          <i className="fa fa-check" aria-hidden="true"></i>
          <span>{props.user.user} User</span>
        </div>
        <div className='content'>
          <i className="fa fa-check" aria-hidden="true"></i>
          <span>50GB Storage</span>
        </div>
        <div className='content'>
          <i className="fa fa-check" aria-hidden="true"></i>
          <span>Unlimited Public Projects</span>
        </div>
        <div className='content'>
          <i className="fa fa-check" aria-hidden="true"></i>
          <span>Community Access</span>
        </div>
        <div className={`content ${props.user.id == 0 ? 'light-content' : ''}`}>
          {props.user.id === 0 ? (
            <i className="fa fa-times" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-check" aria-hidden="true"></i>
          )}
          <span>Unlimited Private Projects</span>
        </div>
        <div className={`content ${props.user.id == 0 ? 'light-content' : ''}`}>
          {props.user.id === 0 ? (
            <i className="fa fa-times" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-check" aria-hidden="true"></i>
          )}
          <span>Dedicated Phone Support</span>
        </div>
        <div className={`content ${props.user.id == 0 ? 'light-content' : ''}`}>
          
            {props.user.id === 0 ? (
              <i className="fa fa-times" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-check" aria-hidden="true"></i>
            )}
        
          <span>Free Subdomain</span>
        </div>
        <div className={`content ${props.user.id == 0 || props.user.id === 1 ? 'light-content' : ''}`}>
          {props.user.id === 0 || props.user.id === 1 ? (
            <i className="fa fa-times" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-check" aria-hidden="true"></i>
          )}

          <span>Monthly Status Report</span>
        </div>

      </div>
      <div className="btn">
        {props.user.id === 0 || props.user.id === 1 ? (
          <button className='button light-button'>Button</button>
        ) : (
          <button className='button'>Button</button>
        )}


      </div>
    </div>

  )
}

export default Card