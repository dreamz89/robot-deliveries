const Battery = ({ percentage = 0, isCharging = false }) => {
  const color = percentage >= 50 ? "#44AF69" : "#FCAB10"

  return (
    <svg
      width="40"
      height="20"
      viewBox="0 0 40 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="35"
        height="18"
        rx="3"
        stroke="#2D3639"
        strokeWidth="2"
      />
      <rect
        x="2"
        y="2"
        width="33"
        height="16"
        rx="2"
        fill={`url(#linear_${percentage})`}
      />
      <path
        d="M35 4H37C38.1046 4 40 4.89543 40 6V13.4286C39 14.5331 38.1046 15.4286 37 15.4286H35V4Z"
        fill="#2D3639"
      />
      {isCharging ? (
        <path
          d="M16.089 15.8237L18.3822 10.2546L15.4338 10.2546L17.0716 4.68549L20.3477 4.68549L18.3822 8.2891L21.6581 8.2891L16.089 15.8237Z"
          fill="#2D3639"
        />
      ) : null}
      <defs>
        <linearGradient
          id={`linear_${percentage}`}
          x1="2"
          y1="10"
          x2="35"
          y2="10"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={color} />
          <stop offset={`${percentage}%`} stopColor={color} />
          <stop offset={`${percentage}%`} stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Battery
