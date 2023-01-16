import AIcon  from '../icon';

/**
 * @component   adhara-card   Presents a card container <div class="card"/> component.
 * @property    {String}        animate   Should the card animate on page load, as per dsl animations. Default 'Fade In'
 * @property    {String}        hover     Should the card have an animation when user hover over it. Default 'Zoom In'
 * @property    {String}        icon      Icon to display within card
 * @property    {Boolean|false} action    Whether this card is an action card
 * @property    {Boolean|false} balance   Whether this card is an balance card
 * @property    {Boolean|false} intro     Whether this card is an intro card
 */

export default {
    name        : 'card',
    components  : {
        AIcon
    },
    props : {
        animate : String,
        hover   : String,
        icon    : String,
        title   : String,
        action  : Boolean,
        balance : Boolean,
        intro   : Boolean
    },
    computed      : {
        /**
         * Computes all the card styles based on its configuration
         * @return {Array}  Set of styles
         * @private
         */
        _cardStyle()
        {
            const styles = [];
            styles.push(this.intro ? `intro-card` : this.action ? `action-card`  : this.balance ? `balance-card` : 'default-card');
            styles.push({ '' : 'fade-in' }[this.animate] || this.animate);
            styles.push({ '' : 'hover-animate' }[this.hover] || this.hover);

            return styles.filter(Boolean);
        }
    }
};
