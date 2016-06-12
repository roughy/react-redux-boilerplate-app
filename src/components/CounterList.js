import React, {PropTypes} from 'react';

export default class CounterList extends React.Component {

    render() {
        const {counts} = this.props;
        let key = 0;

        return (
            <ul>
                {
                    counts.map(function(count) {
                        return <li key={key++}>{count}</li>
                    })
                }
            </ul>
        );
    }

}

CounterList.propTypes = {
    counts: PropTypes.array.isRequired
};
