-- Migration script to add missing columns to existing database

-- Add session columns to admin_users if they don't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_name='admin_users' AND column_name='session_token') THEN
    ALTER TABLE admin_users ADD COLUMN session_token VARCHAR(255);
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_name='admin_users' AND column_name='session_expires') THEN
    ALTER TABLE admin_users ADD COLUMN session_expires TIMESTAMP;
  END IF;
END $$;

-- Add read column to contact_submissions if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_name='contact_submissions' AND column_name='read') THEN
    ALTER TABLE contact_submissions ADD COLUMN read BOOLEAN DEFAULT false;
  END IF;
END $$;
