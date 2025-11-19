import Script from 'next/script';

export default function GoogleAnalytics() {
   const GA_MEASUREMENT_ID = 'G-J9NH53YYM5';

   return (
      <>
         <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            async
         />
         <Script>
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
         </Script>
         {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-J9NH53YYM5"></script>
         <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-J9NH53YYM5');
         </script> */}
      </>
   );
}
