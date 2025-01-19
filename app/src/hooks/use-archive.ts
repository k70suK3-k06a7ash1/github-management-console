import { handleArchive } from "@/helpers"
import { useState } from "react"
import { toast } from "sonner"
export const useArchive = () => {
    const [isLoading , setIsLoading ] = useState<boolean>(false)

    const handler = async (repoName: string) =>{
        try{
            setIsLoading(true)
           await  handleArchive(repoName)
           toast("Repository has been archived.")
        }catch(_e){}finally{
            setIsLoading(false)
        }
    }

    return {handler,isLoading}
}