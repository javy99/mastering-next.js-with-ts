import Script from 'next/script'
import React from 'react'

const GoogleAnalyticsScript = () => {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-E720JHXSJ2" />
            <Script strategy='lazyOnload' id='gtag-inline-script'>
                {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-E720JHXSJ2');`}
            </Script>
        </>
    )
}

export default GoogleAnalyticsScript