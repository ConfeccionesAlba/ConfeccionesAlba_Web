export default interface IApiResponse<T> {
  isSuccess: boolean
  result: T
  errorCode: string
  errorMessages: string[]
}
