// generate-sitemap.cjs
const fs = require('fs')
const path = require('path')
const { create } = require('xmlbuilder2')

const baseUrl = 'https://www.juliataro.eu'
const routes = [
  '/',
  '/about',
  '/process',
  '/projects/websites',
  '/projects/print',
  '/projects/websites/almarpuit',
  '/projects/websites/tobroxwood',
  '/projects/websites/spavarska',
  '/projects/websites/bodydetox',
  '/projects/websites/peipsikaup',
  '/projects/websites/nagemisteraapia',
  '/about',
  '/about/cv'
]

const urlset = create({ version: '1.0' }).ele('urlset', {
  xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9'
})

routes.forEach(route => {
  const url = urlset.ele('url')
  url.ele('loc').txt(new URL(route, baseUrl).toString())
  url.ele('lastmod').txt(new Date().toISOString())
})

const xml = urlset.end({ prettyPrint: true })

// write to <projectRoot>/public/sitemap.xml
const outPath = path.join(process.cwd(), 'public', 'sitemap.xml')
fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, xml, 'utf8')

console.log('✅ Sitemap generated at', outPath)
