import Head from 'next/head';
import '../styles/globals.css'
import Script from 'next/script'



function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=no" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css"></link>
      </Head>
      <Script id='script' crossOrigin='anonymus'>
        var Tynt=Tynt||[];Tynt.push(&apos;aR694qa3yr7BKorkHcnnVW&apos;);
        (function()var h,s=document.createElement(&apos;script&apos;);
        s.src=&apos;https://cdn.tynt.com/ti.js&apos;;
        h=document.getElementsByTagName(&apos;script&apos;)[0];
        h.parentNode.insertBefore(s,h);)();
      </Script>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossOrigin="anonymous"></Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
