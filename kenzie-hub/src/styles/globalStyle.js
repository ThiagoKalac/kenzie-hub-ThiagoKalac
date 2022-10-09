import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`	
	:root{
		/* main color */
		--color-primary:         #FF577F;
		--color-primary-focus:   #FF427F;
		--color-primary-negative:#59323F;

		/* shades of gray */

		--gray-0:#F8F9FA;
		--gray-1:#868E96;
		--gray-2:#343B41;
		--gray-3:#212529;
		--gray-4:#121214;

		/* other colors */

		--sucess  :#3FE864;
		--negative:#E83F5B;

		/* fonts */
		--font: 'Inter', sans-serif;

		/* config fonts */

		--title-1:   	 700 30px 'Inter', sans-serif;
		--title-2:  	 700 24px 'Inter', sans-serif;
		--title-3:  	 700 20px 'Inter', sans-serif;
		--input:        400 16px 'Inter', sans-serif;
		--button:       500 16px 'Inter', sans-serif;
		--headLine: 	 400 14px 'Inter', sans-serif;
		--headLine-bold:700 12px 'Inter', sans-serif;

	}

	body{
		background-color: var(--gray-4);
	}

	.container{
		width: 100%;
		max-width: 1400px;
		margin: 0 auto;
		padding: 16px;
	}

	.textError{
          color: var(--negative);
          font: var(--headLine-bold);
     }

/* reset css */


     /* http://meyerweb.com/eric/tools/css/reset/ 
     v2.0 | 20110126
     License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video,main {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
     box-sizing: border-box;
	text-decoration: none;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

`

export default GlobalStyle