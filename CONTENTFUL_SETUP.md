# Contentful CMS Setup for AKTOMRADY Agencies

This document outlines how to set up Contentful CMS for managing digital assets and content across the AKTOMRADY website.

## 1. Create Contentful Account

1. Go to [contentful.com](https://www.contentful.com/)
2. Sign up for a free account
3. Create a new space for "AKTOMRADY Agencies"

## 2. Content Types to Create

### Project Content Type

- **ID**: `project`
- **Fields**:
  - Title (Short text)
  - Description (Long text)
  - Client (Short text)
  - Category (Short text, required)
  - Images (Media, multiple)
  - Featured (Boolean)
  - Completed Date (Date)
  - Services (Short text, multiple)

### Service Content Type

- **ID**: `service`
- **Fields**:
  - Title (Short text, required)
  - Description (Long text)
  - Icon (Short text)
  - Features (Short text, multiple)
  - Price Range (Short text)
  - Popular (Boolean)

### Team Member Content Type

- **ID**: `teamMember`
- **Fields**:
  - Name (Short text, required)
  - Role (Short text, required)
  - Bio (Long text)
  - Expertise (Short text, multiple)
  - Photo (Media)

### Testimonial Content Type

- **ID**: `testimonial`
- **Fields**:
  - Client Name (Short text, required)
  - Client Role (Short text)
  - Company (Short text)
  - Content (Long text, required)
  - Rating (Number, 1-5)
  - Featured (Boolean)

## 3. Environment Variables

Add these to your environment configuration:

```env
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_access_token_here
```

## 4. API Keys

1. Go to Settings > API keys in your Contentful space
2. Create a new API key
3. Copy the Space ID and Content Delivery API access token
4. Add them to your environment variables

## 5. Usage in Components

```typescript
import { contentfulClient } from "@/lib/contentful";

// Get all projects
const projects = await contentfulClient.getProjects();

// Get featured testimonials
const testimonials = await contentfulClient.getTestimonials(true);

// Get all services
const services = await contentfulClient.getServices();
```

## 6. Content Management Workflow

1. **Add Projects**: Create new project entries with images and details
2. **Manage Services**: Update service descriptions and pricing
3. **Team Updates**: Add/update team member information
4. **Client Testimonials**: Add new testimonials and mark featured ones

## 7. Asset Management

- Upload high-quality images for projects
- Optimize images for web (WebP format recommended)
- Use descriptive file names and alt text
- Organize assets with tags and folders

## 8. Benefits of Using Contentful

- **Easy Content Updates**: Non-technical team members can update content
- **Version Control**: Track changes and revert if needed
- **Image Optimization**: Automatic image transformations
- **API-First**: Flexible content delivery
- **Scalability**: Handles growing content needs

## 9. Next Steps

1. Set up the Contentful space and content types
2. Add initial content (projects, services, team, testimonials)
3. Configure environment variables
4. Test the integration
5. Train team members on content management

## 10. Maintenance

- Regularly update project portfolio
- Add new client testimonials
- Keep team information current
- Monitor API usage and performance

For technical support, refer to the [Contentful Documentation](https://www.contentful.com/developers/docs/).
