import { Request, Response } from "express";

export function handleSitemapXML(req: Request, res: Response) {
  try {
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const currentDate = new Date().toISOString().split('T')[0];
    
    const pages = [
      {
        url: '/',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: '1.0'
      },
      {
        url: '/services',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: '0.9'
      },
      {
        url: '/portfolio',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: '0.8'
      },
      {
        url: '/about',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: '0.7'
      },
      {
        url: '/contact',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: '0.8'
      },
      {
        url: '/quote',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: '0.8'
      },
      {
        url: '/privacy-policy',
        lastmod: currentDate,
        changefreq: 'yearly',
        priority: '0.3'
      },
      {
        url: '/terms-of-service',
        lastmod: currentDate,
        changefreq: 'yearly',
        priority: '0.3'
      },
      {
        url: '/sitemap',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: '0.4'
      }
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    res.set({
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    });
    
    return res.send(sitemap);
  } catch (error) {
    console.error('Sitemap generation error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to generate sitemap'
    });
  }
}
