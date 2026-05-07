import SkeletonCard from "@/components/card/SkeletonCard";
import CategoriesList from "@/components/home/CategoriesList";
import PropertiesContainer from "@/components/home/PropertiesContainer";
import { Suspense } from "react";


type Props={
  search:string,
  category:string
}


export default async function Home({searchParams}:{searchParams:Promise<Props>}) {

  const Props = await searchParams 
  return (
   <section>
      <CategoriesList 
      search={Props?.search}
      category={Props?.category}
      />
      <Suspense fallback={<SkeletonCard/>} >
          <PropertiesContainer 
          search={Props?.search}
          category={Props?.category}/>
      </Suspense>
   </section>
  );
}
