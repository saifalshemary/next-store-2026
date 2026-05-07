// Lazy client: avoids createClient at import time (Navbar → actions → this module during build).
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

function getSupabase(): SupabaseClient {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;
  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      'Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY',
    );
  }
  return createClient(supabaseUrl, supabaseKey);
}

export const uploadImage = async (image: File) => {
  const BUCKET_NAME = process.env.BUCKET_NAME;
  if (!BUCKET_NAME) {
    throw new Error('Missing BUCKET_NAME');
  }

  const supabase = getSupabase();
  const timestamp = Date.now();
  const newName = `${timestamp}-${image.name}`;

  const { data } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(newName, image, { cacheControl: '3600' });

  if (!data) throw new Error('Failed to upload image');
  return supabase.storage.from(BUCKET_NAME).getPublicUrl(newName).data.publicUrl;
};