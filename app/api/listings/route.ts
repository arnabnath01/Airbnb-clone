import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const {
    title,
    description,
    imageSrc,
    catagory,
    roomCount,
    bathroomCount,
    guestCount,
    location,
    price,
  } = body;

  //checking every point wheather every point is there or something is missing, this part is not mandatory

  // Object.keys(body).forEach((value: any) => {
  //   if (!body[value]) {
  //     NextResponse.error();
  //   }
  // });


  const listing = await prisma.listing.create({
    data: {
      userId: `${currentUser.id}`,
      title:title,
      description:description,
      imageSrc:imageSrc,
      category:catagory,
      roomCount:roomCount,
      bathroomCount:bathroomCount,
      guestCount:guestCount,
      locationValue: location.value,
      price: parseInt(price, 10),
      // price,
      
    },
  });

  console.log(
    "==================================================================================");

  console.log(listing);

  console.log(
    "==================================================================================");

  return NextResponse.json(listing);
}
