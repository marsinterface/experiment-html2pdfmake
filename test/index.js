// import html2pdfmake from '../dist/html2pdfmake'
var html2pdfmake = require('../dist/html2pdfmake')


const html = "<p>123</p><p><br></p><p><strong>Lorem Ipsum</strong>&nbspis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>"

console.log(JSON.stringify(html2pdfmake(html), null, 2))