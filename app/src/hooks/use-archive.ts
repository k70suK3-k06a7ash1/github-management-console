import { handleArchive } from "@/helpers"
import { useState } from "react"

export const useArchive = () => {
    const [isLoading , setIsLoading ] = useState<boolean>(false)

    const handler = async (repoName: string) =>{
        try{
            setIsLoading(true)
           await  handleArchive(repoName)
        }catch(_e){}finally{
            setIsLoading(false)
        }
    }

    return {handler,isLoading}
}