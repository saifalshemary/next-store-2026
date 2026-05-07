// create supabase client
import { createClient } from '@supabase/supabase-js';

const BUCKET_NAME = process.env.BUCKET_NAME!;
const SUPABASE_URL = process.env.BUCKET_ENDPOINT!;

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!;

export const supabase = createClient (supabaseUrl, supabaseKey);

export const uploadImage = async (image: File) => {

    const timestamp = Date.now();
    const newName = `${timestamp}-${image.name}`;

    // bucket
    const {data, error} = await supabase.storage
                          .from(BUCKET_NAME)
                          .upload(newName, image , {cacheControl: '3600'});

    if(!data) throw new Error('Failed to upload image');
    return supabase.storage.from(BUCKET_NAME).getPublicUrl(newName).data.publicUrl;        
}