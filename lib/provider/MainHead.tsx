import React, { FunctionComponent } from 'react'

export const MainHead: FunctionComponent<{}> = () => {
  return (
    <>
      <title>DreamSite</title>
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon-16x16.png"
      />
    </>
  )
}
