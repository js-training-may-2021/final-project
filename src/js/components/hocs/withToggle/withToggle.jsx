import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withToggle = Component => {
	class WithToggle extends PureComponent {
		constructor(props) {
			super(props);

      this.state = {
        isChecked: this.props.isToggleChecked,
      };

      this.handleToggleChange = this.handleToggleChange.bind(this);
		}
		
		handleToggleChange() {
      this.setState(prevState => ({
        isChecked: !prevState.isChecked,
      }));
    }

    render() {
      return <Component
        {...this.props}
        isToggleChecked={this.state.isChecked}
        onToggleClick={this.handleToggleChange}
      />;
    }
  }

  WithToggle.propTypes = {
    isToggleChecked: PropTypes.bool,
  };

  return WithToggle;
}

export default withToggle;