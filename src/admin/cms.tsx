import React from 'react'
import type { CmsConfig } from 'netlify-cms-core'
import CMS from 'netlify-cms-app'
import ColorWidget from 'netlify-cms-widget-color/dist/es/color'
import HomePage from '../pages/adminHome'
import remark from 'remark'
import html from 'remark-html'
import { StyleSheetManager } from 'styled-components'

CMS.registerWidget('color', ColorWidget.Control)

const PreviewStyleManager: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [iframeRef, setIframeRef] = React.useState<HTMLHeadElement | null>(null)

  React.useEffect(() => {
    const iframe = document.getElementsByTagName('iframe')[0]
    const iframeHeadElem = iframe?.contentDocument?.head ?? null
    setIframeRef(iframeHeadElem)
  }, [])

  return (
    iframeRef && (
      <StyleSheetManager target={iframeRef}>{children}</StyleSheetManager>
    )
  )
}

CMS.registerPreviewTemplate('landing', ({ entry }) => {
  const cmsData = React.useMemo(() => entry.toJS(), [entry])

  const imageMap = React.useMemo(() => {
    return new Map<string, string>(
      cmsData.mediaFiles.map((image: any) => {
        return [
          image.path.replace('static/', ''),
          typeof image.displayURL === 'string'
            ? image.displayURL
            : '/' + image.displayURL.path.replace('static/', ''),
        ]
      }),
    )
  }, [cmsData])

  const query = React.useMemo(
    () => ({
      file: {
        childMarkdownRemark: {
          html: remark()
            .use({ settings: { gfm: true } })
            .use((html as unknown) as any)
            .processSync(cmsData.data.body)
            .toString(),
          frontmatter: {
            siteTitle: cmsData.data.siteTitle,
            quoteContent: cmsData.data.quoteContent,
            footerLogo: imageMap.get(cmsData.data.footerLogo) ?? '',
            backgroundImage: imageMap.get(cmsData.data.backgroundImage) ?? '',
            colors: cmsData.data.colors,
          },
        },
      },
    }),
    [cmsData, imageMap],
  )

  return (
    <PreviewStyleManager>
      <HomePage data={query} />
    </PreviewStyleManager>
  )
})

CMS.init({
  config: ({
    backend: {
      name: 'github',
      repo: 'sunrisemovement/pledge-to-vote-2020',
      branch: 'main',
    },
    local_backend: window.location.hostname === 'localhost',
  } as unknown) as CmsConfig,
})
