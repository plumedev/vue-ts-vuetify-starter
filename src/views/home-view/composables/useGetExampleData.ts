import { getExampleData } from '@/api/example/exampleService'
import type { IExampleData } from '@/api/example/interfaces/IExampleData'
import { useRequest } from '@/composables/utils/useRequest'
import useToast from '@/composables/utils/useToast'

export function useGetExampleData() {
  const toast = useToast()

  const runServices = async (): Promise<IExampleData> => {
    try {
      const result = await getExampleData()
      toast.displaySuccess({ message: 'Données récupérées avec succès !' })
      return result
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.displayError({ message: error.message })
      }
      throw error
    }
  }

  return useRequest<IExampleData>({
    runServices
  })
}
