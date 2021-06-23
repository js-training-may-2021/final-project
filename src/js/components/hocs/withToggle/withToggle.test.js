import React from 'react';
import renderer from 'react-test-renderer';
import withToggle from './withToggle';
import {noop} from '../../../utils.js';

const mockComponent = jest.fn(() => null);
const ComponentWrapped = withToggle(mockComponent);

it('withToggle adds state and handler to Component', () => {
  const tree = renderer.create(
    <ComponentWrapped
      isToggleChecked={false}
      onClick={noop}
    />);

  expect(mockComponent).toBeCalled();
  expect(tree.getInstance().state).toStrictEqual({isChecked: false});
  expect(tree.getInstance().handleToggleChange).toBeDefined();
  expect(tree.toTree().rendered.props.onToggleClick).toBeDefined();
});
