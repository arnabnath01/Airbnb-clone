// fectching the current user data from server component

import { getServerSession } from "next-auth";
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import  Prisma  from "@/app/libs/prismadb";

export async function getSession(){         // The function takes no arguments and returns a promise that resolves to a session object.
    return await getServerSession(authOptions)          //The return await getServerSession(authOptions) statement returns the promise returned by the getServerSession() function.


}


// this is not an api call, 
//      this is direct communication with the database
//      through our server components


export async function getCurrentUser() {
    try {
        const session = await getSession();

        if(session?.user?.email){
            return null;

        }

        const currentUser = await prisma?.user.findUnique({
            where:{
                email:session?.user?.email as String
            }
        })

    } catch (error:any) {
        return null;
    }
}