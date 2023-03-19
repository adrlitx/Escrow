import React from 'react';
import { useTheme } from '@mui/material/styles';

const Logo = (props) => {
  const theme = useTheme();
  const { width = '36px', height = '100%' } = props; // Set default width and height to 100%
  const fillColor = theme.palette.primary.main;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400.96 400.96" // Update viewBox according to your SVG
      preserveAspectRatio="xMidYMid meet" // Add preserveAspectRatio attribute
      fill={fillColor}
      {...props}
    >
      {/* Replace the following path with the path data of your actual SVG logo */}
      <path d="M200.48,0C89.76,0,0,89.76,0,200.48s89.76,200.48,200.48,200.48,200.48-89.76,200.48-200.48S311.2,0,200.48,0ZM107.58,178.72c0-2.53,2-4.57,4.47-4.57h148.79c2.47,0,4.47,2.04,4.47,4.57v41.7c0,2.51-2,4.56-4.46,4.56H112.05c-2.47,0-4.47-2.04-4.47-4.56v-41.7Zm185.8,132.84c0,2.52-2,4.56-4.47,4.56H112.05c-2.47,0-4.47-2.04-4.47-4.56v-51.02c0-2.52,2-4.57,4.47-4.57h176.86c2.47,0,4.47,2.05,4.47,4.57v51.02Zm0-171.13c0,2.53-2,4.57-4.47,4.57H112.05c-2.47,0-4.47-2.04-4.47-4.57v-51.03c0-2.52,2-4.56,4.47-4.56h176.86c2.47,0,4.47,2.04,4.47,4.56v51.03Z" />
    </svg>
  );
};

export default Logo;
