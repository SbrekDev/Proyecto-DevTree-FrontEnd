
import { ReactNode } from 'react';

const ErrorMessage = ({ children }: { children: ReactNode }) => {
  return (
    <div className='p-3 uppercase text-sm font-bold text-red-600 text-center bg-red-100 rounded-md'>{children}</div>
  )
}

export default ErrorMessage