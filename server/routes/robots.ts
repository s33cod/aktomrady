import { Request, Response } from "express";

export function handleRobotsTxt(req: Request, res: Response) {
  try {
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    
    const robotsTxt = `User-agent: *
Allow: /

# Allow all crawlers access to sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Disallow crawling of API endpoints
Disallow: /api/
Disallow: /.netlify/

# Allow crawling of all pages
Allow: /
Allow: /services
Allow: /portfolio
Allow: /about
Allow: /contact
Allow: /quote
Allow: /privacy-policy
Allow: /terms-of-service
Allow: /sitemap

# Crawl-delay (optional, helps with server load)
Crawl-delay: 1
`;

    res.set({
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    });
    
    return res.send(robotsTxt);
  } catch (error) {
    console.error('Robots.txt generation error:', error);
    return res.status(500).send('User-agent: *\nDisallow: /');
  }
}
