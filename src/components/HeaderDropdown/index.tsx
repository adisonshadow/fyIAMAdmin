import { Dropdown } from '@oceanbase/design';
import type { DropDownProps } from '@oceanbase/design/es/dropdown';
import React from 'react';
import { createStyles } from 'antd-style';
import classNames from 'classnames';

const useStyles = createStyles(({ token }) => {
  return {
    dropdown: {
      [`@media screen and (max-width: ${token.screenXS}px)`]: {
        width: '100%',
      },
    },
  };
});

export type HeaderDropdownProps = {
  overlayClassName?: string;
  placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight' | 'bottomCenter';
} & Omit<DropDownProps, 'overlay'>;

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({ overlayClassName: cls, ...restProps }) => {
  const { styles } = useStyles();
  return <Dropdown overlayClassName={classNames(styles.dropdown, cls)} {...restProps} />;
};

export default HeaderDropdown;
