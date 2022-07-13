/* Core */
import { render } from 'react-dom';

const element = (
    <form className = 'newsFeed'>
        <h1>News Feed</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            faucibus ex ac nunc efficitur vulputate. In hac habitasse platea
            dictumst.
        </p>
        <div>
            <input
                defaultChecked
                id = 'subscribe'
                name = 'subscription'
                type = 'radio' />
            <label htmlFor = 'subscribe'>Subscribe to newsletter</label>
        </div>
        <div>
            <input
                defaultChecked = { false }
                id = 'unsubscribe'
                name = 'subscription'
                type = 'radio' />
            <label htmlFor = 'unsubscribe' value = 'hello'>
                Unsubscribe from newsletter
            </label>
        </div>
        <br />
        <input type = 'submit' value = 'Submit' />
    </form>
);

render(element, document.getElementById('root'));
