import { Warning } from '@/icons'

type ErrorProps = {
  message?: string
}

export const Error = ({ message = 'Error loading' }: ErrorProps) => {
  return (
    <div className="card p-6 gap-6 flex flex-col items-center text-center">
      <Warning width={50} height={50} />
      <div>
        <h3 className="mb-2">{message}</h3>
        <p>We are so sorry but it is for the test.</p>
      </div>
    </div>
  )
}
