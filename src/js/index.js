import  '../style/index.css'

/*const puppeteer = require("puppeteer")


async function teste(e) {
  
  e.preventDefault()
  console.log( e.target['username'].value )
  console.log('form pesado')
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
}*/

/*(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('https://rocketseat.com.br');
  await page.screenshot({ path: 'rocketseat.png' });

  await browser.close()
})()*/

async function teste02() {
  const browser = await puppeteer.launch({ headless: false, devtools: true });
  const page = await browser.newPage();
  
  await page.goto('https://www.instagram.com/a.pmend1231231323123es');

  const images = await page.evaluate( () => {
    /** Essa função sera executada no browser */

    /* Pegar todas as publicações */
    const imagesPublic = document.querySelectorAll('article img')

    /* Convert NodeList em array */
    const imagesArray = [...imagesPublic]

    console.log( !imagesArray.length)

    /* Verifica se existe alguma imagem dentro do array */
    if(!imagesArray.length) {
      /* Pega o attributo HREF da tag a */
      const tagAAttribute = document.querySelector('body a').getAttribute('href')

      /* Conta é privada */
      if(tagAAttribute.indexOf('/accounts/login/') !== -1 ) {
        throw new Error('This account are private')
      }

      /* Username não existe */
      if(tagAAttribute.indexOf('/') !== -1 ) {
        throw new Error('User not exists')
      }
    }

    /* Pegar source das imagens */
    const imageList = imagesArray.map(({ src }) => (
      {
        src
      }
    ))

    return imageList
  });

  console.log( images )

  /* Escrever os dados em um arquivo json */
  /*fs.writeFile('instagram.json', JSON.stringify(images, null, 2), error => {
    if(error) throw new Error('something went wrong');

    console.log('pronto');
  })*/

  //await browser.close()
}
