import db from '../../config/db'
import Blog from '../../models/blog'
import siteConfig from '../../siteConfig'

export default async function handler(req, res) {
  try {
    await db()
    const blogs = await Blog.find({ site: siteConfig.siteId }, '-_id slug')
    res.setHeader('Content-Type', 'text/xml')

    // Instructing the Vercel edge to cache the file
    res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')

    // generate sitemap here
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
      <url>
            <loc>${siteConfig.url}</loc>
        </url>
        <url>
            <loc>${siteConfig.url}blog/</loc>
        </url>
      ${blogs
        .map(({ slug }) => {
          return `
                <url>
                    <loc>${`${siteConfig.url}blog/${encodeURIComponent(
                      slug
                    )}`}</loc>
                </url>
            `
        })
        .join('')}
      </urlset>`
    res.end(xml)
  } catch (err) {
    res.send({ err })
  }
}
