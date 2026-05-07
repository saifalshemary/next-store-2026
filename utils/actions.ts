'use server';
import { currentUser , clerkClient} from "@clerk/nextjs/server";
import { imageSchema, profileScema, propertyScema, validateWithZodSchema } from "./schema";
import db from "./db";
import { redirect } from "next/navigation";
import { uploadImage } from "./supabase";
import { profile } from "console";





// جلب البيانات من الفورم عند الإرسال
export const GetDataAction = async ( prevState: any, formData: FormData) => { 
    try {
        const user = await currentUser();
        
        if(!user) throw new Error('please Login to create a Profile')
        // جلب البيانات على شكل key value 
        const rowData = Object.fromEntries(formData);
        // مشارنة بين نوع البيانات من الفورم و نوع البيانات من زود 

        const validatedFields = profileScema.parse(rowData)

        await db.profile.create({
            data:{
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress,
                profileImage: user.imageUrl ?? '' ,
                ...validatedFields
            }   
        
        });
        // تحديث بيانات كليرك 
        const client = await clerkClient();
        await client.users.updateUserMetadata(user.id, {
            privateMetadata: {
                hasProfile: true
            }
        })

        return {message:'profile create', redirectTo: '/'}
    }
    catch(e) {
       return renderError(e)
    }   
          
 
}
// fetch profile actions

export const fetchProfileImg = async () => {
    const user = await currentUser();
    if(!user)  return null ;
    
    const profileImg = await db.profile.findUnique({
       where:{
        clerkId: user.id
       },
       select:{
        profileImage: true
       }
    })
    return profileImg?.profileImage ?? null;

}
// user 
const getAuthUser = async () => {
    const user = await currentUser()

    if(!user) throw new Error('please Login to create a Profile')

    if(!user.privateMetadata?.hasProfile) redirect('/profile/create')

    return user;

}

export const fetchProfile = async () => {
    const user = await getAuthUser();
    const profile = await db.profile.findUnique({
        where:{
            clerkId: user.id
        }
    });

    if(!profile) redirect('/profile/create');


    return profile;
}

//  rander error 

const renderError = (error: unknown):{message:string} => {
    return{
        message:error instanceof Error ? error.message : 'something went wrong' 
    }   
}
// update profile 

export const updateProfileAction = async (prevState: any, formData: FormData) => {

    try{
        const user = await getAuthUser();
        const rowData = Object.fromEntries(formData);
        const validatedFields = validateWithZodSchema(profileScema, rowData);

        await db.profile.update({
            where:{
                clerkId: user.id
            },
            data: validatedFields      
        })

        return {
            message: 'Profile Updated'
        }
    }
    catch(e){
       return renderError(e)
    }
}

export const updateProfileImgAction = async (prevState: any, formData: FormData) => {
        const user = await getAuthUser();
    
    try{
        const image = formData.get('image') as File;
        const validatedFields = validateWithZodSchema(imageSchema, {image});

        const fullPath = await uploadImage(validatedFields.image);
        await db.profile.update({
            where:{
                clerkId: user.id
            },
            data:{
                profileImage: fullPath
            }
        })
 
    }
    catch(e){
        return renderError(e)
    }

    return {
        message: 'Profile Image Updated'
    }
}

export const createPropertyAction = async (prevState: any, formData: FormData) => {
    const user = await getAuthUser();
    try{
        const rowData = Object.fromEntries(formData)
        const file = formData.get('image') as File
        
        const validatedFields = validateWithZodSchema(propertyScema, rowData);
        const validateFile = validateWithZodSchema(imageSchema, {image: file});

        const fullPath = await uploadImage(validateFile.image);
        await db.property.create({
            data:{
                profileId: user.id,
                image: fullPath,
                ...validatedFields,
            }})

        return {message:'Property Created'}
    }
    catch(e){
        return renderError(e)
    }
};
export const fetchPropertyAction = async ({search='' , category}:{search?:string, category?:string}) => {
    const properties = await db.property.findMany({
        where: {
            category: category,
            OR: [
                { name: { contains: search, mode: 'insensitive' } },
                { tagline: { contains: search, mode: 'insensitive' } }
            ]
        },
        select: {
            id: true,
            name: true,
            tagline: true,
            category: true,
            price: true,
            image: true,
            country: true,
        }
    })

    return properties;
}

export const fetchFavoriteId = async({propertyId}:{propertyId:string})=>{
    const user = await getAuthUser();
    const favorite = await db.favorite.findFirst({
        where: {
            propertyId: propertyId,
            profileId: user.id
        },
        select: {
            id: true
        }
    })
    return favorite?.id ?? null;
}

export const toggleFavoritAction = async (prevState:{
    favoriteId: string | null ,
    propertyId: string ,
})=>{
    const user = await getAuthUser();
    const {propertyId , favoriteId} = prevState;

    try{
        if(favoriteId){
            await db.favorite.delete({
                where:{
                    id:favoriteId
                }
            })}
            else{
                await db.favorite.create({
                    data:{
                        clerkId: user.id,
                        propertyId: propertyId,
                        profileId: user.id,
                }})
            }
    }
    catch(e){
        return renderError(e)
    }
    return {message: favoriteId ? 'favorite removed' : 'favorite added'}
}
export const fetchFavoritesAction = async () => {
    const user = await getAuthUser();

    if(user){
       const favorites = await db.favorite.findMany({
            where:{
                profileId: user.id
            },
            select: {
                property: {
                    select: {
                        id: true,
                        name: true,
                        tagline: true,
                        price: true,
                        country: true,
                        image: true,
                    }}}
        })
        return favorites.map((fav)=> fav.property);
    }
}
export const fetchPropertyById = async ({id}:{id:string}) => {
    const property = await db.property.findUnique({
        where:{
            id: id
        },
        include: {
            profile: true,
        }
    })
    return property;
}