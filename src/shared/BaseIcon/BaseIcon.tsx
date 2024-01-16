import { icons, BaseIconProps } from './config';

const BaseIcon = ({ width, height, iconName, color, className = '' }: BaseIconProps) => {
  const cx = `${className} ${color ? color : ''}`;

  return (
    <svg
      className={cx}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {icons[iconName]}
    </svg>
  );
};

export default BaseIcon;
