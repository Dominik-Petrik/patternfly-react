import React from 'react';
import { Dropdown, DropdownList, DropdownItem } from '@patternfly/react-core/dist/esm/next';
import { Popper } from '../../../../helpers/';
import { render, screen, waitFor } from '@testing-library/react';

jest.mock('../../../../helpers', () => ({
  Popper: ({ className }) => (
    <>
      <div data-testid="mock-popper">{`className: ${className}`}</div>
    </>
  )
}));

/* jest.mock('../../../../components/Menu/', () => {
  Menu: ({ className }) => (
    <>
      <div data-testid="mock-popper">{`className: ${className}`}</div>
    </>
  );
}); */

const dropDownItems = (
  <DropdownList>
    <DropdownItem itemId={0} key="link">
      Link
    </DropdownItem>
    <DropdownItem itemId={1} key="action" to="#default-link2" onClick={ev => ev.preventDefault()}>
      Action
    </DropdownItem>
    <DropdownItem itemId={2} isDisabled key="disabled link">
      Disabled link
    </DropdownItem>
  </DropdownList>
);

test('renders dropdown', async () => {
  render(
    <div data-testid="dropdown">
      <Dropdown toggle={toggleRef => <div ref={toggleRef}>Dropdown</div>}></Dropdown>
    </div>
  );

  expect((await screen.findByTestId('dropdown')).children[0]).toBeVisible();
});

test('renders dropdown with custom class name', async () => {
  render(
    <Dropdown className="customClass" isOpen={true} toggle={toggleRef => <div ref={toggleRef}>Dropdown</div>}>
      {dropDownItems}
    </Dropdown>
  );

  expect((await screen.findByTestId('mock-popper')).children[0]).toHaveClass('customClass');
});

test('match snapshot', async () => {
  const { asFragment } = render(
    <Dropdown className="customClass" isOpen={true} toggle={toggleRef => <div ref={toggleRef}>Dropdown</div>}>
      {dropDownItems}
    </Dropdown>
  );

  await waitFor(() => expect(asFragment()).toMatchSnapshot());
});
