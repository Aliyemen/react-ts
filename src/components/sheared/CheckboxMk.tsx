import { styled } from '@stitches/react';
import { gray } from '@radix-ui/colors';
import { CheckIcon } from '@radix-ui/react-icons';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import DialogMk from './DialogMk';
import i18n from '../../i18n/i18next';

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  backgroundColor: '#65d292',
  width: 22,
  height: 22,
  borderRadius: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 2px 10px ${gray.gray7}`,
  '&:hover': { backgroundColor: '#4c8db5' },
  '&:focus': { boxShadow: `0 0 0 2px ${gray.gray8}` },
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  color: 'White',
});

// Exports
export const Checkbox = StyledCheckbox;
export const CheckboxIndicator = StyledIndicator;

// Your app...
const Flex = styled('div', { display: 'flex' });
const Label = styled('label', {
  color: '#2e4d59',
  fontSize: 15,
  lineHeight: 1,
  userSelect: 'none',
  fontWeight:'bold',
  fontFamily:'revert'
});

export const CheckboxMk = () => (
  <form>
    <Flex css={{ alignItems: 'center' }}>
      <Checkbox defaultChecked id="c1">
        <CheckboxIndicator>
          <CheckIcon />
        </CheckboxIndicator>
      </Checkbox>
      <Label css={{ paddingLeft: 15 }} htmlFor="c1">
        {i18n.t(`resource.user.accpetContrate`)} <DialogMk />
      </Label>
    </Flex>
  </form>
);

export default CheckboxMk;
