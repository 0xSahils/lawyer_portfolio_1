-- Seed default admin user
-- Password: admin123 (hashed with bcrypt)
INSERT INTO admin_users (email, password_hash, name, role)
VALUES (
  'admin@advokat.com',
  '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/X4aw.J.G.gqKnQdlu',
  'Admin User',
  'Administrator'
)
ON CONFLICT (email) DO NOTHING;
