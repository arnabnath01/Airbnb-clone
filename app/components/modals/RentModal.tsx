'use client'

import { useMemo, useState } from "react"
import Modals from "./Modals"
import useRentModal from '@/app/hooks/useRentModal'
import Heading from "../Heading"
import { catagories } from "../navbar/Catagories"
import Catagoryinput from "../inputs/Catagoryinput"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import CountrySelect from "../inputs/CountrySelect"
import Map from "../Map"  //to work the map SSR, this static import will not work, we have to dynamically import it
import dynamic from "next/dynamic"
import Counter from "../inputs/Counter"
import ImageUpload from "../inputs/ImageUpload"
import Input from "../inputs/Input"
import axios from "axios"
import { toast } from "react-hot-toast"
import  {useRouter}  from "next/navigation"

enum STEPS {
  CATAGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGE = 3,
  DESCRIPTION = 4,
  PRICE = 5
}


const RentModal = () => {

  const rentModal = useRentModal();
  const router= useRouter();
  const [step, setStep] = useState(STEPS.CATAGORY);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {
      errors
    },
    reset
  } = useForm<FieldValues>({
    defaultValues: {
      catagory: '',
      title: '',
      description: '',
      imageSrc: '',

      locationValue: null,
      price: 1,
      createdAt: '',
      roomCount: 1,
      bathroomCount: 1,
      guestCount: 1,


    }
  });

  const catagory = watch('catagory');
  const location = watch('location');
  const guestCount = watch('guestCount');
  const bathroomCount = watch('bathroomCount');
  const roomCount = watch('roomCount');
  const imageSrc = watch('imageSrc');


  const Map = useMemo(() => dynamic(() => import('../Map'), {          //dynamically imports the map
    ssr: false         // this disables the server side rendering (SSR)
  }), [location])    //? th Map does depend upon the location


  // creating a custom set value, because default setvalue sets the value, but does not re render the page.

  const setCustomValues = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,    // to ensure that the form is re-validated
      shouldTouch: true,    //marked as dirty
      shouldValidate: true    //marked as touched after  the values being set.
    })
  }

  //back button
  const onBack = () => {
    setStep((val) => val - 1);
  }

  //next button
  const onNext = () => {
    setStep((val) => val + 1);
  }

// on submitting the last form
const onSubmit: SubmitHandler<FieldValues> = (data) => {
  if (step !== STEPS.PRICE) {
    return onNext();
  }

  console.log(
    "===========================================================================================");
    
  console.log(data);
  console.log(
    "===========================================================================================");


  setIsLoading(true);

  axios.post('/api/listings', data)
  .then(() => {
    toast.success('Listing created!');
    router.refresh();
    reset();
    setStep(STEPS.CATAGORY)
    rentModal.onClose();
  })
  .catch(() => {
    toast.error('Something went wrong.');
  })
  .finally(() => {
    setIsLoading(false);
  })
}

  //making action label
  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) { return 'Create' };
    return 'Next'
  },
    [step]);


const [isLoading,setIsLoading] = useState(false);

  //CATAGORY STEP  1st step
  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATAGORY) { return undefined };
    return 'Back'
  },
    [step]);


  // making body content part
  let bodyContent = (
    <div className="
  flex
  flex-col
  gap-8
  "
    >
      <Heading
        title="Which of these best describes your place ?"
        subtitle="Pick a catagory ?"
      />
      <div className="
      grid
      md:grid-cols-2
      grid-col-1
      gap-3
      max-h-[50vh]
      overflow-y-auto
">
        {catagories.map((item) =>
          <div
            key={item.label} className="col-span-1">


            <Catagoryinput
              onClick={(catagory) => {
                setCustomValues('catagory', catagory)
              }}
              selected={catagory === item.label}
              label={item.label}
              icon={item.icon}
            />


          </div>
        )}

      </div>

    </div>
  )


  // LOCATION STEP 2nd step 
  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className="
      flex flex-col gap-4">
        <Heading
          title="Where is your palce located ?"
          subtitle="Help guests to find you!"
        />
        <CountrySelect
          value={location}
          onChange={(value) => setCustomValues('location', value)}
        />
        <Map
          center={location?.latlng}
        />
      </div>
    )
  }

  //INFO

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="
      flex flex-col gap-8
      ">
        <Heading
          title="Tell me about your place"
          subtitle="What amenities do you have ?"
        />
        <Counter
          title="Guests"
          subtitle="How many guests do you allow ?"
          value={guestCount}
          onChange={(value) => setCustomValues('guestCount', value)}
        />
        <Counter
          title="Bathrooms"
          subtitle="How many bathrooms do you have ?"
          value={bathroomCount}
          onChange={(value) => setCustomValues('bathroomCount', value)}
        />
        <Counter
          title="Rooms"
          subtitle="How many rooms do you have ?"
          value={roomCount}
          onChange={(value) => setCustomValues('roomCount', value)}
        />
      </div>
    )
  }


  //IMAGE
  if (step === STEPS.IMAGE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Add a photo of your place"
          subtitle="Show guests what yoyr place look like !" />
        <ImageUpload
          onChange={(value) => setCustomValues('imageSrc', value)}
          value={imageSrc}
        />
      </div>
    )
  }

  //DESCRIPTION

  if (step === STEPS.DESCRIPTION){
    bodyContent=(
      <div className="flex flex-col gap-8">
        <Heading
        title="How would you like to describe your place ?"
        subtitle="Short and sweet works best"/>
           
        <Input
        id="title"
        label="Title"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        />
        <hr />
        <Input
        id="description"
        label="Description"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        />
      </div>
    )
  }


  //PRICE

  if(step===STEPS.PRICE)
  {
bodyContent=(
  <div className="flex flex-col gap-8">
    <Heading
    title="Now set your price"
    subtitle="How much do you charge for one night?"/>
  <Input
        id="price"
        label="Price"
        formatPrice
        type="number"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        />
  </div>
)
  }

    return (
      <div>
        <Modals
          isOpen={rentModal.isOpen}
          onClose={rentModal.onClose}
          onSubmit={handleSubmit(onSubmit)}
          actionLabel={actionLabel}
          secondaryAction={step === STEPS.CATAGORY ? undefined : onBack}
          secondaryActionLabel={secondaryActionLabel}
          body={bodyContent}
          title="Airbnb your Home!"

        />
      </div>
    )
}

export default RentModal;
