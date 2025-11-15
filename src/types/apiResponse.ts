export default interface IApiResponse<T> {
    isSuccess: boolean,
    result: T
}