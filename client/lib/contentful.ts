// Contentful CMS Integration for AKTOMRADY Agencies
// This file sets up the foundation for content management

export interface ContentfulAsset {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    file: {
      url: string;
      details: {
        size: number;
        image?: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}

export interface ProjectEntry {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    description: string;
    client: string;
    category: string;
    images: ContentfulAsset[];
    featured: boolean;
    completedDate: string;
    services: string[];
  };
}

export interface ServiceEntry {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    description: string;
    icon: string;
    features: string[];
    priceRange: string;
    popular: boolean;
  };
}

export interface TeamMemberEntry {
  sys: {
    id: string;
  };
  fields: {
    name: string;
    role: string;
    bio: string;
    expertise: string[];
    photo: ContentfulAsset;
  };
}

export interface TestimonialEntry {
  sys: {
    id: string;
  };
  fields: {
    clientName: string;
    clientRole: string;
    company: string;
    content: string;
    rating: number;
    featured: boolean;
  };
}

// Contentful Client Configuration
// To set up Contentful, you'll need to:
// 1. Create a Contentful account
// 2. Set up content types for: Projects, Services, Team Members, Testimonials
// 3. Add environment variables for CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN

class ContentfulClient {
  private spaceId: string;
  private accessToken: string;
  private baseUrl: string;

  constructor() {
    this.spaceId = process.env.CONTENTFUL_SPACE_ID || '';
    this.accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || '';
    this.baseUrl = `https://cdn.contentful.com/spaces/${this.spaceId}`;
  }

  private async fetchEntries(contentType: string, query: Record<string, any> = {}) {
    if (!this.spaceId || !this.accessToken) {
      console.warn('Contentful credentials not configured. Using fallback data.');
      return this.getFallbackData(contentType);
    }

    const params = new URLSearchParams({
      access_token: this.accessToken,
      content_type: contentType,
      ...query
    });

    try {
      const response = await fetch(`${this.baseUrl}/entries?${params}`);
      if (!response.ok) {
        throw new Error(`Contentful API error: ${response.status}`);
      }
      const data = await response.json();
      return data.items;
    } catch (error) {
      console.error('Error fetching from Contentful:', error);
      return this.getFallbackData(contentType);
    }
  }

  // Fallback data when Contentful is not configured
  private getFallbackData(contentType: string) {
    const fallbackData: Record<string, any[]> = {
      project: [
        {
          sys: { id: '1', createdAt: '2024-01-01', updatedAt: '2024-01-01' },
          fields: {
            title: 'Lagos State Government Campaign',
            description: 'Large format prints for state-wide awareness campaign',
            client: 'Lagos State Government',
            category: 'Government',
            images: [],
            featured: true,
            completedDate: '2024-01-15',
            services: ['Large Format Prints', 'Banners', 'Signage']
          }
        }
      ],
      service: [
        {
          sys: { id: '1' },
          fields: {
            title: 'Large Format Prints',
            description: 'Professional banners, billboards, and high-quality product stickers',
            icon: '📢',
            features: ['Banners & Billboards', 'Product Stickers', 'Posters'],
            priceRange: '₦10,000 - ₦500,000',
            popular: true
          }
        }
      ],
      teamMember: [
        {
          sys: { id: '1' },
          fields: {
            name: 'Adebayo Ogundimu',
            role: 'Founder & CEO',
            bio: 'Visionary leader with 15+ years in printing industry',
            expertise: ['Strategic Leadership', 'Business Development'],
            photo: { fields: { file: { url: '' } } }
          }
        }
      ],
      testimonial: [
        {
          sys: { id: '1' },
          fields: {
            clientName: 'Lagos State Ministry',
            clientRole: 'Public Communications',
            company: 'Lagos State Government',
            content: 'AKTOMRADY delivers exceptional quality and service.',
            rating: 5,
            featured: true
          }
        }
      ]
    };

    return fallbackData[contentType] || [];
  }

  async getProjects(featured?: boolean): Promise<ProjectEntry[]> {
    const query = featured ? { 'fields.featured': true } : {};
    return this.fetchEntries('project', query);
  }

  async getServices(): Promise<ServiceEntry[]> {
    return this.fetchEntries('service');
  }

  async getTeamMembers(): Promise<TeamMemberEntry[]> {
    return this.fetchEntries('teamMember');
  }

  async getTestimonials(featured?: boolean): Promise<TestimonialEntry[]> {
    const query = featured ? { 'fields.featured': true } : {};
    return this.fetchEntries('testimonial', query);
  }

  async getFeaturedContent() {
    const [projects, testimonials] = await Promise.all([
      this.getProjects(true),
      this.getTestimonials(true)
    ]);

    return {
      projects,
      testimonials
    };
  }
}

export const contentfulClient = new ContentfulClient();

// Usage examples:
// const projects = await contentfulClient.getProjects();
// const services = await contentfulClient.getServices();
// const team = await contentfulClient.getTeamMembers();
// const testimonials = await contentfulClient.getTestimonials(true);
