import * as React from "react"

export function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17a5.2 5.2 0 0 0-1.5-3.81 4.7 4.7 0 0 0-.1-3.81s-1.18-.38-3.9 1.4a13.4 13.4 0 0 0-7 0c-2.72-1.78-3.9-1.4-3.9-1.4a4.7 4.7 0 0 0-.1 3.81 5.2 5.2 0 0 0-1.5 3.81c0 5.76 3.35 6.78 6.5 7.17a4.8 4.8 0 0 0-1 3.03v4" />
      <path d="M9 20a5 5 0 0 1-5-1" />
    </svg>
  )
}

export function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
