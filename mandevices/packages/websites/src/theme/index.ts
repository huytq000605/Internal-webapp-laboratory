import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyle = createGlobalStyle`
h1,h2,h3,h4,h5,h6{
	margin: 0;
	padding: 0;
}
@media screen and (max-width:1920px){
	 h1{
		 font-size: 3rem;
	 }
	 h2{
		 font-size: 2.5rem;
	 }
	 h3{
		font-size: 2rem;
	 }
	 h4{
		font-size: 1.5rem;
	 }
 }
 @media screen and (max-width:1536px){
	 h1{
		 font-size: 2.25rem;
	 }
	 h2{
		 font-size: 2rem;
	 }
	 h3{
		font-size: 1.75rem;
	 }
	 h4{
		font-size: 1.5rem;
	 }
 }
 @media screen and (max-width:1366px){
	 h1{
		 font-size: 2rem;
	 }
	 h2{
		 font-size: 1.75rem;
	 }
	 h3{
		font-size: 1.5rem;
	 }
	 h4{
		font-size: 1.25rem;
	 }
 }
 @media screen and (max-width:576px){
	h1{
		 font-size: 1.2rem;
	 }
	 h2{
		 font-size: 1.1rem;
	 }
	 h3{ font-size: 1rem;}
	 h4{
		font-size: 0.9rem;
	 }
 }
 @media screen and (max-width:360px){
	h1{
		 font-size: 1.1rem;
	 }
	 h2{
		 font-size: 1rem;
	 }
	 h3{ font-size: 0.9rem;}
	 h4{
		font-size: 0.8rem;
	 }
 }
`;
export type ThemeType = typeof light; // This is the type definition for my theme object.

export const light = {
    colors: {
        primary: '#FFF',
        onPrimary: '#000',
        secondary: '#0080FF',
        secondaryVariant: '#274ff3',
        onSecondary: '#FFF',
        text: '#000',
        surface: '#FFF',
        surfaceVariant: '#e2e2e280',
        background: '#fff',
        backgroundMenuActive: '#f2f9ff',
        colorMenuActive: '#52a9ff',
    },
    dimensions: {
        appBarHeight: '72px',
        maxWidthContent: '750px',
    },
};
export const dark: ThemeType = {
    ...light,
};

const theme = light; // set the light theme as the default.
export default theme;
