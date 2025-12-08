import React from "react";

export default function LinkedinIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      viewBox="0 0 30 30"
      className={className}
      aria-label="LinkedIn"
      role="img"
      {...props}
    >
      <path
        d="M25.562 25.562h-4.445V18.6c0-1.66-.03-3.797-2.312-3.797-2.315 0-2.67 1.81-2.67 3.674v7.085H11.69V11.245h4.268v1.958h.06a4.687 4.687 0 0 1 4.209-2.313c4.505 0 5.338 2.963 5.338 6.82l-.003 7.852ZM4.448 11.245h4.45v14.317h-4.45zM6.675 9.288a2.605 2.605 0 0 1-2.58-2.578 2.593 2.593 0 0 1 2.58-2.58 2.594 2.594 0 0 1 2.58 2.58 2.593 2.593 0 0 1-2.58 2.58v-.002Z"
        style={{ fill: "#fff" }}
      />
      <path
        d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.141ZM4.67 5.715a1.041 1.041 0 0 1-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032v-.001Zm.889 6.51h-1.78V6.498h1.78v5.727ZM13.11 2H2.885A.885.885 0 0 0 2 2.866v10.268a.885.885 0 0 0 .885.866h10.226a.886.886 0 0 0 .889-.866V2.865a.884.884 0 0 0-.889-.864L13.11 2Z"
        style={{ fill: "#0a66c2", fillRule: "nonzero" }}
        transform="translate(-5 -5) scale(2.49999)"
      />
    </svg>
  );
}
