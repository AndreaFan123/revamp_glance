import styled from 'styled-components';
import { COLORS, PADDING } from '../../../style/styles';

const Select = styled.select`
  min-height: 30px;
  border-radius: 5px;
  border: none;
  border: 1px solid ${COLORS.textDarkcolor};
  outline: none;
  cursor: pointer;
  /* appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none; */
  color: ${COLORS.textDarkcolor};
  padding: 0 ${PADDING.paddingXS};
`;

export const SelectLan = (): JSX.Element => {
  return (
    <label htmlFor="selectLanguage">
      <Select id="selectLanguage" name="selectLanguage">
        <option value="en">EN</option>
        <option value="en">ZH-TW</option>
      </Select>
    </label>
  );
};
