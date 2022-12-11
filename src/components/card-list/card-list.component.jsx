import { Component } from 'react';
import CardItem from '../card-item/card-tem.component';

class CardList extends Component { 
    render() {
        const { monsters, className } = this.props;

        return (
            <div className={ className }>
                {monsters.map(monster => (
                    <CardItem key={monster.id} monster={monster} className="card-item" />
                ))}
            </div>
        );
    }
}

export default CardList;