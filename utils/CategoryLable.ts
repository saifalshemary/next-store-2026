 
import { IconType } from "react-icons/lib"
import {MdCabin } from 'react-icons/md'
import {PiVan , PiLighthouse , PiWarehouse} from 'react-icons/pi'
import { TbCaravan , TbTent , TbBuildingCottage} from 'react-icons/tb'
import { GiWoodCabin , GiMushroomHouse} from 'react-icons/gi'
import { GoContainer} from 'react-icons/go'

type Category ={
    label:CategoryLable
    icon:IconType
}


export type CategoryLable = 
    | 'cabin'
    | 'tent'
    | 'airstream'
    | 'cottage'
    | 'container'
    | 'caravan'
    | 'tiny'
    | 'magic'
    | 'warehouse'
    | 'lodge';

export const categories:Category[] =[
    {
        label : 'cabin',
        icon : MdCabin
    },
    {
        label : 'airstream',
        icon : PiVan
    },
    {
        label : 'tent',
        icon : TbTent
    },

    {
        label : 'warehouse',
        icon : PiWarehouse
    },
    {
        label : 'cottage',
        icon : TbBuildingCottage
    },
    {
        label : 'magic',
        icon : GiMushroomHouse
    },
    {
        label : 'container',
        icon : GoContainer
    },
    {
        label : 'caravan',
        icon : TbCaravan
    },
    {
        label : 'tiny',
        icon : PiLighthouse
    },

]