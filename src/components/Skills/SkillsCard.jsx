import './SkillsCard.css';

function SkillsCard({ title, itemNames = [], item_images = [] }) {
  return (
    <div className='skills-card'>
      <div className='skills-title'>
      <h4>{title}</h4>
      </div>
      
      <div className='skills-container'>
        {itemNames.length > 0 && itemNames.map((itemName, index) => (
          <div key={index} className='skills-item'>
            <img src={item_images[index]} />
            <p>{itemName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsCard;
