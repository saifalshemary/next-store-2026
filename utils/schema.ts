import * as z from 'zod';
import { services } from './servicees';


export const profileScema = z.object({
    FirstName: z.string(),
    LastName: z.string(),
    username: z.string(),
});

export function validateWithZodSchema<T>(schema:z.ZodSchema<T>, data:unknown){
    const result = schema.safeParse(data);
    console.log(result)
    if(!result.success){

        const errors = result.error.issues.map((err)=> err.message);
        throw new Error(errors.join(', '))
    }
    return result.data

}
export const imageSchema = z.object({
    image:  validateFile()
})

function validateFile(){
    const ImageSize = 1024*1024 // 1MB
    const ImageType = ['image/'] 

    return z.instanceof(File).refine((file)=>{
        return !file || file.size <= ImageSize;
    }, "Image must be less than 1MB")
    .refine((file)=>{
        return !file || ImageType.some((type)=> file.type.startsWith(type))
    }, "Image must be a valid image")
}

export const propertyScema = z.object({
    name: z.string()
    .min(2,{message:'Name must be at least 2 characters'})
    .max(50,{message:'Name must be less than 50 characters'})
    .trim(),
    tagline:z.string()
    .min(10,{message:'Tagline must be at least 10 characters'})
    .max(100,{message:'Tagline must be less than 100 characters'})
    .trim(),
    category:z.string()
    .min(2,{message:'Category must be at least 2 characters'})
    .max(50,{message:'Category must be less than 50 characters'})
    .trim(),
    price:z.coerce.number().int().min(0,{message:'Price must be greater than 0'}),
    guests:z.coerce.number().int().min(0,{message:'Guests must be greater than 0'}),
    bedrooms:z.coerce.number().int().min(0,{message:'Bedrooms must be greater than 0'}),
    bathrooms:z.coerce.number().int().min(0,{message:'Bathrooms must be greater than 0'}),
    description:z.string()
    .min(10,{message:'Description must be at least 10 characters'})
    .max(10000,{message:'Description must be less than 10000 characters'})
    .trim(),
    country:z.string()
    .min(2,{message:'Country must be at least 2 characters'})
    .max(50,{message:'Country must be less than 50 characters'})
    .trim(),
    services:z.string(),
})