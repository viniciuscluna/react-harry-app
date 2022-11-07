
import { atom } from 'recoil';


const useLoaderStore = atom<boolean>({
  key:'loaderStoreKey',
  default: false
})

export default useLoaderStore;