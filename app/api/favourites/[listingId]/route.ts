
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import  Prisma  from "@/app/libs/prismadb";

interface Iparams{
    listingId?:string;
}


export async function POST(
    request:Request,
    {params}:{params:Iparams}

){

    const currentUser=await getCurrentUser();

    const {listingId} = params;
    if(!currentUser) return NextResponse.error();

    if(!listingId || typeof listingId!=='string'){
        throw new Error('Invaid Id');
    }

    let favoriteIds = [...(currentUser.favoriteIds || [] )]

    favoriteIds.push(listingId);

    const user = await Prisma.user.update({
        where:{
            id:currentUser.id
        },
        data:{
            favoriteIds
        }
    })

    return NextResponse.json(user)
}
export async function DELETE(
    request:Request,
    {params}:{params:Iparams}

){

    const currentUser=await getCurrentUser();

    const {listingId} = params;
    if(!currentUser) return NextResponse.error();

    if(!listingId || typeof listingId!=='string'){
        throw new Error('Invaid Id');
    }

    let favoriteIds = [...(currentUser.favoriteIds || [] )]

    favoriteIds.push(listingId);


    favoriteIds=favoriteIds.filter((id)=>{id!==listingId})
    const user = await Prisma.user.update({
        where:{
            id:currentUser.id
        },
        data:{
            favoriteIds
        }
    })



    return NextResponse.json(user)
}