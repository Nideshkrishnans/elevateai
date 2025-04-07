import { industries } from "@/data/industries"
import OnboardingForms from "./_components/onboarding-forms"
import { getUserOnboardingStatus } from "@/actions/user"
import { redirect } from "next/navigation";

const OnboardingPage = async () => {
    //check if user is already onboarded
    const {isOnboarded} = await getUserOnboardingStatus();

    if(isOnboarded){
        redirect("/dashboard")
    }
  return (
    <main>
      <OnboardingForms industries={industries}/>
    </main> 
  )
}

export default OnboardingPage
