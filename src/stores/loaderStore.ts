import create from 'zustand'
import LoaderStore from '../types/store/LoaderStore';

const useLoaderStore = create<LoaderStore>((set) => ({
  loading: false,
  setLoading: (isLoading: boolean) => set(() => ({ loading: isLoading }))
}))

export default useLoaderStore;