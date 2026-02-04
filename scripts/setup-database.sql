-- Law Firm Website Database Schema

-- Practice Areas table
CREATE TABLE IF NOT EXISTS practice_areas (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  icon VARCHAR(100),
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Team Members table
CREATE TABLE IF NOT EXISTS team_members (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255),
  bio TEXT,
  image_url TEXT,
  email VARCHAR(255),
  phone VARCHAR(50),
  linkedin_url TEXT,
  is_founder BOOLEAN DEFAULT false,
  display_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Blog Posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  image_url TEXT,
  author_id INT REFERENCES team_members(id),
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Case Results table
CREATE TABLE IF NOT EXISTS case_results (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  practice_area_id INT REFERENCES practice_areas(id),
  result_amount VARCHAR(100),
  description TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id SERIAL PRIMARY KEY,
  client_name VARCHAR(255) NOT NULL,
  client_title VARCHAR(255),
  content TEXT NOT NULL,
  rating INT CHECK (rating >= 1 AND rating <= 5),
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact Submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  subject VARCHAR(255),
  message TEXT NOT NULL,
  practice_area_id INT REFERENCES practice_areas(id),
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Site Settings table
CREATE TABLE IF NOT EXISTS site_settings (
  id SERIAL PRIMARY KEY,
  key VARCHAR(255) UNIQUE NOT NULL,
  value TEXT,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Admin Users table
CREATE TABLE IF NOT EXISTS admin_users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login TIMESTAMP
);

-- Insert default practice areas
INSERT INTO practice_areas (title, slug, description, icon, featured) VALUES
  ('Corporate Security', 'corporate-security', 'Law is complex from a method view point except your activity about corporate business.', 'shield', true),
  ('Bankruptcy Law', 'bankruptcy-law', 'Law is complex from a method view point except your activity about corporate business.', 'landmark', true),
  ('Education Law', 'education-law', 'Law is complex from a method view point except your activity about corporate business.', 'graduation-cap', true),
  ('Family Law', 'family-law', 'Comprehensive legal support for family matters including divorce, custody, and adoption.', 'users', false),
  ('Criminal Defense', 'criminal-defense', 'Aggressive defense strategies to protect your rights in criminal proceedings.', 'scale', false),
  ('Real Estate Law', 'real-estate-law', 'Expert guidance through property transactions and real estate disputes.', 'home', false)
ON CONFLICT (slug) DO NOTHING;

-- Insert founder
INSERT INTO team_members (name, slug, title, bio, is_founder, display_order) VALUES
  ('John Mehta', 'john-mehta', 'CEO & Founder of Advokat', 'We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.', true, 1)
ON CONFLICT (slug) DO NOTHING;

-- Insert default site settings
INSERT INTO site_settings (key, value) VALUES
  ('site_name', 'Advokat'),
  ('tagline', 'House of Lawyers'),
  ('phone', '+1020930542'),
  ('email', 'support@rstheme.com'),
  ('hours', '9:00 AM - 05:00 PM'),
  ('address', '123 Legal Street, Law City, LC 12345'),
  ('hero_title', 'We Fight for Right'),
  ('hero_subtitle', 'Need any help?'),
  ('hero_description', 'We denounce with righteous indignation and dislike men who are beguiled and demoralized by the charms of pleasure.'),
  ('about_description', 'These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. Ut enim ad minim veniam, quis nostrud exercitation. Duis aute irure dolor in reprehend derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.')
ON CONFLICT (key) DO NOTHING;
