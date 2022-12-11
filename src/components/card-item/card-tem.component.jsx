import { Component } from 'react';

class CardItem extends Component { 

    render() { 

        const { className } = this.props;
        
        return (
            <div className={ className }>
                <img alt="monster" src={`https://robohash.org/${this.props.monster.id}?set=set2&size=180x180`} />
                <h2>{this.props.monster.name}</h2>
                <p>{this.props.monster.email}</p>
            </div>
)

    }

}

export default CardItem;