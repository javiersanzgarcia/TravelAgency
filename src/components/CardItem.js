import {Link} from 'react-router-dom'

const CardItem = (props) => {
  return (
    <>
      {/* src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services" */}
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure
            className="cards__item__pic-wrap"
            data-category={props.label}
          >
            <img
              src={props.src}
              alt="Travel"
              className="cards__item__img"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem
