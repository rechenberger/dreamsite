import { FunctionComponent, useMemo } from 'react'
import { TinaCMS, TinaProvider as TinaProviderRaw } from 'tinacms'

export const TinaProvider: FunctionComponent<{}> = ({ children }) => {
  const cms = useMemo(
    () => new TinaCMS({ enabled: true, toolbar: true, sidebar: true }),
    []
  )
  return (
    <TinaProviderRaw cms={cms}>
      <>{children}</>
    </TinaProviderRaw>
  )
}
