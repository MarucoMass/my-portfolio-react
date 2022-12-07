import React from 'react'
import Skate from '../../assets.skate.jpg';
import Roller from '../../assets.roller.jpg';
import Squies from '../../assets.squies.jpg';
import Listen from '../../assets.listen.jpg';
import Show_1 from '../../assets.show-1.jpg';
import Show_2 from '../../assets.show-2.jpg';

const Hobbies = () => {
  return (
    <div className="hobbies">
        <h2 className="section__title">My hobbies</h2>
        <div className='hobbies__container grid'>
        <div className="hobbies__thumnbail">
            <img src={Skate} alt="skate" className="hobbies__img" />
        </div>
        <div className="hobbies__thumnbail">
            <img src={Roller} alt="roller" className="hobbies__img" />
        </div>
        <div className="hobbies__thumnbail">
            <img src={Show_1} alt="show" className="hobbies__img" />
        </div>
        <div className="hobbies__thumnbail">
            <img src={Show_2} alt="show" className="hobbies__img" />
        </div>
        <div className="hobbies__thumnbail">
            <img src={Listen} alt="listening music" className="hobbies__img" />
        </div>
        <div className="hobbies__thumnbail">
            <img src={Squies} alt="squies" className="hobbies__img" />
        </div>
        </div>
</div>
  )
}

export default Hobbies