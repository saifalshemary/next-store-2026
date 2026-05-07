
export type PropertyCardProps= {
    id:string;
    name:string;
    tagline:string;
    country:string;
    price:number;
    image:string;
}

export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string; redirectTo?: string }>